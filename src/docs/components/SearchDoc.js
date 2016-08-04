// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Search from 'grommet/components/Search';

const SIMPLE_SUGGESTIONS = ['item 1', 'item 2', 'item 3'];
const RICH_SUGGESTIONS = [
  {label: 'item 1', data: '/item-1'},
  {label: 'item 2', data: '/item-2'},
  {label: 'item 3', data: '/item-3'}
];

export default class SearchDoc extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = {
      value: "",
      simpleSuggestions: [],
      richSuggestions: []
    };
  }

  _onDOMChange (event) {
    const regexp = new RegExp('^' + event.target.value);
    const simpleSuggestions = SIMPLE_SUGGESTIONS.filter(function (suggestion) {
      return regexp.test(suggestion);
    });
    const richSuggestions = RICH_SUGGESTIONS.filter(function (suggestion) {
      return regexp.test(suggestion.label);
    });

    this.setState({
      value: event.target.value,
      simpleSuggestions: simpleSuggestions,
      richSuggestions: richSuggestions
    });
  }

  _onSelect (pseudoEvent, selected) {
    var value;
    if (pseudoEvent.suggestion && pseudoEvent.suggestion.hasOwnProperty('label')) {
      value = pseudoEvent.suggestion.label;
    } else {
      value = pseudoEvent.suggestion;

    }
    this.setState({
      value: value,
      simpleSuggestions: [],
      richSuggestions: []
    });
  }

  render () {
    return (
      <DocsArticle title="Search" colorIndex="neutral-3">

        <section>
          <p>A responsive search control.</p>
          <Search inline={true}/>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>defaultValue  {"{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down.
              At most one of left or right and one of top or bottom should be specified.</dd>
            <dt><code>fill          true|false</code></dt>
            <dd>Indicates whether an inline search input should take up the full
              width of its parent container or not.</dd>
            <dt><code>iconAlign     start|end</code></dt>
            <dd>Whether the search icon should align with the start or end of
              the input field. Defaults to <code>end</code>.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates that the search input should always
              be visible.</dd>
            <dt><code>onDOMChange   {"{function (event)}"}</code></dt>
            <dd>Function that will be called when the user types in the input.</dd>
            <dt><code>onSelect      {"{function ({target: , suggestion: }, selected)}"}</code></dt>
            <dd>Function that will be called when the user selects a
              suggestion. The target corresponds to the embedded input element
              , allowing you to distinguish which component triggered the event
              . The suggestion contains the object chosen from the supplied
              suggestions. selected will be true when the user has chosen one
              of the suggestions, and false when the user presses enter after
              entering text (without selecting a suggestion).</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether the search control is responsive (turns off inline
              search option for small screen sizes).
              If responsive is <code>false</code>, large inputs will shrink to
              the default inline size for smaller screens (instead of reverting
              to the search control button by default).
              Defaults to <code>true</code>.</dd>
            <dt><code>size          medium|large</code></dt>
            <dd>The size of the inline search input. Defaults to <code>medium</code>.</dd>
            <dt><code>suggestions   [{"{string}|{label: {string}, ...}"}, ...]</code></dt>
            <dd>Suggestions to show, typically based on what the user has
            typed so far. You can pass an array of strings or objects. Objects
            must have a label: property but can have any other properties you
            like. This object will be given to the onSelect() handler
            if the suggestion is selected.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to show in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Search onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />
          <Example name="Left" code={
            <Search onDOMChange={this._onDOMChange} onSelect={this._onSelect}
              dropAlign={{right: 'right'}} />
          } />
          <Example name="Suggestions and Value" code={
            <Search value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />
          <Example name="Inline" code={
            <Search inline={true}/>
          } />
          <Example name="Inline, iconAlign" code={
            <Search inline={true} iconAlign="start" />
          } />
          <Example name="Inline, Placeholder" code={
            <Search inline={true} placeHolder="Search" />
          } />
          <Example name="Inline, Value, Suggestions" code={
            <Search inline={true} value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />
          <Example name="Inline, Value, Rich Suggestions" code={
            <Search inline={true} value={this.state.value}
              suggestions={this.state.richSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />
          <Example name="Large" code={
            <Search inline={true} value={this.state.value} size="large"
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />
          <Example name="Large, Fill, Responsive False" code={
            <Search inline={true} value={this.state.value} size="large"
              fill={true} responsive={false}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          } />

        </section>

      </DocsArticle>
    );
  }
};
