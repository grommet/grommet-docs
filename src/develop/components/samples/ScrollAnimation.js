// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';

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

  _renderBoxes (amount, index) {
    const { scrollableHeight, scrollProgress } = this.state;
    const columnWidth = 100 / amount;
    const height = 250;

    return new Array(amount).fill().map((c, i) => {
      return (
        <Animate
          enter={{ animation: 'slide-up', duration: 1000 }}
          component={Box}
          visible={scrollProgress >= Math.round((height * index) / scrollableHeight * 50)}
          keep={true}
          colorIndex="brand" justify="center" align="center" key={i}
          style={{ flex: `0 0 ${columnWidth}%`, height }}
        >
          <h3>{i + 1}</h3>
        </Animate>
      );
    });
  }

  render () {
    const sections = new Array(4).fill().map((c, i) => {
      return (
        <Tiles key={`section-${i}`} flex={false}>
          {this._renderBoxes(3, i)}
        </Tiles>
      );
    });


    return (
      <Box
        onScroll={this._onScroll}
        style={{ height: 500, overflow: 'auto' }}
      >
        {sections}
      </Box>
    );
  }
};
