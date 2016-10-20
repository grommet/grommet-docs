// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const ImageExample = (props) => (
  <Example code={
    <Image src="/img/carousel-1.png" {...props} />
  } />
);

export default class ImageExamplesDoc extends ExamplesDoc {};

ImageExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/image">Image</Anchor>,
  examples: [
    { label: 'Default', component: ImageExample },
    { label: 'Thumb', component: ImageExample, props: { size: 'thumb' } },
    { label: 'Small', component: ImageExample, props: { size: 'small' } },
    { label: 'Medium', component: ImageExample, props: { size: 'medium' } },
    { label: 'Large', component: ImageExample, props: { size: 'large' } },
    { label: 'Full', component: ImageExample, props: { full: 'horizontal' } },
    { label: 'Fit',
      component: ImageExample,
      props: {
        fit: 'contain',
        size: 'thumb'
      }
    },
    { label: 'Caption', component: ImageExample,
      props: { caption: 'Image caption' } }
  ],
  title: 'Examples'
};
