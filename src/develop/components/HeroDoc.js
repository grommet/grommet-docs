// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Hero = require('grommet/components/Hero');

Hero.displayName = 'Hero';

var inline =
      "<Hero>\n" +
      "  ...\n" +
      "</Hero>";

var HeroDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _renderCode(name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var simpleHero = (
      <Hero backgroundType="image" backgroundImage="img/carousel-1.png">
        <h1>This is a Hero</h1>
      </Hero>
    );
    var smallHero = (
      <Hero size="small" backgroundType="video" backgroundVideoSource="video/test.mp4">
        <h1>This is a Hero with video</h1>
      </Hero>
    );

    return (
      <DocsArticle title="Hero" colorIndex="neutral-3">

        <p>A Hero image or video, overlaid with text.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>backgroundType                  image|video</code></dt>
            <dd>Type of media used for the background of the Hero.</dd>
            <dt><code>backgroundImage                 string</code></dt>
            <dd>Source of the image to be used for the background.  Required if <code>backgroundType</code> is <code>image</code>.</dd>
            <dt><code>backgroundVideoSource           string</code></dt>
            <dd>Source of the video to be used for the background.  Required if <code>backgroundType</code> is <code>video</code>.</dd>
            <dt><code>backgroundVideoLoop             true|false</code></dt>
            <dd>Whether the background video should loop.  Defaults to <code>false</code>.</dd>
            <dt><code>backgroundVideoMuted            true|false</code></dt>
            <dd>Whether the background video should be muted.  Defaults to <code>true</code>.</dd>
            <dt><code>backgroundVideoPoster           string</code></dt>
            <dd>Source of the image that shows before the video begins.</dd>
            <dt><code>darkTheme                       true|false</code></dt>
            <dd>Refers to the color theme of the background being used.  If set to <code>true</code>, the Hero will have light-colored text.  If <code>false</code>, the Hero will have dark-colored text.  Defaults to <code>true</code>.</dd>
            <dt><code>flush                           true|false</code></dt>
            <dd>Whether the Hero should be flush with the edges of the window.  Defaults to <code>true</code>.</dd>
            <dt><code>image                           string</code></dt>
            <dd>Source of an image that can be be shown opposite the text.  Optional.</dd>
            <dt><code>justify                         start|center|end</code></dt>
            <dd>Position of the text that overlays the Hero.  Defaults to <code>end</code>.</dd>
            <dt><code>responsiveBackgroundPosition    left|center|right</code></dt>
            <dd>Position of the background image for small mobile sizes.  Defaults to <code>center</code>.</dd>
            <dt><code>separator                       true|false</code></dt>
            <dd>Whether there should be a gray line separator after the Hero text on mobile.  Defaults to <code>false</code>.</dd>
            <dt><code>size                            small|large</code></dt>
            <dd>Size of the Hero.  Defaults to <code>large</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleHero)}
          {this._renderCode('Small Hero with Video Background', smallHero)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeroDoc;
