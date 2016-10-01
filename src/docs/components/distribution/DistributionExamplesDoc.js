// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Distribution from 'grommet/components/Distribution';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const DistributionExample = (props) => (
  <Example code={
    <Distribution {...props} />
  } />
);

const SERIES = [
  {label: 'First', value: 40, colorIndex: 'graph-1'},
  {label: 'Second', value: 30, colorIndex: 'accent-2'},
  {label: 'Third', value: 20, colorIndex: 'unset'},
  {label: 'Fourth', value: 10, colorIndex: 'graph-1'}
];

const CLICKABLE_SERIES = [
  {label: 'First', value: 40, onClick: function () {
    alert('You\'ve clicked on 40');
  }},
  {label: 'Second', value: 30, onClick: function () {
    alert('You\'ve clicked on 30');
  }},
  {label: 'Third', value: 20, onClick: function () {
    alert('You\'ve clicked on 20');
  }},
  {label: 'Fourth', value: 10, onClick: function () {
    alert('You\'ve clicked on 10');
  }}
];

const ICON_SERIES = [
  {label: 'Female', value: 60, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <path d="M20,36 L20,32"></path>
        <path d={"M24,13 C21.2,13 19,15.2 19,18 C19,22 15.9,23.9 15.9,23.9 " +
          "C15.9,23.9 16.6,26 20,26 L21,26 C18.2,26 16,28.2 16,31 " +
          "L16,36"}></path>
        <path d="M28,32 L28,36"></path>
        <path d={"M32,36 L32,31 C32,28.2 29.9,26 27.1,26 L27,26 " +
          "C30.4,26 32.1,23.9 32.1,23.9 C32.1,23.9 29,22 29,18 " +
          "C29,15.2 26.7,13 24,13"}></path>
      </g>
    )}
  },
  {label: 'Male', value: 40, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <circle cx="24" cy="18" r="5"></circle>
        <path d={"M33,36 L33,31 C33,26.6 29.4,23 25,23 L23,23 " +
          "C18.6,23 15,26.6 15,31 L15,36"}></path>
        <path d="M20,36 L20,31"></path>
        <path d="M28,36 L28,31"></path>
      </g>
    )}
  }
];

export default class DistributionExamplesDoc extends ExamplesDoc {};

DistributionExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/distribution">Distribution</NavAnchor>,
  examples: [
    { label: 'Default', component: DistributionExample,
      props: { series: SERIES } },
    { label: 'Small', component: DistributionExample,
      props: { series: SERIES, size: 'small' } },
    { label: 'Large', component: DistributionExample,
      props: { series: SERIES, size: 'large' } },
    { label: 'Clickable', component: DistributionExample,
      props: { series: CLICKABLE_SERIES } },
    { label: 'Icon', component: DistributionExample,
      props: { series: ICON_SERIES } },
    { label: 'Loading', component: DistributionExample }
  ],
  title: 'Examples'
};
