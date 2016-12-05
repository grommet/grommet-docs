// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableHeader from 'grommet/components/TableHeader';
import TableRow from 'grommet/components/TableRow';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';
import Example from '../../Example';

TableHeader.displayName = 'TableHeader';

const COLUMNS = [
  { label: 'Name', property: 'name' },
  { label: 'Note', property: 'note'}
];

const DATA = [
  { name: 'Alan', note: 'plays accordion' },
  { name: 'Chris', note: 'drops the mic' },
  { name: 'Tracy', note: 'travels the world' }
];

export default class TableHeaderDoc extends Component {

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
      <DocsArticle title='TableHeader' action={
        <Button primary={true} path='/docs/table-header/examples'
          label='Examples' />
        }>

        <section>
          <p>A table header that can be used as a sort control.</p>
          <Table>
            <TableHeader labels={columnLabels}
              sortIndex={index} sortAscending={ascending}
              onSort={this._onSort} />
            <tbody>
              {rows}
            </tbody>
          </Table>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>labels          {'[{node}, ...]'}</code></dt>
            <dd>Header cell contents.</dd>
            <dt><code>onSort          {'{function ({index}, {ascending})}'}
              </code></dt>
            <dd>Function that will be called when the user clicks on a
              header cell. It is passed the index of the cell and which
              direction to sort in.</dd>
            <dt><code>sortAscending   true|false</code></dt>
            <dd>Indicates which direction the sort is currenly going.</dd>
            <dt><code>sortIndex       {'{number}'}</code></dt>
            <dd>Indicates which cell is currently being sorted on.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example align='start' code={
            <Table>
              <TableHeader labels={columnLabels}
                sortIndex={index} sortAscending={ascending}
                onSort={this._onSort} />
              <tbody>
                {rows}
              </tbody>
            </Table>
          } />
      </section>

      </DocsArticle>
    );
  }
};
