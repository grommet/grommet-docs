// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';

/**
* This component is used to augment Grommet anchor
* with routing/history capabilities
*/
export default class NavAnchor extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event) {
    event.preventDefault();
    this.context.router.push(this.props.path);
    if (this.props.onClick) {
      this.props.onClick();
    }
  }

  render () {
    const { path } = this.props;
    let className = this.props.className || '';
    const exp = new RegExp(`^${path}$|^${path}\/`);
    if (typeof window !== 'undefined' && window.location.pathname.match(exp)) {
      className += ' active';
    }
    let href = this.context.router.createPath(path);
    return (
      <Anchor {...this.props} className={className} href={href}
        onClick={this._onClick} />
    );
  }
};

NavAnchor.propTypes = {
  ...Anchor.propTypes,
  onClick: PropTypes.func,
  path: PropTypes.string.isRequired
};

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};
