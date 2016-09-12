// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Example from '../../../Example';

export default class Card1 extends Component {

  render () {
    return (
      <Example code={
        <Box colorIndex="light-2" pad="medium">
          <Card label="Featured Post"
            thumbnail="/img/carousel-1.png"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`}
          />
        </Box>
      } />
    );
  }
};
