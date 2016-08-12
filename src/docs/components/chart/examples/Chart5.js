// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Chart, { Axis, Base }
  from 'grommet/components/chart/Chart';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Legend from 'grommet/components/Legend';
import Example from '../../../Example';

const PERCENT_AXIS_LABELS = [
  { index: 0, label: '0' },
  { index: 2, label: '50' },
  { index: 4, label: '100' }
];

const SERIES = [
  { series: [{ value: 50 }, { value: 20 }, { value: 5 }], label: '2012' },
  { series: [{ value: 0 }, { value: 10 }, { value: 3 }], label: '2013' },
  { series: [{ value: 55 }, { value: 30 }, { value: 7 }], label: '2014' },
  { series: [{ value: 80 }, { value: 20 }, { value: 0 }], label: '2015' }
];

const LEGEND_SERIES = [
  { label: 'Honeydew', colorIndex: 'graph-1' },
  { label: 'Orange', colorIndex: 'graph-2' },
  { label: 'Blueberry', colorIndex: 'graph-3' }
];

export default class Chart5 extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {

    const meters = SERIES.map((item, index) => (
      <Box key={index} direction="column" align="center"
        pad={{ horizontal: 'small' }}>
        <Meter id={0 === index ? `meter-5-id` : undefined} vertical={true}
          stacked={true}
          label={false} max={100} min={0} series={item.series} />
        <Label margin="small"
          onMouseOver={() => this.setState({ index: index })}
          onMouseOut={() => this.setState({ index: undefined })}>
          {item.label}
        </Label>
      </Box>
    ));

    let legendSeries = LEGEND_SERIES;
    if (this.state.index || 0 === this.state.index) {
      legendSeries = LEGEND_SERIES.map((item, index) => (
        { ...item, value: SERIES[this.state.index].series[index].value }
      ));
    }

    return (
      <Example code={
        <Box direction="column" align="start">
          <Chart vertical={false} verticalAlignWith="meter-5-id">
            <Axis vertical={true} ticks={true}
              count={5} labels={PERCENT_AXIS_LABELS} />
            <Base>{meters}</Base>
          </Chart>
          <Legend series={legendSeries} />
        </Box>
      } />
    );
  }

};
