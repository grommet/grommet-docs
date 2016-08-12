// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import { renderRichTiles } from './utils';

export default class Tiles3 extends Component {
  
  _onClick () {
    // No-op
  }

  render () {
    return (
      <Example align="center" code={
        <Tiles fill={true} flush={false}>
          {renderRichTiles({separator: true, bottom: 'button'}, this._onClick)}
        </Tiles>
      } />
    );
  }

};
