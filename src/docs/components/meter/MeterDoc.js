// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (<span>
  Shows a bar, arc, or circular meter graphic.
</span>);

Meter.displayName = 'Meter';

export default class MeterDoc extends Component {

  render () {
    return (
      <DocsArticle title='Meter' action={
        <Button primary={true} path='/docs/meter/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <Box direction='row' align='center' pad={{ between: 'medium' }}>
            <Meter value={40} type='circle' label={
                <Value value={40} />
              }/>
            <Box align='end' direction='row'>
              <Meter value={40} vertical={true} label={false} />
              <Value align='start' value={40} />
            </Box>
            <Box align='start' direction='column'>
              <Value value={40} />
              <Meter value={40} label={false} />
            </Box>
            <Box align='center'>
              <Meter value={40} type='arc' label={false} />
              <Value value={40} />
            </Box>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex {'{number}'}</code></dt>
            <dd>The currently active series value index, if any.</dd>
            <dt><code>colorIndex  {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the graphic color.
              For example: <code>'graph-1'</code></dd>
            <dt><code>label       {'{node}'}</code></dt>
            <dd>Callers are encouraged to use <Anchor path='/docs/value'>
              Value</Anchor> to construct the appropriate label.</dd>
            <dt><code>max         {'{number}'}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min         {'{number}'}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>onActive    {'{function (index)}'}</code></dt>
            <dd>Hover handler. The hovered series index is passed as an
              argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as an argument.</dd>
            <dt><code>series      {'[{value: , colorIndex: , ' +
              'onClick: }, ...]'}</code></dt>
            <dd>An array of objects describing the data.
              Either this or the <code>value</code> property must be
              provided. The <code>spiral</code> type Meter also accepts a
              <code>label</code> property for the objects in the series.</dd>
            <dt><code>size        xsmall|small|medium|large</code></dt>
            <dd>The size of the Meter. Defaults to <code>medium</code>.
              Currently, the <code>spiral</code> type Meter does not respond
              to this property.</dd>
            <dt><code>stacked     true|false</code></dt>
            <dd>Whether slices for multiple series values should be stacked
              together in the same slot or shown in separate slots.
              Defaults to <code>false</code>.</dd>
            <dt><code>threshold   {'{number}'}</code></dt>
            <dd>Optional threshold value.</dd>
            <dt><code>thresholds  {'[{value: , label: , colorIndex: }, ...]'}
              </code></dt>
            <dd>An array of objects describing thresholds.</dd>
            <dt><code>type        bar|arc|circle|spiral</code></dt>
            <dd>Whether to draw a bar, an arc, a circle, or a spiral.</dd>
            <dt><code>value       {'{number}'}</code></dt>
            <dd>The current value.</dd>
            <dt><code>vertical    true|false</code></dt>
            <dd>Whether to orient a bar or arc Meter vertically.</dd>
          </dl>
          <p>Note: It used to be that to be visually discernable,
            very small values were given a minimum visual size that was
            disproportionate to the scale of the rest of the meter. This
            behavior was removed to give the caller more control of the
            desired behavior. If values are too small to be discernable, it
            is recommended to either group multiple small values into a single
            "other" category or to skew the value to render it visible.</p>
        </section>

      </DocsArticle>
    );
  }
};
