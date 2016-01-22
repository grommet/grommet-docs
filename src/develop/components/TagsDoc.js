// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Tags = require('grommet/components/Tags');
var Tag = require('grommet/components/Tag');

function convertTagToString(tagJSX) {
  return jsxToString(tagJSX);
}

var TagsDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _onClick: function () {
    // No-op
  },

  _renderTagCode(heading, tagJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {tagJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertTagToString(tagJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var inline =
      "<Tags>\n" +
      "  <Tag />\n" +
      "  ...\n" +
      "</Tags>";

    var defaultTag = (
      <Tags>
        <Tag label="First" />
        <Tag label="Second" />
        <Tag label="Third" />
      </Tags>
    );

    var columnTag = (
      <Tags direction="column">
        <Tag label="First" />
        <Tag label="Second" />
        <Tag label="Third" />
      </Tags>
    );

    return (
      <DocsArticle title="Tag(s)" colorIndex="neutral-3">

        <p>A list of tags. The preferred method of populating Tags is to use Tag children.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Tags Options</h2>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout the child components in.
              Defaults to <code>row</code>.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Tag Options</h2>
          <dl>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Label text for the tag.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "anchor"}>Anchor</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>
          <p>These examples show a variety of different options for the Tags.</p>

          {this._renderTagCode('Default', defaultTag)}
          {this._renderTagCode('Column', columnTag)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = TagsDoc;
