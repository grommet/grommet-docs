// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Select from 'grommet/components/Select';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  placeHolder: { value: 'None', initial: true },
  inline: { value: true },
  multiple: { value: true },
  onSearch: { value: true },
  options: { options: ['strings', 'objects'] }
};

const OPTIONS_MAP = {
  objects: [
    {value: "first", sub: "alpha",
      label: (
        <Box direction="row" justify="between">
          <span>first</span>
          <span className="secondary">alpha</span>
        </Box>
      )},
    {value: "second", sub: "beta",
      label: (
        <Box direction="row" justify="between">
          <span>second</span>
          <span className="secondary">beta</span>
        </Box>
      )},
    {value: "third", sub: "gamma",
      label: (
        <Box direction="row" justify="between">
          <span>third</span>
          <span className="secondary">gamma</span>
        </Box>
      )},
    {value: "fourth", sub: "delta",
      label: (
        <Box direction="row" justify="between">
          <span>fourth</span>
          <span className="secondary">delta</span>
        </Box>
      )}
  ],
  strings: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight']
};

export default class SelectExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onSearch = this._onSearch.bind(this);
    this.state = { elementProps: {} };
  }

  _onChange (event) {
    const value = event.value.value || event.value;
    this.setState({ value });
  }

  _onSearch (event) {
    const { elementProps } = this.state;
    const regexp = new RegExp('^' + event.target.value);
    const options = OPTIONS_MAP[elementProps.options || 'strings'];
    const nextOptions =
      options.filter(option => regexp.test(option.value || option));
    this.setState({ options: nextOptions });
  }

  render () {
    const { elementProps, options, value } = this.state;
    let props = { ...elementProps };
    props.options = options || OPTIONS_MAP[elementProps.options || 'strings'];
    if (elementProps.onSearch) {
      props.onSearch = this._onSearch;
    }
    const element = (
      <Select {...props} value={value} onChange={this._onChange} />
    );
    return (
      <InteractiveExample contextLabel='Select' contextPath='/docs/select'
        preamble={`import Select from 'grommet/components/Select';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({
          elementProps, options: undefined })} />
    );
  }
};
