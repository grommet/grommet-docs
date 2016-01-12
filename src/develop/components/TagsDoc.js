// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Tags = require('grommet/components/Tags');
var Tag = require('grommet/components/Tag');
var Box = require('grommet/components/Box');

var TagsDoc = React.createClass({

  _onClick: function () {
    // No-op
  },

  render: function() {
    var inline =
      "<Tags>\n" +
      "  <Tag>\n" +
      "    ...\n" +
      "  </Tag>\n" +
      "  ...\n" +
      "</Tags>";

    return (
      <DocsArticle title="Tag(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized Tags of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Tags Options</h2>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout the child components in.
              Defaults to <code>column</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Tag Options</h2>
          <dl>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Label text for the tag.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <p>These examples show a variety of different options for the Tags.</p>

          <h3>default</h3>
          <Box className="example">
            <Tags>
              <Tag label="First" />
              <Tag label="Second" />
              <Tag label="Third" />
            </Tags>
          </Box>
          <pre><code className="html hljs xml">
            {"<Tags>\n  <Tag label='First' />\n  ...\n</Tags>"}
          </code></pre>

          <h3>column</h3>
          <Box className="example">
            <Tags direction="column">
              <Tag label="First" />
              <Tag label="Second" />
              <Tag label="Third" />
            </Tags>
          </Box>
          <pre><code className="html hljs xml">
            {"<Tags direction=\"column\">\n  <Tag label='First' />\n  ...\n</Tags>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TagsDoc;
