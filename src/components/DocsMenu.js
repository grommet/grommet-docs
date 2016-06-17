// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Contents from '../docs/Contents';
import NavAnchor from './NavAnchor';

const THEMES = ['aruba', 'hpe', 'hpinc', 'grommet'];

export default class DocsMenu extends Component {

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

  _onChangeTheme (event) {
    const theme = event.target.value;
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

  _renderMenuItems (contents, context) {
    return contents.map((content, index) => {
      let item;

      if (content.path) {
        item = (
          <NavAnchor key={content.label} path={`/docs/${content.path}`}
            onClick={this.props.onClick}>
            {content.label}
          </NavAnchor>
        );
      } else {
        item = (
          <Box key={content.label} pad={{horizontal: 'medium'}}>
            <Heading tag="h3" strong={true}>
              {content.label}
            </Heading>
          </Box>
        );
      }

      let subItems;
      if (content.contents) {
        subItems = this._renderMenuItems(content.contents, content);
      }

      if (!context || subItems) {
        return (
          <Menu key={content.label} direction="column" align="start" primary={true}>
            {item}
            {subItems}
          </Menu>
        );
      } else {
        return item;
      }
    });
  }

  render () {
    const { theme } = this.state;
    const menuItems = this._renderMenuItems(Contents, null);
    const options = THEMES.map(theme => (<option>{theme}</option>));

    return (
      <Menu direction="column" align="start" justify="between" primary={true}>
        {menuItems}
        <Footer primary={true} colorIndex="light-2">
          <select onChange={this._onChangeTheme} value={theme}>
            {options}
          </select>
        </Footer>
      </Menu>
    );
  }
};

DocsMenu.propTypes = {
  onClick: PropTypes.func
};
