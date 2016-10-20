// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import SocialShare from 'grommet/components/SocialShare';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const SocialShareExample = (props) => (
  <Example align="start" code={
    <SocialShare {...props} />
  } />
);

export default class SocialShareExamplesDoc extends ExamplesDoc {};

SocialShareExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/social-share">SocialShare</Anchor>,
  examples: [
    { label: 'Email', component: SocialShareExample,
      props: { type: 'email', link: 'http://grommet.io',
        title: 'Found this from the Grommet.io website',
        text: 'User Experience for the Enterprise' }},
    { label: 'Facebook', component: SocialShareExample,
      props: { type: 'facebook', link: 'http://grommet.io' }},
    { label: 'Twitter', component: SocialShareExample,
      props: { type: 'twitter', link: 'http://grommet.io',
        text: 'User Experience for the Enterprise' }},
    { label: 'LinkedIn', component: SocialShareExample,
      props: { type: 'linkedin', link: 'http://grommet.io',
        title: 'Grommet', text: 'User Experience for the Enterprise' }},
    { label: 'Google Plus', component: SocialShareExample,
      props: { type: 'google', link: 'http://grommet.io' }}
  ],
  title: 'Examples'
};
