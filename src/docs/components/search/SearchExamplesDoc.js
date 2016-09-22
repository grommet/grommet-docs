// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Search from 'grommet/components/Search';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const SIMPLE_SUGGESTIONS = ['first', 'second', 'third', 'fourth'];
const RICH_SUGGESTIONS = [
  {label: 'first', data: '/item-1'},
  {label: 'second', data: '/item-2'},
  {label: 'third', data: '/item-3'},
  {label: 'fourth', data: '/item-4'}
];

class SearchExample extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = {
      value: "",
      simpleSuggestions: undefined,
      richSuggestions: undefined
    };
  }

  _onDOMChange (event) {
    const text = event.target.value;
    let simpleSuggestions, richSuggestions;
    if (text) {
      const regexp = new RegExp(`^${text}|\\s${text}`);
      simpleSuggestions = SIMPLE_SUGGESTIONS
        .filter(suggestion => regexp.test(suggestion));
      richSuggestions = RICH_SUGGESTIONS
        .filter(suggestion => regexp.test(suggestion.label));
    }

    this.setState({
      value: text,
      simpleSuggestions: simpleSuggestions,
      richSuggestions: richSuggestions
    });
  }

  _onSelect (pseudoEvent, selected) {
    var value;
    if (pseudoEvent.suggestion &&
      pseudoEvent.suggestion.hasOwnProperty('label')) {
      value = pseudoEvent.suggestion.label;
    } else {
      value = pseudoEvent.suggestion;

    }
    this.setState({
      value: value,
      simpleSuggestions: undefined,
      richSuggestions: undefined
    });
  }

  render () {
    const { suggest, ...props } = this.props;
    const { richSuggestions, simpleSuggestions, value } = this.state;
    let suggestions;
    if (suggest) {
      suggestions = 'rich' === suggest ? richSuggestions : simpleSuggestions;
    }
    return (
      <Example align="start" code={
        <Search {...props} value={value} suggestions={suggestions}
          onDOMChange={this._onDOMChange} onSelect={this._onSelect}/>
      } />
    );
  }
};

export default class SearchExamplesDoc extends ExamplesDoc {};

SearchExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/search">Search</NavAnchor>,
  examples: [
    { label: 'Default', component: SearchExample },
    { label: 'Left', component: SearchExample, props: {
      dropAlign: {right: 'right'}
    } },
    { label: 'Suggestions and Value', component: SearchExample,
      props: { suggest: 'simple' }},
    { label: 'Inline', component: SearchExample, props: { inline: true } },
    { label: 'Inline, iconAlign', component: SearchExample, props: {
      inline: true, iconAlign: 'start'
    } },
    { label: 'Inline, Placeholder', component: SearchExample, props: {
      inline: true, placeHolder: 'Search'
    } },
    { label: 'Inline, Value, Suggestions', component: SearchExample, props: {
      inline: true, suggest: 'simple'
    } },
    { label: 'Inline, Value, Rich Suggestions', component: SearchExample,
      props: {
        inline: true, suggest: 'rich'
      }
    },
    { label: 'Large', component: SearchExample, props: {
      inline: true, suggest: 'simple', size: 'large'
    } },
    { label: 'Large, Fill, Responsive False', component: SearchExample, props: {
      inline: true, suggest: 'simple', size: 'large', fill: true,
      responsive: false
    } }
  ],
  title: 'Examples'
};
