// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const THEMES = ['grommet', 'aruba', 'hpe', 'hpinc'];

export default class ThemeMenu extends Component {

  constructor () {
    super();
    this._onChangeTheme = this._onChangeTheme.bind(this);
    this.state = { theme: 'grommet' };
  }

  componentDidMount () {
    let theme = window.location.pathname.split('/')[1];
    if (THEMES.indexOf(theme) === -1) {
      theme = 'grommet';
    }
    this.setState({ theme: theme });
  }

  _onChangeTheme (theme) {
    let prefix;
    if ('grommet' === theme) {
      prefix = '';
    } else {
      prefix = `/${theme}`;
    }

    let currentTheme = window.location.pathname.split('/')[1];
    let path;
    if (THEMES.indexOf(currentTheme) !== -1) {
      path = window.location.pathname.slice(currentTheme.length + 1);
      currentTheme = undefined;
    } else {
      path = window.location.pathname;
    }

    window.location = `${prefix}${path}`;
  }

  render () {
    const { theme } = this.state;
    const links = THEMES.map(theme => (
      <Anchor key={theme} href=""
        onClick={(event) => {
          event.preventDefault();
          this._onChangeTheme(theme);
        }}>
        {theme}
      </Anchor>
    ));

    return (
      <Menu label="Theme" inline={false}>
        {links}
      </Menu>
    );
  }
};
