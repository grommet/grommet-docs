// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NumberInput from 'grommet/components/NumberInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';

export default class NumberInputDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: 10 };
  }

  _onChange (event) {
    this.setState({value: parseInt(event.target.value)});
  }

  render () {
    return (
      <DocsArticle title="NumberInput" colorIndex="neutral-3">

        <section>
          <p>A number input in a web form. We have a separate component from the
            browser base so we can style it.</p>
          <Form>
            <FormField>
              <NumberInput id="item2" name="item2" label="Item 2"
                value={this.state.value} onChange={this._onChange} />
            </FormField>
          </Form>
        </section>

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
          <dt><code>id              {"{string}"}</code></dt>
          <dd>The DOM id attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>label           {"{string|node}"}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {"{string}"}</code></dt>
          <dd>The DOM name attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>onChange        {"{function}"}</code></dt>
          <dd>Same as React {"<input onChange= >"}.</dd>
          <dt><code>toggle         true|false</code></dt>
          <dd>Whether to visualize it as a toggle switch.</dd>
          <dt><code>ariaDescribedby {"{string}"}</code></dt>
          <dd>Optional attribute to enhance accessibility in case the checkbox is used inside a context.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Basic</h3>
          <div className="example">
            <Form>
              <FormField>
                <NumberInput id="item2" name="item2" label="Item 2"
                  value={this.state.value} onChange={this._onChange} />
              </FormField>
            </Form>
          </div>
          <pre><code className="html hljs xml">{"<NumberInput id=\"item2\" name=\"item2\" label=\"Item 2\" />"}</code></pre>

          <h3>Disabled</h3>
          <div className="example">
            <Form>
              <FormField>
                <NumberInput id="item4" name="item4" label="Item 4" disabled={true}
                  value={this.state.value} />
            </FormField>
          </Form>
          </div>
          <pre><code className="html hljs xml">{"<NumberInput id=\"item4\" name=\"item4\" label=\"Item 4\" disabled=\{true\} />"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
};
