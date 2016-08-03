// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Layers, Base, Grid, Bar, Marker, MarkerLabel, HotSpots }
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

const VALUES = [100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50];

export default class Chart11 extends Component {

  constructor () {
    super();
    this.state = { index: (VALUES.length - 1) };
  }

  render () {

    let markerLabel;
    if (this.state.index || 0 === this.state.index) {
      markerLabel = <Value value={VALUES[this.state.index]} />;
    }

    return (
      <Example code={
        <Chart vertical={true}>
          <MarkerLabel count={VALUES.length} index={this.state.index}
            label={markerLabel} />
          <Base height="medium" width="large" />
          <Layers>
            <Grid rows={3} />
            <Marker vertical={true} colorIndex="graph-2"
              count={VALUES.length} index={this.state.index} />
            <Bar values={VALUES} activeIndex={this.state.index} />
            <HotSpots count={VALUES.length}
              activeIndex={this.state.index}
              onActive={(index) => this.setState({
                index: (undefined === index ? (VALUES.length - 1) : index)
              })} />
          </Layers>
        </Chart>
      } />
    );
  }

};
