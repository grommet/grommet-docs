// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Layers, Base, Area, Marker, MarkerLabel, HotSpots }
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

const VALUES = [100, 95, 80, 82, 75, undefined, 60, 55, 0, 15, 40, 50];

export default class Chart9 extends Component {

  constructor () {
    super();
    this.state = { index: (VALUES.length - 1) };
  }

  render () {
    const { size } = this.props;

    let markerLabel;
    if (this.state.index >= 0) {
      let value = VALUES[this.state.index];
      if (undefined === value) {
        value = '-';
      }
      markerLabel = <Value value={value} />;
    }

    return (
      <Example code={
        <Chart vertical={true}>
          <MarkerLabel count={VALUES.length} index={this.state.index}
            label={markerLabel} />
          <Base height={size} width="large" />
          <Layers>
            <Marker vertical={true} colorIndex="graph-2"
              count={VALUES.length} index={this.state.index} />
            <Area values={VALUES} activeIndex={this.state.index} />
            <HotSpots count={VALUES.length}
              a11yTitle={VALUES[this.state.index]}
              activeIndex={this.state.index}
              onClick={(index) => alert(VALUES[index])}
              onActive={(index) => this.setState({
                index: (undefined === index ? (VALUES.length - 1) : index)
              })} />
          </Layers>
        </Chart>
      } />
    );
  }

};
