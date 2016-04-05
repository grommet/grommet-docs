var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Split = require('grommet/components/Split');
var Sidebar = require('grommet/components/Sidebar');
var Article = require('grommet/components/Article');
var Header = require('grommet/components/Header');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
var Section = require('grommet/components/Section');

var inline =
      "<Split>\n" +
      "  ...\n" +
      "</Split>";

var SplitDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Split" colorIndex="neutral-3">

        <p>A full height container with two children laid out horizontally.
        Typical uses involve placing
        a <Link to={this.context.routePrefix + "sidebar"}>Sidebar</Link> on
        the left for primary navigation and then main content on the right.
        The right side might contain a separate Split component to provide
        further content depth. Typically, you will want the top Split to be
        a direct child of
        the <Link to={this.context.routePrefix + "app"}>App</Link> component
        as this will provide the best responsive behavior across devices.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>fixed      true|false</code></dt>
            <dd>Whether each side should scroll independently.</dd>
            <dt><code>flex       both|left|right</code></dt>
            <dd>Which side to give flexible space to.
              The default value is 'both'.</dd>
            <dt><code>onResponsive   {"function (columns) {...}"}</code></dt>
            <dd>Function that will be called when the display area changes.
              When space is limited the 'columns' parameter will be set to
              'single'. Otherwise 'columns' will be set to 'multiple'.</dd>
            <dt><code>priority   left|right</code></dt>
            <dd>Which side to prioritize when space is limited.
              The default value is 'right'.</dd>
            <dt><code>separator  true|false</code></dt>
            <dd>Whether to include a separator between the children.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Split>
              <Sidebar colorIndex="neutral-1">
                <Header pad={{horizontal: 'medium'}}>Header One</Header>
                <Menu primary={true}>
                  <Anchor>Navigation 1</Anchor>
                  <Anchor>Navigation 2</Anchor>
                  <Anchor>Navigation 3</Anchor>
                </Menu>
              </Sidebar>
              <Article>
                <Header pad={{horizontal: 'medium'}}>Header Two</Header>
                <Section pad="medium">Content</Section>
              </Article>
            </Split>
          </div>
          <pre><code className="html hljs xml">
            {"<Split>\n" +
            "  <Sidebar colorIndex=\"neutral-1\">\n" +
            "    <Header pad={{horizontal: 'medium'}}>Header One</Header>\n" +
            "    <Menu primary={true}>\n" +
            "      <Anchor>Navigation 1</Anchor>\n" +
            "      ...\n" +
            "    </Menu>\n" +
            "  </Sidebar>\n" +
            "  <Article>\n" +
            "    <Header pad={{horizontal: 'medium'}}>Header Two</Header>\n" +
            "    <Section pad=\"medium\">Content</Section>\n" +
            "  </Article>\n" +
            "</Split>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = SplitDoc;
