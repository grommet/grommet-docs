// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SunBurst from 'grommet/components/SunBurst';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

SunBurst.displayName = 'SunBurst';

const DATA = [
  { value: 50, children: [
    { value: 20, total: 10, children: [
      { value: 5 },
      { value: 1 }
    ] },
    { value: 20 },
    { value: 10 }
  ]},
  { value: 30, children: [
    { value: 15 },
    { value: 10 },
    { value: 5 }
  ]},
  { value: 20, children: [
    { value: 10 },
    { value: 7 },
    { value: 3 }
  ]}
];

export default class SunBurstDoc extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {
    let label;
    if (this.state.active) {
      let path = this.state.active.slice(0);
      let data = { children: DATA };
      while (path.length > 0) {
        data = data.children[path.shift()];
      }
      label = (
        <Box align="end" announce={true}>
          <Value value={data.value} />
        </Box>
      );
    }

    return (
      <DocsArticle title="SunBurst" colorIndex="neutral-3">

        <section>
          <p>A SunBurst visualization.</p>
          <Example code={
              <SunBurst data={DATA} size="xlarge"
                active={this.state.active}
                onActive={path => this.setState({ active: path })}
                onClick={path => alert(path)}
                label={label} />
          }/>
        </section>

        <section>
          <h2>Options</h2>
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

      </DocsArticle>
    );
  }
};
