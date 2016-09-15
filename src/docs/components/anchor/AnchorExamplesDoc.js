// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import EditIcon from 'grommet/components/icons/base/Edit';
import NextIcon from 'grommet/components/icons/base/Next';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const AnchorExample = (props) => (
  <Example code={
    <Anchor href="" {...props} />
  } />
);

const AnchorChildExample = (props) => (
  <Example code={
    <Anchor href="" {...props}>
      Name
    </Anchor>
  } />
);

const AnchorHeaderExample = (props) => (
  <Example code={
    <h3>
      <Anchor href="" {...props} />
    </h3>
  } />
);

export default class AnchorExamplesDoc extends ExamplesDoc {};

AnchorExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/anchor">Anchor</NavAnchor>,
  examples: [
    { label: 'Default', component: AnchorChildExample },
    { label: 'Primary, Label', component: AnchorExample,
      props: { primary: true, label: 'Name' } },
    { label: 'Icon, Label', component: AnchorExample,
      props: { icon: <EditIcon />, label: 'Edit' } },
    { label: 'Icon, Label, Reverse', component: AnchorExample,
      props: { icon: <NextIcon />, label: 'Next', reverse: true } },
    { label: 'Icon', component: AnchorExample,
      props: { icon: <EditIcon /> } },
    { label: 'Target', component: AnchorExample,
      props: { label: 'Name', target: '_blank' } },
    { label: 'Disabled', component: AnchorExample,
      props: { primary: true, label: 'Name', disabled: true } },
    { label: 'Header', component: AnchorHeaderExample,
      props: { label: 'Heading' }}
  ],
  title: 'Examples'
};
