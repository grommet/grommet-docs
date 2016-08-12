// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import history from './RouteHistory';

/**
* This component is used to augment Grommet button
* with routing/history capabilities
*/
export default class NavAnchor extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick (event) {
    event.preventDefault();
    history.push(this.props.href);
  }

  render () {
    return (
      <Anchor {...this.props} onClick={this._onClick} />
    );
  }
};
