// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

export default class TileDoc extends Component {

  render () {

    return (
      <DocsArticle title="Tile(s)" colorIndex="neutral-3">

        <section>
          <p>A grid of items. The preferred method of populating
            Tiles is to use Tile children.</p>
        </section>

        <section>
          <h2>Tiles Options</h2>
          <dl>
            <dt><code>fill        true|false</code></dt>
            <dd>Whether the contents expand to fill all of the available
              space.</dd>
            <dt><code>flush       true|false</code></dt>
            <dd>Whether the contents are flush with the left and right edges
              or not.
              Defaults to true. When flush, there is no padding around the
              outside
              or between the contained tiles.</dd>
            <dt><code>onMore      {"{function}"}</code></dt>
            <dd>Function that will be called when more data is needed.</dd>
            <dt><code>onSelect    {"{function (selected)}"}</code></dt>
            <dd>Function that will be called when the user selects something.
              When only one item is selected, it returns the zero based index
              for that item. When multiple items are selected, it returns an
              array of those {"item's"} zero based indexes.</dd>
            <dt><code>selectable  true|false|multiple</code></dt>
            <dd>Whether rows are selectable. <code>multiple</code> indicates
              that multiple rows may be selected</dd>
            <dt><code>selected    {"{number}|[{number}, ...]"}</code></dt>
            <dd>The currently selected item(s) using a zero based index.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of the contained tiles.
              Defaults to <code>medium</code>.</dd>
            <dt><code>masonry     true|false</code></dt>
            <dd>Whether to update the number of columns based on the component
              width. Defaults to <code>false</code>. The number of columns can
              be set with <code>numColumns</code>.</dd>
            <dt><code>numColumns  number</code></dt>
            <dd>Number of columns to allow for masonry option, based on
              component width. Responds based on the width of the tile children
              (set with <code>size</code>).</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available for Tiles.</p>
        </section>

        <section>
          <h2>Tile Options</h2>
          <dl>
            <dt><code>onClick     {"{function}"}</code></dt>
            <dd>Called when the user clicks on the item. Callers should bind
              an identifier to the function to distinguish between multiple
              items. For example <code>
              {"onClick={this._onClick.bind(this, id)}"}</code></dd>
            <dt><code>selected    true|false</code></dt>
            <dd>Whether this item is currently selected.</dd>
            <dt><code>wide        true|false</code></dt>
            <dd>Whether the tile should fill the full width of the Tiles
            component that contains it.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            also available for Tile.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <p>These examples show a wide variety of Tile types within the same
            Tiles. In practice, each Tile should have similar styling within
            the Tiles. Included here are Headers, Footer, Buttons, and
            Menus.</p>

          <NavAnchor primary={true} path={`/docs/tiles-examples`}>
            Grommet Tiles Examples
          </NavAnchor>

        </section>

      </DocsArticle>
    );
  }
};
