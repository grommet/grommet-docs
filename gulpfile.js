var gulp = require('gulp');
var path = require('path');
var fs = require('fs');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var nodemon = require('gulp-nodemon');
var devGulpTasks = require('grommet/utils/gulp/gulp-tasks');
var webpack = require('webpack');
var gulpWebpack = require('webpack-stream');

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
    }
  ],
  scssAssets: ['src/scss/**/*.scss'],
  jsAssets: ['src/**/*.js'],
  mainJs: 'src/index.js',
  mainScss: 'src/scss/index.scss',
  webpack: {
    resolve: {
      alias: { //TODO: remove this, for DEV only
        'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
        'grommet': path.resolve(__dirname, '../grommet/src/js')
      },
      root: [
        path.resolve(__dirname, './node_modules'),
        path.resolve(__dirname, './node_modules/grommet/node_modules')
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
  scsslint: true,
  devPreprocess: ['dist-css', 'generate-icons-map'],
  distPreprocess: ['dist-css', 'generate-icons-map', 'generate-server-routes']
};

function distSass() {
  return sass({
    includePaths: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './node_modules/grommet/node_modules')
    ]
  })
}

gulp.task('dist-css', function() {
  gulp.src('src/scss/index-aruba.scss')
    .pipe(distSass())
    .pipe(rename('aruba.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-grommet.scss')
    .pipe(distSass())
    .pipe(rename('grommet.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-hpe.scss')
    .pipe(distSass())
    .pipe(rename('hpe.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  gulp.src('src/scss/index-hpinc.scss')
    .pipe(distSass())
    .pipe(rename('hpinc.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));

  return gulp.src('src/scss/index-vanilla.scss')
    .pipe(distSass())
    .pipe(rename('vanilla.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/'));
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
  var iconsFolder = path.join(__dirname, './node_modules/grommet/img/icons');
  var iconsMap = ['module.exports = {'];
  fs.readdir(iconsFolder, function(err, icons) {
    icons.forEach(function (icon, index) {

      if (/\.svg$/.test(icon)) {
        var componentName = icon.replace('.svg', '.js');
        componentName = componentName.replace(/^(.)|-([a-z])/g, function (g) {
          return g.length > 1 ? g[1].toUpperCase() : g.toUpperCase();
        });

        var grommetIconPath = "grommet/components/icons/base/";
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

devGulpTasks(gulp, opts);
