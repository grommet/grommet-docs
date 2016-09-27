// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Select.displayName = 'Select';

const USAGE =
`import Select from 'grommet/components/Select';
<Select value={} onSearch={} onChange={} options={} />`;

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class SelectDoc extends Component {

  constructor () {
    super();
    this._onSearch = this._onSearch.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = { value: VALUES[0], options: VALUES };
  }

  _onSearch (event) {
    const regexp = new RegExp('^' + event.target.value);
    const options = VALUES.filter(val => {
      return regexp.test(val);
    });
    this.setState({ options: options });
  }

  _onChange (pseudoEvent) {
    this.setState({ value: pseudoEvent.option, options: VALUES });
  }

  render () {
    return (
      <DocsArticle title="Select" colorIndex="neutral-3">

        <section>
          <p>An select-like field with optional search capability.</p>
          <Form>
            <FormField>
              <Select id="item1" name="item-1"
                value={this.state.value}
                onSearch={this._onSearch} onChange={this._onChange}
                options={this.state.options} />
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
            <dt><code>defaultValue  {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"{function ({target: , option: })}"}
              </code></dt>
            <dd>Function that will be called when the user selects a option.
              The target corresponds to the embedded input element, allowing you
              to distinguish which component triggered the event. The option
              contains the object chosen from the supplied options.</dd>
            <dt><code>onSearch      {"{function (event)}"}</code></dt>
            <dd>Function that will be called when the user types in the
              search input. If this property is not provided, no search
              field will be rendered.</dd>
            <dt><code>options       {"[{value: , label: }|{string}, ...]"}
              </code></dt>
            <dd>Options can be either a string or an object.
              The <code>label</code> property of option objects can be a
              string or a React element. This allows rendering richer
              option representations.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the search input is empty.</dd>
            <dt><code>value         {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/select/examples`}>
            Select Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
