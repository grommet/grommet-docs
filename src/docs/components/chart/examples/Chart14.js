// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Axis, Layers, Base, Grid, Area, Range }
  from 'grommet/components/chart/Chart';
import Example from '../../../Example';

const PERCENT_AXIS_LABELS = [
  { index: 0, label: '0' },
  { index: 2, label: '50' },
  { index: 4, label: '100' }
];

const UNIT_AXIS_LABELS = [
  { index: 0, label: '2015' },
  { index: 1, label: '2014' }
];

const VALUES = [50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100];

export default class Chart14 extends Component {

  constructor () {
    super();
    this.state = { active: { start: 3, end: 6 } };
  }

  render () {

    return (
      <Example code={
        <Chart vertical={true}>
          <Axis vertical={false} ticks={true} tickAlign="end"
            count={5} labels={PERCENT_AXIS_LABELS} />
          <Chart vertical={false}>
            <Axis vertical={true} reverse={true} ticks={true}
              count={2} labels={UNIT_AXIS_LABELS} />
            <Base height="large" width="medium" />
            <Layers>
              <Grid columns={3} rows={2} />
              <Area vertical={true} max={100} min={0} values={VALUES} />
              <Range vertical={true} count={VALUES.length}
                active={this.state.active}
                onActive={(active) => this.setState({ active: active })} />
            </Layers>
          </Chart>
        </Chart>
      } />
    );
  }

};
