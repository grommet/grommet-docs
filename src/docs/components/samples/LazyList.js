// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';

const DATA = [
  {uid: 1, name: 'Alan', mood: 'happy'},
  {uid: 2, name: 'Chris', mood: 'cool'},
  {uid: 3, name: 'Eric', mood: 'odd'},
  {uid: 4, name: 'Tracy', mood: 'social'}
];

export default class LazyList extends Component {

  constructor () {
    super();
    this._onMore = this._onMore.bind(this);
    this.state = { data: DATA };
  }

  _onMore () {
    let data = this.state.data.slice(0);
    data = data.concat(DATA.map((d, i) => ({
      ...d, uid: (data.length + i + 1) })));
    this.setState({ data });
  }

  render () {
    const { data } = this.state;

    let items = data.map((datum, index) => {
      let itemProps = {};
      if (0 === index) {
        itemProps.separator = 'horizontal';
      }
      return (
        <ListItem key={datum.uid} justify='between'
          pad={{ horizontal: 'medium', vertical: 'small', between: 'large' }}
          {...itemProps}>
          <span>{datum.uid} {datum.name}</span>
          <span className='secondary'>{datum.mood}</span>
        </ListItem>
      );
    });
    
    return (
      <List onMore={data.length < 200 ? this._onMore : undefined}>
        {items}
      </List>
    );
  }
};
