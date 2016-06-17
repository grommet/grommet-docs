// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { match, Router, RoutingContext } from 'react-router';
import history from './PrefixedHistory';
import template from './template.ejs';

const onRouteUpdate = () => {
  var docElements = document.querySelectorAll('.article');
  if (docElements.length > 0) {
    docElements[0].scrollTop = 0;
  }
};

const THEMES = ['vanilla', 'aruba', 'hpe', 'hpinc'];

function rootForTheme (theme) {
  let root;
  if ('vanilla' === theme || THEMES.indexOf(theme) === -1) {
    root = '/';
  } else {
    root = `/${theme}`;
  }
  return root;
}

if (typeof document !== 'undefined') {
  require('autotrack');
  require('./lib/modernizr');

  const firstPathElement = window.location.pathname.split('/')[1];
  const theme = (THEMES.indexOf(firstPathElement) === -1 ? 'vanilla' :
    firstPathElement);
  const root = rootForTheme(theme);

  require(`./scss/index-${theme}`);

  if ('/' !== root) {
    history.setPrefix(root);
  }

  if (__DEV_MODE__) {
    var themeLink = document.getElementById('theme-link');
    var themeUrl = `/assets/css/index-${theme}.css`;
    themeLink.setAttribute('href', themeUrl);
  }

  const routes = require('./routes');
  const element = document.getElementById('content');
  ReactDOM.render(<Router onUpdate={onRouteUpdate} routes={routes}
    history={history} />, element);

  document.body.classList.remove('loading');
}

export default (locals, callback) => {
  const routes = locals.routes;
  const location = locals.path;
  const theme = locals.theme;
  const root = rootForTheme(theme);

  if ('/' !== root) {
    history.setPrefix(root);
  }

  match({ routes, location },
    (error, redirectLocation, renderProps) => {
      callback(
        null, template({
          theme: locals.theme,
          html: ReactDOMServer.renderToString(
            <RoutingContext {...renderProps} />
          )
        })
      );
    });
};
