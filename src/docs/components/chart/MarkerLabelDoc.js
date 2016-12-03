// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, MarkerLabel } from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class MarkerLabelDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='MarkerLabel'>

        <section>
          <p>A label along the edge of a <Anchor path={`/docs/chart`}>
            Chart</Anchor>. It is typically used to annotate
            a <Anchor path={`/docs/chart-marker`}>
            Marker</Anchor> component.
            The location of the label should be specified either via
            the <code>count</code> and <code>index</code> properties or via
            the <code>min</code>, <code>max</code>,
            and <code>value</code> properties.
            It should be placed inside a Chart component.
            There can be multiple MarkerLabel components in a Chart.</p>

          <Chart vertical={true}>
            <MarkerLabel count={12} index={11} label={<Value value={50} />} />
            <Base height='small' />
          </Chart>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>colorIndex   {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the label color.
              For example: <code>'graph-2'</code></dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends. Use this in
              conjunction with <code>index</code>.</dd>
            <dt><code>index        {'{number}'}</code></dt>
            <dd>The slot selected. Use this in
              conjunction with <code>count</code>.</dd>
            <dt><code>labels       {'{node}'}</code></dt>
            <dd>The label content to display.</dd>
            <dt><code>max          {'{number}'}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min          {'{number}'}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>When true, the indexes count right to left or bottom to
              top.</dd>
            <dt><code>value        {'{number}'}</code></dt>
            <dd>The value selected. Use in conjunction
              with <code>min</code> and <code>max</code>.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the slots should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
