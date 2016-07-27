// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Chart from 'grommet/components/Chart';
import { updatePageTitle } from '../utils/a11y';

Chart.displayName = 'Chart';

const series = [
  {
    label: 'first',
    values: [[8, 1], [7, 2], [6, 3], [5, 2], [4, 3], [3, 3], [2, 2], [1, 4]],
    colorIndex: "graph-1"},
  {
    label: 'second',
    values: [[8, 4], [7, 2], [6, 3], [5, 4], [4, 3], [3, 0], [2, 1], [1, 0]],
    colorIndex: "graph-2"
  }
];

const clickableSeries = [
  {
    label: 'first',
    values: [[8, 1], [7, 2], [6, 3], [5, 2], [4, 3], [3, 3], [2, 2], [1, 4]],
    colorIndex: "graph-1",
    onClick: function () {
      alert('first');
    }
  }, {
    label: 'second',
    values: [[8, 4], [7, 2], [6, 3], [5, 4], [4, 3], [3, 0], [2, 1], [1, 0]],
    colorIndex: "graph-2",
    onClick: function () {
      alert('second');
    }
  }
];

const singleSeries = [
  {values: [[8, 1], [7, 2], [6, 3], [5, 2], [4, 3], [3, 3], [2, 2], [1, 4]],
    colorIndex: "graph-1"}
];

const singleClickableSeries = [
  {values: [
    {x: 8, y: 1, onClick: function () {
      alert('8, 1');
    }}, {x: 7, y: 2, onClick: function () {
      alert('7, 2');
    }}, {x: 6, y: 3, onClick: function () {
      alert('6, 3');
    }}, {x: 5, y: 2, onClick: function () {
      alert('5, 2');
    }}, {x: 4, y: 3, onClick: function () {
      alert('4, 3');
    }}, {x: 3, y: 3, onClick: function () {
      alert('3, 3');
    }}, {x: 2, y: 2, onClick: function () {
      alert('2, 2');
    }}, {x: 1, y: 4, onClick: function () {
      alert('1, 4');
    }}],
    colorIndex: "graph-1"}
];

const seriesXAxis = [
  {label: 'May 22', value: series[0].values[0][0]},
  {label: 'May 21', value: series[0].values[1][0]},
  {label: 'May 20', value: series[0].values[2][0]},
  {label: 'May 19', value: series[0].values[3][0]},
  {label: 'May 18', value: series[0].values[4][0]},
  {label: 'May 17', value: series[0].values[5][0]},
  {label: 'May 16', value: series[0].values[6][0]},
  {label: 'May 15', value: series[0].values[7][0]}
];

const dateSeries = [
  {label: 'first', values: [
    [new Date(Date.parse("2015-05-22")), 4],
    [new Date(Date.parse("2015-05-21")), 2],
    [new Date(Date.parse("2015-05-20")), 3],
    [new Date(Date.parse("2015-05-19")), 3],
    [new Date(Date.parse("2015-05-18")), 2],
    [new Date(Date.parse("2015-05-17")), 1],
    [new Date(Date.parse("2015-05-16")), 4],
    [new Date(Date.parse("2015-05-15")), 2]
  ], colorIndex: "graph-1"}
];

const dateSeriesXAxis = [
  {label: 'May 22', value: dateSeries[0].values[0][0]},
  {label: 'May 21', value: dateSeries[0].values[1][0]},
  {label: 'May 20', value: dateSeries[0].values[2][0]},
  {label: 'May 19', value: dateSeries[0].values[3][0]},
  {label: 'May 18', value: dateSeries[0].values[4][0]},
  {label: 'May 17', value: dateSeries[0].values[5][0]},
  {label: 'May 16', value: dateSeries[0].values[6][0]},
  {label: 'May 15', value: dateSeries[0].values[7][0]}
];

const thresholds = [
  {label: 'OK', value: 0, colorIndex: 'ok'},
  {label: 'Warning', value: 3, colorIndex: 'warning'},
  {label: 'Error', value: 4, colorIndex: 'error'}
];

export default class ChartV1Doc extends Component {

  componentDidMount () {
    updatePageTitle('Chart V1');
  }

  render () {
    return (
      <DocsArticle title="Chart V1" colorIndex="neutral-3">

        <p>NOTE: This is the older version of the Grommet Chart component.
        It is currently deprecated and will be removed in a future release.
        Please refer to the latest <NavAnchor path={`/docs/chart`}>
        Chart</NavAnchor> documentation for the current
        version.</p>

        <p>Shows a graphical data chart.</p>
        <pre><code className="html hljs xml">
          {"<Chart ... />"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>important   {"{number}"}</code></dt>
            <dd>The index of the series data that the legend should
              correspond to, if any.</dd>
            <dt><code>legend      {"{position: overlay|after|inline, total: true|false}"}</code></dt>
            <dd>Whether to show a legend, where to place it,
              and whether to show a total value.</dd>
            <dt><code>max         {"{number}"}</code></dt>
            <dd>The largest possible value.
              Defaults to the largest y value in the series data.</dd>
            <dt><code>min         {"{number}"}</code></dt>
            <dd>The smallest possible value.
              Defaults to the smallest y value in the series data.</dd>
            <dt><code>points      true|false</code></dt>
            <dd>For line and area charts, whether to draw individual data points.</dd>
            <dt><code>segmented   true|false</code></dt>
            <dd>For bar charts, whether to draw the bars with distinct segments.
              Defaults to <code>false</code>.</dd>
            <dt><code>series       {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: <string>, colorIndex: <string>, values: [[x,y]|{x: , y: , onClick: }]}"}
              </code>. The x values can be either numbers or Date objects.
              The y values should be numbers. Currently, onClick interaction
              is only available for <code>type="bar"</code> Charts.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The height of the Chart. Defaults to <code>medium</code>.</dd>
            <dt><code>smooth       true|false</code></dt>
            <dd>For line and area charts, smooth the drawing.</dd>
            <dt><code>sparkline    true|false</code></dt>
            <dd>Sparkline sized version.</dd>
            <dt><code>threshold    {"{number}"}</code></dt>
            <dd>Optional threshold value.</dd>
            <dt><code>type         line|bar|area</code></dt>
            <dt><code>thresholds   {"[{value: , label: , colorIndex: }, ...]"}</code></dt>
            <dd>An array of objects describing thresholds.</dd>
            <dd>Whether to draw a line graph, bar graph, or area graph.</dd>
            <dt><code>units        {"{string}"}</code></dt>
            <dd>Optional units to include.</dd>
            <dt><code>xAxis        {"{placement: top|bottom: data: [{string}, ...]}"}</code></dt>
            <dd>Optional xAxis placement and labels.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Line" code={
            <Chart series={singleSeries} min={0} max={5} threshold={3}
              a11yTitleId="lineChartTitle" a11yDescId="lineChartDesc" />
          } />
          <Example name="Bar" code={
            <Chart series={singleSeries} min={0} threshold={3} type="bar"
              a11yTitleId="barChartTitle" a11yDescId="barChartDesc" />
          } />
          <Example name="Area" code={
            <Chart series={singleSeries} min={0} max={5} threshold={3} type="area"
              a11yTitleId="areaChartTitle" a11yDescId="areaChartDesc" />
          } />
          <Example name="Bar, Clickable" code={
            <Chart series={singleClickableSeries} min={0} threshold={3} type="bar"
              a11yTitleId="barClickableChartTitle" a11yDescId="barClickableChartDesc" />
          } />
          <Example name="Bar, Legend, xAxis, and Units" code={
            <Chart series={series} min={0} threshold={3} type="bar"
              xAxis={seriesXAxis} units="TB" legend={{}}
              a11yTitleId="complexBarChartTitle"
              a11yDescId="complexBarChartDesc" />
          } />
          <Example name="Bar, Segmented, Inline Legend" code={
            <Chart series={singleSeries} type="bar"
              segmented={true} legend={{position: 'inline'}}
              a11yTitleId="segmentedBarChartTitle"
              a11yDescId="segmentedBarChartDesc" />
          } />
          <Example name="Area, Legend, xAxis, Units, Points, and Thresholds" code={
            <Chart series={series} min={0} max={5} threshold={3}
              type="area" legend={{}} points={true}
              xAxis={{placement: 'bottom', data: seriesXAxis}}
              units="TB" thresholds={thresholds}
              a11yTitleId="complexAreaChartTitle"
              a11yDescId="complexAreaChartDesc" />
          } />
          <Example name="Area, Clickable" code={
            <Chart series={clickableSeries} min={0} max={5} threshold={3} type="area"
              a11yTitleId="areaClickableChartTitle" a11yDescId="areaClickableChartDesc" />
          } />
        <Example name="Line, Clickable" code={
            <Chart series={clickableSeries} min={0} max={5} threshold={3} type="line"
              a11yTitleId="areaClickableChartTitle" a11yDescId="areaClickableChartDesc" />
          } />
          <Example name="Small" code={
            <Chart series={series} min={0} threshold={3} type="bar" legend={{}}
              xAxis={seriesXAxis} units="TB" size="small"
              a11yTitleId="smallChartTitle" a11yDescId="smallChartDesc" />
          } />
          <Example name="Large, Legend total" code={
            <Chart series={series} min={0} threshold={3} type="bar"
              legend={{total: true}} xAxis={seriesXAxis} units="TB" size="large"
              a11yTitleId="largeChartTitle" a11yDescId="largeChartDesc" />
          } />
          <Example name="Sparkline, Bar" code={
            <Chart series={singleSeries} min={0} type="bar" sparkline={true}
              a11yTitleId="sparklineBarChartTitle"
              a11yDescId="sparklineBarChartDesc" />
          } />
          <Example name="Sparkline, Area" code={
            <Chart series={singleSeries} min={0} type="area" sparkline={true}
              a11yTitleId="sparklineAreaChartTitle"
              a11yDescId="sparklineAreaChartDesc" />
          } />
          <Example name="Dates, Smooth" code={
            <Chart series={dateSeries} min={0} max={5} threshold={3}
              type="area" smooth={true} legend={{}}
              xAxis={dateSeriesXAxis} a11yTitleId="dateSmoothChartTitle"
              a11yDescId="dateSmoothChartDesc" />
          } />
          <Example name="Small, loading" code={
            <Chart series={[]} min={0} threshold={3} type="bar" legend={{}}
              xAxis={[]} units="TB" size="small" a11yTitleId="loadingChartTitle"
              a11yDescId="loadingChartDesc" />
          } />
        </section>

      </DocsArticle>
    );
  }
};
