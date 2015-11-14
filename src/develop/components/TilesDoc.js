// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');
var Header = require('grommet/components/Header');
var Footer = require('grommet/components/Footer');
var Menu = require('grommet/components/Menu');
var Button = require('grommet/components/Button');

var TileDoc = React.createClass({

  _onClick: function () {
    // No-op
  },

  render: function() {
    var inline =
      "<Tiles>\n" +
      "  <Tile>\n" +
      "    <Header>\n" +
      "      ...\n" +
      "    </Header>\n" +
      "    ...\n" +
      "    <Footer>\n" +
      "      ...\n" +
      "    </Footer>\n" +
      "  </Tile>\n" +
      "  ...\n" +
      "</Tiles>";

    var richTiles = [];
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

      richTiles.push(
        <Tile key={index} align="start" separator={index % 2 ? 'top' : null}>
          <Header tag="h4" textAlign="center">
            {"Tile " + index}
          </Header>
          <p>Top level summary content.</p>
          {bottom}
        </Tile>
      );
      index += 1;
    }

    return (
      <DocsArticle title="Tile(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized tiles of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Tiles Options</h2>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation of the contained tiles.</dd>
            <dt><code>fill        true|false</code></dt>
            <dd>Whether the contents expand to fill all of the available space.</dd>
            <dt><code>flush       true|false</code></dt>
            <dd>Whether the contents are flush with the left and right edges or not.
              Defaults to true. When flush, there is no padding around the outside
              or between the contained tiles.</dd>
            <dt><code>onMore         {"function () {...}"}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of the contained tiles. Defaults to <code>medium</code>.</dd>
            <dt><code>small       true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Tile Options</h2>
          <dl>
            <dt><code>wide        true|false</code></dt>
            <dd>Whether the tile should fill the full width of the Tiles
            component that contains it.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available for Tile.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <p>These examples show a wide variety of Tile types within the same
          Tiles. In practice, each Tile should have similar styling within
          the Tiles. Included here are Headers, Footer, Buttons, and Menus.</p>

          <h3>Simple</h3>
          <div className="example">
            <Tiles>
              <Tile>
                First
              </Tile>
              <Tile>
                Second
              </Tile>
              <Tile>
                Third
              </Tile>
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles>\n  <Tile>\n    ...\n  </Tile>\n  ...\n</Tiles>"}
          </code></pre>

        <h3>Containing other components</h3>
          <div className="example">
            <Tiles>
              {richTiles}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles>\n  <Tile>\n    ...\n  </Tile>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Fill</h3>
          <div className="example">
            <Tiles fill={true}>
              {richTiles}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles fill={true}>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Row</h3>
          <div className="example">
            <Tiles fill={true} direction="row">
              {richTiles}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles fill={true} direction=\"row\">\n  ...\n</Tiles>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TileDoc;
