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
          <a id="grommet-components-sketch"
            href={`${ROOT}/grommet/grommet-components-1.1.sketch`}
            target="_blank">Components Sticker Sheet v1.1 (Sketch)</a>
        </section>

        <section id="hpe">
        <h2>Hewlett Packard Enterprise</h2>
          <a id="hpe-components-sketch"
            href={`${ROOT}/hpe/hpe-components-1.1.sketch`}
            target="_blank">Components Sticker Sheet v1.1 (Sketch)</a>
          <a id="hpe-visualizations-sketch"
            href={`${ROOT}/hpe/hpe-visualizations-1.0.sketch`}
            target="_blank">Visualizations Sticker Sheet v1.0 (Sketch)</a>
          <a id="hpe-icons-sketch"
            href={`${ROOT}/hpe/hpe-icons-1.6.sketch`}
            target="_blank">Icons Sticker Sheet v1.6 (Sketch)</a>
          <a id="hpe-templates-sketch"
            href={`${ROOT}/hpe/hpe-templates-1.0.sketch`}
            target="_blank">Templates Sticker Sheet v1.0 (Sketch)</a>
        </section>

        <section id="aruba">
        <h2>Aruba</h2>
          <a id="aruba-components-sketch"
            href={`${ROOT}/aruba/aruba-components-1.0.sketch`}
            target="_blank">Components Sticker Sheet v1.0 (Sketch)</a>
        </section>

        <section id="micro-focus">
        <h2>Micro Focus</h2>
          <a id="micro-focus-components-sketch"
            href={`${ROOT}/micro-focus/micro-focus-components-1.0.sketch`}
            target="_blank">Components Sticker Sheet v1.0 (Sketch)</a>
        </section>

        <section id="dxc">
        <h2>DXC</h2>
          <a id="dxc-components-sketch"
            href={`${ROOT}/dxc/dxc-components-1.0.sketch`}
            target="_blank">Components Sticker Sheet v1.0 (Sketch)</a>
        </section>

        <section id="hpi">
        <h2>HP Inc.</h2>
          <a id="hpi-ai-general"
            href={`${ROOT}/hpi/hpi-sticker-sheet-apps-general-0-3.ai`}
            target="_blank">General Sticker Sheet v0.3 (Adobe Illustrator)</a>
        </section>
      </DocsArticle>
    );
  }
};
