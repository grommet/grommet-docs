// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import Example from '../../Example';

export default class AnimateFadeExample extends Component {

  constructor () {
    super();
    this.state = { active: true };
  }

  render () {
    const { active } = this.state;

    return (
      <Example code={
        <Box pad={{between: 'small'}}>
          <Button label="Fade" primary={true}
            onClick={() => this.setState({active: !active})} />
          <Animate enter={{ animation: 'fade', duration: 1000 }}
            visible={active} keep={true}>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
          </Animate>
        </Box>
      } />
    );
  }

};
