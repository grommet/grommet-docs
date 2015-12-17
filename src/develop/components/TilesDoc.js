// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { Link } from 'react-router';
import DocsArticle from '../../DocsArticle';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

class TileDoc extends Component {

  constructor () {
    super();
    this._onClick = this._onClick.bind(this);
  }

  _onClick () {
    // No-op
  }

  // options supports:
  //   count: #
  //   colorIndex: <color>
  //   separator: true|false
  //   bottom: button|menu
  _renderRichTiles (options={}) {
    var richTiles = [];
    var index = 1;
    while (index <= (options.count || 8)) {
      var bottom;
      if ('button' === options.bottom) {
        bottom = <Button fill={true} label="Action" onClick={this._onClick} />;
      } else if ('menu' === options.bottom) {
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

      var colorIndex;
      if (options.colorIndex) {
        if ('random' === options.colorIndex) {
          colorIndex = 'neutral-' + index;
        } else {
          colorIndex = options.colorIndex;
        }
      }

      richTiles.push(
        <Tile key={index} align="start"
          separator={options.separator ? 'top' : null}
          colorIndex={colorIndex}>
          <Header tag="h4" size="small" pad={{horizontal: 'small'}}>
            <strong>{"Tile " + index}</strong>
          </Header>
          <Box pad="small">
            <p>Tile summary content. One or two lines.</p>
          </Box>
          {bottom}
        </Tile>
      );
      index += 1;
    }
    return richTiles;
  }

  render () {
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

    return (
      <DocsArticle title="Tile(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized tiles of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Tiles Options</h2>
          <dl>
            <dt><code>fill        true|false</code></dt>
            <dd>Whether the contents expand to fill all of the available space.</dd>
            <dt><code>flush       true|false</code></dt>
            <dd>Whether the contents are flush with the left and right edges or not.
              Defaults to true. When flush, there is no padding around the outside
              or between the contained tiles.</dd>
            <dt><code>onMore      {"function () {...}"}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of the contained tiles. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available for Tiles.</p>
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
              <Tile>First</Tile>
              <Tile>Second</Tile>
              <Tile>Third</Tile>
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles>\n  <Tile>\n    ...\n  </Tile>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Not flush, centered</h3>
          <div className="example">
            <Tiles flush={false} justify="center" colorIndex="light-2" full="horizontal">
              {this._renderRichTiles({
                bottom: 'menu', colorIndex: 'light-1'})}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles flush={false} justify=\"center\" colorIndex=\"light-2\" full=\"horizontal\">\n  <Tile colorIndex=\"light-1\">\n    ...\n  </Tile>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Fill, Not flush</h3>
          <div className="example">
            <Tiles fill={true} flush={false}>
              {this._renderRichTiles({separator: true, bottom: 'button'})}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles fill={true}>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Fill, flush</h3>
          <div className="example">
            <Tiles fill={true}>
              {this._renderRichTiles({colorIndex: 'random'})}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles fill={true}>\n  ...\n</Tiles>"}
          </code></pre>

          <h3>Row</h3>
          <div className="example">
            <Tiles fill={true} direction="row" full="horizontal">
              {this._renderRichTiles()}
            </Tiles>
          </div>
          <pre><code className="html hljs xml">
            {"<Tiles fill={true} direction=\"row\">\n  ...\n</Tiles>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
}

module.exports = TileDoc;
