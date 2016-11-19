// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

WorldMap.displayName = 'WorldMap';

const USAGE =
`import WorldMap from 'grommet/components/WorldMap';
<WorldMap series={[
    { continent: 'NorthAmerica', colorIndex: 'graph-1' },
    { continent: 'SouthAmerica', colorIndex: 'accent-1' },
    { continent: 'Europe', colorIndex: 'unset' },
    { continent: 'Africa', colorIndex: 'graph-2' },
    { continent: 'Asia', colorIndex: 'graph-3' },
    { continent: 'Australia', colorIndex: 'graph-4' }
  ]} />`;

const series = [
  {continent: 'NorthAmerica', label: 'North America', value: 40,
    colorIndex: 'graph-1', onClick: () => {
      alert('North America');
    }},
  {continent: 'SouthAmerica', label: 'South America', value: 30,
    colorIndex: 'accent-2', onClick: () => {
      alert('South America');
    }},
  {continent: 'Europe', label: 'Europe', value: 20,
    colorIndex: 'unset', onClick: () => {
      alert('Europe');
    }},
  {continent: 'Africa', label: 'Africa', value: 10,
    colorIndex: 'graph-2', onClick: () => {
      alert('Africa');
    }},
  {continent: 'Asia', label: 'Asia', value: 15,
    colorIndex: 'graph-3', onClick: () => {
      alert('Asia');
    }},
  {continent: 'Australia', label: 'Australia', value: 10,
    colorIndex: 'graph-4', onClick: () => {
      alert('Australia');
    }}
];

export default class WorldMapDoc extends Component {

  render () {

    return (
      <DocsArticle title="WorldMap">

        <section>
          <p>A world map of continents.</p>
          <WorldMap series={[
            { continent: 'NorthAmerica', colorIndex: 'graph-1' },
            { continent: 'SouthAmerica', colorIndex: 'accent-1' },
            { continent: 'Europe', colorIndex: 'unset' },
            { continent: 'Africa', colorIndex: 'graph-2' },
            { continent: 'Asia', colorIndex: 'graph-3' },
            { continent: 'Australia', colorIndex: 'graph-4' }
          ]} />
          <p>Note: It is a good idea to include
          a <Anchor path="/docs/legend">
          Legend</Anchor> along
          with this visualization. You can use the same <code>series</code>
          property for both <code>WorldMap</code> and <code>Legend</code>.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>series      {"[{continent: , colorIndex: , " +
              "onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data. The available
              continents
              are: <code>NorthAmerica</code>, <code>
              SouthAmerica</code>, <code>Europe</code>, <code>Africa
              </code>, <code>Asia</code>, and <code>Australia</code>. You
              must specify a continent in order for it to be rendered.</dd>
          </dl>
        </section>

        <section>
          <Example name="Example" code={
            <WorldMap series={series} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
