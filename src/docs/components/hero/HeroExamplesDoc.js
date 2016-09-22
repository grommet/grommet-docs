// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const HeroExample = (props) => (
  <Example code={
    <Hero {...props} />
  } />
);

export default class HeroExamplesDoc extends ExamplesDoc {};

HeroExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/hero">Hero</NavAnchor>,
  examples: [
    { label: 'Default', component: HeroExample, props: {
      backgroundType: 'image', backgroundImage: 'img/carousel-1.png',
      children: <h1>You are my Hero</h1>
    } },
    { label: 'Video', component: HeroExample, props: {
      size: 'small', backgroundVideo: (
        <Video autoPlay={true} showControls={false} loop={true} muted={true}>
          <source src="video/test.mp4" type="video/mp4"/>
        </Video>
      ),
      children: <h1>A Hero with video</h1>
    } }
  ],
  title: 'Examples'
};
