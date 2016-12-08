// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Video from 'grommet/components/Video';
import InteractiveExample from '../../../components/InteractiveExample';

Video.displayName = 'Video';

const PROPS_SCHEMA = {
  allowFullScreen: { value: true },
  autoPlay: { value: true },
  full: { value: true },
  fit: { options: ['cover', 'contain'] },
  loop: { value: true },
  muted: { value: true },
  showControls: { value: true, initial: true },
  poster: { value: '/img/mobile_first.jpg' },
  shareLink: { value: 'http://grommet.io' },
  shareText: { value: 'Sample share text' },
  size: { options: ['small', 'medium', 'large'] },
  timeline: { value: [
    {label: 'Chapter 1', time: 0},
    {label: 'Chapter 2', time: 10},
    {label: 'Chapter 3', time: 20}
  ] },
  title: { value: 'Sample Title' }
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
    const element = (
      <Video {...elementProps}>
        <source src="/video/test.mp4" type='video/mp4'/>
      </Video>
    );
    return (
      <InteractiveExample contextLabel='Video' contextPath='/docs/video'
        preamble={`import Video from 'grommet/components/Video';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
