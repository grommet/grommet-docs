// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Label from 'grommet/components/Label';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Example from '../../../Example';

export default class Card8 extends Component {

  render () {
    return (
      <Example code={
        <Box colorIndex="light-2" pad="medium">
          <Card label={
              <Label margin="none" uppercase={true}>Featured Post</Label>
            }
            thumbnail={<Image src="/img/carousel-1.png" />}
            heading={
              <Heading tag="h2" strong={true}>
                The Key Steps to Reducing Software Spend
              </Heading>
            }
            description={
              <Paragraph size="large" margin="medium">
                HPE Software Licensing and Management
                Solutions can help you optimize your software investments
                through control of complex negotiations and renewal
                processes
            </Paragraph>
            }
          />
        </Box>
      } />
    );
  }
};
