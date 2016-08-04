import React, { Component } from 'react';

import Image from 'grommet/components/Image';

import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Image.displayName = 'Image';

export default class ImageDoc extends Component {

  render () {
    return (
      <DocsArticle title="Image" colorIndex="neutral-3">

        <p>An image.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>caption    true|{"{string}"}</code></dt>
            <dd>Whether to add image caption or not. If set to true, caption text
              will be the image alt value. Also, caption can receive the text to be
              used instead of the default one.</dd>
            <dt><code>full       true|horizontal|vertical|false</code></dt>
            <dd>Whether the width and/or height should take the full viewport size.</dd>
            <dt><code>size       small|medium|large|thumb</code></dt>
            <dd>The size of the Paragraph text. Defaults to <code>medium</code>.</dd>
            <dt><code>src        {"{string}"}</code></dt>
            <dd>The actual image file source.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Image src="/img/carousel-1.png" />
          } />

          <Example name="Thumb" code={
            <Image src="/img/carousel-1.png" size="thumb" />
          } />

          <Example name="Small" code={
            <Image src="/img/carousel-1.png" size="small" />
          } />

          <Example name="Large" code={
            <Image src="/img/carousel-1.png" size="large" />
          } />

          <Example name="Full horizontal" code={
            <Image src="/img/carousel-1.png" full="horizontal" />
          } />

          <Example name="Caption" code={
            <Image src="/img/carousel-1.png" caption="1. Sample Image" />
          } />

        </section>

      </DocsArticle>
    );
  }
};
