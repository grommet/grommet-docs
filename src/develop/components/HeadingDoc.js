// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Heading = require('grommet/components/Heading');

function convertHeadingToString(headingJSX) {
  return jsxToString(headingJSX);
}

var inline =
      "<Heading>\n" +
      "  ...\n" +
      "</Heading>";

var HeadingDoc = React.createClass({
  _renderHeadingCode(heading, headingJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {headingJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertHeadingToString(headingJSX)}
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

    var smallHeading = (
      <Heading size="small" tag="h1">
        Sample Heading
      </Heading>
    );

    var largeHeading = (
      <Heading size="large" strong={true} tag="h3">
        Sample Heading
      </Heading>
    );

    return (
      <DocsArticle title="Heading" colorIndex="neutral-3">

        <p>Title component usually rendered inside a Header.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the heading.  Optional.  If no size is specified, it will use the default styling for whatever heading level is specified.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the heading should be bold.  Defaults to <code>false</code>.</dd>
            <dt><code>tag         h1|h2|h3|h4|h5|h6</code></dt>
            <dd>Which HTML heading level should be used.  Defaults to <code>h1</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderHeadingCode('Default', simpleHeading)}
          {this._renderHeadingCode('Different sizes', smallHeading)}
          {this._renderHeadingCode('', largeHeading)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeadingDoc;
