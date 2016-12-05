// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Contents from '../docs/Contents';

export default class DocsMenu extends Component {

  _renderMenuItems (contents, context) {
    return contents.filter(content => content.label).map((content, index) => {
      let item;

      if (! content.contents) {
        item = (
          <Anchor key={content.label} path={`/docs/${content.path}`}
            onClick={this.props.onClick}>
            {content.label}
          </Anchor>
        );
      } else if (content.path) {
        item = (
          <Anchor key={content.label} path={`/docs/${content.path}`}
            onClick={this.props.onClick}>
            <Heading tag='h3' margin='none' strong={true}>
              {content.label}
            </Heading>
          </Anchor>
        );
      } else {
        item = (
          <Header key={content.label} align='end'
            pad={{ horizontal: 'medium' }}>
            <Heading tag='h4' strong={true}>
              {content.label}
            </Heading>
          </Header>
        );
      }

      let subItems;
      if (content.contents) {
        subItems = this._renderMenuItems(content.contents, content);
      }

      if (!context || subItems) {
        return (
          <Menu key={content.label} direction='column' align='start'
            size='small' primary={true}>
            {item}
            {subItems}
          </Menu>
        );
      } else {
        return item;
      }
    });
  }

  _isActive(item) {
    const { router } = this.context;
    let result = false;
    if (item.path && router.isActive(`/docs/${item.path}`)) {
      result = true;
    } else if (item.contents) {
      result = item.contents.some(contentItem => this._isActive(contentItem));
    }
    return result;
  }

  render () {
    // figure out which section we are in
    let activeSection;
    Contents.some(item => {
      if (this._isActive(item)) {
        activeSection = item;
        return true;
      }
      return false;
    });
    const contents = activeSection ? [activeSection] : Contents;
    const menuItems = this._renderMenuItems(contents, null);

    return (
      <Menu direction='column' align='start' justify='between' size='small'
        primary={true}>
        {menuItems}
      </Menu>
    );
  }
};

DocsMenu.propTypes = {
  onClick: PropTypes.func
};

DocsMenu.contextTypes = {
  router: PropTypes.any
};
