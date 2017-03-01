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
  suggestions: { value: ['first', 'second', 'third', 'fourth'] },
  dropAlign: { options: ['left', 'right', 'top', 'bottom'] }
};

export default class SearchExamplesDoc extends Component {

  constructor () {
    super();
    this._onDOMChange = this._onDOMChange.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { elementProps: {}, value: '' };
  }

  _onDOMChange (event) {
    this.setState({ value: event.target.value });
  }

  _onSelect (event) {
    this.setState({ value: event.suggestion });
  }

  render () {
    const { elementProps, value } = this.state;
    const props = { value };
    if (elementProps.suggestions) {
      props.onSelect = this._onSelect;
    }
    if (elementProps.dropAlign) {
      switch (elementProps.dropAlign) {
        case 'left': props.dropAlign = { left: 'left' }; break;
        case 'right': props.dropAlign = { right: 'right' }; break;
        case 'top': props.dropAlign = { bottom: 'top' }; break;
        case 'bottom': props.dropAlign = { top: 'bottom' }; break;
      }
    }
    const element = (
      <Search {...elementProps} {...props}
        onDOMChange={this._onDOMChange}/>
    );
    return (
      <InteractiveExample contextLabel='Search' contextPath='/docs/search'
        preamble={`import Search from 'grommet/components/Search';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
