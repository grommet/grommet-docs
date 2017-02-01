// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  type: { options: ['bar', 'arc', 'circle', 'spiral'] },
  vertical: { value: true },
  series: { value: [
    {label: 'Gen 7', value: 50, onClick: () => alert('50')},
    {label: 'Gen 8', value: 1, onClick: () => alert('1')},
    {label: 'Gen 9', value: 19, onClick: () => alert('10')},
    {label: 'Gen 10', value: 30, onClick: () => alert('30')}
  ] },
  stacked: { value: true },
  threshold: { value: 90 },
  label: { value: true },
  size: { options: ['xsmall', 'small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  value: { value: true, initial: true },
  limits: { value: true }
};

export default class MeterExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { activeIndex, contents, elementProps } = this.state;
    const { vertical } = elementProps;
    let propsSchema = { ...PROPS_SCHEMA };
    let contentsSchema = { ...CONTENTS_SCHEMA };
    let props = { ...elementProps };

    if (! props.type) {
      props.type = 'bar';
    }
    if (props.threshold) {
      props.max = 100;
    }

    if (props.series) {
      // delete props.threshold;
      // delete propsSchema.threshold;
    } else {
      props.value = 40;
      delete props.stacked;
      delete propsSchema.stacked;
    }

    if ('circle' !== props.type) {
      delete props.label;
      delete propsSchema.label;
    }

    if ('circle' === props.type) {
      delete props.vertical;
      delete propsSchema.vertical;
      delete contentsSchema.value;
      if (props.series && ! props.stacked) {
        delete props.label;
        delete propsSchema.label;
      }
    }

    if ('spiral' === props.type) {
      delete propsSchema.value;
      delete propsSchema.stacked;
      delete propsSchema.vertical;
      delete propsSchema.series;
      delete propsSchema.threshold;
      delete contentsSchema.value;
      props.series = PROPS_SCHEMA.series.value;
    }

    if (props.label) {
      props.label = <Value value={40} units='GB' size={props.size} />;
    }

    let element = (
      <Meter {...props} activeIndex={activeIndex}
        onActive={activeIndex => this.setState({ activeIndex })} />
    );

    let limits;
    if (contents.limits) {
      limits = (
        <Box direction={vertical ? 'column' : 'row'}
          justify='between' pad={{'between': 'small'}} responsive={false}>
          <Label size='small'>0 GB</Label>
          <Label size='small'>100 GB</Label>
        </Box>
      );
    }

    let value, valueValue, valueLabel;
    if (contents.value) {
      if (props.series) {
        if (activeIndex >= 0) {
          valueValue = props.series[activeIndex].value;
          valueLabel = props.series[activeIndex].label;
        } else {
          valueValue = 0;
          props.series.forEach(serie => valueValue += serie.value);
          valueLabel = 'Total';
        }
      } else {
        valueValue = props.value;
      }
      value = (
        <Value value={valueValue} label={valueLabel} units='GB'
          size={props.size}
          align={(vertical || 'bar' === props.type) ? 'start' : 'center'} />
      );
    }

    if ('bar' === props.type && (value || limits)) {
      if (vertical) {
        let second = value || limits;
        if (value && limits) {
          second = (
            <Box justify='between'>
              <Label size='small'>0 GB</Label>
              {value}
              <Label size='small'>100 GB</Label>
            </Box>
          );
        }
        element = (
          <Box direction='row' pad={{ between: 'small' }}>
            {element}
            {second}
          </Box>
        );
      } else {
        let first;
        if (value) {
          first = value;
          if (props.series) {
            first = (
              <Box direction='row' justify='between' align='center'
                pad={{'between': 'small'}} announce={true} responsive={false}>
                <Value value={valueValue} units='GB' align='start' />
                <span>{valueLabel}</span>
              </Box>
            );
          }
        }
        element = (
          <Box>
            {first}
            {element}
            {limits}
          </Box>
        );
      }
    } else if ('arc' === props.type && (value || limits)) {
      let second = value || limits;
      if (value && limits) {
        second = (
          <Box direction={vertical ? 'column' : 'row'}
            justify='between' align={vertical ? 'start' : 'center'}
            pad={{ between: 'small' }} responsive={false}>
            <Label size='small'>0 GB</Label>
            {value}
            <Label size='small'>100 GB</Label>
          </Box>
        );
      }
      element = (
        <Box direction={vertical ? 'row' : 'column'} responsive={false}
          align={(vertical && limits) ? 'stretch' : 'center'}
          pad={vertical ? {'between': 'small'} : undefined}>
          {element}
          {second}
        </Box>
      );
    } else if ('circle' === props.type && (value || limits)) {
      let second = value || limits;
      if (value && limits) {
        second = (
          <Box direction='row' justify='between' align='center'
            pad={{ between: 'small' }} responsive={false}>
            <Label size='small'>0 GB</Label>
            {value}
            <Label size='small'>100 GB</Label>
          </Box>
        );
      }
      element = (
        <Box align='center'>
          {element}
          {second}
        </Box>
      );
    }

    return (
      <InteractiveExample contextLabel='Meter' contextPath='/docs/meter'
        preamble={`import Meter from 'grommet/components/Meter';`}
        propsSchema={propsSchema}
        contentsSchema={contentsSchema}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
