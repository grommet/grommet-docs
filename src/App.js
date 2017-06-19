import React from 'react';
import { IntlProvider, addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
import routes from './routes';
import { Router, useRouterHistory } from 'react-router';
import { createHistory } from 'history';
import { logPageView } from './utils/analytics';

addLocaleData(en);

import { getCurrentLocale, getLocaleData } from 'grommet/utils/Locale';

const onRouteUpdate = () => {
  logPageView();
  window.scrollTo(0, 0);
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

let history;
if (typeof document !== 'undefined') {
  const firstPathElement = window.location.pathname.split('/')[1];
  const theme = (THEMES.indexOf(firstPathElement) === -1 ? 'vanilla' :
    firstPathElement);
  require(`./scss/index-${theme}`);

  if (__DEV_MODE__) {
    var themeLink = document.getElementById('theme-link');
    var themeUrl = `/assets/css/index-${theme}.css`;
    if (themeLink) {
      themeLink.setAttribute('href', themeUrl);
    }
  }

  const basename = basenameForTheme(theme);
  let historyOptions = {};
  if ('/' !== basename) {
    historyOptions.basename = basename;
  }
  history = useRouterHistory(createHistory)(historyOptions);
}

const locale = getCurrentLocale();
const localeData = getLocaleData({}, locale);

export default (props) => {
  let body = (
    <Router onUpdate={onRouteUpdate} routes={routes}
      history={history} />
  );
  if (props.children) {
    body = props.children;
  }

  return (
    <IntlProvider locale={localeData.locale} messages={localeData.messages}>
      {body}
    </IntlProvider>
  );
};
