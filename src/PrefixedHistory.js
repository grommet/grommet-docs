// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import { createHistory } from 'history';
let history = createHistory();

// We have our own history implementation so we can insert a prefix.
// We use this to have themed links without having to change paths.

let prefix = '';

function addPrefix (location) {
  let result = location;
  if (prefix.length > 0) {
    if (typeof location === 'string') {
      if (location.slice(0, prefix.length) !== prefix) {
        result = (prefix + location);
      }
    } else {
      if (location.pathname.slice(0, prefix.length) !== prefix) {
        result = { ...location, pathname: prefix + location.pathname };
      }
    }
  }
  return result;
}

function removePrefix (location) {
  let result = location;
  if (prefix.length > 0 &&
    location.pathname.slice(0, prefix.length) === prefix) {
    result = { ...location, pathname: location.pathname.slice(prefix.length) };
  }
  return result;
}

export default {
  ...history,
  listen: (handler) => {
    return history.listen((location) => {
      handler(removePrefix(location));
    });
  },
  push: (location) => {
    history.push(addPrefix(location));
  },
  replace: (location) => {
    history.replace(addPrefix(location));
  },
  setPrefix: (prefixArg) => {
    prefix = prefixArg;
  },
  makeHref: (path) => `${prefix}${path}`
};
