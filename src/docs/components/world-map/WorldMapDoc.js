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
            <dt><code>colorIndex     {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use when not specified in the series.
              For example: <code>'neutral-1'</code>.
              See <Anchor path='/docs/color'>Color</Anchor> for
              possible values.</dd>
            <dt><code>onSelectPlace  {'{function ([x, y], [lat, lon])}'}</code>
              </dt>
            <dd>If provided, {'this function'} will be called with the
             coordinates of the place that is clicked. The first argument
             provides map coordinates. The second argument provides
             latitude and longitude coordinates.</dd>
            <dt><code>series         {'[{continent: , ' +
              'place: [x, y]|[lat, lon], ' +
              'label: , colorIndex: , flag: , onClick: , onHover: }, ' +
              '...]'}</code></dt>
            <dd>An array of objects describing the data.
              The available continents
              are: <code>NorthAmerica</code>, <code>
              SouthAmerica</code>, <code>Europe</code>, <code>Africa
              </code>, <code>Asia</code>, and <code>Australia</code>.
              A <code>place</code> is a two dimensional coordinate on the map.
              You can use <code>onSelectPlace</code> to interact with
              the map to select places. Or, you can specify a latitude and
              longitude.
              You must specify either a continent or a place in each
              series item. <code>label</code> is used for accessibility
              and should always be provided. <code>flag</code> is anything
              renderable which will be placed over a continent or adjacent
              to a place. <code>onHover</code> will be passed a single boolean
              argument indicating whether the user has started or stopped
              hovering over the item.</dd>
            <dt><code>zoom           true|false</code></dt>
            <dd>Whether the map should automatically zoom in to just the
              continents specified or to the continents continaining the
              placed specified.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
