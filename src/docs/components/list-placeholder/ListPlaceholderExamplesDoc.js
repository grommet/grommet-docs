// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const ListPlaceholderExample = (props) => (
  <Example code={
    <ListPlaceholder {...props} />
  } />
);

export default class ListPlaceholderExamplesDoc extends ExamplesDoc {};

ListPlaceholderExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/list-placeholder">ListPlaceholder</Anchor>,
  examples: [
    { label: 'Loading', component: ListPlaceholderExample },
    { label: 'No items', component: ListPlaceholderExample, props: {
      unfilteredTotal: 0, filteredTotal: 0,
      emptyMessage: 'You do not have any items at the moment.',
      addControl: (
        <Button icon={<AddIcon />} label='Add item'
          path='/items/add'
          primary={true} a11yTitle={`Add item`} />
      )
    } },
    { label: 'No matches', component: ListPlaceholderExample, props: {
      unfilteredTotal: 100, filteredTotal: 0,
      emptyMessage: 'You do not have any items at the moment.',
      addControl: (
        <Button icon={<AddIcon />} label='Add item'
          path='/items/add'
          primary={true} a11yTitle={`Add item`} />
      )
    } }
  ],
  title: 'Examples'
};
