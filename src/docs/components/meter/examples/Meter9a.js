// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter9a extends Component {

  render () {
    return (
      <Example align="center" code={
        <Box>
          <Meter type="arc" value={40} label={false} threshold={90} />
          <Box direction="row" justify="between" align="center">
            <Label size="small">0 GB</Label>
            <Value value={40} units="GB" align="start" />
            <Label size="small">100 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};
