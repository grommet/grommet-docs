// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Timestamp from 'grommet/components/Timestamp';
import InteractiveExample from '../../../components/InteractiveExample';

Timestamp.displayName = 'Timestamp';

const PROPS_SCHEMA = {
  fields: { options: ['date', 'time', 'year', 'month',
    'day', 'hour', 'minute', 'second'] }
};

export default class TimestampExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = (
      <Timestamp {...elementProps} value={(new Date()).toISOString()} />
    );
    return (
      <InteractiveExample contextLabel='Timestamp' contextPath='/docs/timestamp'
        preamble={`import Timestamp from 'grommet/components/Timestamp';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
