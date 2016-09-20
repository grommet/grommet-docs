// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Video from 'grommet/components/Video';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const VideoExample = (props) => (
  <Example code={
    <Video {...props}>
      <source src="/video/test.mp4" type='video/mp4'/>
    </Video>
  } />
);

export default class VideoExamplesDoc extends ExamplesDoc {};

VideoExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/video">Video</NavAnchor>,
  examples: [
    { label: 'Default', component: VideoExample },
    { label: 'Small', component: VideoExample, props: { size: 'small' } },
    { label: 'Medium', component: VideoExample, props: { size: 'medium' } },
    { label: 'Large', component: VideoExample, props: { size: 'large' } },
    { label: 'Replay with Share Menu', component: VideoExample,
      props: { title: 'Title', shareLink: 'http://grommet.io',
        shareText: 'Website for Grommet UX Framework'
      }
    },
    { label: 'Title, Duration, Timeline, Poster, Full', component: VideoExample,
      props: { title: 'Title', poster: '/img/mobile_first.jpg', full: true,
        duration: 35, timeline: [
          {label: 'Chapter 1', time: 0},
          {label: 'Chapter 2', time: 10},
          {label: 'Chapter 3', time: 20}
        ]
      }
    }
  ],
  title: 'Examples'
};
