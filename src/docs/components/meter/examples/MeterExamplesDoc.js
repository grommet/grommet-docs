// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import ExamplesDoc from '../../../../components/ExamplesDoc';

import Meter1 from './Meter1';
import Meter2 from './Meter2';
import Meter3 from './Meter3';
import Meter4 from './Meter4';
import Meter5 from './Meter5';
import Meter6a from './Meter6a';
import Meter7a from './Meter7a';
import Meter8a from './Meter8a';
import Meter9a from './Meter9a';
import Meter10a from './Meter10a';
import Meter11a from './Meter11a';
import Meter11LabelsA from './Meter11LabelsA';
import Meter12a from './Meter12a';
import Meter13a from './Meter13a';
import Meter14a from './Meter14a';
import Meter15a from './Meter15a';
import Meter16a from './Meter16a';
import Meter17 from './Meter17';
import Meter18 from './Meter18';
import Meter19 from './Meter19';
import Meter20 from './Meter20';
import Meter21 from './Meter21';

export default class MeterExamplesDoc extends ExamplesDoc {};

MeterExamplesDoc.defaultProps = {
  examples: [
    { label: 'Horizontal Bar', component: Meter1 },
    { label: 'Vertical Bar', component: Meter2 },
    { label: 'Circle', component: Meter3 },
    { label: 'Horizontal Arc', component: Meter4 },
    { label: 'Vertical Arc', component: Meter5 },
    { label: 'Annotated Horizontal Bar', component: Meter6a },
    { label: 'Annotated Vertical Bar', component: Meter7a },
    { label: 'Annotated Circle', component: Meter8a },
    { label: 'Annotated Horizontal Arc', component: Meter9a },
    { label: 'Annotated Vertical Arc', component: Meter10a },
    { label: 'Annotated Horizontal Bar Series', component: Meter11a },
    { label: 'Annotated Horizontal Bar Series Inline Labels',
      component: Meter11LabelsA },
    { label: 'Annotated Vertical Bar Series', component: Meter12a },
    { label: 'Annotated Circle Series', component: Meter13a },
    { label: 'Annotated Horizontal Arc Series', component: Meter14a },
    { label: 'Annotated Vertical Arc Series', component: Meter15a },
    { label: 'Spiral Series', component: Meter16a },
    { label: 'Annotated Horizontal Bar Series Stacked', component: Meter17 },
    { label: 'Annotated Vertical Bar Series Stacked', component: Meter18 },
    { label: 'Annotated Circle Series Stacked', component: Meter19 },
    { label: 'Annotated Horizontal Arc Series Stacked', component: Meter20 },
    { label: 'Annotated Vertical Arc Series Stacked', component: Meter21 }
  ],
  property: {
    name: 'size',
    values: ['xsmall', 'small', 'medium', 'large', 'xlarge']
  },
  title: 'Meter Examples'
};
