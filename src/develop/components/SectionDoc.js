var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Section = require('grommet/components/Section');
var Header = require('grommet/components/Header');
var Menu = require('grommet/components/Menu');
var A11y = require('../../utils/a11y');

var inline =
      "<Section>\n" +
      "  ...\n" +
      "</Section>";

var SectionDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Section');
  },

  render: function() {
    return (
      <DocsArticle title="Section" colorIndex="neutral-3">

        <p>Responsively grouping related contents inside a page.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <div className="example">
            <Section>
              <Header>
                <h3>Sample Content</h3>
                <Menu direction="row">
                  <span>Link 1</span>
                  <span>Link 2</span>
                </Menu>
              </Header>
              <p>Lorem ipsum ...
              </p>
            </Section>
          </div>
          <pre><code className="html hljs xml">
            {"<Section>\n  <Header>\n    <h3>Sample Content</h3>\n    <Menu direction=\"row\">\n      ...\n    </Menu>\n  </Header>\n  <p>\n    Lorem ipsum ...\n  </p>\n</Section>"}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = SectionDoc;
