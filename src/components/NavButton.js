// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import history from '../PrefixedHistory';

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
    history.push(this.props.path);
  }

  render () {
    let href = history.makeHref(this.props.path);
    return (
      <Button {...this.props} href={href} onClick={this._onClick} />
    );
  }
};
