var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Sidebar = require('grommet/components/Sidebar');
var Header = require('grommet/components/Header');
var Title = require('grommet/components/Title');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
var Button = require('grommet/components/Button');
var CloseIcon = require('grommet/components/icons/base/Close');

var inline =
      "<Sidebar>\n" +
      "  ...\n" +
      "</Sidebar>";

var SidebarDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _onClose: function () {
    // no-op
  },

  render: function() {
    return (
      <DocsArticle title="Sidebar" colorIndex="neutral-3">

        <p>A full height, fixed width container. Usually a Sidebar is placed
        inside a <Link to={this.context.routePrefix + "split"}>Split</Link> component.
        A typical usage is for primary navigation, in which case it typically contains
        a <Link to={this.context.routePrefix + "header"}>Header</Link> and
        a <Link to={this.context.routePrefix + "menu"}>Menu</Link>. The Sidebar may
        or may not be always visible. If it comes and goes, it is typically
        controlled via a <Link to={this.context.routePrefix + "title"}>Title</Link> component
        inside a <Link to={this.context.routePrefix + "header"}>Header</Link> component
        residing in the other side of the Split.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>fixed      true|false</code></dt>
            <dd>Whether any contained Header and Footer should be fixed to
              the top and bottom.</dd>
            <dt><code>size       small|medium|large</code></dt>
            <dd>The size of the Sidebar. Defaults to <code>medium</code>.</dd>
            <dt><code>full       true|false</code></dt>
            <dd>Whether the sidebar should take up the full browser height or not.  Default is true.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> area also available.</p>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Sidebar colorIndex="light-2">
              <Header pad="medium" justify="between">
                <Title>Title</Title>
                <Button icon={<CloseIcon />} onClose={this._onClose} />
              </Header>
              <Menu primary={true}>
                <Anchor>Navigation 1</Anchor>
                <Anchor>Navigation 2</Anchor>
                <Anchor>Navigation 3</Anchor>
              </Menu>
            </Sidebar>
          </div>
          <pre><code className="html hljs xml">
            {"<Sidebar colorIndex=\"light-2\">\n" +
            "  <Header pad=\"medium\">\n" +
            "    <Title>Title</Title>\n" +
            "  </Header>\n" +
            "  <Menu primary={true}>\n" +
            "    <Anchor>Navigation 1</Anchor>\n" +
            "    ...\n" +
            "  </Menu>\n" +
            "</Sidebar>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = SidebarDoc;
