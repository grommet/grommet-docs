// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Menu from 'grommet/components/Menu';
import Header from 'grommet/components/Header';

export default class DocsMenu extends Component {

  _renderMenuItems (contents, routePrefix, context) {
    var items = contents.map((content, index) => {
      var item;

      if (content.route || context) {
        var routeName = content.id ? context.label : (content.label || context.label);
        var href = routePrefix + routeName.toLowerCase().replace(/ /g, "-");
        if (content.id) {
          href += '#' + content.id;
        }
        item = (
          <Link key={content.label} to={href} onClick={this.props.onClick}
            activeClassName="active">
            {content.label}
          </Link>
        );
        //item = <a key={content.label} href={href}>{content.label}</a>;
      } else {
        item = content.label;
      }

      if (! context) {
        item = (
          <Header tag="h3" key={content.label} pad={{horizontal: 'medium'}}>
            <strong>{item}</strong>
          </Header>
        );
      }

      var subItems;
      if (content.hasOwnProperty('contents')) {
        subItems = this._renderMenuItems(content.contents, routePrefix, content);
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

    return items;
  }

  render () {
    var menuItems = this._renderMenuItems(this.props.contents, this.context.routePrefix, null);
    return (
      <Menu direction={this.props.direction} align="start" justify="between" primary={true}>
        {menuItems}
      </Menu>
    );
  }
};

DocsMenu.propTypes = {
  contents: PropTypes.arrayOf(React.PropTypes.object),
  direction: PropTypes.oneOf(['column', 'row']),
  onClick: PropTypes.func
};

DocsMenu.contextTypes = {
  routePrefix: PropTypes.string.isRequired
};
