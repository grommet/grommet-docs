// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';

const DATA = [
  {uid: 1, name: 'Alan', mood: 'happy'},
  {uid: 2, name: 'Chris', mood: 'cool'},
  {uid: 3, name: 'Eric', mood: 'odd'},
  {uid: 4, name: 'Tracy', mood: 'social'}
];

export default class LazyTable extends Component {

  constructor () {
    super();
    this._onMore = this._onMore.bind(this);
    this.state = { data: DATA };
  }

  _onMore () {
    let data = this.state.data.slice(0);
    if (data.length < 200) { // defensive guard
      data = data.concat(DATA.map((d, i) => ({
        ...d, uid: (data.length + i + 1) })));
    }
    this.setState({ data });
  }

  render () {
    const { data } = this.state;

    let rows = data.map((datum, index) => {
      return (
        <TableRow key={datum.uid}>
          <td>{datum.uid}</td>
          <td>{datum.name}</td>
          <td className='secondary'>{datum.mood}</td>
        </TableRow>
      );
    });

    return (
      <Table onMore={data.length < 200 ? this._onMore : undefined}>
        <tbody>
          {rows}
        </tbody>
      </Table>
    );
  }
};
