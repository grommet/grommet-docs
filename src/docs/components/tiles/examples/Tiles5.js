// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import { renderRichTiles } from './utils';

export default class Tiles5 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Tiles fill={true} direction="row" full="horizontal">
          {renderRichTiles()}
        </Tiles>
      } />
    );
  }

};
