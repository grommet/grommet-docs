// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Heading = require('grommet/components/Heading');

var inline =
      "<Heading>\n" +
      "  ...\n" +
      "</Heading>";

var HeadingDoc = React.createClass({
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
    var simpleHeading = (
      <Heading>
        Sample Heading
      </Heading>
    );

    var h2Heading = (
      <Heading tag="h2" align="center">
        Sample Heading
      </Heading>
    );

    var strongHeading = (
      <Heading strong={true} tag="h6">
        Sample Heading
      </Heading>
    );

    return (
      <DocsArticle title="Heading" colorIndex="neutral-3">

        <p>An HTML heading, one of h1, h2, h3, h4, h5, h6.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Heading. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Heading. Defaults
              to <code>medium</code>.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the Heading should be bold.  Defaults to <code>false</code>.</dd>
            <dt><code>tag         h1|h2|h3|h4|h5|h6</code></dt>
            <dd>Which HTML heading level should be used.  Defaults to <code>h1</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleHeading)}
          {this._renderCode('H2, Centered', h2Heading)}
          {this._renderCode('H6, Strong', strongHeading)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeadingDoc;
