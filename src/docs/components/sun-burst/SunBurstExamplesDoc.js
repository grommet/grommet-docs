// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SunBurst from 'grommet/components/SunBurst';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';
import Value from 'grommet/components/Value';
import InteractiveExample from '../../../components/InteractiveExample';

SunBurst.displayName = 'SunBurst';

const PROPS_SCHEMA = {
  size: { options: ['small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  Legend: { value: (
    <Legend series={[
      { label: 'on target', colorIndex: 'neutral-1' },
      { label: 'over', colorIndex: 'neutral-2' },
      { label: 'under', colorIndex: 'neutral-3' }
    ]} />
  ), initial: true }
};

const DATA = [
  { label: 'root-1', value: 50, colorIndex: 'neutral-1', children: [
    { label: 'sub-1', value: 20, colorIndex: 'neutral-1', total: 10, children: [
      { label: 'leaf-1', value: 5, colorIndex: 'neutral-1' },
      { label: 'leaf-2', value: 1, colorIndex: 'neutral-1' }
    ] },
    { label: 'sub-2', value: 20, colorIndex: 'neutral-1' },
    { label: 'sub-3', value: 10, colorIndex: 'neutral-1' }
  ]},
  { label: 'root-2', value: 30, colorIndex: 'neutral-2', children: [
    { label: 'sub-4', value: 15, colorIndex: 'neutral-2' },
    { label: 'sub-5', value: 10, colorIndex: 'neutral-1' },
    { label: 'sub-6', value: 5, colorIndex: 'neutral-3' }
  ]},
  { label: 'root-3', value: 20, colorIndex: 'neutral-3', children: [
    { label: 'sub-7', value: 10, colorIndex: 'neutral-1' },
    { label: 'sub-8', value: 7, colorIndex: 'neutral-1' },
    { label: 'sub-9', value: 3, colorIndex: 'neutral-3' }
  ]}
];

function seriesForPath (path) {
  path = path.slice(0);
  let data = { children: DATA };
  let series = [];
  while (path.length > 0) {
    data = data.children[path.shift()];
    series.push({
      colorIndex: data.colorIndex,
      label: data.label,
      value: data.value
    });
  }
  return series;
}

export default class SunBurstExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  _onClick (path) {
    const series = seriesForPath(path);
    const text = series.map(data => `${data.label} ${data.value}`).join(', ');
    alert(text);
  }

  render () {
    const { active, contents, elementProps } = this.state;
    let label;
    if (active) {
      const series = seriesForPath(active).map(data => ({
        ...data, value: <Value value={data.value} size='small' />
      }));
      label = (
        <Legend series={series} />
      );
    }
    let element = (
      <SunBurst data={DATA} active={active} label={label}
        onActive={active => this.setState({ active })}
        onClick={this._onClick}
        {...elementProps} />
    );
    if (contents.Legend) {
      element = (
        <Box direction='row' align='center' pad={{ between: 'medium'}}>
          {element}
          {contents.Legend}
        </Box>
      );
    }
    return (
      <InteractiveExample contextLabel='SunBurst' contextPath='/docs/sun-burst'
        preamble={`import SunBurst from 'grommet/components/SunBurst';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
