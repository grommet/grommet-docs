// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../DocsArticle');

var Resources = React.createClass({
  render: function () {
    return (
      <DocsArticle title="Resources" colorIndex="neutral-4">
        <p>
          Here you will find the downloads for creating designs based on this
          application style guide.  Each of these provide the basic elements of
          the style including checkboxes, buttons, text fields,
          and status icons.
        </p>

        <p>The following sections are divided by theme (Grommet, Hewlett-Packard Enterprise, and HP Inc). Each theme has all the resources for each design tool: <a href="http://www.adobe.com/products/illustrator.html">Adobe Illustrator</a>, <a href="http://bohemiancoding.com/sketch/">Sketch</a>, <a href="http://www.axure.com">Axure</a>, and <a href="http://www.balsamiq.com">Balsamiq</a>.
        </p>

        <section id="grommet">
          <h2>Grommet</h2>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="grommet-sk-general"
                href="https://github.com/grommet/grommet-design/raw/master/grommet/grommet-sticker-sheet-apps-general-0-2.sketch"
                target="_blank">General Sticker Sheet for Applications v0.2</a>
            </li>
          </ul>

        </section>

        <section id="hpe">
          <h2>Hewlett Packard Enterprise</h2>

          <h4>Adobe Illustrator</h4>

          <ul>
            <li>
              <a id="hpe-ai-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general-0-9-3.ai"
                target="_blank">General Sticker Sheet for Applications v0.9.3</a>
              (<a id="hpe-ai-general-pdf" href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general-0-9-3.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-app-templates"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-app-templates-0-7.ai"
                target="_blank">Application Templates Sticker Sheet v0.7</a>
              (<a id="hpe-ai-app-templates-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-app-templates-0-7.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-data"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data-0-5.ai"
                target="_blank">Data Sticker Sheet for Applications v0.5</a>
              (<a id="hpe-ai-data-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data-0-5.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-icons"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-functional-icons-0-2.ai"
                target="_blank">Functional Icons Sticker Sheet v0.2</a>
              (<a id="hpe-ai-icons-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-functional-icons-0-2.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-classic"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-classic-0-6.ai"
                target="_blank">Classic Sticker Sheet for Applications v0.6</a>
              (<a id="hpe-ai-classic-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-classic-0-6.pdf"
                target="_blank">pdf</a>)
            </li>
          </ul>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="hpe-sk-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general-0-9-3.sketch"
                target="_blank">General Sticker Sheet for Applications v0.9.3</a>
            </li>
                <li>
              <a id="hpe-sk-data"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data-0-5.sketch"
                target="_blank">Data Sticker Sheet for Applications v0.5</a>
            </li>
          </ul>

          <h4>Axure</h4>

          <ul>
            <li>
              <a id="hpe-ax-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general-0-9-3.rplib"
                target="_blank">Axure Stencils for Applications v0.9.3</a>
            </li>
          </ul>

          <h4>Balsamiq</h4>

          <ul>
            <li>
              <a id="hpe-bq-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general-0-6.bmpr"
                target="_blank">Balsamiq Assets for Applications v0.6</a>
            </li>
          </ul>

        </section>

        <section id="hpi">
          <h2>HP Inc.</h2>

          <h4>Adobe Illustrator</h4>

          <ul>
            <li>
              <a id="hpi-ai-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpi/hpi-sticker-sheet-apps-general-0-3.ai"
                target="_blank">General Sticker Sheet v0.3</a>
              (<a id="hpi-ai-general-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpi/hpi-sticker-sheet-apps-general-0-3.pdf"
                target="_blank">pdf</a>)
            </li>
          </ul>

        </section>
      </DocsArticle>
    );
  }
});

module.exports = Resources;
