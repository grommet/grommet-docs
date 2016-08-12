import StaticSiteGeneratorPlugin from 'static-site-generator-webpack-plugin';
import reactRouterToArray from 'react-router-to-array';
import grommetBaseWebpack from 'grommet-toolbox/lib/webpack.dist.config';
import path from 'path';
import routes from './src/routes';

const config = {...grommetBaseWebpack};

config.entry = {
  'main': path.resolve('./src/index.js')
};

config.output = {
  filename: 'index-static.js',
  path: path.resolve('./dist'),
  libraryTarget: 'commonjs2'
};

const THEMES = ['vanilla', 'aruba', 'hpe', 'hpinc'];

const staticGenerators = THEMES.map((theme) => {
  const themeRoutes = { ...routes };
  themeRoutes.path = ('vanilla' === theme ? '/' : `/${theme}`);
  return (
    new StaticSiteGeneratorPlugin(
      'main', reactRouterToArray(themeRoutes), {
        routes: themeRoutes, theme: theme
      }
    )
  );
});

config.plugins = staticGenerators;

export default config;
module.exports = config;
