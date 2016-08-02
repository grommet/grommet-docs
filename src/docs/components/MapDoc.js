// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import GrommetMap from 'grommet/components/Map';
import Header from 'grommet/components/Header';
import CheckBox from 'grommet/components/CheckBox';

export default class MapDoc extends Component {

  constructor () {
    super();
    this.state = { vertical: false };
  }

  render () {
    const { vertical } = this.state;

    const data = {
      categories: [
        {id: "category-1", label: "First category", items: [
          {id: "item-1-1", node: "First item"},
          {id: "item-1-2", node: "Second item"},
          {id: "item-1-3", node: "Third item"}
        ]},
        {id: "category-2", label: "Second category", items: [
          {id: "item-2-1", node: "Fourth item"},
          {id: "item-2-2", node: "Fifth item"}
        ]},
        {id: "category-3", label: "Third category", items: [
          {id: "item-3-1", node: "Sixth item"},
          {id: "item-3-2", node: "Seventh item"}
        ]}
      ],
      links: [
        {parentId: "item-1-1", childId: "item-2-2"},
        {parentId: "item-1-2", childId: "item-2-2"},
        {parentId: "item-1-2", childId: "item-2-1"},
        {parentId: "item-2-2", childId: "item-3-1"},
        {parentId: "item-2-1", childId: "item-3-2"}
      ]
    };

    return (
      <DocsArticle title="Map" colorIndex="neutral-3">

        <p>Shows a graph of nodes and links between them.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>data      {"{\n    categories: [{id: , label: , items: [id: , node: ]}, ...],\n    links: [{parentId: , childId: }, ...]\n}"}</code></dt>
            <dd>An array of objects describing the data.</dd>
            <dt><code>vertical  true|false</code></dt>
            <dd>Whether to orient the map vertically.</dd>
          </dl>
        </section>

        <section>
          <Header justify="between">
            <h2>Example</h2>
            <CheckBox checked={this.state.vertical} toggle={true} label="vertical"
              onChange={() => this.setState({ vertical: ! vertical })} />
          </Header>
          <Example code={
            <GrommetMap vertical={vertical} data={data} />
          }/>

        </section>

      </DocsArticle>
    );
  }
};
