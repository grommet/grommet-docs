// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';
import HeroCardVideoLayer from './examples/HeroCardVideoLayer';

const HeroExample = (props) => (
  <Example code={
    <Hero {...props} />
  } />
);

export default class HeroExamplesDoc extends ExamplesDoc {};

HeroExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/hero">Hero</Anchor>,
  examples: [
    { label: 'Default', component: HeroExample, props: {
      backgroundImage: '/img/carousel-1.png',
      children: <h1>You are my Hero</h1>
    } },
    { label: 'Card', component: HeroExample, props: {
      size: 'small', backgroundImage: '/img/carousel-1.png',
      children: 
        <Box colorIndex="grey-1-a">
          <Card heading="Heading" description="Hero description text." 
          label="label" 
          link={<Anchor href="#" primary={true} label="Link" />} />
        </Box>
    } },
    { label: 'Video', component: HeroExample, props: {
      size: 'small', backgroundVideo: (
        <Video autoPlay={true} showControls={false} loop={true} muted={true}>
          <source src="/video/test.mp4" type="video/mp4"/>
        </Video>
      ),
      children: <h1>A Hero with video</h1>
    } },
    { label: 'Card with Video Layer', component: HeroCardVideoLayer }
  ],
  title: 'Examples'
};
