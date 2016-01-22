var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Heading = require('grommet/components/Heading');

var inline =
      "<Heading>\n" +
      "  ...\n" +
      "</Heading>";

var HeadingDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Heading" colorIndex="neutral-3">

        <p>Title component usually rendered inside a Header.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the heading.  Optional.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the heading should be bold.  Defaults to <code>false</code>.</dd>
            <dt><code>tag         h1|h2|h3|h4|h5|h6</code></dt>
            <dd>Which HTML heading level should be used.  Defaults to <code>h1</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <Heading>Sample Heading</Heading>
          </div>
          <pre><code className="html hljs xml">
            {"<Heading>\n  Sample Heading\n</Heading>"}
          </code></pre>

          <h3>Different sizes</h3>
          <div className="example">
            <Heading size="large" strong={true} tag="h3">Sample Heading</Heading>
          </div>
          <pre><code className="html">
            {"<Heading size=\"large\" strong={true} tag=\"h3\">\n  Sample Heading\n</Heading>"}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = HeadingDoc;
