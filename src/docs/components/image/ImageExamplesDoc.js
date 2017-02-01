// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Image from 'grommet/components/Image';
import InteractiveExample from '../../../components/InteractiveExample';

Image.displayName = 'Image';

const PROPS_SCHEMA = {
  alt: { value: 'Sample alt' },
  caption: { value: 'Sample caption' },
  full: { options: [undefined, 'true', 'horizontal', 'vertical', 'false'] },
  fit: { options: [undefined, 'cover', 'contain'] },
  size: { options: [undefined, 'thumb', 'small', 'medium', 'large'] }
};

export default class ImageExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    if ('true' === elementProps.full) {
      elementProps.full = true;
    } else if ('false' === elementProps.full) {
      elementProps.full = false;
    }
    const element = <Image src='/img/carousel-1.png' {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Image' contextPath='/docs/image'
        preamble={`import Image from 'grommet/components/Image';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
