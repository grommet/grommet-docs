// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
// import HeroCardVideoLayer from './examples/HeroCardVideoLayer';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  backgroundImage: { value: '/img/carousel-1.png', initial: true },
  backgroundVideo: { value: (
    <Video autoPlay={true} showControls={false} loop={true} muted={true}>
      <source src="/video/test.mp4" type="video/mp4"/>
    </Video>
  )},
  image: { value: '/img/carousel-1.png' },
  flush: { value: true },
  justify: { options: ['start', 'center', 'end'] },
  responsiveBackgroundPosition: { options: ['left', 'center', 'right'] },
  separator: { value: true },
  size: { options: ['small', 'large'] }
};

const CONTENTS_SCHEMA = {
  card: { value: (
    <Box colorIndex="grey-2-a">
      <Card heading="Heading" description="Hero description text."
      label="label"
      link={<Anchor href="#" primary={true} label="Link" />} />
    </Box>
  ) },
  heading: { value: <Heading tag='h1'>Sample Heading</Heading>, initial: true }
};

export default class HeroExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Hero {...elementProps}>
        {contents.heading}
        {contents.card}
      </Hero>
    );

    return (
      <InteractiveExample contextLabel='Hero' contextPath='/docs/hero'
        align='stretch'
        preamble={`import Header from 'grommet/components/Hero';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
