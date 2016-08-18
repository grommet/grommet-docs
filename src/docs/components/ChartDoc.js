// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Line, Layers, Axis }
  from 'grommet/components/chart/Chart';
import Meter from 'grommet/components/Meter';
import Menu from 'grommet/components/Menu';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

Chart.displayName = 'Chart';

const a11yTitle = (
  'Chart representing number of commits in the last three days.'
);

export default class ChartDoc extends Component {

  render () {
    return (
      <DocsArticle title="Chart" colorIndex="neutral-3">

        <section>
          <p>The Grommet Chart components provide the building blocks
            to construct a variety of Chart visualizations.</p>
        </section>

        <section>
          <h2>Basics</h2>

          <p>All charts start with a Base which provides a
            foundation area within a Chart that defines the
            screen region where any drawing should take place. Any drawing
            components, such as Line and Threshold, are contained in Layers
            within the Chart. The Layers are automtically positioned over the
            Base. The Chart
            can also contain Axis running along any edge. A simple
            line chart could be built via:</p>

          <Example code={
            <Chart>
              <Axis vertical={true} count={3} ticks={true} />
              <Base />
              <Layers>
                <Line values={[70, 0, 20, 100, 60]} />
              </Layers>
            </Chart>
          }/>

          <p>The Base can contain other non-Chart components, like Meter.
            A simple Meter based chart could be built via:</p>

            <Example code={
              <Chart a11yTitle={a11yTitle}>
                <Axis vertical={true} count={3} ticks={true} />
                <Base>
                  <Meter vertical={true} value={70} />
                  <Meter vertical={true} value={20} />
                  <Meter vertical={true} value={60} />
                </Base>
              </Chart>
            }/>
        </section>

        <section>
          <h2>Interaction</h2>

          <p>For charts using Meter, use the interaction properties of Meter
            to handle user interaction. For Line, Area, or Bar charts,
            you can use the HotSpots or Range components
            to handle user interaction with the chart. In either case,
            you can use these to update Value or Legend components surrounding
            the chart. Note that you can use Legend and Value within
            MarkerLegend to have them positioned relative to the appropriate
            part of the chart graphic.</p>
        </section>

        <section>
          <h2>Components</h2>

          <Menu inline={true}>
            <NavAnchor path={`/docs/chart-area`}>Area</NavAnchor>
            <NavAnchor path={`/docs/chart-axis`}>Axis</NavAnchor>
            <NavAnchor path={`/docs/chart-bar`}>Bar</NavAnchor>
            <NavAnchor path={`/docs/chart-base`}>Base</NavAnchor>
            <NavAnchor path={`/docs/chart-hot-spots`}>HotSpots</NavAnchor>
            <NavAnchor path={`/docs/chart-grid`}>Grid</NavAnchor>
            <NavAnchor path={`/docs/chart-layers`}>Layers</NavAnchor>
            <NavAnchor path={`/docs/chart-line`}>Line</NavAnchor>
            <NavAnchor path={`/docs/chart-marker`}>Marker</NavAnchor>
            <NavAnchor path={`/docs/chart-marker-label`}>MarkerLabel</NavAnchor>
            <NavAnchor path={`/docs/chart-range`}>Range</NavAnchor>
          </Menu>

          <p>See the older <NavAnchor path={`/docs/chart-v1`}>
            Chart version 1</NavAnchor> documentation for the prior Chart
            interface.</p>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>full                  true|false</code></dt>
            <dd>Whether to occupy the full parent width.</dd>
            <dt><code>horizontalAlignWith   {'{string}'}</code></dt>
            <dd>The id of the DOM element to align the Chart graphics with
              horizontally. This can be used if the Chart has a
              Base descendant with children that do not occupy the
              full width of the Base. For example, if the Base contains
              Boxes that are laid out horizontally and include Meters and
              Values, you would give a Meter an id and set this property
              to use it.</dd>
            <dt><code>loading               true|false</code></dt>
            <dd>Whether the Chart data is still being retrieved.</dd>
            <dt><code>onMaxCount            {'{function (maxCount)}'}
              </code></dt>
            <dd>This function is called to provide guidance on how many data
              points the Chart could handle. For instance, if the Chart
              width is variable based on its parent width, the maxCount
              can be used to set both the number of data points, ticks,
              and/or labels to include.</dd>
            <dt><code>vertical              true|false</code></dt>
            <dd>Whether the child components should be laid out vertically.
              If you want both an x-axis and y-axis, you would have two
              Chart components, one inside the other, with only one of
              them having <code>vertical={'true'}</code></dd>
            <dt><code>verticalAlignWith    {'{string}'}</code></dt>
            <dd>The id of the DOM element to align the Chart graphics with
              vertically. This can be used if the Chart has a
              Base descendant with children that do not occupy the
              full width of the Base. For example, if the Base contains
              Boxes that are laid out vertically and include Meters and
              Values, you would give a Meter an id and set this property
              to use it.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/chart-examples`}>
            Grommet Chart Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
