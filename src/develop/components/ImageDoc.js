var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Image = require('grommet/components/Image');

var inline =
      "<Image src=\"...\" />";

var ImageDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Image" colorIndex="neutral-3">

        <p>An image.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>full       true|horizontal|vertical|false</code></dt>
            <dd>Whether the width and/or height should take the full viewport size.</dd>
            <dt><code>size       small|medium|large</code></dt>
            <dd>The size of the Paragraph text. Defaults to <code>medium</code>.</dd>
            <dt><code>src        {"{string}"}</code></dt>
            <dd>The actual image file source.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
          <Image src="img/carousel-1.png" />
          </div>
          <pre><code className="html hljs xml">
            {"<Image src=\"...\" />"}
          </code></pre>

          <h3>Small</h3>
          <div className="example">
          <Image src="img/carousel-1.png" size="small" />
          </div>
          <pre><code className="html hljs xml">
            {"<Image src=\"...\" size=\"small\" />"}
          </code></pre>

          <h3>Large</h3>
          <div className="example">
          <Image src="img/carousel-1.png" size="large" />
          </div>
          <pre><code className="html hljs xml">
            {"<Image src=\"...\" size=\"large\" />"}
          </code></pre>

          <h3>Full horizontal</h3>
          <div className="example">
          <Image src="img/carousel-1.png" full="horizontal" />
          </div>
          <pre><code className="html hljs xml">
            {"<Image src=\"...\" full=\"horizontal\" />"}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ImageDoc;
