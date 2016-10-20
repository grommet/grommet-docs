// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Headline from 'grommet/components/Headline';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const HeadlineExample = (props) => (
  <Example code={
    <Headline {...props}>Sample Headline</Headline>
  } />
);

export default class HeadlineExamplesDoc extends ExamplesDoc {};

HeadlineExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/headline">Headline</Anchor>,
  examples: [
    { label: 'Default', component: HeadlineExample },
    { label: 'Small', component: HeadlineExample, props: { size: 'small' } },
    { label: 'Medium', component: HeadlineExample, props: { size: 'medium' } },
    { label: 'Large', component: HeadlineExample, props: { size: 'large' } },
    { label: 'XLarge', component: HeadlineExample, props: { size: 'xlarge' } }
  ],
  title: 'Examples'
};
