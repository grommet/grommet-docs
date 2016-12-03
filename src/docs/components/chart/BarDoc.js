// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Bar, Layers } from 'grommet/components/chart/Chart';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class BarDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='Bar'>

        <section>
          <p>An bar graphic in a <Anchor path={`/docs/chart`}>
            Chart</Anchor>.
            It should be placed inside a <Anchor path={`/docs/chart-layers`}>
            Layers</Anchor> component.
            There can be multiple Bar components in the Chart.</p>

          <Chart>
            <Base height='small' />
            <Layers>
              <Bar values={[70, 10, 20, 100, 60]} />
            </Layers>
          </Chart>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex  {'{number}'}</code></dt>
            <dd>The currently active value index, if any.</dd>
            <dt><code>colorIndex   {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the bar color.
              For example: <code>'graph-1'</code></dd>
            <dt><code>max          {'{number}'}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min          {'{number}'}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>points       true|false</code></dt>
            <dd>Whether to show individual data points at the end for each
              value.</dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>When true, the indexes count right to left or bottom to
              top.</dd>
            <dt><code>values       {'[{number}, ...]'}</code></dt>
            <dd>An array of number values.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the graphic should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
