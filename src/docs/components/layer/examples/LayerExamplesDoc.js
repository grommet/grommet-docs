// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../../components/ExamplesDoc';
import NavAnchor from '../../../../components/NavAnchor';

import Layer1 from './Layer1';
import Layer2 from './Layer2';
import Layer3 from './Layer3';
import Layer4 from './Layer4';

export default class LayerExamplesDoc extends ExamplesDoc {};

LayerExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/layer">Layer</NavAnchor>,
  examples: [
    { label: 'Simple', component: Layer1 },
    { label: 'Edit', component: Layer2 },
    { label: 'Confirmation', component: Layer3 },
    { label: 'Article', component: Layer4 }
  ],
  title: 'Examples'
};
