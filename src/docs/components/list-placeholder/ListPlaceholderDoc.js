// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

ListPlaceholder.displayName = 'ListPlaceholder';

export default class ListPlaceholderDoc extends Component {

  render () {
    return (
      <DocsArticle title='ListPlaceholder' action={
        <Button primary={true} path='/docs/list-placeholder/examples'
          label='Examples' />
        }>

        <section>
          <p>Displays helpful content when
            a <Anchor path='/docs/list'>List</Anchor>, <Anchor
              path='/docs/tiles'>Tiles</Anchor>, or <Anchor
              path='/docs/table'>Table</Anchor> has no content
            to show, either while the data is being fetched, nothing
            matches search or filter criteria, or there just aren't any items
            to begin with.</p>
          <ListPlaceholder unfilteredTotal={0} filteredTotal={0} />
          <p><strong>NOTE:</strong> This component comes from
            the <code>grommet-addons</code> repository. You will need to add
            a dependency to that repository in order to use it.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>addControl       {'{element}'}</code></dt>
            <dd>An control to show when there are no items in existence.</dd>
            <dt><code>emptyMessage     {'{string}'}</code></dt>
            <dd>What to say when there are no items in existence. Defaults
              to 'None'.</dd>
            <dt><code>filteredTotal    {'{number}'}</code></dt>
            <dd>How many items match the current search and/or filters.</dd>
            <dt><code>unfilteredTotal  {'{number}'}</code></dt>
            <dd>How many items exist.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
}
