import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import reactRouterToArray from 'react-router-to-array';
import grommetBaseWebpack from 'grommet-toolbox/lib/webpack.dist.config';
import path from 'path';

const config = {...grommetBaseWebpack};

config.entry = {
  'main': path.resolve('./src/index.js')
};

config.output = {
  filename: 'index-static.js',
  path: path.resolve('./dist'),
  libraryTarget: 'commonjs2'
};

const themes = [
  {
    name: 'vanilla',
    routes: require('./src/routes')('/')
  },
  {
    name: 'aruba',
    routes: require('./src/routes')('/aruba/')
  },
  {
    name: 'hpe',
    routes: require('./src/routes')('/hpe/')
  },
  {
    name: 'hpinc',
    routes: require('./src/routes')('/hpinc/')
  }
];

const staticGenerators = themes.map((theme) => {
  return (
    new StaticSiteGeneratorPlugin(
      'main', reactRouterToArray(theme.routes), {
        routes: theme.routes, theme: theme.name
      }
    )
  );
});

config.plugins = staticGenerators;

export default config;
module.exports = config;
