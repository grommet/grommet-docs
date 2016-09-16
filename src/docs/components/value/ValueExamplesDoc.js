// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import UpIcon from 'grommet/components/icons/base/LinkUp';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const ValueExample = (props) => (
  <Example align="start" code={
    <Value value={75} {...props} />
  } />
);

export default class ValueExamplesDoc extends ExamplesDoc {};

ValueExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/value">Value</NavAnchor>,
  examples: [
    { label: 'Default', component: ValueExample },
    { label: 'Units, Icon, Trend, Label, Color', component: ValueExample,
      props: { units: '%',
        icon: <GlobeIcon colorIndex="neutral-1" />,
        trendIcon: <UpIcon colorIndex="neutral-1" />,
        label: 'World wide coverage', colorIndex: 'neutral-1' }},
    { label: 'Small', component: ValueExample,
      props: { units: '%', size: 'small',
        icon: <GlobeIcon colorIndex="neutral-1" />,
        trendIcon: <UpIcon colorIndex="neutral-1" />,
        label: 'World wide coverage', colorIndex: 'neutral-1' }},
    { label: 'Large', component: ValueExample,
      props: { units: '%', size: 'large',
        icon: <GlobeIcon size="large" colorIndex="neutral-1" />,
        trendIcon: <UpIcon size="large" colorIndex="neutral-1" />,
        label: 'World wide coverage', colorIndex: 'neutral-1' }},
    { label: 'XLarge', component: ValueExample,
      props: { units: '%', size: 'xlarge',
        icon: <GlobeIcon size="xlarge" colorIndex="neutral-1" />,
        trendIcon: <UpIcon size="xlarge" colorIndex="neutral-1" />,
        label: 'World wide coverage', colorIndex: 'neutral-1' }}
  ],
  title: 'Examples'
};
