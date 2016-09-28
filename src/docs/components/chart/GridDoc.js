// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Grid, Layers } from 'grommet/components/chart/Chart';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

export default class GridDoc extends Component {

  render () {
    return (
      <DocsArticle context={<NavAnchor path="/docs/chart">Chart</NavAnchor>}
        title="Grid" colorIndex="neutral-3">

        <p>A grid decorating a <NavAnchor path={`/docs/chart`}>
          Chart</NavAnchor>. It should be
          placed inside a <NavAnchor path={`/docs/chart-layers`}>
          Layers</NavAnchor> component.</p>

        <Example code={
          <Chart>
            <Base />
            <Layers>
              <Grid rows={5} columns={3} />
            </Layers>
          </Chart>
        }/>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>columns      {'{number}'}</code></dt>
            <dd>The number of columns, including each end.</dd>
            <dt><code>rows         {'{number}'}</code></dt>
            <dd>The number of rows, including each end.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
