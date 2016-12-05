// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Grid, Layers } from 'grommet/components/chart/Chart';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class GridDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='Grid'>

        <section>
          <p>A grid decorating a <Anchor path={`/docs/chart`}>
            Chart</Anchor>. It should be
            placed inside a <Anchor path={`/docs/chart-layers`}>
            Layers</Anchor> component.</p>

          <Chart>
            <Base height='small' />
            <Layers>
              <Grid rows={5} columns={3} />
            </Layers>
          </Chart>
        </section>

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
