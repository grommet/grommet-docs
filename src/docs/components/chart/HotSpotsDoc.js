// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

export default class HotSpotsDoc extends Component {

  render () {
    return (
      <DocsArticle context={<NavAnchor path="/docs/chart">Chart</NavAnchor>}
        title="HotSpots" colorIndex="neutral-3">

        <p>A means of interacting with
          a <NavAnchor path={`/docs/chart`}>Chart</NavAnchor>. It is structured
          as a specified number of slots that the user can hover over or click.
          It should be placed inside a <NavAnchor path={`/docs/chart-layers`}>
          Layers</NavAnchor> component.</p>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex  {'{number}'}</code></dt>
            <dd>The currently active slot index, if any.</dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends.
              This property is required.</dd>
            <dt><code>onActive     {"{function (index)}"}</code></dt>
            <dd>Hover handler. The hovered index is passed as an argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as an argument.</dd>
            <dt><code>onClick      {"{function (index)}"}</code></dt>
            <dd>Click handler. The clicked index is passed as an argument.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the slots should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
