// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Carousel = require('grommet/components/Carousel');
var Box = require('grommet/components/Box');

var TileDoc = React.createClass({

  render: function() {
    var inline =
      "<Carousel>\n" +
      "  <img />\n" +
      "  <img />\n" +
      "  ...\n" +
      "</Carousel>";

    return (
      <DocsArticle title="Carousel" colorIndex="neutral-3">

        <p>Image carousel.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>autoplay            true|false</code></dt>
            <dd>Whether the carousel should play automatically or not.  Default: true.</dd>
            <dt><code>autoplaySpeed       {"{number}"}</code></dt>
            <dd>How long the carousel should stay on each slide, in milliseconds.  Default: 5000 (5 seconds).</dd>
            <dt><code>infinite            true|false</code></dt>
            <dd>Whether the carousel should scroll back to the first slide when you get to the end, or stop at the last slide.  Default: true.</dd>
            <dt><code>persistentNav       true|false</code></dt>
            <dd>Whether the navigational elements should always be shown, or only show when the user mouses over the carousel.  Default: true.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Carousel>
              <img src="img/carousel-1.png" />
              <img src="img/carousel-2.png" />
              <Box pad="large" colorIndex="neutral-3">
                <Box pad="medium" colorIndex="neutral-2">
                  Content inside of a Box element.
                </Box>
              </Box>
            </Carousel>
          </div>
          <pre><code className="html hljs xml">
            {"<Carousel>\n  <img />\n    ...\n</Carousel>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TileDoc;
