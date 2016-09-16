// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Image.displayName = 'Image';

const USAGE =
`import Image from 'grommet/components/Image';
<Image src="url-path" />`;

export default class ImageDoc extends Component {

  render () {
    return (
      <DocsArticle title="Image" colorIndex="neutral-3">

        <section>
          <p>An image.</p>
          <Box direction="row" align="center" pad={{ between: 'medium' }}>
            <Image src="/img/carousel-1.png" size="thumb" />
            <Image src="/img/carousel-1.png" size="small" />
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>caption    true|{"{string}"}</code></dt>
            <dd>Whether to add image caption or not. If set to true,
              caption text
              will be the image alt value. Also, caption can receive the text
              to be
              used instead of the default one.</dd>
            <dt><code>full       true|horizontal|vertical|false</code></dt>
            <dd>Whether the width and/or height should take the full viewport
              size.</dd>
            <dt><code>size       small|medium|large|thumb</code></dt>
            <dd>The size of the Paragraph text.
              Defaults to <code>medium</code>.</dd>
            <dt><code>src        {"{string}"}</code></dt>
            <dd>The actual image file source.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/image/examples`}>
            Image Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
