// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Contents from '../docs/Contents';
import NavAnchor from './NavAnchor';
import ThemeMenu from './ThemeMenu';

export default class DocsMenu extends Component {

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
    const menuItems = this._renderMenuItems(Contents, null);

    return (
      <Menu direction="column" align="start" justify="between" primary={true}>
        {menuItems}
        <Footer primary={true} colorIndex="light-2" pad={{ horizontal: 'medium' }}>
          <ThemeMenu align="left" />
        </Footer>
      </Menu>
    );
  }
};

DocsMenu.propTypes = {
  onClick: PropTypes.func
};
