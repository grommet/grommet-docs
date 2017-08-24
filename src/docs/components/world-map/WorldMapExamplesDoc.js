// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import WorldMap from 'grommet/components/WorldMap';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

WorldMap.displayName = 'WorldMap';

const SERIES_CONTINENTS = [
  {
    continent: 'NorthAmerica',
    label: 'North America',
    colorIndex: 'graph-1',
    flag: <Box pad='small' colorIndex='graph-1'>North America</Box>,
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
    flag: <Box pad='small' colorIndex='graph-2'>Africa</Box>,
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
    flag: <Box pad='small' colorIndex='graph-4'>Australia</Box>,
    onClick: () => {
      alert('Australia');
    },
    onHover: (b) => {
      console.log('Australia', b);
    }
  }
];

const SERIES_PLACES = [
  {
    place: [21,19],
    label: 'Atlanta',
    colorIndex: 'accent-1',
    id: 'atlanta',
    flag: <Box pad='small' colorIndex='accent-1'>Atlanta</Box>,
    onClick: () => {
      alert('Atlanta');
    },
    onHover: (b) => {
      console.log('Atlanta', b);
    }
  },
  {
    place: [34.052234,-118.243685], // lat,lon
    label: 'Los Angeles',
    colorIndex: 'accent-2',
    id: 'los-angeles',
    flag: <Box pad='small' colorIndex='accent-2'>Los Angeles</Box>
  },
  {
    place: [35.689487,139.691706], // lat,lon
    label: 'Tokyo',
    colorIndex: 'graph-1',
    id: 'tokyo',
    flag: <Box pad='small' colorIndex='graph-1'>Tokyo</Box>
  },
  {
    place: [51.507351,-0.127758], // lat,lon
    label: 'London',
    colorIndex: 'graph-2',
    id: 'london',
    flag: <Box pad='small' colorIndex='graph-2'>London</Box>
  },
  {
    place: [-33.868820,151.209296], // lat,lon
    label: 'Sydney',
    colorIndex: 'graph-3',
    id: 'sydney',
    flag: <Box pad='small' colorIndex='graph-3'>Sydney</Box>
  },
  {
    place: [-22.906847,-43.172896], // lat,lon
    label: 'Rio De Janeiro',
    colorIndex: 'graph-4',
    id: 'rio-de-janeiro',
    flag: <Box pad='small' colorIndex='graph-4'>Rio De Janeiro</Box>
  }
  // The following is useful for debugging latLonCoord
  // {
  //   place: [0.0001,0.0001], // lat,lon
  //   label: 'Center',
  //   colorIndex: 'accent-2',
  //   id: 'center',
  //   flag: <Box pad='small' colorIndex='accent-2'>Center</Box>
  // }
];

const PROPS_SCHEMA = {
  colorIndex: { options: ['', 'grey-4', 'accent-1'] },
  onSelectPlace: { value: true },
  series: { options: [
    '', 'all continents', 'western hemisphere', 'eastern hemisphere',
    'africa', 'places'
  ] },
  zoom: { value: true }
};

export default class WorldMapExamplesDoc extends Component {

  constructor () {
    super();
    this._onSelectPlace = this._onSelectPlace.bind(this);
    this.state = { elementProps: {} };
  }

  _onSelectPlace (active, geo) {
    console.log('WorldMapExamplesDoc _onSelectPlace', active, geo);
    this.setState({ active });
  }

  render () {
    const { elementProps } = this.state;
    let props = { ...elementProps };
    if (props.series === 'all continents') {
      props.series = SERIES_CONTINENTS;
    } else if (props.series === 'western hemisphere') {
      props.series = SERIES_CONTINENTS.slice(0, 2);
    } else if (props.series === 'eastern hemisphere') {
      props.series = SERIES_CONTINENTS.slice(2, 6);
    } else if (props.series === 'africa') {
      props.series = SERIES_CONTINENTS.slice(3, 4);
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
