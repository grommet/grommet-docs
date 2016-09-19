// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Chart, { Axis, Layers, Base, Marker, MarkerLabel }
  from 'grommet/components/chart/Chart';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

const PERCENT_AXIS_LABELS = [
  { index: 0, label: '0' },
  { index: 2, label: '50' },
  { index: 4, label: '100' }
];

const THRESHOLD_AXIS = { label: '90%', value: 90, colorIndex: 'critical' };

const VALUES = [
  { value: 50, label: '2012' },
  { value: 0, label: '2013' },
  { value: 75, label: '2014' },
  { value: 100, label: '2015' }
];

export default class Chart2 extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {

    const meters = VALUES.map((item, index) => (
      <Box key={index} direction="row" align="center"
        pad={{ between: 'small' }}
        onMouseOver={() => this.setState({ index: index })}
        onMouseOut={() => this.setState({ index: undefined })}>
        <Label margin="none">{item.label}</Label>
        <Meter id={0 === index ? `meter-2-id` : undefined} vertical={false}
          label={false} max={100} min={0} value={item.value}
          active={this.state.index === index} />
        <Value value={item.value} active={this.state.index === index} />
      </Box>
    ));

    return (
      <Example code={
        <Chart vertical={true} horizontalAlignWith="meter-2-id">
          <Axis ticks={true} tickAlign="end" count={5} 
            labels={PERCENT_AXIS_LABELS} />
          <Layers>
            <Marker vertical={true} colorIndex={THRESHOLD_AXIS.colorIndex}
              value={THRESHOLD_AXIS.value} />
          </Layers>
          <Base vertical={true}>{meters}</Base>
          <MarkerLabel label={THRESHOLD_AXIS.label}
            value={THRESHOLD_AXIS.value}
            colorIndex={THRESHOLD_AXIS.colorIndex} />
        </Chart>
      } />
    );
  }

};
