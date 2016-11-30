// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  thumbnail: { value: '/img/carousel-1.png', initial: true },
  video: { value: { source: '/video/test.mp4', type: 'mp4' } },
  label: { value: 'Sample Label', initial: true },
  heading: { value: 'Sample Heading', initial: true },
  description: { value: `Sample description providing more details.`,
    initial: true },
  link: { value: <Anchor href='' label='Sample anchor' /> },
  headingStrong: { value: true, initial: true },
  contentPad: { options: ['none', 'small', 'medium', 'large'] },
  textSize: { options: ['small', 'medium', 'large', 'xlarge'] }
};

export default class CardExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Card {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Card' contextPath='/docs/card'
        preamble={`import Card from 'grommet/components/Card';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
