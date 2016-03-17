// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Markdown = require('grommet/components/Markdown');

const TEXT = `
# H1

Paragraph [link](/).

## H2

![image](img/carousel-1.png)
`;

var MarkdownDoc = React.createClass({

  render: function() {
    var inline = [
      "<Markdown content={markdown text} />"
    ].join('\n');

    return (
      <DocsArticle title="Markdown" colorIndex="neutral-4">

        <p>Render <a href="http://daringfireball.net/projects/markdown/">markdown</a> content
          using Grommet components.</p>
        <pre><code className="javascript">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>components   {'{Component: { props: {<props>}}'}</code></dt>
            <dd>Set Grommet properties for Grommet components used in
              rendering. Possible components are 'Anchor', 'Heading',
              'Image', and 'Paragraph'</dd>
            <dt><code>content      {'{markdown text}'}</code></dt>
            <dd>The markdown text to render.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <p>Based on the following markdown text:</p>
          <pre><code className="text">{TEXT}</code></pre>

          <h3>Default</h3>
          <Markdown content={TEXT} />
          <pre><code className="javascript">
            {'<Markdown content={TEXT} />'}
          </code></pre>

        <h3>Custom props</h3>
          <Markdown content={TEXT} components={{
            'Heading': { props: {strong: true} },
            'Paragraph': { props: {size: 'large'} },
            'Image': { props: {size: 'small'} }
          }} />
          <pre><code className="javascript">
            {`
<Markdown content={TEXT} components={{
  'Heading': { props: {strong: true} },
  'Paragraph': { props: {size: 'large'} },
  'Image': { props: {size: 'small'} }
}} />
            `}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = MarkdownDoc;
