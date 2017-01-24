// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import InteractiveExample from '../../../components/InteractiveExample';

Table.displayName = 'Table';
TableRow.displayName = 'TableRow';

const PROPS_SCHEMA = {
  onMore: { options: ['none', 'func'] },
  responsive: { value: true, initial: true },
  selectable: { options: ['false', 'true', 'multiple'] },
  scrollable: { value: true }
};

const CONTENTS_SCHEMA = {
  header: { value: (
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Note</th>
      </tr>
    </thead>
  ), initial: true }
};

const DATA = [
  {uid: 1, name: 'Alan', activity: 'plays accordion'},
  {uid: 2, name: 'Chris', activity: 'drops the mic'},
  {uid: 3, name: 'Eric', activity: 'rides a bike'},
  {uid: 4, name: 'Tracy', activity: 'travels the world'}
];

export default class TableExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onMore = this._onMore.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { contents: {}, data: DATA, elementProps: {} };
  }

  _onChange (elementProps, contents) {
    let data = this.state.data;
    if ('func' !== elementProps.onMore) {
      data = DATA.slice(0);
    }
    this.setState({ contents, data, elementProps });
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
    const { contents, data, elementProps } = this.state;
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

    let rows = data.map((datum, index) => (
      <TableRow key={datum.uid}>
        <td>{datum.uid}</td>
        <td>{datum.name}</td>
        <td className='secondary'>{datum.activity}</td>
      </TableRow>
    ));
    const element = (
      <Table {...props}>
        {contents.header}
        <tbody>
          {rows}
        </tbody>
      </Table>
    );

    return (
      <InteractiveExample contextLabel='Table' contextPath='/docs/table'
        preamble={`import Table from 'grommet/components/Table';\n` +
          `import TableRow from 'grommet/components/TableRow';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        align='stretch'
        element={element}
        onChange={this._onChange} />
    );
  }
};
