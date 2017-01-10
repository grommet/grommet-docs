// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  legend: { value: true, initial: true },
  size: { options: ['small', 'medium', 'large'] },
  type: { options: ['bar', 'circle'] },
  units: { options: ['TB'] }
};

export default class AnnotatedMeterExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    if (! elementProps.type) {
      elementProps.type = 'bar';
    }
    const element = (
      <AnnotatedMeter {...elementProps} series={[
        { label: 'First', value: 20 },
        { label: 'Second', value: 50 }
      ]} />
    );
    return (
      <InteractiveExample contextLabel='AnnotatedMeter'
        contextPath='/docs/annotated-meter'
        preamble={
          `import AnnotatedMeter from` +
          ` 'grommet-addons/components/AnnotatedMeter';`
        }
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
