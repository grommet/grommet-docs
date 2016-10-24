// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import Example from '../../Example';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class Select5 extends Component {

  constructor () {
    super();
    this._onSearch = this._onSearch.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = { value: VALUES[0], options: VALUES };
  }

  _onSearch (event) {
    const regexp = new RegExp('^' + event.target.value);
    const options = VALUES.filter(val => regexp.test(val));
    this.setState({ options: options });
  }

  _onChange (pseudoEvent) {
    this.setState({ value: pseudoEvent.value });
  }

  render () {
    return (
      <Box flex={true}>
        <Example align="start" code={
          <Select inline={true} options={this.state.options}
            value={this.state.value}
            onSearch={this._onSearch} onChange={this._onChange} />
        } />
      </Box>
    );
  }

};
