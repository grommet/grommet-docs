// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import InteractiveExample from '../../../components/InteractiveExample';

WorldMap.displayName = 'WorldMap';

const SERIES_CONTINENTS_ALL = [
  {
    continent: 'NorthAmerica',
    label: 'North America',
    colorIndex: 'graph-1',
    onClick: () => {
      alert('North America');
    }
  },
  {
    continent: 'SouthAmerica',
    label: 'South America',
    colorIndex: 'accent-2',
    onClick: () => {
      alert('South America');
    }
  },
  {
    continent: 'Europe',
    label: 'Europe',
    colorIndex: 'unset',
    onClick: () => {
      alert('Europe');
    }
  },
  {
    continent: 'Africa',
    label: 'Africa',
    colorIndex: 'graph-2',
    onClick: () => {
      alert('Africa');
    }
  },
  {
    continent: 'Asia',
    label: 'Asia',
    colorIndex: 'graph-3',
    onClick: () => {
      alert('Asia');
    }
  },
  {
    continent: 'Australia',
    label: 'Australia',
    colorIndex: 'graph-4',
    onClick: () => {
      alert('Australia');
    }
  }
];

const SERIES_CONTINENTS_SOME = SERIES_CONTINENTS_ALL.slice(0, 2);

const SERIES_PLACES = [
  {
    place: [21,19],
    label: 'Atlanta',
    colorIndex: 'accent-1',
    onClick: () => {
      alert('Atlanta');
    }
  },
  {
    place: [77,27],
    label: 'Singapore',
    colorIndex: 'accent-2',
    onClick: () => {
      alert('Singapore');
    }}
];

const PROPS_SCHEMA = {
  colorIndex: { options: ['', 'light-2', 'accent-1'] },
  onSelectPlace: { value: true },
  series: { options: ['', 'all continents', 'some continents', 'places'] }
};

export default class WorldMapExamplesDoc extends Component {

  constructor () {
    super();
    this._onSelectPlace = this._onSelectPlace.bind(this);
    this.state = { elementProps: {} };
  }

  _onSelectPlace (active) {
    console.log('!!! WMED _onSelectPlace', active);
    this.setState({ active });
  }

  render () {
    const { elementProps } = this.state;
    let props = { ...elementProps };
    if (props.series === 'all continents') {
      props.series = SERIES_CONTINENTS_ALL;
    } else if (props.series === 'some continents') {
      props.series = SERIES_CONTINENTS_SOME;
    } else if (props.series === 'places') {
      props.series = SERIES_PLACES;
    } else {
      delete props.series;
    }
    if (props.onSelectPlace) {
      props.onSelectPlace = this._onSelectPlace;
    } else {
      delete props.onSelectPlace;
    }
    const element = <WorldMap {...props} />;

    return (
      <InteractiveExample contextLabel='WorldMap' contextPath='/docs/world-map'
        preamble={`import WorldMap from 'grommet/components/WorldMap';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
