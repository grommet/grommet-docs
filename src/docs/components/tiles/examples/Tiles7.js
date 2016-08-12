// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import { renderRichTiles } from './utils';

export default class Tiles7 extends Component {

  constructor () {
    super();
    this.state = { selected: [] };
  }

  render () {
    return (
      <Example align="center" code={
        <Tiles fill={true}
          selectable="multiple"
          selected={this.state.selected}
          onSelect={(selected) => this.setState({ selected: selected })}>
          {renderRichTiles()}
        </Tiles>
      } />
    );
  }

};
