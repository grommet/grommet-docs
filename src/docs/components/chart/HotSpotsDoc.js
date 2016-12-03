// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class HotSpotsDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='HotSpots'>

        <p>A means of interacting with
          a <Anchor path={`/docs/chart`}>Chart</Anchor>. It is structured
          as a specified number of slots that the user can hover over or click.
          It should be placed inside a <Anchor path={`/docs/chart-layers`}>
          Layers</Anchor> component.</p>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex  {'{number}'}</code></dt>
            <dd>The currently active slot index, if any.</dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends.
              This property is required.</dd>
            <dt><code>onActive     {'{function (index)}'}</code></dt>
            <dd>Hover handler. The hovered index is passed as an argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as an argument.</dd>
            <dt><code>onClick      {'{function (index)}'}</code></dt>
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
