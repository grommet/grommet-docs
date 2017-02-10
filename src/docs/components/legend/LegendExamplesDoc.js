// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Legend from 'grommet/components/Legend';
import InteractiveExample from '../../../components/InteractiveExample';

Legend.displayName = 'Legend';

const PROPS_SCHEMA = {
  onClick: { value: true, initial: true },
  total: { value: true },
  units: { value: 'B' },
  size: { options: ['medium', 'large'] }
};

const SERIES = [
  {label: 'Americas', value: 40, colorIndex: 'graph-1' },
  {label: 'Europe', value: 20, colorIndex: 'unset' },
  {label: 'Asia', value: 15, colorIndex: 'graph-3' }
];

export default class LegendExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    let series = SERIES;
    if (elementProps.onClick) {
      series = SERIES.map(s => ({ ...s, onClick: () => alert(s.label) }));
      delete elementProps.onClick;
    }

    const element = <Legend series={series} {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Legend' contextPath='/docs/legend'
        preamble={`import Legend from 'grommet/components/Legend';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
