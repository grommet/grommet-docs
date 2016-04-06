// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import path from 'path';

export default {
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
    }
  },
  devServerPort: 8002,
  // devServerHost: "0.0.0.0",
  scsslint: true,
  alias: {
    'grommet/scss': path.resolve(__dirname, '../grommet/src/scss'),
    'grommet': path.resolve(__dirname, '../grommet/src/js')
  },
  devPreprocess: [
    'set-webpack-alias', 'dist-css', 'generate-icons-map', 'watch-css'
  ],
  distPreprocess: ['set-webpack-alias', 'dist-css', 'generate-icons-map',
    'generate-server-routes']
};
