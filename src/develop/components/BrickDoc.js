// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Bricks = require('grommet/components/Bricks');
var Brick = require('grommet/components/Brick');
var Header = require('grommet/components/Header');
var Footer = require('grommet/components/Footer');
var Menu = require('grommet/components/Menu');
var Button = require('grommet/components/Button');

var BrickDoc = React.createClass({

  _onClick: function () {
    // No-op
  },

  render: function() {
    var inline =
      "<Bricks>\n" +
      "  <Brick>\n" +
      "    <Header>\n" +
      "      ...\n" +
      "    </Header>\n" +
      "    ...\n" +
      "    <Footer>\n" +
      "      ...\n" +
      "    </Footer>\n" +
      "  </Brick>\n" +
      "  ...\n" +
      "</Bricks>";

    var richBricks = [];
    var index = 1;
    while (index <= 8) {
      var bottom;
      if (index % 3 === 0) {
        bottom = <Button fill={true} label="Action" onClick={this._onClick} />;
      } else {
        bottom = (
          <Footer justify="between">
            <span></span>
            <Menu inline={false} dropAlign={{bottom: 'bottom', right: 'right'}}>
              <a>action 1</a>
              <a>action 2</a>
              <a>action 3</a>
            </Menu>
          </Footer>
        );
      }

      richBricks.push(
        <Brick key={index} align="start" separator={index % 2 ? 'top' : null}>
          <Header tag="h4" textAlign="center">
            {"Brick " + index}
          </Header>
          <p>Top level summary content.</p>
          {bottom}
        </Brick>
      );
      index += 1;
    }

    return (
      <DocsArticle title="Brick(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized Bricks of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Bricks Options</h2>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation of the contained Bricks.</dd>
            <dt><code>fill        true|false</code></dt>
            <dd>Whether the contents expand to fill all of the available space.</dd>
            <dt><code>flush       true|false</code></dt>
            <dd>Whether the contents are flush with the left and right edges or not.
              Defaults to true. When flush, there is no padding around the outside
              or between the contained Bricks.</dd>
            <dt><code>onMore         {"function () {...}"}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of the contained Bricks. Defaults to <code>medium</code>.</dd>
            <dt><code>small       true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Brick Options</h2>
          <dl>
            <dt><code>wide        true|false</code></dt>
            <dd>Whether the Brick should fill the full width of the Bricks
            component that contains it.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available for Brick.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <p>These examples show a wide variety of Brick types within the same
          Bricks. In practice, each Brick should have similar styling within
          the Bricks. Included here are Headers, Footer, Buttons, and Menus.</p>

          <h3>Simple</h3>
          <div className="example">
            <Bricks>
              <Brick>
                First
              </Brick>
              <Brick>
                Second
              </Brick>
              <Brick>
                Third
              </Brick>
            </Bricks>
          </div>
          <pre><code className="html hljs xml">
            {"<Bricks>\n  <Brick>\n    ...\n  </Brick>\n  ...\n</Bricks>"}
          </code></pre>

        <h3>Containing other components</h3>
          <div className="example">
            <Bricks>
              {richBricks}
            </Bricks>
          </div>
          <pre><code className="html hljs xml">
            {"<Bricks>\n  <Brick>\n    ...\n  </Brick>\n  ...\n</Bricks>"}
          </code></pre>

          <h3>Fill</h3>
          <div className="example">
            <Bricks fill={true}>
              {richBricks}
            </Bricks>
          </div>
          <pre><code className="html hljs xml">
            {"<Bricks fill={true}>\n  ...\n</Bricks>"}
          </code></pre>

          <h3>Row</h3>
          <div className="example">
            <Bricks fill={true} direction="row">
              {richBricks}
            </Bricks>
          </div>
          <pre><code className="html hljs xml">
            {"<Bricks fill={true} direction=\"row\">\n  ...\n</Bricks>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = BrickDoc;
