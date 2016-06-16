// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import App from 'grommet/components/App';

export default class Docs extends Component {

  render () {
    return (
      <App className="docs" centered={false}>
        {this.props.children}
      </App>
    );
  }

};
