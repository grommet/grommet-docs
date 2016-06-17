// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import Docs from './components/Docs';
import Home from './Home';
import DocsSplit from './components/DocsSplit';
import Introduction from './docs/Introduction';
import Contents from './docs/Contents';

function createContentRoutes (contents) {
  let result = [];
  contents.forEach(content => {
    result.push(
      {
        path: content.label.toLowerCase().replace(/ /g, "-"),
        component: content.component
      }
    );
    if (content.contents) {
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
