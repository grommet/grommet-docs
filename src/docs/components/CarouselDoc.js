// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Carousel from 'grommet/components/Carousel';
import Box from 'grommet/components/Box';

export default class TileDoc extends Component {

  render () {
    const inline =
      "<Carousel>\n" +
      "  <img />\n" +
      "  <img />\n" +
      "  ...\n" +
      "</Carousel>";

    return (
      <DocsArticle title="Carousel" colorIndex="neutral-3">

        <p>Image carousel.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>autoplay            true|false</code></dt>
            <dd>Whether the carousel should play automatically or not.  Default is <code>true</code>.</dd>
            <dt><code>autoplaySpeed       {"{number}"}</code></dt>
            <dd>How long the carousel should stay on each slide, in milliseconds.  Default is <code>5000</code> (5 seconds).</dd>
            <dt><code>infinite            true|false</code></dt>
            <dd>Whether the carousel should scroll back to the first slide when you get to the end, or stop at the last slide.  Default is <code>true</code>.</dd>
            <dt><code>persistentNav       true|false</code></dt>
            <dd>Whether the navigational elements should always be shown, or only show when the user mouses over the carousel.  Default is <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Carousel>
              <img src="/img/carousel-1.png" />
              <img src="/img/carousel-2.png" />
              <Box pad="large" colorIndex="neutral-3">
                <Box pad="medium" colorIndex="neutral-2">
                  Content inside of a Box element.
                </Box>
              </Box>
            </Carousel>
          </div>
          <pre><code className="html hljs xml">
            {"<Carousel>\n  <img />\n    ...\n</Carousel>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
};
