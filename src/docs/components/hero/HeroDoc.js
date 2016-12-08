// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (
  <span>
    A Hero image or video, overlaid with text.
  </span>
);

export default class HeroDoc extends Component {

  render () {
    return (
      <DocsArticle title='Hero' action={
        <Button primary={true} path='/docs/hero/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <Hero background={<Image src='/img/carousel-1.png' fit='cover' />}
            backgroundColorIndex='dark'>
            <Box direction='row' justify='end' align='center'>
              <Box basis='1/2' align='start' pad='medium'>
                <Heading tag='h1'>Sample Heading</Heading>
              </Box>
            </Box>
          </Hero>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>background                {"{element}"}</code></dt>
            <dd>An element to show in the background. If it is
              an <Anchor path='/docs/image'>Image</Anchor>, be sure to
              specify <code>fit='cover'</code>.</dd>
            <dt><code>backgroundColorIndex      {"{string}"}</code></dt>
            <dd>This controls the text color for any children when they
              are shown over the background. Typically, this is either
              unset or <code>dark</code>.</dd>
            <dt><code>size                      small|medium|large
              </code></dt>
            <dd>Size of the Hero. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
