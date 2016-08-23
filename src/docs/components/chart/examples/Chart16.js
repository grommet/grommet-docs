// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart,
  { Layers, Base, Grid, Bar, Marker, MarkerLabel, HotSpots, Area, Axis, Range }
  from 'grommet/components/chart/Chart';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

const VALUES = [
  100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50,
  100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50,
  100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50,
  100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50,
  100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50
];

const UNIT_AXIS_LABELS = [
  { index: 0, label: 'June' },
  { index: 1, label: 'July' },
  { index: 2, label: 'August' }
];

export default class Chart16 extends Component {

  constructor () {
    super();
    this._onRangeActive = this._onRangeActive.bind(this);
    const active = { start: 10, end: 18 };
    this.state = this._stateFromActive(active);
  }

  _stateFromActive (active) {
    const activeValues = VALUES.slice(active.start, active.end + 1);
    return {
      active: active,
      activeValues: activeValues,
      index: (activeValues.length - 1)
    };
  }

  _onRangeActive (active) {
    this.setState(this._stateFromActive(active));
  }

  _dateForIndex (index) {
    const axisIndex =
      Math.max(0, Math.min(
        Math.floor(index / 30), UNIT_AXIS_LABELS.length - 1));
    const label = UNIT_AXIS_LABELS[axisIndex];
    const day = (index % 30) + 1;
    return `${label.label} ${day}`;
  }

  render () {
    const { active, activeValues, index } = this.state;

    let markerLabel;
    if (index || 0 === index) {
      markerLabel = (
        <Box direction="row" pad={{ between: 'small' }}
          align="center">
          <Label className="secondary">
            {this._dateForIndex(active.start + index)}
          </Label>
          <Value value={activeValues[index]} />
        </Box>
      );
    }

    let activeAxis = [
      { index: 0, label: this._dateForIndex(active.start) },
      { index: 1, label: this._dateForIndex(active.end) }
    ];

    return (
      <Example code={
        <Box>
          <Chart vertical={true}>
            <Axis ticks={true} count={3} labels={UNIT_AXIS_LABELS} />
            <Base height="small" width="large" />
            <Layers>
              <Area values={VALUES} />
              <Range count={VALUES.length}
                active={active} onActive={this._onRangeActive} />
            </Layers>
          </Chart>
          <Chart vertical={true}>
            <MarkerLabel count={activeValues.length} index={index}
              label={markerLabel} />
            <Base height="medium" width="large" />
            <Layers>
              <Grid rows={3} />
              <Marker vertical={true} colorIndex="graph-2"
                count={activeValues.length} index={index} />
              <Bar values={activeValues} activeIndex={index} />
              <HotSpots count={activeValues.length}
                activeIndex={index}
                onActive={(index) => this.setState({
                  index: (undefined === index ?
                    (activeValues.length - 1) : index)
                })} />
            </Layers>
            <Axis ticks={true} count={2} labels={activeAxis} />
          </Chart>
        </Box>
      } />
    );
  }

};
