// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Docs from './Docs';
import Home from './Home';
import { routes } from './docs/Index';

module.exports = function (rootPath) {
  var DocsRouter = React.createClass({

    childContextTypes: {
      rootPath: React.PropTypes.string.isRequired,
      routePrefix: React.PropTypes.string.isRequired
    },

    getChildContext: function() {
      return {
        rootPath: rootPath,
        routePrefix: rootPath
      };
    },

    render: function() {
      return (
        <Docs {...this.props} />
      );
    }
  });
  return (
    <Route path={rootPath} component={DocsRouter}>
      <IndexRoute component={Home} />
      {routes()}
    </Route>
  );
};
