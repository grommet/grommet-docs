// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import InteractiveExample from '../../../components/InteractiveExample';

WorldMap.displayName = 'WorldMap';

const SERIES = [
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

export default class WorldMapExamplesDoc extends Component {
  render () {
    let element = <WorldMap series={SERIES} />;

    return (
      <InteractiveExample contextLabel='WorldMap' contextPath='/docs/world-map'
        preamble={`import WorldMap from 'grommet/components/WorldMap';`}
        element={element} />
    );
  }
};
