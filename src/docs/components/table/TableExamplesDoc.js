// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const TABLE_HEADER = (
  <thead>
    <tr>
      <th>Name</th>
      <th>Note</th>
    </tr>
  </thead>
);

const TABLE_BODY_PLAIN = (
  <tbody>
    <tr>
      <td>Alan</td>
      <td>plays accordion</td>
    </tr>
    <tr>
      <td>Tracy</td>
      <td>travels the world</td>
    </tr>
    <tr>
      <td>Chris</td>
      <td>drops the mic</td>
    </tr>
  </tbody>
);

const TABLE_BODY_TABLE_ROWS = (
  <tbody>
    <TableRow>
      <td>Alan</td>
      <td>plays accordion</td>
    </TableRow>
    <TableRow>
      <td>Tracy</td>
      <td>travels the world</td>
    </TableRow>
    <TableRow>
      <td>Chris</td>
      <td>drops the mic</td>
    </TableRow>
  </tbody>
);

class TableExample extends Component {

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
    const { header, rows, ...props } = this.props;
    if ('multiple' === props.selectable) {
      props.onSelect = this._onMultipleSelect;
    } else if (props.selectable) {
      props.selected = this.state.singleSelected;
      props.onSelect = this._onSingleSelect;
    }
    return (
      <Example align="start" code={
        <Table {...props}>
          {header}
          {rows}
        </Table>
      } />
    );
  }
};

export default class TableExamplesDoc extends ExamplesDoc {};

TableExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/table">Table</Anchor>,
  examples: [
    { label: 'Default', component: TableExample,
      props: { rows: TABLE_BODY_PLAIN } },
    { label: 'Selectable', component: TableExample,
      props: { selectable: true,
        header: TABLE_HEADER, rows: TABLE_BODY_PLAIN } },
    { label: 'Multi-select', component: TableExample,
      props: { selectable: 'multiple',
        header: TABLE_HEADER, rows: TABLE_BODY_PLAIN } },
    { label: 'TableRow', component: TableExample,
      props: { selectable: 'multiple',
        header: TABLE_HEADER, rows: TABLE_BODY_TABLE_ROWS } }
  ],
  title: 'Examples'
};
