// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import CheckBox from 'grommet/components/CheckBox';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

CheckBox.displayName = 'CheckBox';

export default class CheckBoxDoc extends Component {

  constructor () {
    super ();
    this._onChange = this._onChange.bind(this);
    this.state = { checked: false };
  }

  _onChange () {
    this.setState({checked: ! this.state.checked});
  }

  render () {
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

          <Example name="Basic" code={
            <CheckBox id="item1" name="item1" label="Item 1"
              checked={this.state.checked} onChange={this._onChange} />
          } />
          <Example name="Toggle" code={
            <CheckBox id="item2" name="item2" label="Item 2"
              checked={this.state.checked} toggle={true} onChange={this._onChange} />
          } />
          <Example name="Disabled" code={
            <CheckBox id="item3" name="item3" label="Item 3"
              checked={this.state.checked} disabled={true}  />
          } />
          <Example name="Disabled Toggle" code={
            <CheckBox id="item4" name="item4" label="Item 4"
              checked={this.state.checked} toggle={true} disabled={true}  />
          } />
          <Example name="Reverse" code={
            <CheckBox id="item5" name="item5" label="Item 5"
              checked={this.state.checked} reverse={true} onChange={this._onChange} />
          } />
          <Example name="No Label" code={
            <CheckBox id="item6" name="item6"
              checked={this.state.checked} onChange={this._onChange} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
