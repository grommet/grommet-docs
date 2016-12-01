// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Search from 'grommet/components/Search';
import InteractiveExample from '../../../components/InteractiveExample';

Search.displayName = 'Search';

const PROPS_SCHEMA = {
  placeHolder: { value: 'Search', initial: true },
  inline: { value: true, initial: true },
  responsive: { value: true },
  iconAlign: { options: ['start', 'end'] },
  size: { options: ['small', 'medium', 'large'] },
  suggestions: { value: ['first', 'second', 'third', 'fourth'] }
};

export default class SearchExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Search {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Search' contextPath='/docs/search'
        preamble={`import Search from 'grommet/components/Search';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
