// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import PasswordInput from 'grommet/components/PasswordInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

export default class PasswordInputDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: 'grommet 2.0 is coming' };
  }

  _onChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <DocsArticle title='PasswordInput'>

        <section>
          <p>A text input in a web form. We have a separate component from the
            browser base so that we can toggle show/hide password.</p>
          <Form>
            <FormField>
              <PasswordInput id='item1' name='item1' label='Item 1'
                value={this.state.value} onChange={this._onChange} />
            </FormField>
          </Form>
        </section>

        <section>
          <h2>Properties</h2>

          Same as React {'<input />'} properties.
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={
            `import PasswordInput from 'grommet/components/PasswordInput';`}>
            <PasswordInput value={this.state.value} onChange={() => {}} />
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
