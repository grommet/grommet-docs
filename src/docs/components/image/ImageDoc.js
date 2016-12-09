// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class ImageDoc extends Component {

  render () {
    return (
      <DocsArticle title='Image' action={
        <Button primary={true} path={`/docs/image/examples`}
          label='Examples' />
        }>

        <section>
          <p>An image.</p>
          <Box direction='row' align='center' pad={{ between: 'medium' }}>
            <Image src='/img/carousel-1.png' size='thumb' />
            <Image src='/img/carousel-1.png' size='small' />
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align      {'{top:, bottom:, left:, right: }'}</code></dt>
            <dd>How to align the image when full. You can specify
              one of top|bottom and/or one of left|right. If not provided,
              the image is centered.</dd>
            <dt><code>alt        {'{string}'}</code></dt>
            <dd>Alternate text for screen readers.</dd>
            <dt><code>caption    true|{'{string}'}</code></dt>
            <dd>Whether to add image caption or not. If set to true,
              caption text will be the image alt value. Also, caption can
              receive the text to be used instead of the default one.</dd>
            <dt><code>fit       cover|contain</code></dt>
            <dd>How the image should be scaled to fit in the
              container. Setting this property also
              sets <code>full='true'</code>.</dd>
            <dt><code>full       true|horizontal|vertical|false</code></dt>
            <dd>Whether the image should expand to fill the available width
              and/or height.</dd>
            <dt><code>size       small|medium|large|thumb</code></dt>
            <dd>The size of the Paragraph text.
              Defaults to <code>medium</code>.</dd>
            <dt><code>src        {'{string}'}</code></dt>
            <dd>The actual image file source.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
