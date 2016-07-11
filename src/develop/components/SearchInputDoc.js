// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import { updatePageTitle } from '../../utils/a11y';

const SearchInputSuggestion = (props) => {
  return (
    <Box direction="row" justify="between">
      {props.name}
      <span className="secondary">{props.annotation}</span>
    </Box>
  );
};

SearchInputSuggestion.propTypes= {
  name: PropTypes.string,
  annotation: PropTypes.string
};

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'];

const RICH_VALUES = [
  {value: "first", sub: "alpha",
    label: <SearchInputSuggestion name="first" annotation="alpha" />},
  {value: "second", sub: "beta",
    label: <SearchInputSuggestion name="second" annotation="beta" />},
  {value: "third", sub: "gamma",
    label: <SearchInputSuggestion name="third" annotation="gamma" />},
  {value: "fourth", sub: "delta",
    label: <SearchInputSuggestion name="fourth" annotation="delta" />}
];

export default class SearchInputDoc extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this._onDOMChange2 = this._onDOMChange2.bind(this);
    this._onSelect2 = this._onSelect2.bind(this);
    this.state = {
      value: "one",
      suggestions: VALUES,
      richValue: "second",
      richSuggestions: RICH_VALUES
    };
  }

  componentDidMount () {
    updatePageTitle('Search Input');
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

  _onDOMChange2 (event) {
    const regexp = new RegExp('^' + event.target.value);
    const suggestions = RICH_VALUES.filter(richValue => {
      return regexp.test(richValue.value) || regexp.test(richValue.sub);
    });
    this.setState({richValue: event.target.value, richSuggestions: suggestions});
  }

  _onSelect2 (pseudoEvent) {
    this.setState({
      richValue: pseudoEvent.suggestion.value,
      richSuggestions: RICH_VALUES
    });
  }

  render () {
    const inline =
      "<SearchInput onDOMChange={...} onSelect={...} />";
    return (
      <DocsArticle title="SearchInput" colorIndex="neutral-3">

        <p>An input field with a search control.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>defaultValue  {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onDOMChange      {"function (event) {...}"}</code></dt>
            <dd>Function that will be called when the user types in the input.</dd>
            <dt><code>onSelect      {"function ({target: , suggestion: }) {...}"}</code></dt>
            <dd>Function that will be called when the user selects a suggestion.
              The target corresponds to the embedded input element, allowing you
              to distinguish which component triggered the event. The suggestion
              contains the object chosen from the supplied suggestions.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>suggestions   {"[{value: , label: }|{string}, ...]"}</code></dt>
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

          <Example name="Simple" code={
            <SearchInput id="item1" name="item-1"
              value={this.state.value} onDOMChange={this._onDOMChange}
              onSelect={this._onSelect}
              suggestions={this.state.suggestions} />
          } />
          <Example name="Rich Suggestions" code={
            <SearchInput id="item2" name="item-2"
              value={this.state.richValue} onDOMChange={this._onDOMChange2}
              onSelect={this._onSelect2}
              suggestions={this.state.richSuggestions} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
