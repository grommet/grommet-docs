// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';

import Select0 from './Select0';
import Select1 from './Select1';
import Select2 from './Select2';
import Select3 from './Select3';
import Select4 from './Select4';
import Select5 from './Select5';

export default class SelectExamplesDoc extends ExamplesDoc {};

SelectExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/select">Select</Anchor>,
  examples: [
    { label: 'Default', component: Select0 },
    { label: 'Search', component: Select1 },
    { label: 'Rich Suggestions', component: Select2 },
    { label: 'Inline', component: Select3 },
    { label: 'Multiple', component: Select4 },
    { label: 'Inline + Search', component: Select5 }
  ],
  title: 'Examples'
};
