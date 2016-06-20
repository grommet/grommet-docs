// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';

const THEMES = ['grommet', 'aruba', 'hpe', 'hpinc'];

export default class ThemeMenu extends Component {

  constructor () {
    super();
    this._onChangeTheme = this._onChangeTheme.bind(this);
    this._onOpen = this._onOpen.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = { theme: 'grommet', active: false };
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

  _onOpen (event) {
    event.preventDefault();
    this.setState({ active: true });
  }

  _onClose () {
    this.setState({ active: false });
  }

  render () {
    const { align } = this.props;
    const { theme, active } = this.state;

    let layer = <span></span>;
    if (active) {
      const links = THEMES.map(theme => (
        <Anchor key={theme} href=""
          onClick={(event) => {
            event.preventDefault();
            this._onChangeTheme(theme);
          }}>
          {theme}
        </Anchor>
      ));
      layer = (
        <Layer onClose={this._onClose} closer={true} align={align}>
          <Box pad="medium" justify="end" full="vertical">
            <Menu label="Theme" inline={true} direction="column">
              {links}
            </Menu>
          </Box>
        </Layer>
      );
    }

    return (
      <div>
        <Anchor onClick={this._onOpen}>Theme</Anchor>
        {layer}
      </div>
    );
  }
};

ThemeMenu.propTypes = {
  align: PropTypes.oneOf(['left', 'right'])
};
