// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Columns from 'grommet/components/Columns';

Columns.displayName = 'Columns';

export default class ColumnsDoc extends Component {

  render () {
    var labels = [];
    for (var i=1; i<=23; i++) {
      labels.push(<span key={i}>{`label ${i}`}</span>);
    }

    return (
      <DocsArticle title="Columns" colorIndex="neutral-3">

        <p>Organize children into multiple components based on available
          width.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>justify     start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>masonry     true|false</code></dt>
            <dd>Whether to fill the columns from left-to-right based on the
              component width (set by <code>size</code> option). Defaults
              to <code>false</code>. The max number of columns can be set
              with <code>maxCount</code>.</dd>
            <dt><code>maxCount    number</code></dt>
            <dd>Number of columns to allow for masonry option, based on
              component width. Responds based on the width of the column
              children (set with <code>size</code>).</dd>
            <dt><code>responsive  true|false</code></dt>
            <dd>Whether masonry columns should collapse into single, full-width
              column when the display area narrows (to achive similar behavior
              as responsive <NavAnchor path="/docs/tiles">Tiles</NavAnchor>).
              Defaults to <code>false</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of each column. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example name="Default" code={
            <Columns>
              {labels}
            </Columns>
          } />
        </section>

      </DocsArticle>
    );
  }
};
