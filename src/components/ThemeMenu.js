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
    this._getThemeUrl = this._getThemeUrl.bind(this);
    this._onOpen = this._onOpen.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = { theme: 'grommet', active: false };
  }

  componentDidMount () {
    let theme = window.location.pathname.split('/')[1];
    if (THEMES.indexOf(theme) === -1) {
      theme = 'grommet';
    }

    const themeUrls = {};
    THEMES.forEach((currentTheme) => {
      themeUrls[currentTheme] = this._getThemeUrl(currentTheme);
    });

    const location = window.location.pathname;
    this.setState({ theme, themeUrls, location });
  }

  componentDidUpdate() {
    const location = window.location.pathname;

    if (location !== this.state.location) {
      const themeUrls = {};
      THEMES.forEach((currentTheme) => {
        themeUrls[currentTheme] = this._getThemeUrl(currentTheme);
      });

      this.setState({ location, themeUrls });
    }
  }

  _getThemeUrl (theme) {
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

    return `${prefix}${path}`;
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
    const { active } = this.state;

    let layer = <span />;
    if (active) {
      const links = THEMES.map(theme => (
        <Anchor key={theme} href={this.state.themeUrls[theme]}>
          {theme}
        </Anchor>
      ), this);
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
        <Anchor href="#" onClick={this._onOpen}>Theme</Anchor>
        {layer}
      </div>
    );
  }
};

ThemeMenu.propTypes = {
  align: PropTypes.oneOf(['left', 'right'])
};
