// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import path from 'path';

export default {
  dist: path.resolve(__dirname, 'dist/'),
  copyAssets: [
    'src/index.html',
    'src/robots.txt',
    {
      asset: 'src/docs/img/**',
      dist: 'dist/img/'
    },
    {
      asset: 'src/img/**',
      dist: 'dist/img/'
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
  jsAssets: ['src/**/*.js', '!src/develop/components/iconsMap.js'],
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
        {test: /\.ejs$/, loader: 'ejs-compiled?htmlmin'}
      ]
    }
  },
  scssLoader: {
    test: /\.scss$/,
    loader: "file?name=assets/css/[name].css!sass?" +
      'includePaths[]=' +
      (encodeURIComponent(
        path.resolve(process.cwd(), './node_modules')
      )) +
      '&includePaths[]=' +
      (encodeURIComponent(
        path.resolve( process.cwd(),
        './node_modules/grommet/node_modules'))
      )
  },
  devServerPort: 8002,
  // devServerHost: "0.0.0.0",
  scsslint: true,
  alias: {
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js')
  },
  devPreprocess: ['set-webpack-alias', 'generate-icons-map'],
  distPreprocess: [
    'set-webpack-alias', 'generate-static-site'
  ]
};
