// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

Meter.displayName = 'Meter';

export default class MeterDoc extends Component {

  render () {
    return (
      <DocsArticle title="Meter" colorIndex="neutral-3">

        <section>
          <p>Shows a bar, arc, or circular meter graphic.</p>
          <Box direction="row" align="center" pad={{ between: 'medium' }}>
            <Meter value={40} type="circle" label={
                <Value value={40} />
              }/>
            <Box align="end" direction="row">
              <Meter value={40} vertical={true} label={false} />
              <Value align="start" value={40} />
            </Box>
            <Box align="start" direction="column">
              <Value value={40} />
              <Meter value={40} label={false} />
            </Box>
            <Box align="center">
              <Meter value={40} type="arc" label={false} />
              <Value value={40} />
            </Box>
          </Box>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>activeIndex {'{number}'}</code></dt>
            <dd>The currently active series value index, if any.</dd>
            <dt><code>colorIndex  {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the graphic color.
              For example: <code>"graph-1"</code></dd>
            <dt><code>important   {"{number}"}</code></dt>
            <dd>The index of the series data that the label should
              correspond to, if any. This property is deprecated in
              favor of `activeIndex`.</dd>
            <dt><code>label       {"true|false|{node}"}</code></dt>
            <dd>If `false`, no label is shown. If a `node` is specified, it is
              used as the value label. The default is `true`, which causes
              this component to build the label. `true` is deprecated.
              Callers are encouraged to use <NavAnchor path="/docs/value">
              Value</NavAnchor> to construct the appropriate label.</dd>
            <dt><code>legend      {"{placement: right|bottom|inline, " +
              "total: true|false}"}</code></dt>
            <dd>Whether to show a legend. If showing, whether to include
              a total,
              and where to place it. If placement is not specified, it will be
              placed to match the aspect ratio of the window.
              <code>inline</code> is
              only supported with horizontal bar. If placement is set to
              <code>inline</code> and
              total is set to <code>false</code>, the active value is hidden.
              This property is deprecated. Callers are encouraged to use
              <NavAnchor path="/docs/legend">Legend</NavAnchor> and place it
              around the meter as needed.</dd>
            <dt><code>max         {"{value: , label: }|{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min         {"{value: , label: }|{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>onActive    {"{function (index)}"}</code></dt>
            <dd>Hover handler. The hovered series index is passed as an
              argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as an argument.</dd>
            <dt><code>series      {"[{value: , label: , colorIndex: , " +
              "important: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data.
              Either this or the <code>value</code> property must be
              provided.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Meter. Defaults to <code>medium</code>.
              Currently, the <code>spiral</code> type Meter does not respond
              to this property.</dd>
            <dt><code>stacked     true|false</code></dt>
            <dd>Whether slices for multiple series values should be stacked
              together in the same slot or shown in separate slots.
              Defaults to <code>false</code>.</dd>
            <dt><code>threshold   {"{number}"}</code></dt>
            <dd>Optional threshold value.</dd>
            <dt><code>thresholds  {"[{value: , label: , colorIndex: }, ...]"}
              </code></dt>
            <dd>An array of objects describing thresholds.</dd>
            <dt><code>type        bar|arc|circle|spiral</code></dt>
            <dd>Whether to draw a bar, an arc, a circle, or a spiral.</dd>
            <dt><code>units       {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label. This
              property is deprecated. Callers are encouraged to use
              <NavAnchor path="/docs/value">Value</NavAnchor> to construct
              a label.</dd>
            <dt><code>value       {"{number}"}</code></dt>
            <dd>The current value.</dd>
            <dt><code>vertical    true|false</code></dt>
            <dd>Whether to orient a bar or arc Meter vertically.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/meter-examples`}>
            Grommet Meter Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
