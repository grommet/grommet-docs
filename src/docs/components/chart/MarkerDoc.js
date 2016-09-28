// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Marker, Layers } from 'grommet/components/chart/Chart';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

export default class MarkerDoc extends Component {

  render () {
    return (
      <DocsArticle context={<NavAnchor path="/docs/chart">Chart</NavAnchor>}
        title="Marker" colorIndex="neutral-3">

        <p>An simple line graphic in a <NavAnchor path={`/docs/chart`}>
          Chart</NavAnchor>. It is typically used to indicate a threshold or
          to indicate the currently active index the user is hovering over.
          The location of the line should be specified either via
          the <code>count</code> and <code>index</code> properties or via
          the <code>min</code>, <code>max</code>,
          and <code>value</code> properties.
          It should be placed inside a <NavAnchor path={`/docs/chart-layers`}>
          Layers</NavAnchor> component.
          There can be multiple Marker components in the Chart.</p>

        <Example code={
          <Chart>
            <Base />
            <Layers>
              <Marker count={5} index={2} vertical={true} />
            </Layers>
          </Chart>
        }/>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the line color.
              For example: <code>"graph-2"</code></dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends. Use this in
              conjunction with <code>index</code>.</dd>
            <dt><code>index        {'{number}'}</code></dt>
            <dd>The slot selected. Use this in
              conjunction with <code>count</code>.</dd>
            <dt><code>max          {"{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min          {"{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>When true, the indexes count right to left or bottom to
              top.</dd>
            <dt><code>value        {"{number}"}</code></dt>
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
