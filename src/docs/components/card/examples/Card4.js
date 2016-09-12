// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Example from '../../../Example';
import {socialFeedCard1, blogPostCard, socialFeedCard2, socialFeedCard3 }
  from './cards';

export default class Card4 extends Component {

  render () {
    return (
      <Example code={
        <Tiles colorIndex="light-2">
          {socialFeedCard1}
          {blogPostCard}
          {socialFeedCard2}
          {socialFeedCard3}
        </Tiles>
      } />
    );
  }
};
