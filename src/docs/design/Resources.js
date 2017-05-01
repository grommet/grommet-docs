 // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

const ROOT = "https://github.com/grommet/grommet-design/raw/master";

export default class Resources extends Component {

  render () {
    return (
      <DocsArticle title="Resources">
        <p>
          Here you will find the downloads for creating designs based on this
          application style guide.  Each of these provide the basic elements of
          the style including checkboxes, buttons, text fields,
          and status icons.
        </p>

        <section id="grommet">
          <h2>Grommet</h2>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="grommet-sk-general"
                href={"https://github.com/grommet/grommet-design/" +
                  "raw/master/grommet/" +
                  "grommet-sticker-sheet-apps-general-0-3.sketch"}
                target="_blank">General Sticker Sheet for Applications v0.3</a>
            </li>
          </ul>

        </section>

        <section id="hpe">
          <h2>Hewlett Packard Enterprise</h2>

          <h4>Sketch</h4>

          <ul>
            <li>
              <a id="hpe-components-sketch"
                href={`${ROOT}/hpe/hpe-components-1.0.sketch`}
                target="_blank">Components Sticker Sheet v1.0</a>
            </li>
            <li>
              <a id="hpe-visualizations-sketch"
                href={`${ROOT}/hpe/hpe-visualizations-1.0.sketch`}
                target="_blank">Visualizations Sticker Sheet v1.0</a>
            </li>
            <li>
              <a id="hpe-icons-sketch"
                href={`${ROOT}/hpe/hpe-icons-1.1.sketch`}
                target="_blank">Icons Sticker Sheet v1.1</a>
            </li>
            <li>
              <a id="hpe-templates-sketch"
                href={`${ROOT}/hpe/hpe-templates-0.9.sketch`}
                target="_blank">Templates Sticker Sheet v0.9</a>
            </li>
          </ul>

          <h4>PDF</h4>

          <ul>
            <li>
              <a id="hpe-components-pdf"
                href={`${ROOT}/hpe/hpe-components-1.0.pdf`}
                target="_blank">Components Sticker Sheet v1.0</a>
            </li>
            <li>
              <a id="hpe-visualizations-pdf"
                href={`${ROOT}/hpe/hpe-visualizations-1.0.pdf`}
                target="_blank">Visualizations Sticker Sheet v1.0</a>
            </li>
            <li>
              <a id="hpe-icons-pdf"
                href={`${ROOT}/hpe/hpe-icons-1.1.pdf`}
                target="_blank">Icons Sticker Sheet v1.1</a>
            </li>
            <li>
              <a id="hpe-templates-pdf"
                href={`${ROOT}/hpe/hpe-templates-0.9.pdf`}
                target="_blank">Templates Sticker Sheet v0.9</a>
            </li>
          </ul>

          <h4>Other Document Types</h4>
          <p>
            To find Adobe Illustrator, Balsamiq, and Axure files please visit
            the <a href={`${ROOT}/hpe`} target="_blank">Archive</a>.
            These files do not represent the latest design
            direction of Hewlett Packard Enterprise.
          </p>

        </section>

        <section id="hpi">
          <h2>HP Inc.</h2>

          <h4>Adobe Illustrator</h4>

          <ul>
            <li>
              <a id="hpi-ai-general"
                href={`${ROOT}/hpi/hpi-sticker-sheet-apps-general-0-3.ai`}
                target="_blank">General Sticker Sheet v0.3</a>
            </li>
          </ul>

          <h4>Adobe PDF</h4>

          <ul>
            <li>
             <a id="hpi-ai-general-pdf"
                href={`${ROOT}/hpi/hpi-sticker-sheet-apps-general-0-3.pdf`}
                target="_blank">General Sticker Sheet v0.3</a>
            </li>
          </ul>

        </section>
      </DocsArticle>
    );
  }
};
