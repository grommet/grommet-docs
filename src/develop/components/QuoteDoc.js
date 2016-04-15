// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Quote = require('grommet/components/Quote');
var Paragraph = require('grommet/components/Paragraph');

Quote.displayName = 'Quote';

var inline =
      "<Quote>\n" +
      "  ...\n" +
      "</Quote>";

var QuoteDoc = React.createClass({

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
    var simpleQuote = (
      <Quote credit="A famous person">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
      </Quote>
    );
    var smallQuote = (
      <Quote borderColorIndex="accent-1" size="small" emphasizeCredit={false} credit="A famous person">
        <Paragraph><strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</strong></Paragraph>
      </Quote>
    );
    var longQuote = (
      <Quote borderColorIndex="accent-2" size="medium" credit="A famous person">
        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Paragraph>
        <Paragraph>Ut enim ad minim veniam, quis nostrud exercitation ullamrehenderit in voluptate mollit anim.</Paragraph>
      </Quote>
    );

    return (
      <DocsArticle title="Quote" colorIndex="neutral-3">

        <p>A quote with a colored border.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>borderColorIndex            string</code></dt>
            <dd>ColorIndex of the border.</dd>
            <dt><code>size                        small|medium|large|full</code></dt>
            <dd>Width of the box containing the quote.  Defaults to <code>large</code>.</dd>
            <dt><code>credit                      string</code></dt>
            <dd>The name of the entity that the quote is credited to.</dd>
            <dt><code>emphasizeCredit             true|false</code></dt>
            <dd>Whether the quote credit should be bolded for emphasis.  Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <p>Options for <Link to={`${this.context.routePrefix}box`}>Box</Link> are available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleQuote)}
          {this._renderCode('Small quote, emphasis reversed', smallQuote)}
          {this._renderCode('Medium quote, with multiple paragraphs', longQuote)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = QuoteDoc;
