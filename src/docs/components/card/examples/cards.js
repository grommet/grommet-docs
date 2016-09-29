// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';

import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';

function _onClickCard (path, event) {
  event.preventDefault();
  window.location.href = path;
}

const grommetPath = 'http://grommet.github.io';

const learnMore = (
  <Anchor href="#" label="Learn More" icon={<LinkNextIcon />} />
);

export var socialFeedCard1 = (
  <Card direction="column" label="Social" margin="small"
    a11yTitle="See Twitter Post"
    onClick={_onClickCard.bind(this, 'http://www.twitter.com')}>
    <Heading tag="h2">
      Protect Your Digital Enterprise ipsum lorem dolores aeat el
    </Heading>
    <Box align="end"><SocialTwitterIcon /></Box>
  </Card>
);

export var socialFeedCard2 = (
  <Card direction="column" label="Social" margin="small"
    a11yTitle="See Facebook Post"
    onClick={_onClickCard.bind(this, 'http://www.facebook.com')}>
    <Heading tag="h2">
      Protect Your Digital Enterprise ipsum lorem dolores aeat el
    </Heading>
    <Box align="end"><SocialFacebookIcon /></Box>
  </Card>
);

export var socialFeedCard3 = (
  <Card direction="column" label="Social" margin="small"
    a11yTitle="See LinkedIn Post"
    onClick={_onClickCard.bind(this, 'http://www.linkedin.com')}>
    <Heading tag="h2">
      Protect Your Digital Enterprise ipsum lorem dolores aeat el
    </Heading>
    <Box align="end"><SocialLinkedinIcon /></Box>
  </Card>
);

export var blogPostCard = (
  <Card direction="column" label="Featured Post" margin="small"
    a11yTitle="See Grommet Post"
    link={learnMore} onClick={_onClickCard.bind(this, grommetPath)}>
    <Heading tag="h2">
      Protect Your Digital Enterprise ipsum lorem dolores aeat el
    </Heading>
  </Card>
);

export var featuredPostCard = (
  <Card direction="column" label="Featured Post" margin="small"
    link={learnMore} a11yTitle="See Grommet Post"
    thumbnail="/img/carousel-1.png"
    onClick={_onClickCard.bind(this, grommetPath)}>
    <Heading tag="h2">
      Protect Your Digital Enterprise ipsum lorem dolores aeat el
    </Heading>
  </Card>
);
