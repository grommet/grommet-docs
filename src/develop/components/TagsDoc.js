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
          <h2>Examples</h2>

          <p>These examples show a variety of different options for the Tags.</p>

          <h3>Simple</h3>
          <Box className="example">
            <Tags direction="row">
              <Tag label="First" route="/stories" />
              <Tag label="Second" />
              <Tag label="Third" />
            </Tags>
          </Box>
          <pre><code className="html hljs xml">
            {"<Tags>\n  <Tag label='First' />\n  ...\n</Tags>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TagsDoc;
