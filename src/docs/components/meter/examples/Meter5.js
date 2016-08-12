// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

export default class Meter5 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Box direction="row" align="center">
          <Meter type="arc" vertical={true} value={40} label={false} />
          <Value value={40} align="center" />
        </Box>
      } />
    );
  }

};
