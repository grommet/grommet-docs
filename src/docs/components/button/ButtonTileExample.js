// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Button from 'grommet/components/Button';
import Example from '../../Example';

export default class ButtonTileExample extends Component {

  render () {
    return (
      <Example code={
        <Tiles fill={true}>
          <Tile pad="small">
            <Button fill={true} onClick={() => alert('click')}
              label="One With Long Text" />
          </Tile>
          <Tile pad="small">
            <Button fill={true} onClick={() => alert('click')} label="Two" />
          </Tile>
          <Tile pad="small">
            <Button fill={true} onClick={() => alert('click')} label="Three" />
          </Tile>
          <Tile pad="small">
            <Button fill={true} onClick={() => alert('click')} label="Four" />
          </Tile>
        </Tiles>
      } />
    );
  }

};
