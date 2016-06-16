var React = require('react');
var DocsArticle = require('../../components/DocsArticle');
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
var Section = require('grommet/components/Section');
var Header = require('grommet/components/Header');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
var Paragraph = require('grommet/components/Paragraph');

var inline =
      "<Section>\n" +
      "  ...\n" +
      "</Section>";

export default () => {
  return (
    <DocsArticle title="Section" colorIndex="neutral-3">

      <p>Responsively grouping related contents inside a page.</p>
      <pre><code className="html hljs xml">{inline}</code></pre>

      <section>
        <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are available.</p>
      </section>

      <section>
        <Example name="Example" code={
          <Section>
            <Header align="center" justify="between">
              <h3>Sample Content</h3>
              <Menu direction="row">
                <Anchor href="">Link 1</Anchor>
                <Anchor href="">Link 2</Anchor>
              </Menu>
            </Header>
            <Paragraph>Lorem ipsum ...</Paragraph>
          </Section>
        } />
      </section>

    </DocsArticle>
  );
};
