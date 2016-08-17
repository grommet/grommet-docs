// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Columns from 'grommet/components/Columns';

Columns.displayName = 'Columns';

export default class ColumnsDoc extends Component {

  render () {
    var labels = [];
    for (var i=1; i<=23; i++) {
      labels.push(<span>{`label ${i}`}</span>);
    }

    return (
      <DocsArticle title="Columns" colorIndex="neutral-3">

        <p>Organize children into multiple components based on available
          width.</p>

        <section>
          <h2>Options</h2>
          <dl>
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

export default ColumnsDoc;
