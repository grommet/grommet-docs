// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import stringify from "json-stringify-pretty-compact";
import Meter from 'grommet/components/Meter';
import FormField from 'grommet/components/FormField';
import RadioButton from 'grommet/components/RadioButton';
import CheckBox from 'grommet/components/CheckBox';import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

Meter.displayName = 'Meter';
FormField.displayName = 'FormField';
RadioButton.displayName = 'RadioButton';
CheckBox.displayName = 'CheckBox';

const inline =
  "<Meter value={70} total={100} units=\"GB\" />";

let simpleValue = 40;
let simpleMin = {value: 0, label: '0 GB'};
let simpleMax = {value: 80, label: '80 GB'};
let simpleThreshold = 75;
let simpleUnits = 'GB';

let thresholds = [
  // {label: 'OK', value: 0, colorIndex: 'ok'},
  {label: 'Warning', value: 60, colorIndex: 'warning'},
  {label: 'Error', value: 70, colorIndex: 'error'}
];

let series = [
  {label: 'Gen 7', value: 50},
  {label: 'Gen 8', value: 200},
  {label: 'Gen 9', value: 100},
  {label: 'Gen 10', value: 300} //,
  // {label: 'Gen 11', value: 100}
];

let clickableSeries = [
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
let clickableSeriesDoc = clickableSeries.map(function (item) {
  return {
    label: item.label,
    value: item.value,
    onClick: '...'
  };
});

let statusSeries = [
  {label: 'OK', value: 70, colorIndex: 'ok'},
  {label: 'Warning', value: 15, colorIndex: 'warning'},
  {label: 'Error', value: 5, colorIndex: 'error'}
];
let statusSeriesMax = 90;

let storageSeries = [
  {label: 'Physical', value: 700},
  {label: 'Subscribed', value: 1200},
  {label: 'Allocated', value: 500}
];

export default class MeterDoc extends Component {

  constructor () {
    super();
    this._onChangeValueType = this._onChangeValueType.bind(this);
    this._onChangeSimpleValue = this._onChangeSimpleValue.bind(this);
    this._onChangeSeriesValue = this._onChangeSeriesValue.bind(this);
    this._onChangeSize = this._onChangeSize.bind(this);
    this._onChangeType = this._onChangeType.bind(this);
    this._onChangeVertical = this._onChangeVertical.bind(this);
    this._onChangeStacked = this._onChangeStacked.bind(this);
    this._onChangeLegend = this._onChangeLegend.bind(this);
    this._onChangeThreshold = this._onChangeThreshold.bind(this);
    this.state = {
      simpleValue: simpleValue,
      seriesValue: [
        {label: 'Gen 7', value: 50},
        {label: 'Gen 8', value: 200},
        {label: 'Gen 9', value: 100},
        {label: 'Gen 10', value: 300}
      ],
      type: 'bar',
      valueType: 'single'
    };
  }

  _onChangeValueType (valueType) {
    this.setState({ valueType: valueType });
  }

  _onChangeSimpleValue (event) {
    this.setState({ simpleValue: parseInt(event.target.value, 10) });
  }

  _onChangeSeriesValue (event) {
    const { seriesValue } = this.state;
    // extract index from name
    const index = parseInt(event.target.getAttribute('name').split('-')[1], 10);
    let nextSeriesValue = seriesValue.slice(0);
    nextSeriesValue[index] = {
      label: seriesValue[index].label,
      value: parseInt(event.target.value, 10)
    };
    console.log("!!! _onChangeSeriesValue", index, nextSeriesValue);
    this.setState({ seriesValue: nextSeriesValue });
  }

  _onChangeSize (size) {
    this.setState({ size: size });
  }

  _onChangeType (type) {
    this.setState({ type: type });
  }

  _onChangeVertical () {
    this.setState({ vertical: ! this.state.vertical });
  }

  _onChangeStacked () {
    this.setState({ stacked: ! this.state.stacked });
  }

  _onChangeLegend () {
    this.setState({ legend: ! this.state.legend });
  }

  _onChangeThreshold () {
    this.setState({ threshold: ! this.state.threshold });
  }

  render () {
    let simpleValueInput, seriesValueInputs;
    if ('single' === this.state.valueType) {
      simpleValueInput = (
        <input id="value" name="value" type="range"
          min="0" max="80" value={this.state.simpleValue}
          onChange={this._onChangeSimpleValue}/>
      );
    } else if ('multiple' === this.state.valueType) {
      seriesValueInputs = Array.apply(null, Array(4)).map((_, index) => (
        <input key={index} id={`value-${index}`} name={`value-${index}`}
          type="range" min="0" max="400"
          value={this.state.seriesValue[index].value}
          onChange={this._onChangeSeriesValue}/>
      ));
    }

    return (
      <DocsArticle title="Meter" colorIndex="neutral-3">

        <p>Shows a bar, arc, or circular meter graphic.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>activeIndex {'{number}'}</code></dt>
            <dd>The currently active series value index, if any.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
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
            <dt><code>legend      {"{placement: right|bottom|inline, total: true|false}"}</code></dt>
            <dd>Whether to show a legend. If showing, whether to include a total,
              and where to place it. If placement is not specified, it will be
              placed to match the aspect ratio of the window. <code>inline</code> is
              only supported with horizontal bar. If placement is set to <code>inline</code> and
              total is set to <code>false</code>, the active value is hidden.
              This property is deprecated. Callers are encouraged to use
              <NavAnchor path="/docs/legend">Legend</NavAnchor> and place it
              around the meter as needed.</dd>
            <dt><code>max         {"{value: , label: }|{number}"}</code></dt>
            <dd>The largest possible value. Defaults to 100.</dd>
            <dt><code>min         {"{value: , label: }|{number}"}</code></dt>
            <dd>The smallest possible value. Defaults to 0.</dd>
            <dt><code>onActive     {"{func (index)}"}</code></dt>
            <dd>Hover handler. The hovered series index is passed as an argument.
              When the user is ceases to hover over the
              component, <code>undefined</code> is passed as an argument.</dd>
            <dt><code>series      {"[{value: , label: , colorIndex: , important: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data.
              Either this or the <code>value</code> property must be provided.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Meter. Defaults to <code>medium</code>.
              Currently, the <code>spiral</code> type Meter does not respond to this property.</dd>
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

          <Example name="Bar" code={
            <Meter value={this.state.simpleValue} a11yTitleId='meter-title-1'
              a11yDescId='meter-desc-1' />
          } />
          <Example name="Bar, Vertical" code={
            <Meter value={this.state.simpleValue} vertical={true}
              a11yTitleId='meter-title-2' a11yDescId='meter-desc-2' />
          } />
          <Example name="Arc" code={
            <Meter value={this.state.simpleValue} type="arc"
              a11yTitleId='meter-title-3' a11yDescId='meter-desc-3' />
          } />
          <Example name="Arc, Vertical" code={
            <Meter value={this.state.simpleValue} type="arc" vertical={true}
              a11yTitleId='meter-title-4' a11yDescId='meter-desc-4' />
          } />
          <Example name="Circle" code={
            <Meter value={this.state.simpleValue} type="circle"
              a11yTitleId='meter-title-5' a11yDescId='meter-desc-5' />
          } />
          <Example name="Spiral" code={
            <Meter value={this.state.simpleValue} type="spiral"
              a11yTitleId='meter-title-6' a11yDescId='meter-desc-6' />
          } />
          <Example name="Bar, Min, Max, Units, Threshold" code={
            <Meter value={this.state.simpleValue} units={simpleUnits}
              min={simpleMin} max={simpleMax} threshold={simpleThreshold}
              a11yTitleId='meter-title-7' a11yDescId='meter-desc-7' />
          } />
          <Example name="Bar, Min, Max, Units, Thresholds, Vertical" code={
            <Meter value={this.state.simpleValue} min={simpleMin} max={simpleMax}
              threshold={simpleThreshold} units={simpleUnits} vertical={true}
              a11yTitleId='meter-title-8' a11yDescId='meter-desc-8' />
          } />
          <Example name="Arc, Min, Max, Units, Thresholds" code={
            <Meter type="arc" value={this.state.simpleValue} units={simpleUnits}
              min={simpleMin} max={simpleMax} thresholds={thresholds}
              a11yTitleId='meter-title-9' a11yDescId='meter-desc-9' />
          } />
          <Example name="Arc, Min, Max, Units, Thresholds, Vertical" code={
            <Meter type="arc" value={this.state.simpleValue}
              min={simpleMin} max={simpleMax} threshold={simpleThreshold}
              units={simpleUnits} vertical={true}
              a11yTitleId='meter-title-10' a11yDescId='meter-desc-10' />
          } />
          <Example name="Circle, Min, Max, Units, Threshold" code={
            <Meter type="circle" value={this.state.simpleValue} units={simpleUnits}
              min={simpleMin} max={simpleMax} threshold={simpleThreshold}
              a11yTitleId='meter-title-11' a11yDescId='meter-desc-11' />
          } />
          <Example name="Bar, Series, Legend" code={
            <Meter legend={true} series={series} max={400}
              a11yTitleId='meter-title-12' a11yDescId='meter-desc-12' />
          } />
          <Example name="Bar, Series, Inline Legend" code={
            <Meter legend={{placement: 'inline'}} series={series}
              a11yTitleId='meter-title-12' a11yDescId='meter-desc-12' />
          } />

          <h3>Bar, Legend, onClick</h3>
          <div className="example">
            <Meter legend={true} series={clickableSeries}
              a11yTitleId='meter-title-29' a11yDescId='meter-desc-29' />
          </div>
          <pre><code className="html hljs xml">
            {"<Meter legend={true} series={" + stringify(clickableSeriesDoc, null, '  ') + "}  />"}
          </code></pre>

          <Example name="Bar, Series, Legend, Vertical" code={
            <Meter legend={{total: true}} series={series} vertical={true}
              a11yTitleId='meter-title-13' a11yDescId='meter-desc-13' />
          } />
          <Example name="Arc, Series, Legend" code={
            <Meter type="arc" legend={true} series={series}
              a11yTitleId='meter-title-14' a11yDescId='meter-desc-14' />
          } />
          <Example name="Arc, Series, Legend, Vertical, Units" code={
            <Meter type="arc" legend={true} series={storageSeries}
              vertical={true} units="TB"
              a11yTitleId='meter-title-15' a11yDescId='meter-desc-15' />
          } />
          <Example name="Circle, Series, Legend" code={
            <Meter type="circle" legend={true} series={series}
              a11yTitleId='meter-title-16' a11yDescId='meter-desc-16' />
          } />
          <Example name="Spiral, Series, Status" code={
            <Meter type="spiral" series={statusSeries} max={statusSeriesMax}
              a11yTitleId='meter-title-17' a11yDescId='meter-desc-17' />
          } />
          <Example name="Spiral, Series, Storage" code={
            <Meter type="spiral" series={storageSeries} units="TB"
              a11yTitleId='meter-title-18' a11yDescId='meter-desc-18' />
          } />
          <Example name="Bar, Series, Stacked, Legend" code={
            <Meter legend={true} series={series} stacked={true}
              a11yTitleId='meter-title-19' a11yDescId='meter-desc-19' />
          } />
          <Example name="Bar, Small" code={
            <Meter value={this.state.simpleValue} size="small"
              a11yTitleId='meter-title-20' a11yDescId='meter-desc-20' />
          } />
          <Example name="Arc, Small" code={
            <Meter value={this.state.simpleValue} type="arc" size="small"
              a11yTitleId='meter-title-21' a11yDescId='meter-desc-21' />
          } />
          <Example name="Circle, Small" code={
            <Meter value={this.state.simpleValue} type="circle" size="small"
              a11yTitleId='meter-title-22' a11yDescId='meter-desc-22' />
          } />
          <Example name="Bar, Large" code={
            <Meter value={this.state.simpleValue} size="large"
              a11yTitleId='meter-title-23' a11yDescId='meter-desc-23' />
          } />
          <Example name="Arc, Large" code={
            <Meter value={this.state.simpleValue} type="arc" size="large"
              a11yTitleId='meter-title-24' a11yDescId='meter-desc-24' />
          } />
          <Example name="Circle, Large" code={
            <Meter value={this.state.simpleValue} type="circle" size="large"
              a11yTitleId='meter-title-25' a11yDescId='meter-desc-25' />
          } />
          <Example name="Bar, Loading" code={
            <Meter value={undefined} a11yTitleId='meter-title-26'
              a11yDescId='meter-desc-26' />
          } />
          <Example name="Arc, Loading" code={
            <Meter value={undefined} type="arc"
              a11yTitleId='meter-title-27' a11yDescId='meter-desc-27' />
          } />
          <Example name="Spiral, Loading" code={
            <Meter value={undefined} type="spiral"
              a11yTitleId='meter-title-28' a11yDescId='meter-desc-28' />
          } />
        </section>

        <section>
          <Example name="Custom Example" code={
            <Meter
              value={'single' === this.state.valueType ?
                this.state.simpleValue : undefined}
              legend={this.state.legend}
              max={(this.state.stacked || 'multiple' !== this.state.valueType) ?
                undefined : 400}
              series={'multiple' === this.state.valueType ?
                this.state.seriesValue : undefined}
              size={this.state.size}
              stacked={this.state.stacked}
              threshold={this.state.threshold ?
                ('single' === this.state.valueType ? 90 : 360) : undefined}
              type={this.state.type}
              vertical={this.state.vertical} />
          } />

          <FormField label="Value"
            help={'single' === this.state.valueType ? this.state.simpleValue : undefined}>
            <RadioButton id="value-type-single" name="valueType" label="Single"
              checked={'single' === this.state.valueType}
              onChange={this._onChangeValueType.bind(this, 'single')} />
            {simpleValueInput}
            <RadioButton id="value-type-multiple" name="valueType" label="Multiple"
              checked={'multiple' === this.state.valueType}
              onChange={this._onChangeValueType.bind(this, 'multiple')} />
            {seriesValueInputs}
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
};
