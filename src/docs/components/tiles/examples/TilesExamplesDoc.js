// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import ExamplesDoc from '../../../../components/ExamplesDoc';

import Tiles1 from './Tiles1';
import Tiles2 from './Tiles2';
import Tiles3 from './Tiles3';
import Tiles4 from './Tiles4';
import Tiles5 from './Tiles5';
import Tiles6 from './Tiles6';
import Tiles7 from './Tiles7';
import Tiles8 from './Tiles8';

export default class TilesExamplesDoc extends ExamplesDoc {};

TilesExamplesDoc.defaultProps = {
  examples: [
    { label: 'Simple', component: Tiles1 },
    { label: 'Not flush, Centered', component: Tiles2 },
    { label: 'Fill, Not flush', component: Tiles3 },
    { label: 'Fill, Flush', component: Tiles4 },
    { label: 'Row', component: Tiles5 },
    { label: 'Single Select', component: Tiles6 },
    { label: 'Multiple Select', component: Tiles7 },
    { label: 'Masonry, 4 Columns', component: Tiles8 }
  ],
  title: 'Tiles Examples'
};
