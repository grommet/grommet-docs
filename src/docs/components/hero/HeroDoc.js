// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Hero.displayName = 'Hero';

const USAGE =
`import Hero from 'grommet/components/Hero';
<Hero backgroundType="image" backgroundImage="img/carousel-1.png">
  {contents}
</Hero>`;

export default class HeroDoc extends Component {

  render () {
    return (
      <DocsArticle title="Hero" colorIndex="neutral-3">

        <section>
          <p>A Hero image or video, overlaid with text.</p>
          <Hero backgroundType="image" backgroundImage="img/carousel-1.png">
            <h1>This is a Hero</h1>
          </Hero>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>backgroundImage                {"{string}"}</code></dt>
            <dd>Source of the image to be used for the background.
              Either backgroundImage or backgroundVideo can be used, but
              not both.</dd>
            <dt><code>backgroundVideo                {"{object}"}</code></dt>
            <dd>Video to be used for the background. Either backgroundImage
              or backgroundVideo can be used, but not both.</dd>
            <dt><code>colorIndex                     {"{string}"}</code></dt>
            <dd>ColorIndex to be used for the background. Can be used in
              conjunction with backgroundImage or backgroundVideo to control
              the font color.</dd>
            <dt><code>flush                          true|false</code></dt>
            <dd>Whether the Hero should be flush with the edges of the window.
              Defaults to <code>true</code>.</dd>
            <dt><code>image                          {"{string}"}</code></dt>
            <dd>Source of an image that can be be shown opposite the text.
              Optional.</dd>
            <dt><code>justify                        start|center|end
              </code></dt>
            <dd>Position of the text that overlays the Hero.
              Defaults to <code>end</code>.</dd>
            <dt><code>responsiveBackgroundPosition   left|center|right
              </code></dt>
            <dd>Position of the background image for small mobile sizes.
              Defaults to <code>center</code>.</dd>
            <dt><code>separator                      true|false</code></dt>
            <dd>Whether there should be a gray line separator after the Hero
              text on mobile. Defaults to <code>false</code>.</dd>
            <dt><code>size                           small|large</code></dt>
            <dd>Size of the Hero. Defaults to <code>large</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/hero/examples`}>
            Hero Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
