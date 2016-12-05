// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class LayersDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='Layers'>

        <section>
          <p>A container for graphic components in
            a <Anchor path={`/docs/chart`}>Chart</Anchor>.
            There should be exactly one Layers component within a
            Chart.</p>

          <p>Components to place inside Layers:</p>

          <Menu inline={true}>
            <Anchor path={`/docs/chart-area`}>Area</Anchor>
            <Anchor path={`/docs/chart-bar`}>Bar</Anchor>
              <Anchor path={`/docs/chart-grid`}>Grid</Anchor>
            <Anchor path={`/docs/chart-hot-spots`}>HotSpots</Anchor>
            <Anchor path={`/docs/chart-line`}>Line</Anchor>
            <Anchor path={`/docs/chart-marker`}>Marker</Anchor>
            <Anchor path={`/docs/chart-range`}>Range</Anchor>
          </Menu>
        </section>

        <section>
          <h2>Properties</h2>
          <div>None</div>
        </section>

      </DocsArticle>
    );
  }
};
