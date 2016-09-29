// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import Example from '../../../Example';

export default class Card2 extends Component {

  render () {
    return (
      <Example code={
        <Box colorIndex="light-2" pad="medium">
          <Card reverse={true} label="Featured Post"
            thumbnail="/img/carousel-1.png"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`}
            link={<Anchor href="" label="Learn More" icon={<LinkNextIcon />} />}
            a11yTitle='See Key Steps Post'
            onClick={() => alert('clicked')} />
        </Box>
      } />
    );
  }
};
