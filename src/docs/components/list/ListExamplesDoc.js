// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import InteractiveExample from '../../../components/InteractiveExample';

List.displayName = 'List';
ListItem.displayName = 'ListItem';

const PROPS_SCHEMA = {
  onMore: { options: ['none', 'func'] },
  selectable: { options: ['false', 'true', 'multiple'] }
};

const DATA = [
  {uid: 1, name: 'Alan', mood: 'happy'},
  {uid: 2, name: 'Chris', mood: 'cool'},
  {uid: 3, name: 'Eric', mood: 'odd'}
];

export default class ListExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onMore = this._onMore.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { data: DATA, elementProps: {} };
  }

  _onChange (elementProps) {
    let data = this.state.data;
    if ('func' !== elementProps.onMore) {
      data = DATA.slice(0);
    }
    this.setState({ data, elementProps });
  }

  _onMore () {
    let data = this.state.data.slice(0);
    data = data.concat(DATA.map((d, i) => ({
      ...d, uid: (data.length + i + 1) })));
    this.setState({ data });
  }

  _onSelect (selection) {
    // no-op
  }

  render () {
    const { data, elementProps } = this.state;
    const props = { ...elementProps };

    if ('multiple' === props.selectable) {
      props.onSelect = this._onSelect;
    } else if ('true' === props.selectable) {
      props.onSelect = this._onSelect;
      props.selectable = true;
    } else {
      delete props.selectable;
    }

    if ('func' === props.onMore) {
      props.onMore = this._onMore;
    } else {
      delete props.onMore;
    }

    let items = data.map((datum, index) => {
      let itemProps = {};
      if (0 === index) {
        itemProps.separator = 'horizontal';
      }
      return (
        <ListItem key={datum.uid} justify='between' {...itemProps}>
          <span>{datum.name}</span>
          <span className='secondary'>{datum.mood}</span>
        </ListItem>
      );
    });
    const element = <List {...props}>{items}</List>;

    return (
      <InteractiveExample contextLabel='List' contextPath='/docs/list'
        preamble={`import List from 'grommet/components/List';\n` +
          `import ListItem from 'grommet/components/ListItem';`}
        propsSchema={PROPS_SCHEMA}
        align='stretch'
        element={element}
        onChange={this._onChange} />
    );
  }
};
