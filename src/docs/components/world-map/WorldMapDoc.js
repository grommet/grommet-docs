// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (<span>
  A world map of continents.
</span>);

export default class WorldMapDoc extends Component {

  render () {

    return (
      <DocsArticle title='WorldMap' action={
        <Button primary={true} path='/docs/world-map/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <WorldMap series={[
            { continent: 'NorthAmerica', colorIndex: 'graph-1' },
            { continent: 'SouthAmerica', colorIndex: 'accent-1' },
            { continent: 'Europe', colorIndex: 'unset' },
            { continent: 'Africa', colorIndex: 'graph-2' },
            { continent: 'Asia', colorIndex: 'graph-3' },
            { continent: 'Australia', colorIndex: 'graph-4' }
          ]} />
          <p>Note: It is a good idea to include
          a <Anchor path='/docs/legend'>
          Legend</Anchor> along
          with this visualization. You can use the same <code>series</code>
          property for both <code>WorldMap</code> and <code>Legend</code>.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>series      {'[{continent: , colorIndex: , ' +
              'onClick: }, ...]'}</code></dt>
            <dd>An array of objects describing the data. The available
              continents
              are: <code>NorthAmerica</code>, <code>
              SouthAmerica</code>, <code>Europe</code>, <code>Africa
              </code>, <code>Asia</code>, and <code>Australia</code>. You
              must specify a continent in order for it to be rendered.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
