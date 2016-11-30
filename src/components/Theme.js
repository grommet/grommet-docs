// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';

const THEMES = ['grommet', 'aruba', 'hpe', 'hpinc'];

export default class ThemeMenu extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { theme: 'grommet' };
  }

  componentDidMount () {
    let theme = window.location.pathname.split('/')[1];
    if (THEMES.indexOf(theme) === -1) {
      theme = 'grommet';
    }
    this.setState({ theme });
  }

  _getThemeUrl (theme) {
    let prefix = ('grommet' === theme ? '' : `/${theme}`);
    let currentTheme = window.location.pathname.split('/')[1];
    let path;
    if (THEMES.indexOf(currentTheme) !== -1) {
      path = window.location.pathname.slice(currentTheme.length + 1);
      currentTheme = undefined;
    } else {
      path = window.location.pathname;
    }
    return `${prefix}${path}`;
  }

  _onChange (event) {
    window.location = this._getThemeUrl(event.value);
  }

  render () {
    const { theme } = this.state;
    return (
      <Select options={THEMES} value={theme} onChange={this._onChange} />
    );
  }
};
