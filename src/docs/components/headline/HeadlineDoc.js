// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

Headline.displayName = 'Headline';

const USAGE =
`import Headline from 'grommet/components/Headline';
<Headline>
  {contents}
</Headline>`;

export default class HeadlineDoc extends Component {

  render () {
    return (
      <DocsArticle title="Headline" colorIndex="neutral-3">

        <section>
          <p>Headline text, usually used in marketing pages.</p>
          <Headline>Sample Headline</Headline>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Headline. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Headline. Defaults
              to <code>medium</code>.</dd>
            <dt><code>size        small|medium|large|xlarge</code></dt>
            <dd>The size of the Headline. Defaults to <code>medium</code>.
              Note: <code>xlarge</code> should only be used for short,
              single word situations.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the headline should be bold.  Defaults
              to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/headline/examples`}>
            Headline Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
