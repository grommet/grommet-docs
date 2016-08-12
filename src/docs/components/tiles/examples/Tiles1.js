// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Example from '../../../Example';

export default class Tiles1 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Tiles>
          <Tile>First</Tile>
          <Tile>Second</Tile>
          <Tile>Third</Tile>
        </Tiles>
      } />
    );
  }

};
