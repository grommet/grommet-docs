// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import CheckBox from 'grommet/components/CheckBox';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  label: { value: 'Sample label', initial: true },
  toggle: { value: true },
  disabled: { value: true },
  reverse: { value: true }
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <CheckBox {...elementProps} />;
    return (
      <InteractiveExample contextLabel='CheckBox' contextPath='/docs/check-box'
        preamble={`import CheckBox from 'grommet/components/CheckBox';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
