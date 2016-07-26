// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../components/DocsArticle');
var Bricks = require('grommet/components/Bricks');
var Brick = require('grommet/components/Brick');
var Box = require('grommet/components/Box');
var GrommetLogo = require('grommet/components/icons/Grommet');
var A11y = require('../utils/a11y');

Brick.displayName = 'Brick';
Bricks.displayName = 'Bricks';
Box.displayName = 'Box';
GrommetLogo.displayName = 'GrommetLogo';

function convertBrickToString(brickJSX) {
  return jsxToString(brickJSX);
}

var BrickDoc = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Brick');
  },

  _onClick: function () {
    // No-op
  },

  _renderBrickCode(heading, brickJSX) {
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
  },

  render: function() {

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
});

module.exports = BrickDoc;
