// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ExamplesDoc from '../../../../components/ExamplesDoc';
import NavAnchor from '../../../../components/NavAnchor';

import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Chart5 from './Chart5';
import Chart6 from './Chart6';
import Chart6s from './Chart6s';
import Chart7 from './Chart7';
import Chart8 from './Chart8';
import Chart9 from './Chart9';
import Chart10 from './Chart10';
import Chart11 from './Chart11';
// import Chart12 from './Chart12';
import Chart13 from './Chart13';
import Chart14 from './Chart14';
import Chart15 from './Chart15';
import Chart16 from './Chart16';

export default class ChartExamplesDoc extends ExamplesDoc {};

ChartExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/chart">Chart</NavAnchor>,
  examples: [
    { label: 'Area with Value', component: Chart9 },
    { label: 'Line with Value', component: Chart10 },
    { label: 'Bar with Value', component: Chart11 },
    { label: 'Area and Line with Value', component: Chart6 },
    { label: 'Smooth Area and Line with Value', component: Chart6s },
    { label: 'Vertical Area and Line with Value and updating',
      component: Chart7 },
    { label: 'Area and Line scaled to width and Legend', component: Chart8 },
    { label: 'Range selector', component: Chart13 },
    { label: 'Vertical Range selector', component: Chart14 },
    { label: 'Vertical Meters with Values, Axis, and Threshold',
      component: Chart1 },
    { label: 'Horizontal Meters with Values, Axis, and Threshold',
      component: Chart2 },
    { label: 'Horizontal Meters with inline labels and Values',
      component: Chart3 },
    { label: 'Vertical Meters with multiple segments and Legend',
      component: Chart4 },
    { label: 'Vertical Meters with stacked segments and Legend',
      component: Chart5 },
    { label: 'Sparkline', component: Chart15 },
    { label: 'Range selector controlling another Chart', component: Chart16 }
    // { label: 'Stacked Meters scaled to width', component: Chart12 }
  ],
  title: 'Examples'
};
