// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Distribution from 'grommet/components/Distribution';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  full: { value: true },
  size: { options: ['small', 'medium', 'large', 'full'] },
  units: { value: '%' }
};

const CONTENTS_SCHEMA = {
  clickable: { value: true },
  icons: { value: true }
};

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
        <path d="M20,36 L20,32" />
        <path d={"M24,13 C21.2,13 19,15.2 19,18 C19,22 15.9,23.9 15.9,23.9 " +
          "C15.9,23.9 16.6,26 20,26 L21,26 C18.2,26 16,28.2 16,31 " +
          "L16,36"} />
        <path d="M28,32 L28,36" />
        <path d={"M32,36 L32,31 C32,28.2 29.9,26 27.1,26 L27,26 " +
          "C30.4,26 32.1,23.9 32.1,23.9 C32.1,23.9 29,22 29,18 " +
          "C29,15.2 26.7,13 24,13"} />
      </g>
    )}
  },
  {label: 'Male', value: 40, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <circle cx="24" cy="18" r="5" />
        <path d={"M33,36 L33,31 C33,26.6 29.4,23 25,23 L23,23 " +
          "C18.6,23 15,26.6 15,31 L15,36"} />
        <path d="M20,36 L20,31" />
        <path d="M28,36 L28,31" />
      </g>
    )}
  }
];

export default class DistributionExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    let series;
    if (contents.icons) {
      series = ICON_SERIES;
    } else if (contents.clickable) {
      series = CLICKABLE_SERIES;
    } else {
      series = SERIES;
    }
    const element = <Distribution series={series} {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Distribution'
        contextPath='/docs/distribution'
        align='stretch'
        preamble={`import Distribution from 'grommet/components/Distribution';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
