// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import WatchIcon from 'grommet/components/icons/base/Watch';
import Example from '../../../Example';

export default class Card3 extends Component {

  render () {
    return (
      <Example code={
        <Box colorIndex="light-2" pad="medium">
          <Card direction="row" size="xxlarge" label="Video - 4:27"
            thumbnail="/img/carousel-1.png"
            heading="Foundation Paraguay Empowers Microbusinesses"
            description={`See how Hewlett Packard Enterprise delivers mobile
              solutions to improve quality of life and help eliminate
              poverty in South America.`}
            video={{ source: '/video/test.mp4', type: 'mp4' }}
            a11yTitle="See Foundation Paraguay Empowers Microbusinesses video"
            link={<Anchor href="#" label="Watch Now" icon={<WatchIcon />} />}
          />
        </Box>
      } />
    );
  }
};
