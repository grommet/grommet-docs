// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Distribution from 'grommet/components/Distribution';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Distribution.displayName = 'Distribution';

const USAGE =
`import Distribution from 'grommet/components/Distribution';
<Distribution series={[
  {label: 'First', value: 80},
  {label: 'Second', value: 20}
  ]} />`;

export default class DistributionDoc extends Component {

  render () {
    return (
      <DocsArticle title="Distribution" colorIndex="neutral-3">

        <section>
          <p>Shows a graphic of relatively sized items.
            If colorIndex properties are not specified per series item, they
            will be automatically asigned.
            One way to use a Distribution is to compare items across
            two attributes. One attribute determining the area and another
            determining the color.
            The guidance for coloring items is to use colorIndex 'unset'
            for less important items, neutral or graph colors for normal
            items and accent colors for items to call attention to. Status
            colorIndex values can be used as well.</p>
          <Distribution series={[
            {label: 'First', value: 80},
            {label: 'Second', value: 20}
          ]} a11yTitleId='distribution-title-1'
          a11yDescId='distribution-desc-1' />
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>full         true|false</code></dt>
            <dd>Whether the height should fill its container.</dd>
            <dt><code>legend       true|false</code></dt>
            <dd>Whether to show a legend.</dd>
            <dt><code>legendTotal  true|false</code></dt>
            <dd>Whether to show a total in the legend.</dd>
            <dt><code>series       {"[{value: , label: , labelValue: , " +
              "colorIndex: , onClick: , icon: }, ...]"}</code></dt>
            <dd>An array of objects describing the
              data. All properties except <code>value</code> are
              optional. <code>labelValue</code> is used as the
              visible value. If <code>labelValue</code> is not
              set, the <code>value</code> is displayed instead.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The height of the Distribution.
              Defaults to <code>medium</code>.</dd>
            <dt><code>units        {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>

          <h3 className="error">Deprecated</h3>
          <p>The following properties are deprecated and will be
            removed in version 1.0. Instead of using these properties,
            callers should add their own <NavAnchor path="/docs/legend">
            Legend</NavAnchor> laid out next to the Distribution.</p>
          <dl>
            <dt><code>legend       true|false</code></dt>
            <dd>Whether to show a legend.</dd>
            <dt><code>legendTotal  true|false</code></dt>
            <dd>Whether to show a total in the legend.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/distribution/examples`}>
            Distribution Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
