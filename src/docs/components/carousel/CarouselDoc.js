// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Carousel from 'grommet/components/Carousel';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

Carousel.displayName = 'Carousel';
Box.displayName = 'Box';

export default class TileDoc extends Component {

  render () {

    return (
      <DocsArticle title='Carousel' action={
        <Button primary={true} path={`/docs/carousel/examples`}
          label='Examples' />
        }>

        <section>
          <p>Image carousel.</p>

          <Box size='medium'>
            <Carousel>
              <Image src='/img/carousel-1.png' />
              <Image src='/img/carousel-2.png' />
            </Carousel>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex         {'{number}'}</code></dt>
            <dd>Active carousel index. Defaults to 0.
              If activeIndex is used, you will be in control. This means that
              you will need to use onActive callback to update your 
              component state when the index changes.
            </dd>
            <dt><code>autoplay            true|false</code></dt>
            <dd>Whether the carousel should play automatically or not.
              Defaults to <code>true</code>.</dd>
            <dt><code>autoplaySpeed       {'{number}'}</code></dt>
            <dd>How long the carousel should stay on each slide, in
              milliseconds.  Defaults to <code>5000</code> (5 seconds).</dd>
            <dt><code>infinite            true|false</code></dt>
            <dd>Whether the carousel should scroll back to the first slide
              when you get to the end, or stop at the last slide.
              Defaults to <code>true</code>.</dd>
            <dt><code>onActive            {'{function}'}</code></dt>
            <dd>Function that will be called with the active index when
              the currently active carousel changes.</dd>
            <dt><code>persistentNav       true|false</code></dt>
            <dd>Whether the navigational elements should always be shown,
              or only show when the user mouses over the carousel.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
