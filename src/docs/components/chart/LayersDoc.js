// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

export default class LayersDoc extends Component {

  render () {
    return (
      <DocsArticle context={<NavAnchor path="/docs/chart">Chart</NavAnchor>}
        title="Layers" colorIndex="neutral-3">

        <section>
          <p>A container for graphic components in
            a <NavAnchor path={`/docs/chart`}>Chart</NavAnchor>.
            There should be exactly one Layers component within a
            Chart.</p>

          <p>Components to place inside Layers:</p>

          <Menu inline={true}>
            <NavAnchor path={`/docs/chart-area`}>Area</NavAnchor>
            <NavAnchor path={`/docs/chart-bar`}>Bar</NavAnchor>
            <NavAnchor path={`/docs/chart-hot-spots`}>HotSpots</NavAnchor>
            <NavAnchor path={`/docs/chart-grid`}>Grid</NavAnchor>
            <NavAnchor path={`/docs/chart-line`}>Line</NavAnchor>
            <NavAnchor path={`/docs/chart-marker`}>Marker</NavAnchor>
            <NavAnchor path={`/docs/chart-range`}>Range</NavAnchor>
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
