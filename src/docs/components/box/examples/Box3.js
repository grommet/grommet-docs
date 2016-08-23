// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Example from '../../../Example';

export default class Box3 extends Component {

  render () {

    let boxes = [];
    for (let i=1; i<=4; i+=1) {
      boxes.push(
        <Box key={i}
          pad="medium" align="center" justify="center"
          colorIndex={`neutral-${i}`}>
          {`box ${i}`}
        </Box>
      );
    }

    return (
      <Example code={
        <Box>
          {boxes}
        </Box>
      } />
    );
  }

};
