// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const DATA = [
  {uid: 1, face: '', name: 'Alan', mood: 'happy'},
  {uid: 2, face: '', name: 'Chris', mood: 'cool'},
  {uid: 3, face: '', name: 'Eric', mood: 'odd'}
];

class ListExample extends Component {

  constructor () {
    super();
    this._onSingleSelect = this._onSingleSelect.bind(this);
    this._onMultipleSelect = this._onMultipleSelect.bind(this);

    this.state = { singleSelected: [0] };
  }

  // single selection is managed by the caller via state.singleSelection
  _onSingleSelect (selection) {
    this.setState({singleSelected: selection});
  }

  // multiple selection is managed by the Table
  _onMultipleSelect (selection) {
    // no-op
  }

  render () {
    const { ...props } = this.props;

    if ('multiple' === props.selectable) {
      props.onSelect = this._onMultipleSelect;
    } else if (props.selectable) {
      props.selected = this.state.singleSelected;
      props.onSelect = this._onSingleSelect;
    }

    let items = DATA.map((datum) => {
      return (
        <ListItem key={datum.uid} justify="between">
          <span>{datum.name}</span>
          <span className="secondary">{datum.mood}</span>
        </ListItem>
        );
    });

    return (
      <Example code={
        <List {...props}>
          {items}
        </List>
      } />
    );
  }
};

export default class ListExamplesDoc extends ExamplesDoc {};

ListExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/list">List</NavAnchor>,
  examples: [
    { label: 'Default', component: ListExample },
    { label: 'Selectable', component: ListExample,
      props: { selectable: true }
    },
    { label: 'Multi-select', component: ListExample,
      props: { selectable: 'multiple' }
    }
  ],
  title: 'Examples'
};
