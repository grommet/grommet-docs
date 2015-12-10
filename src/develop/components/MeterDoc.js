// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string').default;
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
  {label: 'OK', value: 0, colorIndex: 'ok'},
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

var MeterDoc = React.createClass({

  getInitialState: function () {
    return {simpleValue: simpleValue,
      type: 'bar', valueType: 'single'
    };
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
            <dt><code>legend      {"{placement: right|bottom, total: true|false}"}</code></dt>
            <dd>Whether to show a legend. If showing, whether to include a total,
              and where to place it. If placement is not specified, it will be
              placed to match the aspect ratio of the window.</dd>
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

          <h3>Arc, Min, Max, Units, Thresholds</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-9' a11yDescId='meter-desc-9'
              type="arc" value={this.state.simpleValue}
              min={simpleMin} max={simpleMax} thresholds={thresholds}
              units={simpleUnits} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"arc\" value={" + this.state.simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " thresholds={" + stringify(thresholds) + "}\n" +
              " units=\"" + simpleUnits + "\" />"}
          </code></pre>

          <h3>Arc, Min, Max, Units, Thresholds, Vertical</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-10' a11yDescId='meter-desc-10'
              type="arc" value={this.state.simpleValue}
              min={simpleMin} max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} vertical={true} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"arc\" value={" + this.state.simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" vertical={true} />"}
          </code></pre>

          <h3>Circle, Min, Max, Units, Threshold</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-11' a11yDescId='meter-desc-11'
              type="circle" value={this.state.simpleValue}
              min={simpleMin} max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"circle\" value={" + this.state.simpleValue + "}\n" +
              " min={" + stringify(simpleMin) + "}\n" +
              " max={" + stringify(simpleMax) + "}\n" +
              " threshold={" + simpleThreshold + "}\n" +
              " units=\"" + simpleUnits + "\" />"}
          </code></pre>

          <h3>Bar, Series, Legend</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-12' a11yDescId='meter-desc-12'
              legend={true} series={series} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter legend={true}\n " +
              "series={" + stringify(series) + "}  />"}
          </code></pre>

          <h3>Bar, Series, Legend, Vertical</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-13' a11yDescId='meter-desc-13'
              legend={{total: true}} series={series} vertical={true} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter legend={{total: true}}\n" +
              " series={" + stringify(series) + "}\n" +
              " vertical={true} />"}
          </code></pre>

          <h3>Arc, Series, Legend</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-14' a11yDescId='meter-desc-14'
              type="arc" legend={true} series={series} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"arc\" legend={true}\n " +
              "series={" + stringify(series) + "} />"}
          </code></pre>

          <h3>Arc, Series, Legend, Vertical, Units</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-15' a11yDescId='meter-desc-15'
              type="arc" legend={true} series={storageSeries}
              vertical={true} units="TB" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"arc\" legend={true} units=\"TB\"\n " +
              "series={" + stringify(storageSeries) + "}\n" +
              " vertical={true} />"}
          </code></pre>

          <h3>Circle, Series, Legend</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-16' a11yDescId='meter-desc-16'
              type="circle" legend={true} series={series} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"circle\" legend={true}\n " +
              "series={" + stringify(series) + "} />"}
          </code></pre>

          <h3>Spiral, Series, Status</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-17' a11yDescId='meter-desc-17'
              type="spiral" series={statusSeries} max={statusSeriesMax} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"spiral\" max={" + statusSeriesMax + "}\n " +
              "series={" + stringify(statusSeries) + "} />"}
          </code></pre>

          <h3>Spiral, Series, Storage</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-18' a11yDescId='meter-desc-18'
              type="spiral" series={storageSeries} units="TB"/>
          </div>
          <pre><code className="html hljs xml">
            {"<Meter type=\"spiral\" units=\"TB\"\n " +
              "series={" + stringify(storageSeries) + "} />"}
          </code></pre>

          <h3>Bar, Series, Stacked, Legend</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-12' a11yDescId='meter-desc-12'
              legend={true} series={series} stacked={true} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter legend={true} stacked={true}\n " +
              "series={" + stringify(series) + "}  />"}
          </code></pre>

          <h3>Bar, Small</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-19' a11yDescId='meter-desc-19'
              value={this.state.simpleValue} size="small" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} size=\"small\" />"}
          </code></pre>

          <h3>Arc, Small</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-20' a11yDescId='meter-desc-20'
              value={this.state.simpleValue} type="arc" size="small" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} type=\"arc\" size=\"small\" />"}
          </code></pre>

          <h3>Circle, Small</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-21' a11yDescId='meter-desc-21'
              value={this.state.simpleValue} type="circle" size="small" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} type=\"circle\" size=\"small\" />"}
          </code></pre>

          <h3>Bar, Large</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-22' a11yDescId='meter-desc-22'
              value={this.state.simpleValue} size="large" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} size=\"large\" />"}
          </code></pre>

          <h3>Arc, Large</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-23' a11yDescId='meter-desc-23'
              value={this.state.simpleValue} type="arc" size="large" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} type=\"arc\" size=\"large\" />"}
          </code></pre>

          <h3>Circle, Large</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-24' a11yDescId='meter-desc-24'
              value={this.state.simpleValue} type="circle" size="large" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={" + this.state.simpleValue + "} type=\"circle\" size=\"large\" />"}
          </code></pre>

          <h3>Bar, Loading</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-25' a11yDescId='meter-desc-25'
              value={undefined} />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={undefined} />"}
          </code></pre>

          <h3>Arc, Loading</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-26' a11yDescId='meter-desc-26'
              value={undefined} type="arc" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={undefined} type=\"arc\" />"}
          </code></pre>

          <h3>Spiral, Loading</h3>
          <div className="example">
            <Meter a11yTitleId='meter-title-27' a11yDescId='meter-desc-27'
              value={undefined} type="spiral" />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter value={undefined} type=\"spiral\" />"}
          </code></pre>

        </section>

        <section>
          <h2>Custom Example</h2>

          <div className="example">
            <Meter
              value={'single' === this.state.valueType ?
                this.state.simpleValue : null}
              legend={this.state.legend}
              max={(this.state.stacked || 'multiple' !== this.state.valueType) ?
                null : 400}
              series={'multiple' === this.state.valueType ? series : null}
              size={this.state.size}
              stacked={this.state.stacked}
              threshold={this.state.threshold ?
                ('single' === this.state.valueType ? 90 : 360) : null}
              type={this.state.type}
              vertical={this.state.vertical} />
          </div>

          <FormField label="Value"
            help={'single' === this.state.valueType ? this.state.simpleValue : null}>
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
