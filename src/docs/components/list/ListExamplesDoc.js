// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import InteractiveExample from '../../../components/InteractiveExample';

List.displayName = 'List';
ListItem.displayName = 'ListItem';

const PROPS_SCHEMA = {
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
    this._onSelect = this._onSelect.bind(this);
    this.state = { elementProps: {} };
  }

  _onSelect (selection) {
    // no-op
  }

  render () {
    const { elementProps } = this.state;
    const props = { ...elementProps };
    if ('multiple' === props.selectable) {
      props.onSelect = this._onSelect;
    } else if ('true' === props.selectable) {
      props.onSelect = this._onSelect;
      props.selectable = true;
    } else {
      delete props.selectable;
    }

    let items = DATA.map((datum, index) => {
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
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
