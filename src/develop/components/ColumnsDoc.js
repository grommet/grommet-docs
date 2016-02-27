// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Columns = require('grommet/components/Columns');

var ColumnsDoc = React.createClass({

  render: function() {
    var inline =
      "<Columns>...</Columns>";

    var labels = [];
    for (var i=1; i<=20; i++) {
      labels.push(`label ${i}`);
    }

    return (
      <DocsArticle title="Columns" colorIndex="neutral-3">

        <p>Organize children into multiple components based on available width.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of each column. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Columns>
              {labels}
            </Columns>
          </div>
          <pre><code className="html hljs xml">{"<Columns>...</Columns>"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = ColumnsDoc;
