// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  sortIndex: { value: true },
  onSort: { value: true }
};

const COLUMNS = [
  { label: 'Name', property: 'name' },
  { label: 'Note', property: 'note'}
];

const DATA = [
  { name: 'Alan', note: 'plays accordion' },
  { name: 'Chris', note: 'drops the mic' },
  { name: 'Tracy', note: 'travels the world' }
];

export default class TableHeaderExamplesDoc extends Component {

  constructor () {
    super();
    this._onSort = this._onSort.bind(this);
    const index = 0;
    const ascending = true;
    const data = this._sort(index, ascending);
    this.state = { ascending, data, index, elementProps: {} };
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
    const { ascending, data, elementProps, index } = this.state;
    let propsSchema = { ...PROPS_SCHEMA };

    const columnLabels = COLUMNS.map(column => column.label);
    const rows = data.map(datum => {
      const cells = COLUMNS.map(column => (
        <td key={column.property}>{datum[column.property]}</td>
      ));
      return <TableRow key={datum.name}>{cells}</TableRow>;
    });
    let props = {};
    if (elementProps.sortIndex) {
      props.sortIndex = index;
      props.sortAscending = ascending;
    } else {
      delete propsSchema.onSort;
    }
    if (elementProps.onSort) {
      props.onSort = this._onSort;
    }
    const element = (
      <Table>
        <TableHeader labels={columnLabels} {...props} />
        <tbody>
          {rows}
        </tbody>
      </Table>
    );

    return (
      <InteractiveExample contextLabel='TableHeader'
        contextPath='/docs/table-header'
        preamble={`import TableHeader from 'grommet/components/TableHeader';`}
        propsSchema={propsSchema}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
