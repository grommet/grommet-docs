// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Animate from 'grommet/components/Animate';
import Box from 'grommet/components/Box';
import Example from '../../Example';

export default class AnimateScrollExample extends Component {
  constructor (props) {
    super(props);
    this._onScroll = this._onScroll.bind(this);
    this.state = {
      scrollableHeight: 0,
      scrollProgress: 0
    };
  }

  _onScroll (event) {
    const element = event.target;
    const scrollTop = element.scrollTop;
    const scrollHeight = element.scrollHeight;
    const scrollableHeight = scrollHeight - 500;
    const scrollPercent = scrollTop / scrollableHeight;
    const scrollProgress = Math.round(scrollPercent * 100);

    if (scrollableHeight !== this.state.scrollableHeight) {
      this.setState({ scrollableHeight });
    }
    if (scrollProgress !== this.state.scrollProgress) {
      this.setState({ scrollProgress });
    }
  }

  _renderRow (visible) {
    return (
      <Tiles flex={false} fill={true}>
        <Animate
          enter={{ animation: 'slide-up', duration: 500, delay: 150 }}
          leave={{ animation: 'slide-down', duration: 500, delay: 150 }}
          component={Tile} visible={visible} keep={true}
          colorIndex="brand" justify="center" align="center"
          style={{ height: 250 }} size="small"
        >
          <h3>1</h3>
        </Animate>
        <Animate
          enter={{ animation: 'slide-up', duration: 500, delay: 300 }}
          leave={{ animation: 'slide-down', duration: 500, delay: 300 }}
          component={Tile} visible={visible} keep={true}
          colorIndex="brand" justify="center" align="center"
          style={{ height: 250 }} size="small"
        >
          <h3>2</h3>
        </Animate>
        <Animate
          enter={{ animation: 'slide-up', duration: 500, delay: 450 }}
          leave={{ animation: 'slide-down', duration: 500, delay: 450 }}
          component={Tile} visible={visible} keep={true}
          colorIndex="brand" justify="center" align="center"
          style={{ height: 250 }} size="small"
        >
          <h3>3</h3>
        </Animate>
      </Tiles>
    );
  }

  render () {
    const { scrollProgress } = this.state;

    return (
      <Example code={
        <Box
          pad="medium"
          colorIndex="light-2"
          style={{ maxHeight: 500, overflow: 'auto' }}
          onScroll={this._onScroll}
        >
          {this._renderRow(scrollProgress > 0)}
          {this._renderRow(scrollProgress > 16)}
          {this._renderRow(scrollProgress > 32)}
        </Box>
      } />
    );
  }
};
