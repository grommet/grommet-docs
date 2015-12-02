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

        <p>The following sections are divided by theme (Grommet,
          Hewlett-Packard Enterprise, and HP Inc). Each theme has all
          the resources for each design tool:
          <a href="http://www.adobe.com/products/illustrator.html">
            Adobe Illustrator
          </a>,
          <a href="http://bohemiancoding.com/sketch/">Sketch</a>,
          <a href="http://www.axure.com">Axure</a>, and
          <a href="http://www.balsamiq.com">Balsamiq</a>.
        </p>

        <section id="grommet">
          <h2>Grommet</h2>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="grommet-sk-general"
                href="https://github.com/grommet/grommet-design/raw/master/grommet/grommet-sticker-sheet-apps-general.sketch"
                target="_blank">General Sticker Sheet for Applications</a>
            </li>
          </ul>

        </section>

        <section id="hpe">
          <h2>Hewlett Packard Enterprise</h2>

          <h4>Adobe Illustrator</h4>

          <ul>
            <li>
              <a id="hpe-ai-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general.ai"
                target="_blank">General Sticker Sheet for Applications</a>
              (<a id="hpe-ai-general-pdf" href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-app-templates"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-app-templates.ai"
                target="_blank">Application Templates Sticker Sheet </a>
              (<a id="hpe-ai-app-templates-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-app-templates.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-data"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data.ai"
                target="_blank">Data Sticker Sheet for Applications</a>
              (<a id="hpe-ai-data-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-icons"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-functional-icons.ai"
                target="_blank">Functional Icons Sticker Sheet</a>
              (<a id="hpe-ai-icons-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-functional-icons.pdf"
                target="_blank">pdf</a>)
            </li>
            <li>
              <a id="hpe-ai-classic"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-classic.ai"
                target="_blank">Classic Sticker Sheet for Applications</a>
              (<a id="hpe-ai-classic-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-classic.pdf"
                target="_blank">pdf</a>)
            </li>
          </ul>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="hpe-sk-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general.sketch"
                target="_blank">General Sticker Sheet for Applications</a>
            </li>
                <li>
              <a id="hpe-sk-data"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-data.sketch"
                target="_blank">Data Sticker Sheet for Applications</a>
            </li>
          </ul>

          <h4>Axure</h4>

          <ul>
            <li>
              <a id="hpe-ax-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general.rplib"
                target="_blank">Axure Stencils for Applications</a>
            </li>
          </ul>

          <h4>Balsamiq</h4>

          <ul>
            <li>
              <a id="hpe-bq-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpe/hpe-sticker-sheet-apps-general.bmpr"
                target="_blank">Balsamiq Assets for Applications</a>
            </li>
          </ul>

        </section>

        <section id="hpi">
          <h2>HP Inc.</h2>

          <h4>Adobe Illustrator</h4>

          <ul>
            <li>
              <a id="hpi-ai-general"
                href="https://github.com/grommet/grommet-design/raw/master/hpi/hpi-sticker-sheet-apps-general.ai"
                target="_blank">General Sticker Sheet</a>
              (<a id="hpi-ai-general-pdf"
                href="https://github.com/grommet/grommet-design/raw/master/hpi/hpi-sticker-sheet-apps-general.pdf"
                target="_blank">pdf</a>)
            </li>
          </ul>

        </section>
      </DocsArticle>
    );
  }
});

module.exports = Resources;
