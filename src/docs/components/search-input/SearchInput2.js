// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import SearchInput from 'grommet/components/SearchInput';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import Example from '../../Example';

const Suggestion = (props) => (
  <Box direction="row" justify="between">
    {props.name}
    <span className="secondary">{props.annotation}</span>
  </Box>
);

Suggestion.propTypes= {
  name: PropTypes.string,
  annotation: PropTypes.string
};

const SUGGESTION_STRING =
`const Suggestion = (props) => (
  <Box direction="row" justify="between">
    {props.name}
    <span className="secondary">{props.annotation}</span>
  </Box>
);`;

const VALUES = [
  {value: "first", sub: "alpha",
    label: <Suggestion name="first" annotation="alpha" />},
  {value: "second", sub: "beta",
    label: <Suggestion name="second" annotation="beta" />},
  {value: "third", sub: "gamma",
    label: <Suggestion name="third" annotation="gamma" />},
  {value: "fourth", sub: "delta",
    label: <Suggestion name="fourth" annotation="delta" />}
];

export default class SearchInput2 extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { value: VALUES[0].value, suggestions: VALUES };
  }

  _onDOMChange (event) {
    const regexp = new RegExp('^' + event.target.value);
    const suggestions = VALUES.filter(richValue => (
      regexp.test(richValue.value) || regexp.test(richValue.sub)
    ));
    this.setState({ value: event.target.value, suggestions: suggestions});
  }

  _onSelect (pseudoEvent) {
    this.setState({ value: pseudoEvent.suggestion.value, suggestions: VALUES });
  }

  render () {
    return (
      <Box flex={true}>
        <Example align="center" code={
          <Form>
            <FormField>
              <SearchInput id="item1" name="item-1"
                value={this.state.value} onDOMChange={this._onDOMChange}
                onSelect={this._onSelect}
                suggestions={this.state.suggestions} />
            </FormField>
          </Form>
        } />

      <Box pad={{ horizontal: 'medium' }}>
          <p>Where <code>Suggestion</code> is:</p>
          <pre><code className="html xml hljs">{SUGGESTION_STRING}</code></pre>
        </Box>
      </Box>
    );
  }

};
