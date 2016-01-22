// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var stringify = require("json-stringify-pretty-compact");
var DocsArticle = require('../../DocsArticle');
var Meter = require('grommet/components/Meter');
var FormField = require('grommet/components/FormField');
var RadioButton = require('grommet/components/RadioButton');
var CheckBox = require('grommet/components/CheckBox');

var inline =
  "<Meter value={70} total={100} units=\"GB\" />";

var simpleValue = 40;
var simpleMin = {value: 0, label: '0 GB'};
var simpleMax = {value: 80, label: '80 GB'};
var simpleThreshold = 75;
var simpleUnits = 'GB';

var thresholds = [
  // {label: 'OK', value: 0, colorIndex: 'ok'},
  {label: 'Warning', value: 60, colorIndex: 'warning'},
  {label: 'Error', value: 70, colorIndex: 'error'}
];

var series = [
  {label: 'Gen 7', value: 50},
  {label: 'Gen 8', value: 200},
  {label: 'Gen 9', value: 100},
  {label: 'Gen 10', value: 300} //,
  // {label: 'Gen 11', value: 100}
];

var clickableSeries = [
  {label: 'Gen 7', value: 50, onClick: function () {
    alert('You\'ve clicked Gen 7');
  }},
  {label: 'Gen 8', value: 200, onClick: function () {
    alert('You\'ve clicked Gen 8');
  }},
  {label: 'Gen 9', value: 100, onClick: function () {
    alert('You\'ve clicked Gen 9');
  }},
  {label: 'Gen 10', value: 300, onClick: function () {
    alert('You\'ve clicked Gen 10');
  }}
];
var clickableSeriesDoc = clickableSeries.map(function (item) {
  return {
    label: item.label,
    value: item.value,
    onClick: '...'
  };
});

var statusSeries = [
  {label: 'OK', value: 70, colorIndex: 'ok'},
  {label: 'Warning', value: 15, colorIndex: 'warning'},
  {label: 'Error', value: 5, colorIndex: 'error'}
];
var statusSeriesMax = 90;

var storageSeries = [
  {label: 'Physical', value: 700},
  {label: 'Subscribed', value: 1200},
  {label: 'Allocated', value: 500}
];

function convertMeterToString (meterJSX) {
  return jsxToString(meterJSX, {
    ignoreProps: ['a11yTitleId', 'a11yDescId']
  });
}

//hjjs configuration
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var MeterDoc = React.createClass({

  getInitialState: function () {
    return {simpleValue: simpleValue,
      type: 'bar', valueType: 'single'
    };
  },

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  _highlightCode: function () {
    var nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  _onChangeValueType: function (valueType) {
    this.setState({valueType: valueType});
  },

  _onChangeSimpleValue: function (event) {
    this.setState({simpleValue: parseInt(event.target.value)});
  },

  _onChangeSize: function (size) {
    this.setState({size: size});
  },

  _onChangeType: function (type) {
    this.setState({type: type});
  },

  _onChangeVertical: function () {
    this.setState({vertical: ! this.state.vertical});
  },

  _onChangeStacked: function () {
    this.setState({stacked: ! this.state.stacked});
  },

  _onChangeLegend: function () {
    this.setState({legend: ! this.state.legend});
  },

  _onChangeThreshold: function () {
    this.setState({threshold: ! this.state.threshold});
  },

  _renderMeterCode(heading, meterJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {meterJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertMeterToString(meterJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var simpleValueInput;
    if ('single' === this.state.valueType) {
      simpleValueInput = (
        <input id="value" name="value" type="range"
          min="0" max="80" value={this.state.simpleValue}
          onChange={this._onChangeSimpleValue}/>
      );
    }

    var barMeter = (
      <Meter value={this.state.simpleValue} a11yTitleId='meter-title-1'
        a11yDescId='meter-desc-1' />
    );

    var barVerticalMeter = (
      <Meter value={this.state.simpleValue} vertical={true}
        a11yTitleId='meter-title-2' a11yDescId='meter-desc-2' />
    );

    var arcMeter = (
      <Meter value={this.state.simpleValue} type="arc"
        a11yTitleId='meter-title-3' a11yDescId='meter-desc-3' />
    );

    var arcVerticalMeter = (
      <Meter value={this.state.simpleValue} type="arc" vertical={true}
        a11yTitleId='meter-title-4' a11yDescId='meter-desc-4' />
    );

    var circleMeter = (
      <Meter value={this.state.simpleValue} type="circle"
        a11yTitleId='meter-title-5' a11yDescId='meter-desc-5' />
    );

    var spiralMeter = (
      <Meter value={this.state.simpleValue} type="spiral"
        a11yTitleId='meter-title-6' a11yDescId='meter-desc-6' />
    );

    var complexBarMeter = (
      <Meter value={this.state.simpleValue} units={simpleUnits}
        min={simpleMin} max={simpleMax} threshold={simpleThreshold}
        a11yTitleId='meter-title-7' a11yDescId='meter-desc-7' />
    );

    var complexVerticalBarMeter = (
      <Meter value={this.state.simpleValue} min={simpleMin} max={simpleMax}
        threshold={simpleThreshold} units={simpleUnits} vertical={true}
        a11yTitleId='meter-title-8' a11yDescId='meter-desc-8' />
    );

    var complexArcMeter = (
      <Meter type="arc" value={this.state.simpleValue} units={simpleUnits}
        min={simpleMin} max={simpleMax} thresholds={thresholds}
        a11yTitleId='meter-title-9' a11yDescId='meter-desc-9' />
    );

    var complexVerticalMeter = (
      <Meter type="arc" value={this.state.simpleValue}
        min={simpleMin} max={simpleMax} threshold={simpleThreshold}
        units={simpleUnits} vertical={true}
        a11yTitleId='meter-title-10' a11yDescId='meter-desc-10' />
    );

    var complexCircleMeter = (
      <Meter type="circle" value={this.state.simpleValue} units={simpleUnits}
        min={simpleMin} max={simpleMax} threshold={simpleThreshold}
        a11yTitleId='meter-title-11' a11yDescId='meter-desc-11' />
    );

    var barLegendMeter = (
      <Meter legend={true} series={series}
        a11yTitleId='meter-title-12' a11yDescId='meter-desc-12' />
    );

    var barInlineLegendMeter = (
      <Meter legend={{placement: 'inline'}} series={series}
        a11yTitleId='meter-title-12' a11yDescId='meter-desc-12' />
    );

    var barVerticalLegendMeter = (
      <Meter legend={{total: true}} series={series} vertical={true}
        a11yTitleId='meter-title-13' a11yDescId='meter-desc-13' />
    );

    var arcLegendMeter = (
      <Meter type="arc" legend={true} series={series}
        a11yTitleId='meter-title-14' a11yDescId='meter-desc-14' />
    );

    var arcVerticalLegendMeter = (
      <Meter type="arc" legend={true} series={storageSeries}
        vertical={true} units="TB"
        a11yTitleId='meter-title-15' a11yDescId='meter-desc-15' />
    );

    var circleLegendMeter = (
      <Meter type="circle" legend={true} series={series}
        a11yTitleId='meter-title-16' a11yDescId='meter-desc-16' />
    );

    var complexSpiralMeter = (
      <Meter type="spiral" series={statusSeries} max={statusSeriesMax}
        a11yTitleId='meter-title-17' a11yDescId='meter-desc-17' />
    );

    var complexStorageMeter = (
      <Meter type="spiral" series={storageSeries} units="TB"
        a11yTitleId='meter-title-18' a11yDescId='meter-desc-18' />
    );

    var stackedBarMeter = (
      <Meter legend={true} series={series} stacked={true}
        a11yTitleId='meter-title-19' a11yDescId='meter-desc-19' />
    );

    var smallBarMeter = (
      <Meter value={this.state.simpleValue} size="small"
        a11yTitleId='meter-title-20' a11yDescId='meter-desc-20' />
    );

    var smallArcMeter = (
      <Meter value={this.state.simpleValue} type="arc" size="small"
        a11yTitleId='meter-title-21' a11yDescId='meter-desc-21' />
    );

    var smallCircleMeter = (
      <Meter value={this.state.simpleValue} type="circle" size="small"
        a11yTitleId='meter-title-22' a11yDescId='meter-desc-22' />
    );

    var largeBarMeter = (
      <Meter value={this.state.simpleValue} size="large"
        a11yTitleId='meter-title-23' a11yDescId='meter-desc-23' />
    );

    var largeArcMeter = (
      <Meter value={this.state.simpleValue} type="arc" size="large"
        a11yTitleId='meter-title-24' a11yDescId='meter-desc-24' />
    );

    var largeCircleMeter = (
      <Meter value={this.state.simpleValue} type="circle" size="large"
        a11yTitleId='meter-title-25' a11yDescId='meter-desc-25' />
    );

    var loadingBarMeter = (
      <Meter value={undefined} a11yTitleId='meter-title-26'
        a11yDescId='meter-desc-26' />
    );

    var loadingArcMeter = (
      <Meter value={undefined} type="arc"
        a11yTitleId='meter-title-27' a11yDescId='meter-desc-27' />
    );

    var loadingSpiralMeter = (
      <Meter value={undefined} type="spiral"
        a11yTitleId='meter-title-28' a11yDescId='meter-desc-28' />
    );

    var customExampleMeter = (
      <Meter
        value={'single' === this.state.valueType ?
          this.state.simpleValue : undefined}
        legend={this.state.legend}
        max={(this.state.stacked || 'multiple' !== this.state.valueType) ?
          undefined : 400}
        series={'multiple' === this.state.valueType ? series : undefined}
        size={this.state.size}
        stacked={this.state.stacked}
        threshold={this.state.threshold ?
          ('single' === this.state.valueType ? 90 : 360) : undefined}
        type={this.state.type}
        vertical={this.state.vertical} />
    );
    return (
      <DocsArticle title="Meter" colorIndex="neutral-3">

        <p>Shows a bar, arc, or circular meter graphic.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>important   {"{number}"}</code></dt>
            <dd>The index of the series data that the active label should
              correspond to, if any.</dd>
            <dt><code>large       true|false</code></dt>
            <dd>Larger sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>legend      {"{placement: right|bottom|inline, total: true|false}"}</code></dt>
            <dd>Whether to show a legend. If showing, whether to include a total,
              and where to place it. If placement is not specified, it will be
              placed to match the aspect ratio of the window. <code>inline</code> is
              only supported with horizontal bar.</dd>
            <dt><code>max         {"{value: , label: }|{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min         {"{value: , label: }|{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>series      {"[{value: , label: , colorIndex: , important: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data.
              Either this or the <code>value</code> property must be provided.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Meter. Defaults to <code>medium</code>.
              Currently, the <code>spiral</code> type Meter does not respond to this property.</dd>
            <dt><code>small       true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>stacked     true|false</code></dt>
            <dd>Whether slices for multiple series values should be stacked
              together in the same slot or shown in separate slots.
              Defaults to <code>false</code>.</dd>
            <dt><code>threshold   {"{number}"}</code></dt>
            <dd>Optional threshold value.</dd>
            <dt><code>thresholds  {"[{value: , label: , colorIndex: }, ...]"}</code></dt>
            <dd>An array of objects describing thresholds.</dd>
            <dt><code>type        bar|arc|circle|spiral</code></dt>
            <dd>Whether to draw a bar, an arc, a circle, or a spiral.</dd>
            <dt><code>units       {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
            <dt><code>value       {"{number}"}</code></dt>
            <dd>The current value.</dd>
            <dt><code>vertical    true|false</code></dt>
            <dd>Whether to orient a bar or arc Meter vertically.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderMeterCode('Bar', barMeter)}
          {this._renderMeterCode('Bar, Vertical', barVerticalMeter)}
          {this._renderMeterCode('Arc', arcMeter)}
          {this._renderMeterCode('Arc, Vertical', arcVerticalMeter)}
          {this._renderMeterCode('Circle', circleMeter)}
          {this._renderMeterCode('Spiral', spiralMeter)}
          {this._renderMeterCode(
            'Bar, Min, Max, Units, Threshold', complexBarMeter)
          }
          {this._renderMeterCode(
            'Bar, Min, Max, Units, Thresholds, Vertical',
            complexVerticalBarMeter)
          }
          {this._renderMeterCode(
            'Arc, Min, Max, Units, Thresholds',
            complexArcMeter)
          }
          {this._renderMeterCode(
            'Arc, Min, Max, Units, Thresholds, Vertical',
            complexVerticalMeter)
          }
          {this._renderMeterCode(
            'Circle, Min, Max, Units, Threshold',
            complexCircleMeter)
          }
          {this._renderMeterCode(
            'Bar, Series, Legend',
            barLegendMeter)
          }
          {this._renderMeterCode(
            'Bar, Series, Inline Legend',
            barInlineLegendMeter)
          }

          <h3>Bar, Legend, onClick</h3>
          <div className="example">
            <Meter legend={true} series={clickableSeries}
              a11yTitleId='meter-title-29' a11yDescId='meter-desc-29' />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter legend={true} series={" + stringify(clickableSeriesDoc, null, '  ') + "}  />"}
          </code></pre>

          {this._renderMeterCode(
            'Bar, Series, Legend, Vertical',
            barVerticalLegendMeter)
          }
          {this._renderMeterCode(
            'Arc, Series, Legend',
            arcLegendMeter)
          }
          {this._renderMeterCode(
            'Arc, Series, Legend, Vertical, Units',
            arcVerticalLegendMeter)
          }
          {this._renderMeterCode(
            'Circle, Series, Legend',
            circleLegendMeter)
          }
          {this._renderMeterCode(
            'Spiral, Series, Status',
            complexSpiralMeter)
          }
          {this._renderMeterCode(
            'Spiral, Series, Storage',
            complexStorageMeter)
          }
          {this._renderMeterCode(
            'Bar, Series, Stacked, Legend',
            stackedBarMeter)
          }
          {this._renderMeterCode(
            'Bar, Small',
            smallBarMeter)
          }
          {this._renderMeterCode(
            'Arc, Small',
            smallArcMeter)
          }
          {this._renderMeterCode(
            'Circle, Small',
            smallCircleMeter)
          }
          {this._renderMeterCode(
            'Bar, Large',
            largeBarMeter)
          }
          {this._renderMeterCode(
            'Arc, Large',
            largeArcMeter)
          }
          {this._renderMeterCode(
            'Circle, Large',
            largeCircleMeter)
          }
          {this._renderMeterCode(
            'Bar, Loading',
            loadingBarMeter)
          }
          {this._renderMeterCode(
            'Arc, Loading',
            loadingArcMeter)
          }
          {this._renderMeterCode(
            'Spiral, Loading',
            loadingSpiralMeter)
          }
        </section>

        <section>
          {this._renderMeterCode(
            'Custom Example',
            customExampleMeter)
          }

          <FormField label="Value"
            help={'single' === this.state.valueType ? this.state.simpleValue : undefined}>
            <RadioButton id="value-type-single" name="valueType" label="Single"
              checked={'single' === this.state.valueType}
              onChange={this._onChangeValueType.bind(this, 'single')} />
            {simpleValueInput}
            <RadioButton id="value-type-multiple" name="valueType" label="Multiple"
              checked={'multiple' === this.state.valueType}
              onChange={this._onChangeValueType.bind(this, 'multiple')} />
            <RadioButton id="value-type-none" name="valueType" label="None"
              checked={'none' === this.state.valueType}
              onChange={this._onChangeValueType.bind(this, 'none')} />
          </FormField>
          <FormField>
            <CheckBox id="threshold" name="threshold" label="Threshold?"
              checked={this.state.threshold}
              onChange={this._onChangeThreshold} />
          </FormField>
          <FormField label="Type">
            <RadioButton id="type-bar" name="type" label="Bar"
              checked={'bar' === this.state.type}
              onChange={this._onChangeType.bind(this, 'bar')} />
            <RadioButton id="type-circle" name="type" label="Circle"
              checked={'circle' === this.state.type}
              onChange={this._onChangeType.bind(this, 'circle')} />
            <RadioButton id="type-arc" name="type" label="Arc"
              checked={'arc' === this.state.type}
              onChange={this._onChangeType.bind(this, 'arc')} />
            <RadioButton id="type-spiral" name="type" label="Spiral"
              checked={'spiral' === this.state.type}
              onChange={this._onChangeType.bind(this, 'spiral')} />
          </FormField>
          <FormField>
            <CheckBox id="vertical" name="vertical" label="Vertical?"
              checked={this.state.vertical}
              onChange={this._onChangeVertical} />
          </FormField>
          <FormField>
            <CheckBox id="stacked" name="stacked" label="Stacked?"
              checked={this.state.stacked}
              onChange={this._onChangeStacked} />
          </FormField>
          <FormField>
            <CheckBox id="legend" name="legend" label="Legend?"
              checked={this.state.legend}
              onChange={this._onChangeLegend} />
          </FormField>
          <FormField label="Size">
            <RadioButton id="size-small" name="size" label="Small"
              checked={'small' === this.state.size}
              onChange={this._onChangeSize.bind(this, 'small')} />
            <RadioButton id="size-medium" name="size" label="Medium"
              checked={'medium' === this.state.size}
              onChange={this._onChangeSize.bind(this, 'medium')} />
            <RadioButton id="size-large" name="size" label="Large"
              checked={'large' === this.state.size}
              onChange={this._onChangeSize.bind(this, 'large')} />
          </FormField>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = MeterDoc;
