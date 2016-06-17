// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import { createHistory } from 'history';

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

let history = {};

if (typeof document !== 'undefined') {
  let baseHistory = createHistory();
  history = {
    ...baseHistory,
    listen: (handler) => {
      return baseHistory.listen((location) => {
        handler(removePrefix(location));
      });
    },
    push: (location) => {
      baseHistory.push(addPrefix(location));
    },
    replace: (location) => {
      baseHistory.replace(addPrefix(location));
    }
  };
}

history.setPrefix = (prefixArg) => {
  prefix = prefixArg;
};

history.makeHref = (path) => `${prefix}${path}`;


export default history;
