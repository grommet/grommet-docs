// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import RadioButton from 'grommet/components/RadioButton';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

RadioButton.displayName = 'RadioButton';
FormField.displayName = 'FormField';

export default class RadioButtonDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { choice: 'choice-1' };
  }

  _onChange (choice) {
    this.setState({choice: choice});
  }

  render () {
    return (
      <DocsArticle title='RadioButton'>

        <section>
          <p>A radio button in a web form. We have a separate component from the
            browser base so we can style it.</p>
          <FormField>
            <RadioButton id='choice1-1' name='choice1-1' label='Choice 1'
              checked={this.state.choice === 'choice-1'}
              onChange={this._onChange.bind(this, 'choice-1')} />
            <RadioButton id='choice1-2' name='choice1-2' label='Choice 2'
              checked={this.state.choice === 'choice-2'}
              onChange={this._onChange.bind(this, 'choice-2')} />
          </FormField>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
          <dt><code>checked         true|false</code></dt>
          <dd>Same as React <code>{'<input checked={} />'}</code>.</dd>
          <dt><code>defaultChecked  true|false</code></dt>
          <dd>Same as React <code>{'<input defaultChecked={} />'}</code>.</dd>
          <dt><code>disabled        true|false</code></dt>
          <dd>Same as React <code>{'<input disabled={} />'}</code>.</dd>
          <dt><code>id              {'{string}'}</code></dt>
          <dd>The DOM id attribute value to use for the
            underlying <code>{'<input />'}</code> element.</dd>
          <dt><code>label           {'{string|node}'}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {'{string}'}</code></dt>
          <dd>The DOM name attribute value to use for the
            underlying <code>{'<input />'}</code> element.</dd>
          <dt><code>onChange        {'{function}'}</code></dt>
          <dd>Same as React <code>{'<input onChange={} />'}</code>.</dd>
          <dt><code>value           {'{string}'}</code></dt>
          <dd>The DOM value attribute to use for the
            underlying <code>{'<input />'}</code> element.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={
            `import RadioButton from 'grommet/components/RadioButton';`}>
            <FormField>
              <RadioButton id='choice1-1' name='choice1-1' label='Choice 1'
                checked={this.state.choice === 'choice-1'}
                onChange={() => {}} />
              <RadioButton id='choice1-2' name='choice1-2' label='Choice 2'
                checked={this.state.choice === 'choice-2'}
                onChange={() => {}} />
            </FormField>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
