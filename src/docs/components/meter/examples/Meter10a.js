// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter10a extends Component {

  render () {
    return (
      <Example code={
        <Box direction="row" pad={{ between: 'small' }}>
          <Meter type="arc" vertical={true} value={40} label={false} threshold={90} />
          <Box justify="between" align="start">
            <Label size="small">100 GB</Label>
            <Value value={40} units="GB" align="start" />
            <Label size="small">0 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};
