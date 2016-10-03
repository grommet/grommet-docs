// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Button from 'grommet/components/Button';

/**
* This component is used to augment Grommet button
* with routing/history capabilities
*/
export default class NavButton extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event) {
    event.preventDefault();
    this.context.router.push(this.props.path);
  }

  render () {
    let href = this.context.router.createPath(this.props.path);
    const restProps = {...this.props};
    delete restProps.path;
    return (
      <Button {...restProps} href={href} onClick={this._onClick} />
    );
  }
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired
};

NavButton.contextTypes = {
  router: PropTypes.object.isRequired
};
