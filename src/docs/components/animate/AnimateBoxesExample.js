// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import AddIcon from 'grommet/components/icons/base/Add';
import SubtractIcon from 'grommet/components/icons/base/Subtract';
import Example from '../../Example';

export default class AnimateBoxesExample extends Component {
  constructor (props) {
    super(props);
    this.state = {
      boxes: [0,1,2]
    };
  }

  render () {
    const { boxes } = this.state;

    return (
      <Box pad={{between: 'small'}}>
        <Box direction='row'>
          <Button
            icon={<AddIcon />}
            onClick={() => this.setState({boxes: [...boxes, boxes.length]})}
          />
          <Button
            icon={<SubtractIcon />}
            onClick={() => this.setState({boxes: boxes.slice(0, -1)})}
          />
        </Box>

        <Example code={
          <Animate
            enter={{ animation: 'slide-up', duration: 1000 }}
            component={Tiles}
          >
            {
              boxes.map((c, i) => {
                return (
                  <Box
                    key={`box-${i}`}
                    style={{ width: 50, height: 50 }}
                    colorIndex="brand"
                  />
                );
              })
            }
          </Animate>
          } />
      </Box>
    );
  }
};
