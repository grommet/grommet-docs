// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Example from '../../Example';

const COLUMNS = [
  { label: 'Name', property: 'name' },
  { label: 'Note', property: 'note'}
];

const DATA = [
  { name: 'Alan', note: 'plays accordion' },
  { name: 'Chris', note: 'drops the mic' },
  { name: 'Tracy', note: 'travels the world' }
];

export default class Table4 extends Component {

  constructor () {
    super();
    this._onSort = this._onSort.bind(this);
    const index = 0;
    const ascending = true;
    const data = this._sort(index, ascending);
    this.state = { data, index, ascending };
  }

  _sort (index, ascending) {
    const { property } = COLUMNS[index];
    return DATA.slice(0).sort((r1, r2) => {
      if (r1[property] < r2[property]) {
        return (ascending ? -1 : 1);
      } else if (r1[property] > r2[property]) {
        return (ascending ? 1 : -1);
      } else {
        return 0;
      }
    });
  }

  _onSort (index, ascending) {
    const data = this._sort(index, ascending);
    this.setState({ data, index, ascending });
  }

  render () {
    const { data, index, ascending } = this.state;
    const columnLabels = COLUMNS.map(column => column.label);
    const rows = data.map(datum => {
      const cells = COLUMNS.map(column => (
        <td key={column.property}>{datum[column.property]}</td>
      ));
      return <TableRow key={datum.name}>{cells}</TableRow>;
    });

    return (
      <Example align="start" code={
        <Table>
          <TableHeader labels={columnLabels}
            sortIndex={index} sortAscending={ascending}
            onSort={this._onSort} />
          <tbody>
            {rows}
          </tbody>
        </Table>
      } />
    );
  }

};
