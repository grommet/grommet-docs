// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Tiles from 'grommet/components/Tiles';
import Anchor from 'grommet/components/Anchor';
import WatchIcon from 'grommet/components/icons/base/Watch';
import Example from '../../../Example';

export default class Card5 extends Component {

  render () {
    const watchNow = <Anchor href="#" label="Watch Now" icon={<WatchIcon />} />;
    return (
      <Example code={
        <Tiles colorIndex="light-2">
          <Card direction="column" margin="small" label="Featured Post"
            thumbnail="/img/carousel-1.png"
            heading="Protect Your Digital Enterprise ipsum dolores aeat"
            description={`It’s not an either/or world. It’s about finding the
              right platform for each app, workload and service. Learn how
              hybrid infrastructure can help you achieve cloud agility with
              traditional IT predictability. It’s not an either/or world.
              It’s about finding the right platform for each app,
              workload and service. Learn how hybrid infrastructure
              can help you achieve cloud agility with traditional
              IT predictability. It’s not an either/or world. It’s about
              finding the right platform for each
              app, workload and service. Learn how hybrid infrastructure can
              help you achieve cloud agility with traditional IT
              predictability.`}
            link={watchNow}
            a11yTitle="Watch Protect Your Digital Enterprise Video"
            onClick={() => alert('clicked')} />
          <Card direction="column" margin="small" label="Video - 4:27"
            thumbnail="/img/carousel-1.png"
            heading="Foundation Paraguay Empowers Microbusinesses"
            description={`See how Hewlett Packard Enterprise delivers mobile
              solutions to improve quality of life and help
              eliminate poverty in South America.`}
            video={{ source: '/video/test.mp4', type: 'mp4' }}
            link={watchNow}
            a11yTitle="Watch Protect Your Digital Enterprise Video" />
          <Card direction="column" margin="small" label="Featured Post"
            thumbnail="/img/carousel-1.png"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`} />
          <Card direction="column" margin="small" label="Featured Post"
            thumbnail="/img/carousel-1.png"
            heading="The Key Steps to Reducing Software Spend"
            description={`HPE Software Licensing and Management Solutions can
              help you optimize your software investments through control of
              complex negotiations and renewal processes`} />
        </Tiles>
      } />
    );
  }
};
