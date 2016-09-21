// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../../components/ExamplesDoc';
import NavAnchor from '../../../../components/NavAnchor';

import Tiles1 from './Tiles1';
import Tiles2 from './Tiles2';
import Tiles3 from './Tiles3';
import Tiles4 from './Tiles4';
import Tiles5 from './Tiles5';
import Tiles6 from './Tiles6';
import Tiles7 from './Tiles7';

export default class TilesExamplesDoc extends ExamplesDoc {};

TilesExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/tiles">Tiles</NavAnchor>,
  examples: [
    { label: 'Simple', component: Tiles1 },
    { label: 'Not flush, Centered', component: Tiles2 },
    { label: 'Fill, Not flush', component: Tiles3 },
    { label: 'Fill, Flush', component: Tiles4 },
    { label: 'Row', component: Tiles5 },
    { label: 'Single Select', component: Tiles6 },
    { label: 'Multiple Select', component: Tiles7 }
  ],
  title: 'Examples'
};
