// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { AppContainer } from 'react-hot-loader';
import { match, RouterContext, useRouterHistory } from 'react-router';
import { createMemoryHistory } from 'history';
import { initialize } from './utils/analytics';
import template from './template.ejs';
import App from './App';


if (typeof document !== 'undefined') {
  require('autotrack');
  require('./lib/modernizr');

  // Initialize react-ga
  initialize();

  const element = document.getElementById('content');
  ReactDOM.render(
    <AppContainer>
      <App />
    </AppContainer>, element);

  document.body.classList.remove('loading');

  // Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./App', () => {
      const NextApp = require('./App').default;
      ReactDOM.render(
        <AppContainer>
          <NextApp />
        </AppContainer>,
        element
      );
    });
  }
}

const THEMES = ['vanilla', 'aruba', 'hpe', 'hpinc'];

function basenameForTheme (theme) {
  let basename;
  if ('vanilla' === theme || THEMES.indexOf(theme) === -1) {
    basename = '/';
  } else {
    basename = `/${theme}`;
  }
  return basename;
}

export default (locals, callback) => {
  const routes = locals.routes;
  const basename = basenameForTheme(locals.theme);
  let historyOptions = {};
  if ('/' !== basename) {
    historyOptions.basename = basename;
  }
  const history = useRouterHistory(createMemoryHistory)(historyOptions);
  const location = history.createLocation(locals.path);

  match({ routes, history, location },
    (error, redirectLocation, renderProps) => {
      callback(
        null, template({
          theme: locals.theme,
          html: ReactDOMServer.renderToString(
            <App>
              <RouterContext {...renderProps} />
            </App>
          )
        })
      );
    });
};
