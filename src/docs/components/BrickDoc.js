// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../components/DocsArticle';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';
import GrommetLogo from 'grommet/components/icons/Grommet';

Brick.displayName = 'Brick';
Bricks.displayName = 'Bricks';
Box.displayName = 'Box';
GrommetLogo.displayName = 'GrommetLogo';

function convertBrickToString(brickJSX) {
  return jsxToString(brickJSX);
}

export default class BrickDoc extends Component {

  _onClick () {
    // No-op
  }

  _renderBrickCode (heading, brickJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <Box className="example">
          {brickJSX}
        </Box>
        <pre><code className="html hljs xml">
          {convertBrickToString(brickJSX)}
        </code></pre>
      </div>
    );
  }

  render () {

    var inline =
      "<Bricks>\n" +
      "  <Brick>\n" +
      "    ...\n" +
      "  </Brick>\n" +
      "  ...\n" +
      "</Bricks>";

    var simpleBrick = (
      <Bricks>
        <Brick label="First" />
        <Brick label="Second" />
        <Brick label="Third" />
      </Bricks>
    );

    var varyingBrick = (
      <Bricks>
        <Brick colorIndex="neutral-1" type="large" href="http://www.grommet.io/" texture="/img/carousel-1.png" />
        <Brick label="Second" colorIndex="neutral-2" type="tall" />
        <Brick label="Third" colorIndex="neutral-3">
          <GrommetLogo size="large" />
        </Brick>
        <Brick label="Fourth" colorIndex="neutral-4" />
      </Bricks>
    );

    return (
      <DocsArticle title="Brick(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized Bricks of content.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Brick Options</h2>
          <dl>
            <dt><code>label        string</code></dt>
            <dd>The label of the Brick.</dd>
          </dl>
          <dl>
            <dt><code>href        {"{location}"}</code></dt>
            <dd>The hyperlink reference that the Brick links to.</dd>
          </dl>
          <dl>
            <dt><code>type        small|large|wide|tall</code></dt>
            <dd>The shape type of the Brick.  Defaults to <code>small</code>.</dd>
          </dl>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color of the Brick.  For example: <code>"neutral-1"</code></dd>
          </dl>
          <dl>
            <dt><code>texture      {"{url}"}</code></dt>
            <dd>A texture image to apply to the background.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderBrickCode('Simple', simpleBrick)}
          {this._renderBrickCode('Varying Colors, Sizes, and Content', varyingBrick)}
        </section>

      </DocsArticle>
    );
  }
};
