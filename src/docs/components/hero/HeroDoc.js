// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Hero from 'grommet/components/Hero';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
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
          <p>{desc}</p>
          <Hero backgroundImage='/img/carousel-1.png'>
            <Heading tag='h1'>Sample Heading</Heading>
          </Hero>
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

      </DocsArticle>
    );
  }
};
