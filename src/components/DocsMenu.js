// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Contents from '../docs/Contents';
import NavAnchor from './NavAnchor';

export default class DocsMenu extends Component {

  _renderMenuItems (contents, context) {
    return contents.map((content, index) => {
      let item;
      console.log('!!! rMI', content.label, content.path);

      if (content.path) {
        item = (
          <NavAnchor key={content.label} path={`/docs/${content.path}`}
            onClick={this.props.onClick}>
            {content.label}
          </NavAnchor>
        );
      } else {
        item = (
          <Box pad={{horizontal: 'medium'}}>
            <Heading key={content.label} tag="h3" strong={true}>
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
      <Menu direction={this.props.direction} align="start" justify="between" primary={true}>
        {menuItems}
      </Menu>
    );
  }
};

DocsMenu.propTypes = {
  direction: PropTypes.oneOf(['column', 'row']),
  onClick: PropTypes.func
};
