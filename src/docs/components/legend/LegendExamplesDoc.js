// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Legend from 'grommet/components/Legend';
import InteractiveExample from '../../../components/InteractiveExample';

Legend.displayName = 'Legend';

const PROPS_SCHEMA = {
  total: { value: true },
  units: { value: 'B' }
};

const SERIES = [
  {label: 'Americas', value: 40,
    colorIndex: 'graph-1', onClick: () => alert('Americas') },
  {label: 'Europe', value: 20,
    colorIndex: 'unset', onClick: () => alert('Europe') },
  {label: 'Asia', value: 15,
    colorIndex: 'graph-3', onClick: () => alert('Asia') }
];

export default class LegendExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Legend series={SERIES} {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Legend' contextPath='/docs/legend'
        preamble={`import Legend from 'grommet/components/Legend';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
