// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import { renderRichTiles } from './utils';

export default class Tiles2 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Tiles flush={false} justify="center" colorIndex="light-2"
          full="horizontal">
          {renderRichTiles({
            bottom: 'menu', colorIndex: 'light-1'})}
        </Tiles>
      } />
    );
  }

};
