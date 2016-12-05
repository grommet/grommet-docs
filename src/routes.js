// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Docs from './components/Docs';
import Home from './Home';
import DocsSplit from './components/DocsSplit';
import Introduction from './docs/Introduction';
import Contents from './docs/Contents';

const Container = (props) => <div>{props.children}</div>;

function createContentRoutes (contents, asChildren) {
  let result = { docs: [], plain: [] };
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
      if (content.examples) {
        result.plain.push({
          path: `/docs/${content.path}/examples`,
          component: content.examples
        });
      }
      if (content.children) {
        const contentRoutes = createContentRoutes(content.children, true);
        route.childRoutes = contentRoutes.docs;
        result.plain = result.plain.concat(contentRoutes.plain);
      }
      if (content.contents) {
        const contentRoutes = createContentRoutes(content.contents);
        result.docs = result.docs.concat(contentRoutes.docs);
        result.plain = result.plain.concat(contentRoutes.plain);
      }
      if (content.plain) {
        result.plain.push(route);
      } else {
        result.docs.push(route);
      }
    } else if (content.contents) {
      const contentRoutes = createContentRoutes(content.contents);
      result.docs = result.docs.concat(contentRoutes.docs);
      result.plain = result.plain.concat(contentRoutes.plain);
    }
  });
  return result;
}

const contentRoutes = createContentRoutes(Contents);

let rootChildren = [];
rootChildren = rootChildren.concat(contentRoutes.plain);
rootChildren.push({
  path: 'docs',
  component: DocsSplit,
  indexRoute: { component: Introduction },
  childRoutes: contentRoutes.docs
});

export default {
  path: '/',
  component: Docs,
  indexRoute: { component: Home },
  childRoutes: rootChildren
};
