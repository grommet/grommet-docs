// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Heading from 'grommet/components/Heading';
import InteractiveExample from '../../../components/InteractiveExample';

Heading.displayName = 'Heading';

const PROPS_SCHEMA = {
  tag: { options: ['h1', 'h2', 'h3', 'h4', 'h5'] },
  strong: { value: true },
  uppercase: { value: true },
  truncate: { value: true },
  align: { options: ['start', 'center', 'end'] },
  margin: { options: ['none', 'small', 'medium', 'large'] }
};

export default class HeadingExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Heading {...elementProps}>Sample Heading</Heading>;
    return (
      <InteractiveExample contextLabel='Heading' contextPath='/docs/heading'
        preamble={`import Heading from 'grommet/components/Heading';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
