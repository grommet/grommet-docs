// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Columns from 'grommet/components/Columns';
import Example from '../../../Example';
import {socialFeedCard1, blogPostCard, featuredPostCard } from './cards';

export default class Card6 extends Component {

  render () {
    return (
      <Example code={
        <Box colorIndex="light-2" pad="medium">
          <Columns masonry={true} maxCount={7} responsive={true}>
            {blogPostCard}
            {featuredPostCard}
            {socialFeedCard1}
            {socialFeedCard1}
            {blogPostCard}
            {featuredPostCard}
            {featuredPostCard}
            {blogPostCard}
          </Columns>
        </Box>
      } />
    );
  }
};
