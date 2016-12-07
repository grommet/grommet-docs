// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import List from 'grommet/components/List';
import ListItem from 'grommet/components/ListItem';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

const DATA = [
  {uid: 1, face: '', name: 'Alan', mood: 'happy'},
  {uid: 2, face: '', name: 'Chris', mood: 'cool'},
  {uid: 3, face: '', name: 'Eric', mood: 'odd'}
];

const ON_CLICK_SNIPPET = `onClick={this._onClick.bind(this, id)}`;

export default class ListDoc extends Component {

  render () {

    let items = DATA.map((datum, index) => {
      let itemProps = {};
      if (0 === index) {
        itemProps.separator = 'horizontal';
      }
      return (
        <ListItem key={datum.uid} justify='between' {...itemProps}>
          <span>{datum.name}</span>
          <span className='secondary'>{datum.mood}</span>
        </ListItem>
      );
    });

    return (
      <DocsArticle title='List' action={
        <Button primary={true} path='/docs/list/examples'
          label='Examples' />
        }>

        <section>
          <p>A list of items. The preferred method of populating items in the
          List is to use ListItem children.</p>
          <List>{items}</List>
        </section>

        <section>
          <h2>List Properties</h2>
          <dl>
            <dt><code>onMore         {'{function ()}'}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>onSelect       {'{function (selected)}'}</code></dt>
            <dd>Function that will be called when the user selects something.
              When only one item is selected, it returns the zero based index
              for that item. When multiple items are selected, it returns an
              array of those {'item\'s'} zero based indexes.</dd>
            <dt><code>selectable     true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selected       {'{number}|[{number}, ...]'}</code></dt>
            <dd>The currently selected item(s) using a zero based index.</dd>
          </dl>
        </section>

        <section>
          <h2>ListItem Properties</h2>
          <dl>
            <dt><code>onClick     {'function () {...}'}</code></dt>
            <dd>Called when the user clicks on the item. Callers should bind
              an identifier to the function to distinguish between multiple
              items. For example <code>{ON_CLICK_SNIPPET}</code></dd>
          </dl>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
            also available for ListItem.</p>
        </section>

      </DocsArticle>
    );
  }
}
