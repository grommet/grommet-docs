// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Columns from 'grommet/components/Columns';
import { updatePageTitle } from '../utils/a11y';

Columns.displayName = 'Columns';

export default class ColumnsDoc extends Component {
  componentDidMount () {
    updatePageTitle('Columns');
  }

  render () {
    var inline =
      "<Columns>...</Columns>";

    var labels = [];
    for (var i=1; i<=23; i++) {
      labels.push(`label ${i}`);
    }

    return (
      <DocsArticle title="Columns" colorIndex="neutral-3">

        <p>Organize children into multiple components based on available width.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

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
