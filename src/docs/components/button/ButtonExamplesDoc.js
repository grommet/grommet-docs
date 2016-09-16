// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';
import ButtonTileExample from './ButtonTileExample';

const ButtonExample = (props) => (
  <Example align="start" code={
    <Button onClick={() => alert('click')} {...props} />
  } />
);

export default class ButtonExamplesDoc extends ExamplesDoc {};

ButtonExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/button">Button</NavAnchor>,
  examples: [
    { label: 'Default', component: ButtonExample,
      props: { label: 'Action' } },
    { label: 'Primary', component: ButtonExample,
      props: { label: 'Action', primary: true } },
    { label: 'Secondary', component: ButtonExample,
      props: { label: 'Action', secondary: true } },
    { label: 'Accent', component: ButtonExample,
      props: { label: 'Action', accent: true } },
    { label: 'Icon', component: ButtonExample,
      props: { icon: <CloseIcon /> } },
    { label: 'Icon, label', component: ButtonExample,
      props: { icon: <EditIcon />, label: 'Edit' } },
    { label: 'Icon, label, plain', component: ButtonExample,
      props: { icon: <EditIcon />, label: 'Edit', plain: true } },
    { label: 'Disabled', component: ButtonExample,
      props: { label: 'Action', onClick: undefined } },
    { label: 'Long', component: ButtonExample,
      props: { label: `Action with a really long name that should
        be shortened` } },
    { label: 'Href', component: ButtonExample,
      props: { label: 'Action', href: '#' } },
    { label: 'Full', component:ButtonTileExample }
  ],
  title: 'Examples'
};
