// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Legend from 'grommet/components/Legend';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

const SERIES = [
  {label: 'Americas', value: 40,
    colorIndex: 'graph-1', onClick: () => alert('Americas') },
  {label: 'Europe', value: 20,
    colorIndex: 'unset', onClick: () => alert('Europe') },
  {label: 'Asia', value: 15,
    colorIndex: 'graph-3', onClick: () => alert('Asia') }
];

export default class LegendDoc extends Component {

  render () {

    return (
      <DocsArticle title='Legend' action={
        <Button primary={true} path='/docs/legend/examples'
          label='Examples' />
        }>

        <section>
          <p>A legend, typically associated with a data visualization such
            as <Anchor path='/docs/meter'>
            Meter</Anchor>, <Anchor path='/docs/distribution'>
            Distribution</Anchor>, <Anchor path='/docs/sun-burst'>
            SunBurst</Anchor>, or <Anchor path='/docs/world-map'>
            WorldMap</Anchor>.</p>
          <Legend series={SERIES} />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex   {'{index}'}</code></dt>
            <dd>Which data item should be shown as active, if any.</dd>
            <dt><code>onActive      {'{function (index)}'}</code></dt>
            <dd>Function that will be called when the user hovers over one
              of the data items.</dd>
            <dt><code>series        {'[{label: , value: , colorIndex: , ' +
              'onClick: }, ...]'}</code></dt>
            <dd>An array of objects describing the data.</dd>
            <dt><code>size          medium|large</code></dt>
            <dd>The size of the Legend. Defaults to <code>medium</code>.</dd>
            <dt><code>total         true|false</code></dt>
            <dd>Whether to show the total of all values.</dd>
            <dt><code>units         {'{string}'}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
