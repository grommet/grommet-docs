// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';

import AddUserFormExample from './AddUserFormExample';
import ConfirmationFormExample from './ConfirmationFormExample';
import FullFormExample from './FullFormExample';

export default class FormExamplesDoc extends ExamplesDoc {};

FormExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/form">Form</Anchor>,
  examples: [
    { label: 'Add User', component: AddUserFormExample },
    { label: 'Confirmation', component: ConfirmationFormExample },
    { label: 'All field types', component: FullFormExample },
    { label: 'Compact', component: FullFormExample, props: { compact: true } }
  ],
  title: 'Examples'
};
