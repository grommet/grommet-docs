// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var CheckBox = require('grommet/components/CheckBox');

function convertCheckBoxToString(checkBoxJSX) {
  return jsxToString(checkBoxJSX, {
    ignoreProps: ['onChange']
  });
}

var CheckBoxDoc = React.createClass({

  getInitialState: function () {
    return {checked: false};
  },

  _onChange: function () {
    this.setState({checked: ! this.state.checked});
  },

  _renderCheckBoxCode(heading, checkBoxJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {checkBoxJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertCheckBoxToString(checkBoxJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {

    var basicCheckBox = (
      <CheckBox id="item1" name="item1" label="Item 1"
        checked={this.state.checked} onChange={this._onChange} />
    );

    var toggleCheckBox = (
      <CheckBox id="item2" name="item2" label="Item 2"
        checked={this.state.checked} toggle={true} onChange={this._onChange} />
    );

    var disabledCheckBox = (
      <CheckBox id="item3" name="item3" label="Item 3"
        checked={this.state.checked} disabled={true}  />
    );

    var disabledToggleCheckBox = (
      <CheckBox id="item4" name="item4" label="Item 4"
        checked={this.state.checked} toggle={true} disabled={true}  />
    );

    var reverseCheckBox = (
      <CheckBox id="item5" name="item5" label="Item 5"
        checked={this.state.checked} reverse={true} onChange={this._onChange} />
    );

    var noLabelCheckBox = (
      <CheckBox id="item6" name="item6"
        checked={this.state.checked} onChange={this._onChange} />
    );

    return (
      <DocsArticle title="CheckBox" colorIndex="neutral-3">

        <p>A check box in a web form. We have a separate component from the
          browser base so we can style it.</p>
        <pre><code className="html hljs xml">
          {"<CheckBox id=\"item1\" label=\"Item 1\">"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>checked         true|false</code></dt>
          <dd>Same as React {"<input checked= >"}.</dd>
          <dt><code>defaultChecked  true|false</code></dt>
          <dd>Same as React {"<input defaultChecked= >"}.</dd>
          <dt><code>disabled        true|false</code></dt>
          <dd>Same as React {"<input disabled= >"}.
            Also adds a hidden input element with the same name so
            form submissions work.</dd>
          <dt><code>id              {"{text}"}</code></dt>
          <dd>The DOM id attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>label           {"{text|node}"}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {"{text}"}</code></dt>
          <dd>The DOM name attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>onChange        {"{func}"}</code></dt>
          <dd>Same as React {"<input onChange= >"}.</dd>
          <dt><code>reverse         true|false</code></dt>
          <dd>
            Whether to show the label in front of the checkbox.
            Default is false.
          </dd>
          <dt><code>toggle          true|false</code></dt>
          <dd>Whether to visualize it as a toggle switch. Default is false.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCheckBoxCode('Basic', basicCheckBox)}
          {this._renderCheckBoxCode('Toggle', toggleCheckBox)}
          {this._renderCheckBoxCode('Disabled', disabledCheckBox)}
          {this._renderCheckBoxCode('Disabled Toggle', disabledToggleCheckBox)}
          {this._renderCheckBoxCode('Reverse', reverseCheckBox)}
          {this._renderCheckBoxCode('No Label', noLabelCheckBox)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = CheckBoxDoc;
