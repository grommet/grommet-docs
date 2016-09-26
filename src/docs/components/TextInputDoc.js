// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import TextInput from 'grommet/components/TextInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

TextInput.displayName = 'TextInput';

const USAGE =
`import TextInput from 'grommet/components/TextInput';
<TextInput value={} onDOMChange={} onSelect={} suggestions={} />`;

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class TextInputDoc extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { value: VALUES[0], suggestions: VALUES };
  }

  _onDOMChange (event) {
    const regexp = new RegExp('^' + event.target.value);
    const suggestions = VALUES.filter(val => {
      return regexp.test(val);
    });
    this.setState({value: event.target.value, suggestions: suggestions});
  }

  _onSelect (pseudoEvent) {
    this.setState({value: pseudoEvent.suggestion, suggestions: VALUES});
  }

  render () {
    return (
      <DocsArticle title="TextInput" colorIndex="neutral-3">

        <section>
          <p>A text input field with optional suggestions.</p>
          <Form>
            <FormField>
              <TextInput id="item1" name="item-1"
                value={this.state.value} onDOMChange={this._onDOMChange}
                onSelect={this._onSelect}
                suggestions={this.state.suggestions} />
            </FormField>
          </Form>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>defaultValue  {"{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onDOMChange   {"{function (event)}"}</code></dt>
            <dd>Function that will be called when the user types in the
              input.</dd>
            <dt><code>onSelect      {"{function ({suggestion})}"}
              </code></dt>
            <dd>Function that will be called when the user selects a suggestion.
              The suggestion contains the object chosen from the supplied
              suggestions.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>suggestions   {"[{string}, ...]"}
              </code></dt>
            <dd>Suggestions to show. It is recommended to avoid showing too
              many suggestions and instead rely on the user to type more.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example align="start" code={
            <Form>
              <FormField>
                <TextInput id="item2" name="item-2"
                  value={this.state.value} onDOMChange={this._onDOMChange}
                  onSelect={this._onSelect}
                  suggestions={this.state.suggestions} />
              </FormField>
            </Form>
          } />
      </section>

      </DocsArticle>
    );
  }
};
