// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, {
  Area, Line, Bar, Axis, Base, Grid, HotSpots, Layers, Marker, MarkerLabel,
  Range
}
  from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Label from 'grommet/components/Label';
import Legend from 'grommet/components/Legend';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  full: { value: true },
  vertical: { value: true },
  loading: { value: true },
  height: { options:
    ['xxsmall', 'xsmall', 'small', 'medium', 'large', 'sparkline']
  },
  width: { options: ['xsmall', 'small', 'medium', 'large'] },
  points: { value: true },
  smooth: { value: true },
  inline: { value: true },
  stacked: { value: true },
  ticks: { value: true }
};

const CONTENTS_SCHEMA = {
  'Axis-time': { value: true, initial: true },
  'Axis-value': { value: true, initial: true },
  Grid: { value: <Grid rows={5} columns={3} />, initial: true },
  Area: { value: true, initial: true },
  Line: { value: true, initial: true },
  Bar: { value: true, initial: true },
  'Meter-value': { value: true },
  'Meter-series': { value: true },
  Marker: { value: true, initial: true },
  'HotSpots': { value: true, initial: true },
  Range: { value: true },
  'Marker-threshold': { value: true },
  Legend: { value: true }
};

const AREA_VALUES = [50, 45, 30, 35, 0, 5, 10, 15, 75, 80, 90, 100];
const LINE_VALUES = [100, 95, 80, 82, 75, 70, 60, 55, 0, 15, 40, 50];
const BAR_VALUES = [45, 25, 60, 12, 35, undefined, 10, 45, 60, 85, 70, 20];
const COUNT = AREA_VALUES.length;

const METER_VALUES = [
  { value: 50, label: '2012' },
  { value: 0, label: '2013' },
  { value: 75, label: '2014' },
  { value: 100, label: '2015' }
];

const METER_SERIES = [
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

function noUndefined(obj) {
  Object.keys(obj).forEach(key => {
    if (undefined === obj[key]) {
      delete obj[key];
    }
  });
  return obj;
}

export default class ChartExamplesDoc extends Component {

  constructor () {
    super();
    this._onActive = this._onActive.bind(this);
    this.state = {
      activeIndex: (COUNT - 1),
      activeRange: { start: 3, end: 6 },
      contents: {},
      elementProps: {} };
  }

  _onActive (index) {
    this.setState({
      activeIndex: (undefined === index ? (COUNT - 1) : index)
    });
  }

  render () {
    let {
      activeIndex, activeRange, contents, elementProps, meterIndex,
      seriesIndex, slice, valueIndex
    } = this.state;
    let {
      full, height, inline, loading, points, smooth, stacked, ticks, vertical,
      width
    } = elementProps;
    const haveMeters = contents['Meter-value'] || contents['Meter-series'];
    let propsSchema = { ...PROPS_SCHEMA };
    let contentsSchema = { ...CONTENTS_SCHEMA };
    height = haveMeters ? undefined : (height || 'medium');
    width = haveMeters ? undefined : (width ||
      ('sparkline' === height ? undefined : 'medium'));
    loading = loading || undefined;
    points = points || undefined;
    smooth = smooth || undefined;
    ticks = ticks || undefined;
    vertical = vertical || undefined;
    activeIndex = 'sparkline' === height ? undefined : activeIndex;
    const reverse = vertical || undefined;
    const notVertical = (! vertical) || undefined;
    let subComponents = [];

    let timeAxis;
    if (contents['Axis-time']) {
      timeAxis = (
        <Axis count={2}
          labels={[
            {'index': 0, 'label': '2012'}, {'index': 1, 'label': '2015'}]}
          {...noUndefined({ vertical, reverse, ticks })} />
      );
    }

    let valueAxis;
    if (contents['Axis-value']) {
      valueAxis = (
        <Axis count={5}
          labels={[
            {'index': 2, 'label': '50'}, {'index': 4, 'label': '100'}]}
         {...noUndefined({ vertical: notVertical, ticks })}  />
      );
    }

    if (!timeAxis && !valueAxis) {
      delete propsSchema.ticks;
    } else {
      subComponents.push('Axis');
    }

    if (contents.Grid) {
      subComponents.push('Grid');
    }

    let area;
    if (contents.Area) {
      area = (
        <Area values={AREA_VALUES} colorIndex='graph-1'
          {...noUndefined({ vertical, reverse, points, smooth })}
          activeIndex={activeIndex} />
      );
      subComponents.push('Area');
    }

    let bar;
    if (contents.Bar) {
      bar = (
        <Bar values={BAR_VALUES} colorIndex='graph-2'
          {...noUndefined({ vertical, reverse, points })}
          activeIndex={activeIndex} />
      );
      subComponents.push('Bar');
    }

    let line;
    if (contents.Line) {
      line = (
        <Line values={LINE_VALUES} colorIndex='accent-1'
          {...noUndefined({ vertical, reverse, points, smooth })}
          activeIndex={activeIndex} />
      );
      subComponents.push('Line');
    }

    if (!area && !line) {
      delete propsSchema.smooth;
    }
    if (!area && !line && !bar) {
      delete propsSchema.points;
    }

    let meters, verticalAlignWith, horizontalAlignWith;
    if (contents['Meter-value']) {
      meters = METER_VALUES.map((item, index) => {
        if (inline) {
          const label = <Label margin='none'>{item.label}</Label>;
          const value = (
            <Value size='small' value={item.value}
              active={meterIndex === index} />
          );
          return (
            <Box key={index} direction={vertical ? 'column' : 'row'}
              pad={{ horizontal: 'small', vertical: 'small' }}
              onMouseOver={() => this.setState({ meterIndex: index })}
              onMouseOut={() => this.setState({ meterIndex: undefined })}>
              <Meter id={0 === index ? `meter-1-id` : undefined}
                label={false} max={100} min={0} value={item.value}
                {...noUndefined({ vertical: notVertical })}
                active={this.state.index === index} />
              <Box direction={vertical ? 'row' : 'column'}
                justify='between' align='center'>
                {vertical ? label : value}
                {vertical ? value : label}
              </Box>
            </Box>
          );
        } else {
          const value = (
            <Value value={item.value} active={this.state.index === index} />
          );
          const label = <Label margin='small'>{item.label}</Label>;
          return (
            <Box key={index} direction={vertical ? 'row' : 'column'}
              align='center'
              pad={{ horizontal: 'small', between: 'small' }}
              onMouseOver={() => this.setState({ meterIndex: index })}
              onMouseOut={() => this.setState({ meterIndex: undefined })}>
              {vertical ? label : value}
              <Meter id={0 === index ? `meter-1-id` : undefined}
                label={false} max={100} min={0} value={item.value}
                {...noUndefined({ vertical: notVertical })}
                active={meterIndex === index} />
              {vertical ? value : label}
            </Box>
          );
        }
      });
      delete propsSchema.stacked;
    } else if (contents['Meter-series']) {
      meters = METER_SERIES.map((item, index) => (
        <Box key={index} direction={vertical ? 'row' : 'column'} align='center'
          pad={{ horizontal: 'small', between: 'small' }}>
          <Meter id={0 === index ? `meter-1-id` : undefined}
            label={false} max={100} min={0} series={item.series}
            {...noUndefined({ vertical: notVertical, stacked })}
            active={index === seriesIndex}
            activeIndex={
              undefined !== valueIndex ? valueIndex :
              (slice && slice.index === index ? slice.valueIndex : undefined)
            }
            onActive={(valueIndex) => {
              if (undefined !== valueIndex) {
                this.setState({
                  slice: { index: index, valueIndex: valueIndex } });
              } else {
                this.setState({ slice: undefined });
              }
            }} />
          <Label margin='small'
            onMouseOver={() => this.setState({ seriesIndex: index })}
            onMouseOut={() => this.setState({ seriesIndex: undefined })}>
            {item.label}
          </Label>
        </Box>
      ));
    } else {
      delete propsSchema.stacked;
    }

    if (haveMeters) {
      horizontalAlignWith = vertical ? 'meter-1-id' : undefined;
      verticalAlignWith = vertical ? undefined : 'meter-1-id';
      delete propsSchema.height;
      delete propsSchema.width;
      if (! contents['Axis-time']) {
        delete contentsSchema['Axis-time'];
      }
      if (! contents.Marker) {
        delete contentsSchema.Marker;
      }
      if (! contents.Range) {
        delete contentsSchema.Range;
      }
      if (! contents.HotSpots) {
        delete contentsSchema.HotSpots;
      }
    }

    let marker, markerLabel;
    if (contents.Marker) {
      marker = (
        <Marker colorIndex='graph-2' count={COUNT}
          {...noUndefined({ vertical: notVertical, reverse })}
          index={activeIndex} />
      );
      markerLabel = (
        <MarkerLabel count={COUNT}
          {...noUndefined({ vertical, reverse })}
          index={activeIndex}
          label={<Value value={LINE_VALUES[activeIndex]} />} />
      );
      subComponents.push('Marker');
      subComponents.push('MarkerLabel');
    }

    let hotSpots;
    if (contents.HotSpots) {
      hotSpots = (
        <HotSpots count={COUNT} max={100}
          {...noUndefined({ vertical })}
          activeIndex={activeIndex} onActive={this._onActive} />
      );
      if (! contents.Range) {
        delete contentsSchema.Range;
      }
      subComponents.push('HotSpots');
    }

    let range;
    if (contents.Range) {
      range = (
        <Range count={COUNT} active={activeRange}
          {...noUndefined({ vertical })}
          onActive={activeRange => this.setState({ activeRange })} />
      );
      if (! contents.HotSpots) {
        delete contentsSchema.HotSpots;
      }
      subComponents.push('Range');
    }

    let thresholdMarker, thresholdLabel;
    if (contents['Marker-threshold']) {
      thresholdMarker = (
        <Marker colorIndex='critical' value={90}
          {...noUndefined({ vertical })} />
      );
      thresholdLabel = (
        <MarkerLabel colorIndex='critical' value={90} label='90%'
          {...noUndefined({ vertical: notVertical })} />
      );
      if (! contents.Marker) {
        subComponents.push('Marker');
        subComponents.push('MarkerLabel');
      }
    }

    let legend;
    if (contents.Legend) {
      let legendSeries = LEGEND_SERIES;
      if (seriesIndex || 0 === seriesIndex) {
        legendSeries = LEGEND_SERIES.map((item, index) => (
          { ...item, value: METER_SERIES[seriesIndex].series[index].value }
        ));
      } else if (slice) {
        legendSeries = LEGEND_SERIES.map((item, index) => {
          if (index === slice.valueIndex) {
            return { ...item,
              value: METER_SERIES[slice.index].series[slice.valueIndex].value
            };
          } else {
            return item;
          }
        });
      }
      legend = (
        <Legend series={legendSeries}
          onActive={(index) => this.setState({ valueIndex: index })} />
      );
    }

    let element = (
      <Chart {...noUndefined({
        full, loading, vertical: notVertical,
        horizontalAlignWith, verticalAlignWith })}>
        {vertical ? timeAxis : markerLabel}
        <Base {...noUndefined({ vertical, height, width })}>
          {meters}
        </Base>
        <Layers>
          {contents.Grid}
          {thresholdMarker}
          {area}
          {bar}
          {line}
          {marker}
          {hotSpots}
          {range}
        </Layers>
        {vertical ? markerLabel : timeAxis}
        {legend}
      </Chart>
    );

    if (valueAxis || markerLabel) {
      element = (
        <Chart {...noUndefined({
          full, vertical, loading, horizontalAlignWith, verticalAlignWith })}>
          {valueAxis}
          {element}
          {thresholdLabel}
        </Chart>
      );
    }

    let subs = '';
    if (subComponents.length > 0) {
      subs = `, {${subComponents.join(', ')}}`;
    }

    return (
      <InteractiveExample contextLabel='Chart' contextPath='/docs/chart'
        preamble={`import Chart${subs} from 'grommet/components/chart/Chart';`}
        propsSchema={propsSchema}
        contentsSchema={contentsSchema}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
