// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SunBurst from 'grommet/components/SunBurst';
import Box from 'grommet/components/Box';
import Legend from 'grommet/components/Legend';
import Value from 'grommet/components/Value';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

SunBurst.displayName = 'SunBurst';

const USAGE =
`import SunBurst from 'grommet/components/SunBurst';
<SunBurst data={...} />`;

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

export default class SunBurstDoc extends Component {

  constructor () {
    super();
    this.state = {};
  }

  _onClick (path) {
    const series = seriesForPath(path);
    const text = series.map(data => `${data.label} ${data.value}`).join(', ');
    alert(text);
  }

  render () {
    const { active } = this.state;

    let label;
    if (active) {
      const series = seriesForPath(active).map(data => ({
        ...data, value: <Value value={data.value} size="small" />
      }));
      label = (
        <Legend series={series} announce={true} />
      );
    }

    return (
      <DocsArticle title="SunBurst" colorIndex="neutral-3">

        <section>
          <p>A SunBurst visualization.</p>
          <Box align="start">
            <SunBurst data={DATA} size="large"
              active={active}
              onActive={path => this.setState({ active: path })}
              onClick={this._onClick}
              label={label} />
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>active    {'{[index, ...]}'}</code></dt>
            <dd>The currently active index path, if any.</dd>
            <dt><code>data      {`[{
              children: [{}, ...],
              colorIndex: {string},
              total: {number},
              value: {number}
            }, ...]`}</code></dt>
            <dd>An array of objects describing the data.
              The <code>value</code> property must be specified.
              If the <code>total</code> property is specified, it sets
              the total value for the children. If not specified, the total
              is the sum of the values.
              The <code>children</code> property objects are the same structure
              as the items in the <code>data</code> array.
              NOTE: Currently the graphic does not work well at depths
              greater than three.</dd>
            <dt><code>label       {"{node}"}</code></dt>
            <dd>Label to show in a corner.</dd>
            <dt><code>onActive   {"{function ([index, ...])}"}</code></dt>
            <dd>Hover handler. The hovered indexes are passed as the argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as the argument.</dd>
            <dt><code>onClick    {"{function ([index, ...])}"}</code></dt>
            <dd>Click handler. The clicked index path is passed as the
              argument.</dd>
            <dt><code>size       small|medium|large</code></dt>
            <dd>The size of the SunBurst. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <Example code={
            <Box direction="row" align="center" pad={{ between: 'medium' }}>
              <SunBurst data={DATA}
                active={active}
                onActive={path => this.setState({ active: path })}
                onClick={path => alert(path)}
                label={label} />
              <Legend series={[
                { label: 'on target', colorIndex: 'neutral-1' },
                { label: 'over', colorIndex: 'neutral-2' },
                { label: 'under', colorIndex: 'neutral-3' }
              ]} />
            </Box>
          }/>
        </section>

      </DocsArticle>
    );
  }
};
