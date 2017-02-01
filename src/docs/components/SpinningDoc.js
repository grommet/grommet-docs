// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Spinning from 'grommet/components/icons/Spinning';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

export default class SpinningDoc extends Component {

  render () {
    return (
      <DocsArticle title='Spinning'>

        <section>
          <p>An indeterminate spinning/busy icon. This should be used sparingly.
          If at all possible, use Meter with % to indicate progress. For content
          loading situations, Meter, Chart, and Distribution already have
          visuals for when the data has not arrived yet. In general,
          there should not be more than one Spinning icon on the screen at a
          time.</p>

          <Spinning />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>size         small|medium|large|xlarge|huge</code></dt>
            <dd>The icon size.  Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={
            `import Spinning from 'grommet/components/icons/Spinning';`}>
            <Spinning />
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
