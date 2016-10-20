// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';

import Select0 from './Select0';
import Select1 from './Select1';
import Select2 from './Select2';

export default class SelectExamplesDoc extends ExamplesDoc {};

SelectExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/select">Select</Anchor>,
  examples: [
    { label: 'No Search', component: Select0 },
    { label: 'Search', component: Select1 },
    { label: 'Rich Suggestions', component: Select2 }
  ],
  title: 'Examples'
};
