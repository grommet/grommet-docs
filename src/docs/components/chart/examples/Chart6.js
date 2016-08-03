// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Axis, Layers, Base, Grid, Area, Line, Marker, MarkerLabel, HotSpots }
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

const SPARSE_PERCENT_AXIS_LABELS = [
  { index: 2, label: '50' },
  { index: 4, label: '100' }
];

const UNIT_AXIS_LABELS = [
  { index: 0, label: '2014' },
  { index: 1, label: '2015' }
];

const THRESHOLD_AXIS = { label: '90%', value: 90, colorIndex: 'critical' };

const VALUESa = [50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100];
const VALUESb = [100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50];

export default class Chart6 extends Component {

  constructor () {
    super();
    this.state = {
      index: (VALUESb.length - 1)
    };
  }

  render () {

    let markerLabel;
    if (this.state.index || 0 === this.state.index) {
      markerLabel = <Value value={VALUESb[this.state.index]} />;
    }

    return (
      <Example code={
        <Chart vertical={false}>
          <Axis vertical={true} ticks={true} count={5}
            labels={SPARSE_PERCENT_AXIS_LABELS} />
          <Chart vertical={true}>
            <MarkerLabel count={VALUESb.length} index={this.state.index}
              label={markerLabel} />
            <Base height="medium" width="large" />
            <Layers>
              <Grid rows={3} columns={5} />
              <Marker colorIndex="critical" value={THRESHOLD_AXIS.value} />
              <Marker vertical={true} colorIndex="graph-2"
                count={VALUESb.length} index={this.state.index} />
              <Area values={VALUESa} activeIndex={this.state.index} />
              <Line values={VALUESb} colorIndex="accent-1"
                activeIndex={this.state.index} points={true} />
              <HotSpots count={VALUESb.length}
                activeIndex={this.state.index}
                onActive={(index) => this.setState({
                  index: (undefined === index ? (VALUESb.length - 1) : index)
                })} />
            </Layers>
            <Axis ticks={true} count={2} labels={UNIT_AXIS_LABELS} />
          </Chart>
          <MarkerLabel vertical={true} colorIndex={THRESHOLD_AXIS.colorIndex}
            label={THRESHOLD_AXIS.label} value={THRESHOLD_AXIS.value} />
        </Chart>
      } />
    );
  }

};
