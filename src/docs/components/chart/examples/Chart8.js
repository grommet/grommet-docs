// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Axis, Layers, Base, Grid, Area, Line, Marker, MarkerLabel, HotSpots }
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Legend from 'grommet/components/Legend';
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

export default class Chart8 extends Component {

  constructor () {
    super();
    this.state = {
      index: (VALUESb.length - 1),
      valuesA: VALUESa,
      valuesB: VALUESb,
      unitAxisLabels: UNIT_AXIS_LABELS
    };
  }

  _maxCount () {
    return (count) => {
      let a = VALUESa.slice(0);
      let b = VALUESb.slice(0);
      while ((a.length + 11) < count) {
        a = a.concat(VALUESa);
        b = b.concat(VALUESb);
      }
      const years = a.length / 12;
      let unitAxisLabels = [];
      for (let i=0; i<(years + 1); i+=1) {
        unitAxisLabels.unshift({
          index: unitAxisLabels.length,
          label: 2015 - i
        });
      }
      this.setState({
        index: a.length - 1,
        valuesA: a,
        valuesB: b,
        unitAxisLabels: unitAxisLabels
      });
    };
  }

  render () {

    let markerLabel;
    if (this.state.index || 0 === this.state.index) {
      const markerSeries = [
        { label: 'Orange', colorIndex: 'accent-1',
          value: (
            <Value size="large"
              value={this.state.valuesB[this.state.index]} />
          ) },
        { label: 'Honeydew', colorIndex: 'graph-1',
          value: <Value value={this.state.valuesA[this.state.index]} /> }
      ];
      markerLabel = <Legend series={markerSeries} />;
    }

    return (
      <Example code={
        <Chart vertical={false} full={true}>
          <Axis vertical={true} ticks={true}
            count={5} labels={PERCENT_AXIS_LABELS} />
          <Chart vertical={true} full={true} onMaxCount={this._maxCount()}>
            <MarkerLabel count={this.state.valuesB.length}
              index={this.state.index} label={markerLabel} />
            <Base height="medium" width="full" />
            <Layers>
              <Grid rows={3} columns={(this.state.valuesB.length / 12) + 1} />
              <Marker colorIndex="critical" value={THRESHOLD_AXIS.value} />
              <Marker vertical={true} colorIndex="graph-2"
                count={this.state.valuesB.length} index={this.state.index} />
              <Area max={100} min={0} values={this.state.valuesA}
                activeIndex={this.state.index} />
              <Line max={100} min={0} colorIndex="accent-1" points={true}
                values={this.state.valuesB}
                activeIndex={this.state.index} />
              <HotSpots max={100} min={0}
                count={this.state.valuesB.length}
                activeIndex={this.state.index}
                onActive={(index) => this.setState({
                  index: (undefined === index ?
                    (this.state.valuesB.length - 1) : index)
                })} />
            </Layers>
            <Axis ticks={true}
              count={(this.state.valuesB.length / 12) + 1}
              labels={this.state.unitAxisLabels} />
          </Chart>
          <MarkerLabel vertical={true} colorIndex={THRESHOLD_AXIS.colorIndex}
            label={THRESHOLD_AXIS.label} value={THRESHOLD_AXIS.value} />
        </Chart>
      } />
    );
  }

};
