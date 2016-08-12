// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

const SERIES = [
  {label: 'Gen 7', value: 50},
  {label: 'Gen 8', value: 20},
  {label: 'Gen 9', value: 10},
  {label: 'Gen 10', value: 30}
];

export default class Meter11LabelsA extends Component {

  render () {
    const items = SERIES.map((serie, index) => (
      <Box key={index}>
        <Box direction="row" justify="between">
          <Value size="small" value={SERIES[index].value} units="GB" />
          <Label margin="none">{SERIES[index].label}</Label>
        </Box>
        <Meter value={SERIES[index].value} max={100} label={false} />
      </Box>
    ));

    items.push(
      <Box key="axis" direction="row" justify="between">
        <Label size="small">0 GB</Label>
        <Label size="small">100 GB</Label>
      </Box>
    );

    return (
      <Example align="center" code={
        <Box>
          {items}
        </Box>
      } />
    );
  }

};
