// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Anchor from 'grommet/components/Anchor';
import history from '../PrefixedHistory';

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
    history.push(this.props.path);
  }

  render () {
    const { path } = this.props;
    let className = this.props.className || '';
    if (this.context.router && this.context.router.isActive(path)) {
      className += ' active';
    }
    let href = history.makeHref(path);
    return (
      <Anchor {...this.props} className={className} href={href}
        onClick={this._onClick} />
    );
  }
};

NavAnchor.propTypes = {
  path: PropTypes.string.isRequired
};

NavAnchor.contextTypes = {
  router: PropTypes.object.isRequired
};
