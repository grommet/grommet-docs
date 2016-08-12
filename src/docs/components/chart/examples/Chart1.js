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
  { index: 0, label: '0%' },
  { index: 2, label: '50%' },
  { index: 4, label: '100%' }
];

const THRESHOLD_AXIS = {
  label: '90%', value: 90, colorIndex: 'critical'
};

const VALUES = [
  { value: 50, label: '2012' },
  { value: 0, label: '2013' },
  { value: 75, label: '2014' },
  { value: 100, label: '2015' }
];

export default class Chart1 extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {

    const meters = VALUES.map((item, index) => (
      <Box key={index} direction="column" align="center"
        pad={{ horizontal: 'small' }}
        onMouseOver={() => this.setState({ index: index })}
        onMouseOut={() => this.setState({ index: undefined })}>
        <Value value={item.value} active={this.state.index === index} />
        <Meter id={0 === index ? `meter-1-id` : undefined} vertical={true}
          label={false} max={100} min={0} value={item.value}
          active={this.state.index === index} />
        <Label margin="small">{item.label}</Label>
      </Box>
    ));

    return (
      <Example code={
        <Chart vertical={false} verticalAlignWith="meter-1-id">
          <Axis vertical={true} ticks={true}
            count={5} labels={PERCENT_AXIS_LABELS} />
          <Layers>
            <Marker max={100} min={0}
              value={THRESHOLD_AXIS.value}
              colorIndex={THRESHOLD_AXIS.colorIndex} />
          </Layers>
          <Base>{meters}</Base>
          <MarkerLabel vertical={true} label={THRESHOLD_AXIS.label}
            value={THRESHOLD_AXIS.value}
            colorIndex={THRESHOLD_AXIS.colorIndex} />
        </Chart>
      } />
    );
  }

};
