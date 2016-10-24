// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import Example from '../../Example';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class Select3 extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: VALUES[0] };
  }

  _onChange (pseudoEvent) {
    this.setState({ value: pseudoEvent.value });
  }

  render () {
    return (
      <Box flex={true}>
        <Example align="start" code={
          <Select inline={true} options={VALUES}
            value={this.state.value} onChange={this._onChange} />
        } />
      </Box>
    );
  }

};
