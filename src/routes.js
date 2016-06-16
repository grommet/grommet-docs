// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Docs from './components/Docs';
import Home from './Home';
import DocsSplit from './components/DocsSplit';
import Introduction from './docs/Introduction';
import Contents from './docs/Contents';

function createContentRoutes (contents) {
  let result = [];
  contents.forEach(content => {
    result.push(
      <Route key={content.label}
        path={content.label.toLowerCase().replace(/ /g, "-")}
        component={content.component} />
    );
    if (content.hasOwnProperty('contents')) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

const routes = createContentRoutes(Contents);

export default (
  <Route path="/" component={Docs}>
    <IndexRoute component={Home} />
    <Route path="docs" component={DocsSplit}>
      <IndexRoute component={Introduction} />
      {routes}
    </Route>
  </Route>
);
