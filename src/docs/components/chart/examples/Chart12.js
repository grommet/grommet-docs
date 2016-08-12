// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Chart, { Axis, Layers, Base, Threshold }
  from 'grommet/components/chart/Chart';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Legend from 'grommet/components/Legend';
import Example from '../../../Example';

const PERCENT_AXIS_VALUES = [
  { value: 0, label: '0' },
  { value: 25 },
  { value: 50, label: '50' },
  { value: 75 },
  { value: 100, label: '100' }
];

const UNIT_AXIS_VALUES = [
  { value: 0, label: '2014' },
  { value: 100, label: '2015' }
];
const MAX_UNIT = UNIT_AXIS_VALUES[UNIT_AXIS_VALUES.length - 1].value;

const THRESHOLD_AXIS_VALUES = [
  { label: '90%', value: 90, colorIndex: 'critical' }
];

const LEGEND_SERIES = [
  { label: 'Honeydew', colorIndex: 'graph-1' },
  { label: 'Orange', colorIndex: 'graph-2' },
  { label: 'Blueberry', colorIndex: 'graph-3' }
];

const SERIES = [
  { series: [{ value: 50 }, { value: 20 }, { value: 5 }], label: '2012' },
  { series: [{ value: 0 }, { value: 10 }, { value: 3 }], label: '2013' },
  { series: [{ value: 55 }, { value: 30 }, { value: 7 }], label: '2014' },
  { series: [{ value: 80 }, { value: 20 }, { value: 0 }], label: '2015' }
];

export default class Chart12 extends Component {

  constructor () {
    super();
    this.state = {
      index: (SERIES.length - 1),
      series: SERIES,
      unitAxis: UNIT_AXIS_VALUES
    };
  }

  _maxCount () {
    return (count) => {
      let series = [];
      for (let index=0; index<count; index+=1) {
        const year = `${2015 - index}`;
        series.unshift({ series: SERIES[index % 4].series, label: year });
      }
      const unitAxis = [
        { value: 0, label: series[0].label },
        { value: 100, label: series[series.length - 1].label }
      ];
      this.setState({
        index: series.length - 1,
        series: series,
        unitAxis: unitAxis
      });
    };
  }

  _activateIndex (index) {
    const { series } = this.state;
    return () => {
      let unitAxis = [{
        label: series[index].label,
        value: Math.round((MAX_UNIT / (series.length - 1)) * index)
      }];
      this.setState({ index: index, unitAxis: unitAxis });
    };
  }

  _deactivateIndex () {
    return () => {
      const { series } = this.state;
      const unitAxis = [
        { value: 0, label: series[0].label },
        { value: 100, label: series[series.length - 1].label }
      ];
      this.setState({ index: series.length - 1, unitAxis: unitAxis });
    };
  }

  render () {
    let markerValues;
    if (this.state.index || 0 === this.state.index) {
      const series = this.state.series[this.state.index];
      const markerSeries = LEGEND_SERIES.map((legendSeries, index) => ({
        ...legendSeries,
        label: legendSeries.label,
        value: (
          <Value value={series.series[index].value} />
        )
      }));
      markerValues = [{
        label: <Legend series={markerSeries} />,
        value: Math.round((MAX_UNIT / (this.state.series.length - 1)) *
          this.state.index)
      }];
    } else {
      markerValues = [{ label: <Value size="large" value='' />, value: 0 }];
    }

    const meters = this.state.series.map((item, index) => (
      <Box key={index} direction="column" align="center"
        onMouseOver={this._activateIndex(index)}
        onMouseOut={this._deactivateIndex()}>
        <Meter id={0 === index ? `meter-12-id` : undefined} vertical={true}
          stacked={true}
          label={false} max={100} min={0} series={item.series} />
      </Box>
    ));

    return (
      <Example code={
        <Chart vertical={false} full={true}
          verticalAlignWith="meter-12-id">
          <Axis vertical={true} ticks={true}
            max={100} min={0} values={PERCENT_AXIS_VALUES} />
          <Chart vertical={true} full={true}
            verticalAlignWith="meter-12-id"
            horizontalAlignWith="meters-12-id"
            onMaxCount={this._maxCount()} >
            <Axis values={markerValues} />
            <Layers>
              <Threshold max={100} min={0} colorIndex="critical"
                value={THRESHOLD_AXIS_VALUES[0].value} />
            </Layers>
            <Base>
              {meters}
            </Base>
            <Axis align="start" ticks={true} values={this.state.unitAxis} />
          </Chart>
          <Axis vertical={true}
            max={100} min={0} values={THRESHOLD_AXIS_VALUES} />
        </Chart>
      } />
    );
  }

};
