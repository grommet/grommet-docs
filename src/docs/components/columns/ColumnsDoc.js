// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

Columns.displayName = 'Columns';


export default class ColumnsDoc extends Component {

  render () {
    let boxes = [];
    for (let i=0; i<6; i+=1) {
      boxes.push(
        <Box key={i} size='medium' align='center' pad='medium'
          margin='small' colorIndex='light-2'>
          {`Box ${i + 1}`}
        </Box>
      );
    }
    return (
      <DocsArticle title='Columns' action={
        <Button primary={true} path='/docs/columns/examples'
          label='Examples' />
        }>

        <section>
          <p>Organize children into multiple components based on available
            width.</p>
          <Columns>
            {boxes}
          </Columns>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>justify     start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>masonry     true|false</code></dt>
            <dd>Whether to fill the columns from left-to-right based on the
              component width (set with <code>size</code>). Defaults
              to <code>false</code>. The max number of columns can be set
              with <code>maxCount</code>.</dd>
            <dt><code>maxCount    number</code></dt>
            <dd>Number of columns to allow for masonry option, based on
              component width. Responds based on the width of the column
              children (set with <code>size</code>).</dd>
            <dt><code>responsive  true|false</code></dt>
            <dd>Whether masonry columns should collapse into single, full-width
              column when the display area narrows (to achive similar behavior
              as responsive <Anchor path='/docs/tiles'>Tiles</Anchor>).
              Defaults to <code>true</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The width of each column. Defaults to <code>medium</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
