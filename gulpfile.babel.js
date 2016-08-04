// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import yargs from 'yargs';
const argv = yargs.argv;
import gulp from 'gulp';
import path from 'path';
import fs from 'fs';
import grommetToolbox, {getOptions} from 'grommet-toolbox';
import git from 'gulp-git';
import del from 'del';
import mkdirp from 'mkdirp';
import gulpWebpack from 'webpack-stream';

const options = getOptions();

gulp.task('set-webpack-alias', () => {
  if (options.alias && argv.useAlias) {
    console.log('Using local alias for development.');
    options.webpack.resolve.alias = options.alias;
  }
});

gulp.task('generate-static-site', ['generate-icons-map'], () => {
  var staticSiteConfig = require('./site-generator.webpack.config');
  options.copyAssets = options.copyAssets.splice(1);
  return gulp.src(options.mainJs)
      .pipe(gulpWebpack(staticSiteConfig))
      .pipe(gulp.dest(options.dist));
});

gulp.task('generate-icons-map', (done) => {
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
          "  \"" + icon.replace('.svg', '') + "\":\n" +
          "    require('" + grommetIconPath + componentName + "')"
        );

        if (index === icons.length - 1) {
          iconsMap.push('};\n');

          var destinationFile = path.join(__dirname,
            'src/docs/components/iconsMap.js');
          fs.writeFile(destinationFile, iconsMap.join("\n"), function(err) {
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

gulp.task('release:createTmp', (done) => {
  del.sync(['./tmp']);
  mkdirp('./tmp', function(err) {
    if (err) {
      throw err;
    }
    done();
  });
});

gulp.task('release:gh-pages', ['dist', 'release:createTmp'], (done) => {
  if (process.env.CI) {
    git.clone('https://' + process.env.GH_TOKEN +
      '@github.com/grommet/grommet.github.io.git',
      {
        cwd: './tmp/'
      },
      function(err) {
        if (err) {
          throw err;
        }

        process.chdir('./tmp/grommet.github.io');
        git.checkout('master', (err) => {
          if (err) {
            throw err;
          }

          del.sync(['./**/*']);

          gulp.src(['../../dist/**'])
          .pipe(gulp.dest('./')).on('end', () => {
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
                  .pipe(git.commit('Heroku dev version update.'))
                    .on('end', () => {
                      git.push('origin', 'master', { quiet: true }, (err) => {
                        if (err) {
                          throw err;
                        }

                        process.chdir(__dirname);
                        done();
                      });
                    });
              } else {
                console.log("No difference since last commit, " +
                  "skipping gh-pages release.");

                process.chdir(__dirname);
                done();
              }
            });
          });
        });
      }
    );
  } else {
    console.warn("Skipping release. Release:gh-pages task should be " +
      "executed by CI only.");
  }
});

grommetToolbox(gulp, options);
