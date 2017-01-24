// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import TableHeader from 'grommet/components/TableHeader';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

Table.displayName = 'Table';
TableRow.displayName = 'TableRow';

const ON_CLICK_SNIPPET = `onClick={this._onClick.bind(this, id)}`;

export default class TableDoc extends Component {

  render () {
    return (
      <DocsArticle title='Table' action={
        <Button primary={true} path='/docs/table/examples'
          label='Examples' />
        }>

        <section>
          <p>Table of items. The preferred method of
            populating rows in the Table is to use TableRows inside
            a child <code>&lt;tbody&gt;</code> element.
            Callers can also specify
            a <Anchor path='/docs/table-header'>TableHeader</Anchor> if
            a header is needed.</p>
          <Table>
            <TableHeader labels={['Name', 'Note']} />
            <tbody>
              <TableRow>
                <td>Alan</td>
                <td>plays accordion</td>
              </TableRow>
              <TableRow>
                <td>Tracy</td>
                <td>travels the world</td>
              </TableRow>
            </tbody>
          </Table>
        </section>

        <section>
          <h2>Table Properties</h2>
          <dl>
            <dt><code>onMore        {'{function}'}</code></dt>
            <dd>Function that will be called when more data is needed. When this
              callback is provided, it is an indication that more data could be
              added if the user scrolls to the bottom of the table. When
              present,
              Table will add a spinner to the bottom of the table and listen for
              the user scrolling down such that it becomes visible. When the
              user
              scrolls to the bottom, this callback will be called. The
              expectation
              is that the the caller will add the next chunk of data into
              the table.</dd>
            <dt><code>onSelect      {'{function (selected)}'}</code></dt>
            <dd>Function that will be called when the user selects something.
              When only one item is selected, it returns the zero based index
              for that item. When multiple items are selected, it returns an
              array of those {'item\'s'} zero based indexes.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether rows should be switched to a column layout when
              the display area narrows. Defaults to <code>true</code>.</dd>
            <dt><code>scrollable    true|false</code></dt>
            <dt><code>selectable    true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selected      {'{number}|[{number}, ...]'}</code></dt>
            <dd>The currently selected item(s) using a zero based index.</dd>
          </dl>
        </section>

        <section>
          <h2>TableRow Properties</h2>
          <dl>
            <dt><code>onClick       {'{function}'}</code></dt>
            <dd>Called when the user clicks on the row. Callers should bind
              an identifier to the function to distinguish between multiple
              rows. For example <code>{ON_CLICK_SNIPPET}</code></dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
}
