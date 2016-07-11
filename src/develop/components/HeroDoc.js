// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
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

        <p>A Hero image overlaid with text.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>borderColorIndex            string</code></dt>
            <dd>ColorIndex of the border.</dd>
            <dt><code>size                        small|medium|large|full</code></dt>
            <dd>Width of the box containing the Hero.  Defaults to <code>large</code>.</dd>
            <dt><code>credit                      string</code></dt>
            <dd>The name of the entity that the Hero is credited to.</dd>
            <dt><code>emphasizeCredit             true|false</code></dt>
            <dd>Whether the Hero credit should be bolded for emphasis.  Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <p>Options for <Link to={`${this.context.routePrefix}box`}>Box</Link> are available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleHero)}
          {this._renderCode('Small Hero', smallHero)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeroDoc;
