// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  strong: { value: true },
  size: { options: ['small', 'medium', 'large', 'xlarge'] }
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Headline {...elementProps}>Sample Headline</Headline>;
    return (
      <InteractiveExample contextLabel='Headline' contextPath='/docs/headline'
        preamble={`import Headline from 'grommet/components/Headline';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
