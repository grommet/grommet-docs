// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import { renderRichTiles } from './utils';

export default class Tiles8 extends Component {

  render () {
    return (
      <Example align="center" full="horizontal" code={
        <Tiles masonry={true} numColumns={4} selectable={true}>
          {renderRichTiles({alternateContent: true})}
        </Tiles>
      } />
    );
  }

};
