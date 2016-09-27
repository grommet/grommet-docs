// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Select from 'grommet/components/Select';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Box from 'grommet/components/Box';
import Example from '../../Example';

const Option = (props) => (
  <Box direction="row" justify="between">
    {props.name}
    <span className="secondary">{props.annotation}</span>
  </Box>
);

Option.propTypes= {
  name: PropTypes.string,
  annotation: PropTypes.string
};

const OPTION_STRING =
`const Option = (props) => (
  <Box direction="row" justify="between">
    {props.name}
    <span className="secondary">{props.annotation}</span>
  </Box>
);`;

const VALUES = [
  {value: "first", sub: "alpha",
    label: <Option name="first" annotation="alpha" />},
  {value: "second", sub: "beta",
    label: <Option name="second" annotation="beta" />},
  {value: "third", sub: "gamma",
    label: <Option name="third" annotation="gamma" />},
  {value: "fourth", sub: "delta",
    label: <Option name="fourth" annotation="delta" />}
];

export default class Select2 extends Component {

  constructor () {
    super();
    this._onSearch = this._onSearch.bind(this);
    this._onChange = this._onChange.bind(this);
    this.state = { value: VALUES[0].value, options: VALUES };
  }

  _onSearch (event) {
    const regexp = new RegExp('^' + event.target.value);
    const options = VALUES.filter(richValue => (
      regexp.test(richValue.value) || regexp.test(richValue.sub)
    ));
    this.setState({ options: options});
  }

  _onChange (pseudoEvent) {
    this.setState({ value: pseudoEvent.option.value, options: VALUES });
  }

  render () {
    return (
      <Box flex={true}>
        <Example align="center" code={
          <Form>
            <FormField>
              <Select id="item1" name="item-1"
                value={this.state.value}
                onSearch={this._onSearch} onChange={this._onChange}
                options={this.state.options} />
            </FormField>
          </Form>
        } />

      <Box pad={{ horizontal: 'medium' }}>
          <p>Where <code>Option</code> is:</p>
          <pre><code className="html xml hljs">{OPTION_STRING}</code></pre>
        </Box>
      </Box>
    );
  }

};
