// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import { match, Router, RouterContext, useRouterHistory } from 'react-router';
import { createHistory, createMemoryHistory } from 'history';
import template from './template.ejs';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
addLocaleData(en);

import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';

const locale = getCurrentLocale();
const localeData = getLocaleData({}, locale);

const onRouteUpdate = () => {
  var docElements = document.querySelectorAll('.article');
  if (docElements.length > 0) {
    docElements[0].scrollTop = 0;
  }
  document.getElementById('content').focus();
};

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

if (typeof document !== 'undefined') {
  require('autotrack');
  require('./lib/modernizr');

  const firstPathElement = window.location.pathname.split('/')[1];
  const theme = (THEMES.indexOf(firstPathElement) === -1 ? 'vanilla' :
    firstPathElement);
  require(`./scss/index-${theme}`);

  const basename = basenameForTheme(theme);
  let historyOptions = {};
  if ('/' !== basename) {
    historyOptions.basename = basename;
  }
  const history = useRouterHistory(createHistory)(historyOptions);

  if (__DEV_MODE__) {
    var themeLink = document.getElementById('theme-link');
    var themeUrl = `/assets/css/index-${theme}.css`;
    themeLink.setAttribute('href', themeUrl);
  }

  const routes = require('./routes');
  const element = document.getElementById('content');
  ReactDOM.render(
    <IntlProvider locale={localeData.locale} messages={localeData.messages}>
      <Router onUpdate={onRouteUpdate} routes={routes}
      history={history} />
    </IntlProvider>, element);

  document.body.classList.remove('loading');
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
            <IntlProvider locale={localeData.locale}
              messages={localeData.messages}>
              <RouterContext {...renderProps} />
            </IntlProvider>
          )
        })
      );
    });
};
