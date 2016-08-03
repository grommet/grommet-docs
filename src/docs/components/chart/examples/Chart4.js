// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Chart, { Axis, Layers, Base, Marker, MarkerLabel }
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

const THRESHOLD_AXIS = { label: '90%', value: 90, colorIndex: 'critical' };

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

export default class Chart4 extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { seriesIndex, slice, valueIndex } = this.state;

    const meters = SERIES.map((item, index) => (
      <Box key={index} direction="column" align="center"
        pad={{ horizontal: 'small' }}>
        <Meter id={0 === index ? `meter-4-id` : undefined} vertical={true}
          label={false} max={100} min={0} series={item.series}
          active={index === seriesIndex}
          activeIndex={
            undefined !== valueIndex ? valueIndex :
            (slice && slice.index === index ? slice.valueIndex : undefined)
          }
          onActive={(valueIndex) => {
            if (undefined !== valueIndex) {
              this.setState({ slice: { index: index, valueIndex: valueIndex } });
            } else {
              this.setState({ slice: undefined });
            }
          }} />
        <Label margin="small"
          onMouseOver={() => this.setState({ seriesIndex: index })}
          onMouseOut={() => this.setState({ seriesIndex: undefined })}>
          {item.label}
        </Label>
      </Box>
    ));

    let legendSeries = LEGEND_SERIES;
    if (seriesIndex || 0 === seriesIndex) {
      legendSeries = LEGEND_SERIES.map((item, index) => (
        { ...item, value: SERIES[seriesIndex].series[index].value }
      ));
    } else if (slice) {
      legendSeries = LEGEND_SERIES.map((item, index) => {
        if (index === slice.valueIndex) {
          return { ...item,
            value: SERIES[slice.index].series[slice.valueIndex].value
          };
        } else {
          return item;
        }
      });
    }

    return (
      <Example code={
        <Chart vertical={false} verticalAlignWith="meter-4-id">
          <Axis vertical={true} ticks={true}
            count={5} labels={PERCENT_AXIS_LABELS} />
          <Layers>
            <Marker colorIndex={THRESHOLD_AXIS.colorIndex}
              value={THRESHOLD_AXIS.value} />
          </Layers>
          <Box direction="column" align="start">
            <Base>
              {meters}
            </Base>
            <Legend series={legendSeries}
              onActive={(index) => this.setState({ valueIndex: index })} />
          </Box>
          <MarkerLabel vertical={true} label={THRESHOLD_AXIS.label}
            value={THRESHOLD_AXIS.value}
            colorIndex={THRESHOLD_AXIS.colorIndex} />
        </Chart>
      } />
    );
  }

};
