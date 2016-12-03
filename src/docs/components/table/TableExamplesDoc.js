// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import InteractiveExample from '../../../components/InteractiveExample';

Table.displayName = 'Table';
TableRow.displayName = 'TableRow';

const PROPS_SCHEMA = {
  selectable: { options: ['false', 'true', 'multiple'] },
  scrollable: { value: true }
};

const CONTENTS_SCHEMA = {
  header: { value: (
    <thead>
      <tr>
        <th>Name</th>
        <th>Note</th>
      </tr>
    </thead>
  ), initial: true }
};

const TABLE_BODY = (
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

export default class TableExamplesDoc extends Component {

  constructor () {
    super();
    this._onSelect = this._onSelect.bind(this);
    this.state = { contents: {}, elementProps: {} };
  }

  _onSelect (selection) {
    // no-op
  }

  render () {
    const { contents, elementProps } = this.state;
    const props = { ...elementProps };

    if ('multiple' === props.selectable) {
      props.onSelect = this._onSelect;
    } else if ('true' === props.selectable) {
      props.onSelect = this._onSelect;
      props.selectable = true;
    } else {
      delete props.selectable;
    }

    const element = (
      <Table {...props}>
        {contents.header}
        {TABLE_BODY}
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
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
