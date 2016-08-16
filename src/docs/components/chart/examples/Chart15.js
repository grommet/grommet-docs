// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Layers, Base, Bar } from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';
import Example from '../../../Example';

const VALUES = [100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50];

export default class Chart15 extends Component {

  render () {
    return (
      <Example code={
        <Box direction="row" pad={{ between: 'small' }}>
          <span>Text</span>
          <Chart>
            <Base height="sparkline" />
            <Layers>
              <Bar values={VALUES} />
            </Layers>
          </Chart>
          <span>context</span>
        </Box>
      } />
    );
  }

};
