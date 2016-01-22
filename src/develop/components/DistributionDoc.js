// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var stringify = require("json-stringify-pretty-compact");
var DocsArticle = require('../../DocsArticle');
var Distribution = require('grommet/components/Distribution');

var series = [
  {label: 'First', value: 40, colorIndex: 'graph-1'},
  {label: 'Second', value: 30, colorIndex: 'accent-2'},
  {label: 'Third', value: 20, colorIndex: 'unset'},
  {label: 'Fourth', value: 10, colorIndex: 'graph-1'}
];

var clickableSeries = [
  {label: 'First', value: 40, onClick: function () {
    alert('You\'ve clicked on 40');
  }},
  {label: 'Second', value: 30, onClick: function () {
    alert('You\'ve clicked on 30');
  }},
  {label: 'Third', value: 20, onClick: function () {
    alert('You\'ve clicked on 20');
  }},
  {label: 'Fourth', value: 10, onClick: function () {
    alert('You\'ve clicked on 10');
  }}
];

var clickableSeriesDoc = clickableSeries.map(function (item) {
  return {
    label: item.label,
    value: item.value,
    onClick: '...'
  };
});

var iconSeries = [
  {label: 'Female', value: 60, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <path d="M20,36 L20,32"></path>
        <path d="M24,13 C21.2,13 19,15.2 19,18 C19,22 15.9,23.9 15.9,23.9 C15.9,23.9 16.6,26 20,26 L21,26 C18.2,26 16,28.2 16,31 L16,36"></path>
        <path d="M28,32 L28,36"></path>
        <path d="M32,36 L32,31 C32,28.2 29.9,26 27.1,26 L27,26 C30.4,26 32.1,23.9 32.1,23.9 C32.1,23.9 29,22 29,18 C29,15.2 26.7,13 24,13"></path>
      </g>
    )}
  },
  {label: 'Male', value: 40, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <circle cx="24" cy="18" r="5"></circle>
        <path d="M33,36 L33,31 C33,26.6 29.4,23 25,23 L23,23 C18.6,23 15,26.6 15,31 L15,36"></path>
        <path d="M20,36 L20,31"></path>
        <path d="M28,36 L28,31"></path>
      </g>
    )}
  }
];

var iconSeriesDoc = iconSeries.map(function (item) {
  return {
    label: item.label,
    value: item.value,
    icon: {
      width: item.icon.width,
      height: item.icon.height,
      svgElement: "<JSX SVG element>"
    }
  };
});

function convertDistributionToString(distributionJSX) {
  return jsxToString(distributionJSX, {
    ignoreProps: ['a11yTitleId', 'a11yDescId']
  });
}

var DistributionDoc = React.createClass({

  _renderDistributionCode(heading, distributionJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {distributionJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertDistributionToString(distributionJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {

    var basicDistribution = (
      <Distribution series={series} a11yTitleId='distribution-title-1'
        a11yDescId='distribution-desc-1' />
    );

    var legendDistribution = (
      <Distribution legend={true} series={series}
        a11yTitleId='distribution-title-2' a11yDescId='distribution-desc-2' />
    );

    var smallDistribution = (
      <Distribution size="small" series={series}
        a11yTitleId='distribution-title-3' a11yDescId='distribution-desc-3' />
    );

    var largeDistribution = (
      <Distribution size="large" series={series}
        a11yTitleId='distribution-title-4' a11yDescId='distribution-desc-4' />
    );

    var loadingDistribution = (
      <Distribution a11yTitleId='distribution-title-5'
        a11yDescId='distribution-desc-5' />
    );

    return (
      <DocsArticle title="Distribution" colorIndex="neutral-3">

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
        <pre><code className="html hljs xml">
          {"<Distribution series={[...]} />"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>full        true|false</code></dt>
            <dd>Whether the height should fill its container.</dd>
            <dt><code>legend      true|false</code></dt>
            <dd>Whether to show a legend.</dd>
            <dt><code>legendTotal true|false</code></dt>
            <dd>Whether to show a total in the legend.</dd>
            <dt><code>series      {"[{value: , label: , labelValue: , colorIndex: , onClick: , icon: }, ...]"}</code></dt>
            <dd>An array of objects describing the
              data. All properties except <code>value</code> are
              optional. <code>labelValue</code> is used as the
              visible value. If <code>labelValue</code> is not
              set, the <code>value</code> is displayed instead.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The height of the Distribution. Defaults to <code>medium</code>.</dd>
            <dt><code>units       {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderDistributionCode('Basic', basicDistribution)}
          {this._renderDistributionCode('Legend', legendDistribution)}
          {this._renderDistributionCode('Small', smallDistribution)}
          {this._renderDistributionCode('Large', largeDistribution)}

          <h3>onClick</h3>
          <div className="example">
            <Distribution series={clickableSeries}
              a11yTitleId='distribution-title-6' a11yDescId='distribution-desc-6' />
          </div>
          <pre><code className="html hljs xml">
            {"<Distribution series={" + stringify(clickableSeriesDoc, null, '  ') + "}  />"}
          </code></pre>

          <h3>Icon</h3>
          <div className="example">
            <Distribution series={iconSeries} units="%"
              a11yTitleId='distribution-title-7' a11yDescId='distribution-desc-7' />
          </div>
          <pre><code className="html hljs xml">
            {"<Distribution\n " +
              "series={" + stringify(iconSeriesDoc, null, '  ') + "}  />"}
          </code></pre>

          {this._renderDistributionCode('Loading', loadingDistribution)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = DistributionDoc;
