// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Docs from './components/Docs';
import Home from './Home';
import DocsSplit from './components/DocsSplit';
import Introduction from './docs/Introduction';
import Contents from './docs/Contents';

const Container = (props) => <div>{props.children}</div>;

function createContentRoutes (contents) {
  let result = [];
  contents.forEach(content => {
    if (content.path) {
      const route = { path: content.path };
      if (content.component) {
        route.component = content.component;
      } else {
        route.component = Container;
      }
      if (content.index) {
        route.indexRoute = { component: content.index };
      }
      if (content.contents) {
        route.childRoutes = createContentRoutes(content.contents);
      }
      result.push(route);
    } else if (content.contents) {
      result = result.concat(createContentRoutes(content.contents));
    }
  });
  return result;
}

const routes = createContentRoutes(Contents);

export default {
  path: '/',
  component: Docs,
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'docs',
      component: DocsSplit,
      indexRoute: { component: Introduction },
      childRoutes: routes
    }
  ]
};
