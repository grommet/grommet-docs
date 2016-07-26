// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import WorldMap from 'grommet/components/WorldMap';
import { updatePageTitle } from '../utils/a11y';

WorldMap.displayName = 'WorldMap';

const series = [
  {continent: 'NorthAmerica', label: 'North America', value: 40,
    colorIndex: 'graph-1', onClick: () => {
      alert('North America');
    }},
  {continent: 'SouthAmerica', label: 'South America', value: 30,
    colorIndex: 'accent-2', onClick: () => {
      alert('North America');
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

  componentDidMount () {
    updatePageTitle('World Map');
  }

  render () {

    return (
      <DocsArticle title="WorldMap" colorIndex="neutral-3">

        <p>A world map of continents.</p>
        <pre><code className="html hljs xml">
          {"<WorldMap series={[...]} />"}
        </code></pre>
        <p>Note: It is a good idea to include a <code>Legend</code> along
        with this visualization. You can use the same <code>series</code>
        property for both <code>WorldMap</code> and <code>Legend</code>.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>series      {"[{continent: , colorIndex: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data. The available continents
              are: <code>NorthAmerica</code>, <code>
              SouthAmerica</code>, <code>Europe</code>, <code>Africa
              </code>, <code>Asia</code>, and <code>Australia</code>. You
              must specify a continent in order for it to be rendered.</dd>
          </dl>
        </section>

        <section>
          <Example name="Example" code={
            <WorldMap series={series} legend={true} units="B"/>
          } />
        </section>

      </DocsArticle>
    );
  }
};
