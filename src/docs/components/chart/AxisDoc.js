// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Axis } from 'grommet/components/chart/Chart';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

export default class AxisDoc extends Component {

  render () {
    return (
      <DocsArticle title="Chart Axis" colorIndex="neutral-3">

        <p>An axis decorating a <NavAnchor path={`/docs/chart`}>
          Chart</NavAnchor>. An Axis can be
          horizontal or vertical on any edge. It should be placed inside a
          Chart component.</p>

        <p>Callers are responsible to set the number of ticks and labels
          appropriate to the anticipated size of the Chart. Tying it to
          <code>onMaxCount</code> in <NavAnchor path={`/docs/chart`}>
          Chart</NavAnchor> is a good way to get some guidance on many ticks
          could be shown. But, you will need to take into account your
          labels as well.</p>

        <Example code={
          <Chart vertical={true}>
            <Base height="small"/>
            <Axis count={3} labels={[{ index: 2, label: '100%' }]}
              ticks={true} />
          </Chart>
        }/>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of stops along the axis, including both ends.
              This property is required.</dd>
            <dt><code>labels       {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: {node}, colorIndex: {string}, index: {number}}"}
              </code> which configures what label to show at which stop. You
              do not need a label for each stop.
            </dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>When true, the indexes count right to left or bottom to
              top.</dd>
            <dt><code>ticks        true|false</code></dt>
            <dd>Whether to show tick marks for each stop.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the axis should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
