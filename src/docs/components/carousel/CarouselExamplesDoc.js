// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

Carousel.displayName = 'Carousel';
Box.displayName = 'Box';

const PROPS_SCHEMA = {
  autoplay: { value: true, initial: true },
  autoplaySpeed: { options: [5000, 100000] },
  infinite: { value: true, initial: true },
  persistentNav: { value: true, initial: true }
};

export default class CarouselExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = (
      <Carousel {...elementProps}>
        <Image src='/img/carousel-1.png' />
        <Image src='/img/carousel-2.png' />
        <Box pad='large' colorIndex='neutral-3'>
          <Box pad='medium' colorIndex='neutral-2'>
            Content inside of a Box element.
          </Box>
        </Box>
      </Carousel>
    );
    return (
      <InteractiveExample contextLabel='Carousel' contextPath='/docs/carousel'
        preamble={`import Carousel from 'grommet/components/Carousel';`}
        align='stretch'
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
