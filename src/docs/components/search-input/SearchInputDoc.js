// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SearchInput from 'grommet/components/SearchInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

SearchInput.displayName = 'SearchInput';

const USAGE =
`import SearchInput from 'grommet/components/SearchInput';
<SearchInput value={} onDOMChange={} onSelect={} suggestions={} />`;

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

export default class SearchInputDoc extends Component {

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
      <DocsArticle title="SearchInput" colorIndex="neutral-3">

        <section>
          <p>An input field with a search control.</p>
          <Form>
            <FormField>
              <SearchInput id="item1" name="item-1"
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
            <dt><code>defaultValue  {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onDOMChange   {"{function (event)}"}</code></dt>
            <dd>Function that will be called when the user types in the
              input.</dd>
            <dt><code>onSelect      {"{function ({target: , suggestion: })}"}
              </code></dt>
            <dd>Function that will be called when the user selects a suggestion.
              The target corresponds to the embedded input element, allowing you
              to distinguish which component triggered the event. The suggestion
              contains the object chosen from the supplied suggestions.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>suggestions   {"[{value: , label: }|{string}, ...]"}
              </code></dt>
            <dd>Suggestions can be either a string or an object.
              The <code>label</code> property of suggestion objects can be a
              string or a React element. This allows rendering richer
              suggestion representations.</dd>
            <dt><code>value         {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/search-input/examples`}>
            SearchInput Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
