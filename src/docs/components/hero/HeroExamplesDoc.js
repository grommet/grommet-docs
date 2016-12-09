// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
// import HeroCardVideoLayer from './examples/HeroCardVideoLayer';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {

  backgroundImage: { value: true, initial: true },
  backgroundVideo: { value: true },
  backgroundAlign: { options: ['center', 'top', 'bottom', 'left', 'right'] },
  size: { options: ['small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  card: { value: (
    <Box colorIndex="grey-2-a">
      <Card heading="Heading" description="Hero description text."
      label="label"
      link={<Anchor href="#" primary={true} label="Link" />} />
    </Box>
  ) },
  heading: { value: <Heading tag='h1' margin='none'>Sample Heading</Heading>,
    initial: true },
  image: { value: <Image src='/img/carousel-2.png' /> }
};

export default class HeroExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { contents: {}, elementProps: {} };
  }

  _onChange (nextElementProps, contents) {
    const elementProps = {};
    const backgroundProps = {};
    if (nextElementProps.backgroundAlign &&
      nextElementProps.backgroundAlign !== 'center') {
      backgroundProps.align = {};
      switch (nextElementProps.backgroundAlign) {
        case 'top':
          backgroundProps.align.top = true;
          break;
        case 'bottom':
          backgroundProps.align.bottom = true;
          break;
        case 'left':
          backgroundProps.align.left = true;
          break;
        case 'right':
          backgroundProps.align.right = true;
          break;
      }
    }
    if (nextElementProps.backgroundImage) {
      elementProps.background = (
        <Image src='/img/carousel-1.png' fit='cover' {...backgroundProps} />
      );
    } else if (nextElementProps.backgroundVideo) {
      elementProps.background = (
        <Video autoPlay={true} showControls={false} loop={true} muted={true}
          fit='cover' {...backgroundProps}>
          <source src="/video/test.mp4" type="video/mp4"/>
        </Video>
      );
    }
    if (elementProps.background) {
      elementProps.backgroundColorIndex = 'dark';
    }
    if (nextElementProps.size) {
      elementProps.size = nextElementProps.size;
    }
    this.setState({ elementProps, contents });
  }

  render () {
    let { contents, elementProps } = this.state;

    let content;
    if (contents.heading || contents.image || contents.card) {
      content = (
        <Box direction='row' justify='center' align='center'>
          <Box basis='1/2' align='end' pad='medium'>
            {contents.image}
          </Box>
          <Box basis='1/2' align='start' pad='medium'>
            {contents.heading || contents.card}
          </Box>
        </Box>
      );
    }

    const element = (
      <Hero {...elementProps}>
        {content}
      </Hero>
    );

    return (
      <InteractiveExample contextLabel='Hero' contextPath='/docs/hero'
        align='stretch'
        preamble={`import Header from 'grommet/components/Hero';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element} onChange={this._onChange} />
    );
  }
};
