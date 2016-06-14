// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { match, Router, RoutingContext } from 'react-router';
import { createHistory } from 'history';
import template from './template.ejs';

const onRouteUpdate = () => {
  var docElements = document.querySelectorAll('.article');
  if (docElements.length > 0) {
    docElements[0].scrollTop = 0;
  }
};

if (typeof document !== 'undefined') {
  require('autotrack');
  require('./lib/modernizr');
  const themeGroups = /([^\/]+)\/?/.exec(window.location.pathname);

  let theme = '';
  if (themeGroups && themeGroups.length > 1) {
    theme = themeGroups[1];
    var possibleThemes = 'aruba,hpe,hpinc';
    if (possibleThemes.indexOf(theme) === -1) {
      theme = '';
    }
  }

  if (theme === '') {
    require('./scss/index-vanilla');
  } else {
    require(`./scss/index-${theme}`);
  }

  if (__DEV_MODE__) {
    var themeLink = document.getElementById('theme-link');
    var themeUrl = `/assets/css/index-${theme === '' ? 'vanilla' : theme}.css`;
    themeLink.setAttribute('href', themeUrl);
  }

  const rootPath = `/${theme === '' ? '' : theme + '/'}`;
  const routes = require('./routes')(rootPath);

  const element = document.getElementById('content');
  ReactDOM.render(<Router onUpdate={onRouteUpdate} routes={routes}
    history={createHistory()} />, element);

  document.body.classList.remove('loading');
}

export default (locals, callback) => {
  const routes = locals.routes;
  const location = locals.path;

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
