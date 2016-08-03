// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Axis, Layers, Base, Grid, Area, Line, Marker, MarkerLabel, HotSpots }
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

const PERCENT_AXIS_LABELS = [
  { index: 0, label: '0' },
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

export default class Chart7 extends Component {

  constructor () {
    super();
    this._rotate = this._rotate.bind(this);
    this.state = {
      index: (VALUESb.length - 1),
      valuesA: VALUESa,
      valuesB: VALUESb
    };
  }

  componentDidMount () {
    this._rotateTimer = setInterval(this._rotate, 1000);
  }

  componentWillUnmount () {
    clearInterval(this._rotateTimer);
  }

  _rotate () {
    let valuesA = this.state.valuesA.slice(0);
    const first = valuesA[0];
    valuesA = valuesA.slice(1);
    valuesA.push(first);
    this.setState({ valuesA: valuesA });
  }

  render () {

    let markerLabel;
    if (this.state.index || 0 === this.state.index) {
      markerLabel = <Value value={this.state.valuesB[this.state.index]} />;
    }

    return (
      <Example code={
        <Chart vertical={true}>
          <Axis ticks={true} count={5} labels={PERCENT_AXIS_LABELS} />
          <Chart>
            <Axis vertical={true} reverse={true} ticks={true}
              count={2} labels={UNIT_AXIS_LABELS} />
            <Base height="large" width="large" />
            <Layers>
              <Grid rows={5} columns={3} />
              <Marker vertical={true}
                colorIndex={THRESHOLD_AXIS.colorIndex}
                value={THRESHOLD_AXIS.value} />
              <Marker reverse={true} colorIndex="graph-2"
                count={VALUESb.length} index={this.state.index} />
              <Area vertical={true} max={100} min={0} reverse={true}
                values={this.state.valuesA} activeIndex={this.state.index} />
              <Line vertical={true} max={100} min={0} reverse={true}
                values={this.state.valuesB} colorIndex="accent-1"
                activeIndex={this.state.index} />
              <HotSpots vertical={true} max={100} min={0}
                count={this.state.valuesB.length}
                activeIndex={this.state.index}
                onActive={(index) => this.setState({
                  index: (undefined === index ? (this.state.valuesB.length - 1) : index)
                })} />
            </Layers>
            <MarkerLabel vertical={true} reverse={true}
              count={VALUESb.length} index={this.state.index}
              label={markerLabel} />
          </Chart>
          <MarkerLabel vertical={false} colorIndex={THRESHOLD_AXIS.colorIndex}
            label={THRESHOLD_AXIS.label} value={THRESHOLD_AXIS.value} />
        </Chart>
      } />
    );
  }

};
