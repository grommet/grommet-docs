// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';

import SearchInput1 from './SearchInput1';
import SearchInput2 from './SearchInput2';

export default class SearchInputExamplesDoc extends ExamplesDoc {};

SearchInputExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/search-input">SearchInput</NavAnchor>,
  examples: [
    { label: 'Simple', component: SearchInput1 },
    { label: 'Rich Suggestions', component: SearchInput2 }
  ],
  title: 'Examples'
};
