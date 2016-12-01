// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  placeHolder: { value: 'Search', initial: true },
  suggestions: { options: ['none', 'simple', 'rich'] }
};

const SUGGESTIONS_MAP = {
  none: undefined,
  rich: [
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
  simple: ['first', 'second', 'third', 'fourth']
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    if (elementProps.suggestions) {
      elementProps.suggestions = SUGGESTIONS_MAP[elementProps.suggestions];
    }
    const element = <SearchInput {...elementProps} />;
    return (
      <InteractiveExample contextLabel='SearchInput'
        contextPath='/docs/search-input'
        preamble={`import SearchInput from 'grommet/components/SearchInput';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
