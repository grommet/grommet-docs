// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var argv = require('yargs').argv;
var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');
var git = require('gulp-git');
var del = require('del');
var http = require('http');
var mkdirp = require('mkdirp');
var replace = require('gulp-replace');

var opts = {
  base: '.',
  publicPath: 'docs',
  dist: path.resolve(__dirname, 'dist/'),
  copyAssets: [
    'src/index.html',
    'src/robots.txt',
    {
      asset: 'src/develop/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/design/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'design/**',
      dist: 'dist/assets/design/'
    },
    {
      asset: 'node_modules/grommet/*.min.js',
      dist: 'dist/assets/latest/'
    },
    {
      asset: 'node_modules/grommet/*.min.css',
      dist: 'dist/assets/latest/css/'
    },
    {
      asset: 'node_modules/grommet/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/video/**',
      dist: 'dist/video/'
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: ['src/**/*.js'],
  mainJs: 'src/index.js',
  mainScss: 'src/scss/index.scss',
  webpack: {
    resolve: {
      root: [
        path.resolve(__dirname, './node_modules')
      ]
    },
    module: {
      loaders: [
        {
          test: /develop(\/|\\).*\.htm$|design(\/|\\)[^\/]*\.htm$|design(\/|\\).*\/.*\.htm$/,
          loader: 'babel-loader!imports?React=react,Router=react-router,Link=>Router.Link!html-jsx-loader',
          exclude: /(node_modules|bower_components)/
        }
      ]
    }
  },
  devServerPort: 8002,
  devServerDisableHot: true,
  // devServerHost: "0.0.0.0",
  scsslint: true,
  alias: {
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js')
  },
  devPreprocess: [
    'set-webpack-alias', 'dist-css', 'generate-icons-map', 'watch-css'
  ],
  distPreprocess: ['dist-css', 'generate-icons-map', 'generate-server-routes']
};

function distSass() {
  return sass({
    includePaths: [
      path.resolve(__dirname, '../grommet/src/'),
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './node_modules/grommet/node_modules')
    ]
  });
}

var host = opts.devServerHost ? opts.devServerHost : 'localhost';

gulp.task('set-webpack-alias', function () {
  if (opts.alias && argv.useAlias) {
    console.log('Using local alias for development.');
    opts.webpack.resolve.alias = opts.alias;
  }
});

gulp.task('watch-css', function() {
  if (opts.webpack.resolve.alias) {
    var watcher = gulp.watch(
      path.resolve(__dirname, '../grommet/src/scss/**/*.scss'),
      ['dist-css']
    );

    watcher.on('change', function() {
      //notify the webpack dev server that a change happened
      http.get(
        'http://' + host + ':' + opts.devServerPort + '/invalid'
      );
    });
  }
});

gulp.task('dist-css', function() {
  var prefix = opts.webpack.resolve.alias ? 'grommet/' : '';

  gulp.src('src/scss/index-aruba.scss')
    .pipe(replace(prefix, ''))
    .pipe(distSass())
    .pipe(rename('aruba.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-grommet.scss')
    .pipe(replace(prefix, ''))
    .pipe(distSass())
    .pipe(rename('grommet.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-hpe.scss')
    .pipe(replace(prefix, ''))
    .pipe(distSass())
    .pipe(rename('hpe.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-hpinc.scss')
    .pipe(replace(prefix, ''))
    .pipe(distSass())
    .pipe(rename('hpinc.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  return gulp.src('src/scss/index-vanilla.scss')
    .pipe(replace(prefix, ''))
    .pipe(distSass())
    .pipe(rename('vanilla.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/')).on('end', function () {
      if (opts.webpack.resolve.alias) {
        //notify the webpack dev server to reload when compilation is finished
        http.get(
          'http://' + host + ':' + opts.devServerPort + '/reload'
        );
      }
    });
});

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

gulp.task('generate-icons-map', function (done) {
  var iconsFolder = path.join(__dirname, '../grommet/src/img/icons');
  var iconsMap = ['module.exports = {'];
  fs.readdir(iconsFolder, function(err, icons) {
    icons.forEach(function (icon, index) {

      if (/\.svg$/.test(icon)) {
        var componentName = icon.replace('.svg', '.js');
        componentName = componentName.replace(/^(.)|-([a-z])/g, function (g) {
          return g.length > 1 ? g[1].toUpperCase() : g.toUpperCase();
        });

        var grommetIconPath = "../grommet/src/js/components/icons/base/";
        iconsMap.push(
          "\"" + icon.replace('.svg', '') + "\":" +
          " require('" + grommetIconPath + componentName + "')"
        );

        if (index === icons.length - 1) {
          iconsMap.push('};\n');

          var destinationFile = path.join(__dirname, 'src/develop/components/iconsMap.js');
          fs.writeFile(destinationFile, iconsMap.join(''), function(err) {
            if (err) {
              throw err;
            }

            done();
          });
        } else {
          iconsMap.push(',');
        }
      }
    });
  });
});

gulp.task('generate-server-routes', function() {
  return gulp.src(path.join(__dirname, 'src/routes.js'))
    .pipe(gulpWebpack({
      target: 'node',
      output: {
        path: path.join(__dirname, 'server'),
        filename: 'server-routes.js',
        libraryTarget: 'commonjs2'
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /(node_modules|bower_components)/
          },
          {
            test: /develop(\/|\\).*\.htm$|design(\/|\\)[^\/]*\.htm$|design(\/|\\).*\/.*\.htm$/,
            loader: 'babel-loader!imports?React=react,Router=react-router,Link=>Router.Link!html-jsx-loader',
            exclude: /(node_modules|bower_components)/
          }
        ]
      },
      resolve: {
        extensions: ['', '.js', '.json', '.htm', '.html', '.scss', '.md', '.svg'],
        root: [
          path.join(__dirname, './node_modules'),
          path.join(__dirname, './node_modules/grommet/node_modules')
        ]
      },
      externals: nodeModules,
      plugins: [
        new webpack.DefinePlugin({
          NODE_ENV: "\"production\""
        })
      ]
    }))
    .pipe(gulp.dest(path.join(__dirname, 'server')));
});

gulp.task('release:createTmp', function(done) {
  del.sync(['./tmp']);
  mkdirp('./tmp', function(err) {
    if (err) {
      throw err;
    }
    done();
  });
});

gulp.task('release:heroku', ['dist', 'release:createTmp'], function(done) {
  if (process.env.CI) {
    git.clone('https://' + process.env.GH_TOKEN + '@github.com/grommet/grommet-docs.git',
      {
        cwd: './tmp/'
      },
      function(err) {
        if (err) {
          throw err;
        }

        process.chdir('./tmp/grommet-docs');
        git.checkout('heroku', function(err) {
          if (err) {
            throw err;
          }

          del.sync(['./**/*']);

          gulp.src(['../../**'])
          .pipe(gulp.dest('./')).on('end', function() {
            git.status({
              args: '--porcelain'
            }, function(err, stdout) {
              if (err) {
                throw err;
              }

              if (stdout && stdout !== '') {
                gulp.src('./')
                  .pipe(git.add({
                    args: '--all'
                  }))
                  .pipe(git.commit('Heroku dev version update.')).on('end', function() {
                    git.push('origin', 'heroku', { quiet: true }, function(err) {
                      if (err) {
                        throw err;
                      }

                      process.chdir(__dirname);
                      done();
                    });
                  });
              } else {
                console.log('No difference since last commit, skipping heroku release.');

                process.chdir(__dirname);
                done();
              }
            });
          });
        });
      }
    );
  } else {
    console.warn('Skipping release. Release:heroku task should be executed by CI only.');
  }
});

devGulpTasks(gulp, opts);
