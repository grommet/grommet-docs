// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';

const DATA = [
  {uid: 1, name: 'Alan', mood: 'happy'},
  {uid: 2, name: 'Chris', mood: 'cool'},
  {uid: 3, name: 'Eric', mood: 'odd'},
  {uid: 4, name: 'Tracy', mood: 'social'}
];

export default class LazyTiles extends Component {

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

    let tiles = data.map((datum, index) => (
      <Tile key={datum.uid} justify='between' separator='top'
        pad={{ horizontal: 'medium', vertical: 'small', between: 'large' }}>
        <span>{datum.uid} {datum.name}</span>
        <span className='secondary'>{datum.mood}</span>
      </Tile>
    ));

    // wrap in a <div /> so infinite scrolling works
    return (
      <div>
        <Tiles pad={{ vertical: 'medium' }} flush={false} fill={true}
          onMore={data.length < 200 ? this._onMore : undefined}>
          {tiles}
        </Tiles>
      </div>
    );
  }
};
