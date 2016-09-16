// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import AnimateFadeExample from './AnimateFadeExample';
import AnimateSlideExample from './AnimateSlideExample';
import AnimateBoxesExample from './AnimateBoxesExample';
import AnimateScrollExample from './AnimateScrollExample';

export default class AnimateExamplesDoc extends ExamplesDoc {};

AnimateExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/animate">Animate</NavAnchor>,
  examples: [
    { label: 'Fade', component: AnimateFadeExample },
    { label: 'Slide', component: AnimateSlideExample },
    { label: 'Boxes', component: AnimateBoxesExample },
    { label: 'Scroll', component: AnimateScrollExample }
  ],
  title: 'Examples'
};
