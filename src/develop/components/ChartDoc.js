// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Chart = require('grommet/components/Chart');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');

Chart.displayName = 'Chart';
Tiles.displayName = 'Tiles';
Tile.displayName = 'Tile';

var series = [
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

var singleSeries = [
  {values: [[8, 1], [7, 2], [6, 3], [5, 2], [4, 3], [3, 3], [2, 2], [1, 4]],
    colorIndex: "graph-1"}
];

var seriesXAxis = [
  {label: 'May 22', value: series[0].values[0][0]},
  {label: 'May 21', value: series[0].values[1][0]},
  {label: 'May 20', value: series[0].values[2][0]},
  {label: 'May 19', value: series[0].values[3][0]},
  {label: 'May 18', value: series[0].values[4][0]},
  {label: 'May 17', value: series[0].values[5][0]},
  {label: 'May 16', value: series[0].values[6][0]},
  {label: 'May 15', value: series[0].values[7][0]}
];

var dateSeries = [
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

var dateSeriesXAxis = [
  {label: 'May 22', value: dateSeries[0].values[0][0]},
  {label: 'May 21', value: dateSeries[0].values[1][0]},
  {label: 'May 20', value: dateSeries[0].values[2][0]},
  {label: 'May 19', value: dateSeries[0].values[3][0]},
  {label: 'May 18', value: dateSeries[0].values[4][0]},
  {label: 'May 17', value: dateSeries[0].values[5][0]},
  {label: 'May 16', value: dateSeries[0].values[6][0]},
  {label: 'May 15', value: dateSeries[0].values[7][0]}
];

var thresholds = [
  {label: 'OK', value: 0, colorIndex: 'ok'},
  {label: 'Warning', value: 3, colorIndex: 'warning'},
  {label: 'Error', value: 4, colorIndex: 'error'}
];

function convertChartToString (chartJSX) {
  return jsxToString(chartJSX, {
    ignoreProps: ['a11yTitleId', 'a11yDescId']
  });
}

var ChartDoc = React.createClass({

  _renderChartCode(heading, chartJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {chartJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertChartToString(chartJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {

    var lineChart = (
      <Chart series={singleSeries} min={0} max={5} threshold={3}
        a11yTitleId="lineChartTitle" a11yDescId="lineChartDesc" />
    );

    var barChart = (
      <Chart series={singleSeries} min={0} threshold={3} type="bar"
        a11yTitleId="barChartTitle" a11yDescId="barChartDesc" />
    );

    var areaChart = (
      <Chart series={singleSeries} min={0} max={5} threshold={3} type="area"
        a11yTitleId="areaChartTitle" a11yDescId="areaChartDesc" />
    );

    var complexBarChart = (
      <Chart series={series} min={0} threshold={3} type="bar"
        xAxis={seriesXAxis} units="TB" legend={{}}
        a11yTitleId="complexBarChartTitle"
        a11yDescId="complexBarChartDesc" />
    );

    var complexAreaChart = (
      <Chart series={series} min={0} max={5} threshold={3}
        type="area" legend={{}} points={true}
        xAxis={{placement: 'bottom', data: seriesXAxis}}
        units="TB" thresholds={thresholds}
        a11yTitleId="complexAreaChartTitle"
        a11yDescId="complexAreaChartDesc" />
    );

    var smallChart = (
      <Chart series={series} min={0} threshold={3} type="bar" legend={{}}
        xAxis={seriesXAxis} units="TB" small={true}
        a11yTitleId="smallChartTitle" a11yDescId="smallChartDesc" />
    );

    var largeChart = (
      <Chart series={series} min={0} threshold={3} type="bar"
        legend={{total: true}} xAxis={seriesXAxis} units="TB" large={true}
        a11yTitleId="largeChartTitle" a11yDescId="largeChartDesc" />
    );

    var sparklineBarChart = (
      <Chart series={singleSeries} min={0} type="bar" sparkline={true}
        a11yTitleId="sparklineBarChartTitle"
        a11yDescId="sparklineBarChartDesc" />
    );

    var sparklineAreaChart = (
      <Chart series={singleSeries} min={0} type="area" sparkline={true}
        a11yTitleId="sparklineAreaChartTitle"
        a11yDescId="sparklineAreaChartDesc" />
    );

    var dateSmoothChart = (
      <Chart series={dateSeries} min={0} max={5} threshold={3}
        type="area" smooth={true} legend={{}}
        xAxis={dateSeriesXAxis} a11yTitleId="dateSmoothChartTitle"
        a11yDescId="dateSmoothChartDesc" />
    );

    var tilesChart = (
      <Tiles>
        <Tile>
          <Chart series={singleSeries} min={0} threshold={3} type="bar"
            xAxis={seriesXAxis} units="TB" max={6}
            legend={{position: 'after'}} a11yTitleId="tileChart1Title"
            a11yDescId="tileChart1Desc" />
        </Tile>
        <Tile>
          <Chart series={series} min={0} threshold={3} type="bar"
            xAxis={seriesXAxis} units="TB"
            legend={{position: 'after'}} a11yTitleId="tileChart2Title"
            a11yDescId="tileChart2Desc" />
        </Tile>
        <Tile>
          <Chart series={series} min={0} threshold={3} type="area"
            xAxis={seriesXAxis} units="TB"
            legend={{position: 'after'}} a11yTitleId="tileChart3Title"
            a11yDescId="tileChart3Desc" />
        </Tile>
        <Tile>
          <Chart series={series} min={0} threshold={3} type="line"
            xAxis={seriesXAxis} units="TB"
            legend={{position: 'after'}} a11yTitleId="tileChart4Title"
            a11yDescId="tileChart4Desc" />
        </Tile>
      </Tiles>
    );

    var loadingChart = (
      <Chart series={[]} min={0} threshold={3} type="bar" legend={{}}
        xAxis={[]} units="TB" small={true} a11yTitleId="loadingChartTitle"
        a11yDescId="loadingChartDesc" />
    );

    return (
      <DocsArticle title="Chart" colorIndex="neutral-3">

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
            <dt><code>large       true|false</code></dt>
            <dd>Larger sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>legend      {"{position: overlay|after, total: true|false}"}</code></dt>
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
            <dt><code>series       {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: <string>, colorIndex: <string>, values: [[x,y], ...]}"}
              </code>. The x values can be either numbers or Date objects.
              The y values should be numbers.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The height of the Chart. Defaults to <code>medium</code>.</dd>
            <dt><code>small        true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
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

          {this._renderChartCode('Line', lineChart)}
          {this._renderChartCode('Bar', barChart)}
          {this._renderChartCode('Area', areaChart)}
          {this._renderChartCode(
            'Bar, Legend, xAxis, and Units', complexBarChart
          )}
          {this._renderChartCode(
            'Area, Legend, xAxis, Units, Points, and Thresholds',
            complexAreaChart
          )}
          {this._renderChartCode('Small', smallChart)}
          {this._renderChartCode('Large, Legend total', largeChart)}
          {this._renderChartCode('Sparkline, Bar', sparklineBarChart)}
          {this._renderChartCode('Sparkline, Area', sparklineAreaChart)}
          {this._renderChartCode('Dates, Smooth', dateSmoothChart)}
          {this._renderChartCode('Tiles', tilesChart)}
          {this._renderChartCode('Small, loading', loadingChart)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ChartDoc;
