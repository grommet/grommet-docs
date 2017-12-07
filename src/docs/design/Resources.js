 // (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

const ROOT = "https://github.com/grommet/grommet-design/raw/master";

export default class Resources extends Component {

  render () {
    return (
      <DocsArticle title="Resources">
        <p>
          Here you will find the downloads for creating designs based on the Grommet
          application style guide.  Each component sticker sheet provides the basic elements of
          the style including checkboxes, buttons, text fields, and status icons. Each template
          sticker sheet provides a set of commonly used layouts that are built 
          using the components. 
        </p>

        <section id="grommet">
          <h2>Grommet</h2>

          <ul>
            <li>Components Sticker Sheet (
                <a id="grommet-components-sketch"
                  href={`${ROOT}/grommet/grommet-components-1.1.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="grommet-components-pdf"
                href={`${ROOT}/grommet/grommet-components-1.1.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Templates Sticker Sheet (
                <a id="grommet-templates-sketch"
                  href={`${ROOT}/grommet/grommet-templates-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="grommet-templates-pdf"
                href={`${ROOT}/grommet/grommet-templates-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

        </section>

        <section id="hpe">
          <h2>Hewlett Packard Enterprise</h2>

          <ul>
            <li>Components Sticker Sheet (
                <a id="hpe-components-sketch"
                  href={`${ROOT}/hpe/hpe-components-1.1.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="hpe-components-pdf"
                href={`${ROOT}/hpe/hpe-components-1.1.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Visualizations Sticker Sheet (
                <a id="hpe-visualizations-sketch"
                  href={`${ROOT}/hpe/hpe-visualizations-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="hpe-visualizations-pdf"
                href={`${ROOT}/hpe/hpe-visualizations-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Icons Sticker Sheet (
                <a id="hpe-icons-sketch"
                  href={`${ROOT}/hpe/hpe-icons-1.6.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="hpe-icons-pdf"
                href={`${ROOT}/hpe/hpe-icons-1.6.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Templates Sticker Sheet (
                <a id="hpe-templates-sketch"
                  href={`${ROOT}/hpe/hpe-templates-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="hpe-templates-pdf"
                href={`${ROOT}/hpe/hpe-templates-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

          <h4>Other Document Types</h4>
          <p>
            To find Adobe Illustrator, Balsamiq, and Axure files please visit
            the <a href={`${ROOT}/hpe/archive`} target="_blank">Archive</a>.
            These files do not represent the latest design
            direction of Hewlett Packard Enterprise.
          </p>

        </section>

        <section id="aruba">
          <h2>Aruba</h2>

          <ul>
            <li>Components Sticker Sheet (
                <a id="aruba-components-sketch"
                  href={`${ROOT}/aruba/aruba-components-1.1.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="aruba-components-pdf"
                href={`${ROOT}/aruba/aruba-components-1.1.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Templates Sticker Sheet (
                <a id="aruba-templates-sketch"
                  href={`${ROOT}/aruba/aruba-templates-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="aruba-templates-pdf"
                href={`${ROOT}/aruba/aruba-templates-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

        </section>

        <section id="micro-focus">
          <h2>Micro Focus</h2>

          <ul>
            <li>Components Sticker Sheet (
                <a id="micro-focus-components-sketch"
                  href={`${ROOT}/micro-focus/micro-focus-components-1.1.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="micro-focus-components-pdf"
                href={`${ROOT}/micro-focus/micro-focus-components-1.1.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Templates Sticker Sheet (
                <a id="micro-focus-templates-sketch"
                  href={`${ROOT}/micro-focus/micro-focus-templates-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="micro-focus-templates-pdf"
                href={`${ROOT}/micro-focus/micro-focus-templates-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

        </section>

        <section id="dxc">
          <h2>DXC</h2>

          <ul>
            <li>Components Sticker Sheet (
                <a id="dxc-components-sketch"
                  href={`${ROOT}/dxc/dxc-components-1.1.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="dxc-components-pdf"
                href={`${ROOT}/dxc/dxc-components-1.1.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
            <li>Templates Sticker Sheet (
                <a id="dxc-templates-sketch"
                  href={`${ROOT}/dxc/dxc-templates-1.0.sketch`}
                  target="_blank">.sketch</a>
                <span> | </span>
                <a id="dxc-templates-pdf"
                href={`${ROOT}/dxc/dxc-templates-1.0.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

        </section>

        <section id="hpi">
          <h2>HP Inc.</h2>

          <ul>
            <li>General Sticker Sheet (
                <a id="hpi-general-ai"
                  href={`${ROOT}/hpi/hpi-sticker-sheet-apps-general-0-3.ai`}
                  target="_blank">.ai</a>
                <span> | </span>
                <a id="hpi-general-pdf"
                href={`${ROOT}/hpi/hpi-sticker-sheet-apps-general-0-3.pdf`}
                target="_blank">.pdf</a>
              )
            </li>
          </ul>

        </section>
      </DocsArticle>
    );
  }
};
