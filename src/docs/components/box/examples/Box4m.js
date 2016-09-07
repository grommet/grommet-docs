// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Example from '../../../Example';

export default class Box4m extends Component {

  render () {
    return (
      <div>
        <Example code={
          <Box>
            <Box direction="row">
              <Box basis='1/3' size={{ height: { min: 'medium' } }}
                margin="small"
                pad="medium" align="center" justify="center"
                colorIndex="neutral-1">
                box 1
              </Box>
              <Box basis="2/3" size={{ height: 'medium' }}>
                <Box basis='1/3' margin="small"
                  pad="medium" align="center" justify="center"
                  colorIndex="neutral-2">
                  box 2
                </Box>
                <Box basis='2/3' margin={{ top: 'small' }}
                  pad="medium" align="center" justify="center"
                  colorIndex="neutral-3">
                  box 3
                </Box>
              </Box>
            </Box>
            <Box>
              <Box margin="small"
                pad="medium" align="center" justify="center"
                colorIndex="neutral-2">
                box 4
              </Box>
              <Box direction="row">
                <Box basis='2/3' margin="small"
                  pad="medium" align="center" justify="center"
                  colorIndex="neutral-3">
                  box 5
                </Box>
                <Box basis='1/3' margin="small"
                  pad="medium" align="center" justify="center"
                  colorIndex="neutral-1">
                  box 6
                </Box>
              </Box>
            </Box>
          </Box>
        } />

        <p>Note: Safari does not correctly render this example due to the
        Box containing box 2 and box 3 getting its height due to being
        stretched by flexbox.
        This can be worked around by giving that Box a height, but that is not
        always what is wanted.
        The issue is covered
        in <a href="https://bugs.webkit.org/show_bug.cgi?id=137730">
        some discussion notes</a></p>
      </div>
    );
  }

};
