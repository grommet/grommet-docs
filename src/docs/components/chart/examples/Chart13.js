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

export default class Chart13 extends Component {

  constructor () {
    super();
    this._onMaxCount = this._onMaxCount.bind(this);
    this.state = {
      active: { start: 3, end: 6 },
      values: VALUES,
      unitAxisLabels: UNIT_AXIS_LABELS
    };
  }

  _onMaxCount (count) {
    let values = VALUES.slice(0);
    while ((values.length + 11) < count) {
      values = values.concat(VALUES);
    }
    const years = values.length / 12;
    let unitAxisLabels = [];
    for (let i=0; i<(years + 1); i+=1) {
      unitAxisLabels.unshift({
        index: unitAxisLabels.length,
        label: 2015 - i
      });
    }
    this.setState({
      values: values,
      unitAxisLabels: unitAxisLabels
    });
  }

  render () {

    return (
      <Example code={
        <Chart vertical={false} full={true}>
          <Axis vertical={true} ticks={true}
            count={5} labels={PERCENT_AXIS_LABELS} />
          <Chart vertical={true} full={true} onMaxCount={this._onMaxCount}>
            <Base height="medium" width="full" />
            <Layers>
              <Grid rows={3} columns={(this.state.values.length / 12) + 1} />
              <Area max={100} min={0} values={this.state.values} />
              <Range
                count={this.state.values.length}
                active={this.state.active}
                onActive={(active) => this.setState({ active: active })} />
            </Layers>
            <Axis reverse={true} ticks={true}
              count={(this.state.values.length / 12) + 1}
              labels={this.state.unitAxisLabels} />
          </Chart>
        </Chart>
      } />
    );
  }

};
