// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import AnimateFadeExample from './AnimateFadeExample';
import AnimateSlideExample from './AnimateSlideExample';
import AnimateBoxesExample from './AnimateBoxesExample';
import AnimateScrollExample from './AnimateScrollExample';

export default class AnimateExamplesDoc extends ExamplesDoc {};

AnimateExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/animate">Animate</Anchor>,
  examples: [
    { label: 'Fade', component: AnimateFadeExample },
    { label: 'Slide', component: AnimateSlideExample },
    { label: 'Boxes', component: AnimateBoxesExample },
    { label: 'Scroll', component: AnimateScrollExample }
  ],
  title: 'Examples'
};
