// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import Hero from 'grommet/components/Hero';
import Video from 'grommet/components/Video';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Hero.displayName = 'Hero';

var inline =
      "<Hero>\n" +
      "  ...\n" +
      "</Hero>";

export default class HeroDoc extends Component {

  render () {

    const backgroundVideo = (
      <Video autoPlay={true} showControls={false} loop={true} muted={true}>
        <source src="video/test.mp4" type="video/mp4"/>
      </Video>
    );

    return (
      <DocsArticle title="Hero" colorIndex="neutral-3">

        <p>A Hero image or video, overlaid with text.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>backgroundImage                 string</code></dt>
            <dd>Source of the image to be used for the background.
              Either backgroundImage or backgroundVideo can be used, but
              not both.</dd>
            <dt><code>backgroundVideo                 object</code></dt>
            <dd>Video to be used for the background. Either backgroundImage
              or backgroundVideo can be used, but not both.</dd>
            <dt><code>colorIndex                      string</code></dt>
            <dd>ColorIndex to be used for the background. Can be used in
              conjunction with backgroundImage or backgroundVideo to control
              the font color.</dd>
            <dt><code>flush                           true|false</code></dt>
            <dd>Whether the Hero should be flush with the edges of the window.
              Defaults to <code>true</code>.</dd>
            <dt><code>image                           string</code></dt>
            <dd>Source of an image that can be be shown opposite the text.
              Optional.</dd>
            <dt><code>justify                         start|center|end</code></dt>
            <dd>Position of the text that overlays the Hero.
              Defaults to <code>end</code>.</dd>
            <dt><code>responsiveBackgroundPosition    left|center|right</code></dt>
            <dd>Position of the background image for small mobile sizes.
              Defaults to <code>center</code>.</dd>
            <dt><code>separator                       true|false</code></dt>
            <dd>Whether there should be a gray line separator after the Hero
              text on mobile. Defaults to <code>false</code>.</dd>
            <dt><code>size                            small|large</code></dt>
            <dd>Size of the Hero. Defaults to <code>large</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Hero backgroundType="image" backgroundImage="img/carousel-1.png">
              <h1>This is a Hero</h1>
            </Hero>
          } />

          <Example name="Small Hero with Video Background" code={
            <Hero size="small" backgroundVideo={backgroundVideo}>
              <h1>This is a Hero with video</h1>
            </Hero>
          } />
        </section>

      </DocsArticle>
    );
  }
};
