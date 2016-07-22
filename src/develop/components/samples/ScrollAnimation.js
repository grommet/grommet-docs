// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import Example from '../../Example';

export default class ScrollAnimation extends Component {
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

  render () {
    const { scrollProgress } = this.state;

    return (
      <Example name="Scroll" code={
        <Box
          onScroll={this._onScroll}
          pad="medium" colorIndex="light-2"
          style={{ height: 500, overflow: 'auto' }}
        >
          <Tiles flex={false}>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 150 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 150 }}
              component={Box} visible={scrollProgress > 0} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>1</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 300 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 300 }}
              component={Box} visible={scrollProgress > 0} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>2</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 450 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 450 }}
              component={Box} visible={scrollProgress > 0} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>3</h3>
            </Animate>
          </Tiles>
          <Tiles flex={false}>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 150 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 150 }}
              component={Box} visible={scrollProgress > 16} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>1</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 300 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 300 }}
              component={Box} visible={scrollProgress > 16} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>2</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 450 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 450 }}
              component={Box} visible={scrollProgress > 16} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>3</h3>
            </Animate>
          </Tiles>
          <Tiles flex={false}>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 150 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 150 }}
              component={Box} visible={scrollProgress > 32} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>1</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 300 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 300 }}
              component={Box} visible={scrollProgress > 32} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>2</h3>
            </Animate>
            <Animate
              enter={{ animation: 'slide-up', duration: 500, delay: 450 }}
              leave={{ animation: 'slide-down', duration: 500, delay: 450 }}
              component={Box} visible={scrollProgress > 32} keep={true}
              colorIndex="brand" justify="center" align="center"
              style={{ flex: `0 0 33.333%`, height: 250 }}
            >
              <h3>3</h3>
            </Animate>
          </Tiles>
        </Box>
      } />
    );
  }
};
