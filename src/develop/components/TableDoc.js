// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Table from 'grommet/components/Table';

export default class TableDoc extends Component {

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
    var inline = [
      "<Table>",
      "  <thead>",
      "    <tr>",
      "      <th>...</th>",
      "      <th>...</th>",
      "    </tr>",
      "  </thead>",
      "  <tbody>",
      "    <TableRow>",
      "      <td>...</td>",
      "      <td>...</td>",
      "    </TableRow>",
      "  </tbody>",
      "</Table>"
    ].join('\n');

    var tableHeader = (
      <thead>
        <tr>
          <th>header 1</th>
          <th>header 2</th>
        </tr>
      </thead>
    );

    var tableBody = (
      <tbody>
        <tr>
          <td>first</td>
          <td>note 1</td>
        </tr>
        <tr>
          <td>second</td>
          <td>note 2</td>
        </tr>
        <tr>
          <td>third</td>
          <td>note 3</td>
        </tr>
      </tbody>
    );

    return (
      <DocsArticle title="Table" colorIndex="neutral-3">

        <p>Table of items. The preferred method of
          populating rows in the Table is to use TableRows inside
          a child <code>&lt;tbody&gt;</code> element. Callers should also specify
          a child <code>&lt;thead%gt;</code> element if a header is needed.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Table Options</h2>
          <dl>
            <dt><code>onMore        {"function () {...}"}</code></dt>
            <dd>Function that will be called when more data is needed. When this
              callback is provided, it is an indication that more data could be
              added if the user scrolls to the bottom of the table. When present,
              Table will add a spinner to the bottom of the table and listen for
              the user scrolling down such that it becomes visible. When the user
              scrolls to the bottom, this callback will be called. The expectation
              is that the the caller will add the next chunk of data into the table.</dd>
            <dt><code>onSelect      {"function (selection) {...}"}</code></dt>
            <dd>Function that will be called when the user selects a row.</dd>
            <dt><code>scrollable    true|false</code></dt>
            <dt><code>selectable    true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selected      number|[number, ...]</code></dt>
            <dd>The currently selected item(s) using a zero based index.</dd>
          </dl>
        </section>

        <section>
          <h2>TableRow Options</h2>
          <dl>
            <dt><code>onClick     {"function () {...}"}</code></dt>
            <dd>Called when the user clicks on the row. Callers should bind
              an identifier to the function to distinguish between multiple
              rows. For example <code>{"onClick={this._onClick.bind(this, id)}"}</code></dd>
            <dt><code>selected    true|false</code></dt>
            <dd>Whether this row is currently selected.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <Table>{tableBody}</Table>
          </div>

          <h3>Selectable</h3>
          <div className="example">
            <Table selectable={true} selected={this.state.singleSelected}
              onSelect={this._onSingleSelect}>
              {tableHeader}
              {tableBody}
            </Table>
          </div>

          <h3>Multi-select</h3>
          <div className="example">
              <Table selectable="multiple" onSelect={this._onMultipleSelect}>
              {tableHeader}
              {tableBody}
            </Table>
          </div>

        </section>

      </DocsArticle>
    );
  }
}
