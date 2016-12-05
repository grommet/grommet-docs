// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import ListPlaceholder from 'grommet-addons/components/ListPlaceholder';
import Button from 'grommet/components/Button';
import AddIcon from 'grommet/components/icons/base/Add';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  addControl: { value: (
    <Button icon={<AddIcon />} label='Add item' path='/items/add'
      primary={true} a11yTitle={`Add item`} />
  ) },
  emptyMessage: { value: 'You do not have any items at the moment.' },
  unfilteredTotal: { options: [0, 100] },
  filteredTotal: { options: [0, 100] }
};

export default class ListPlaceholderExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <ListPlaceholder {...elementProps} />;
    return (
      <InteractiveExample contextLabel='ListPlaceholder'
        contextPath='/docs/list-placeholder'
        preamble={`import ListPlaceholder from ` +
          `'grommet-addons/components/ListPlaceholder';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};

// const ListPlaceholderExample = (props) => (
//   <Example code={
//     <ListPlaceholder {...props} />
//   } />
// );
//
// export default class ListPlaceholderExamplesDoc extends ExamplesDoc {};
//
// ListPlaceholderExamplesDoc.defaultProps = {
//   context: <Anchor path="/docs/list-placeholder">ListPlaceholder</Anchor>,
//   examples: [
//     { label: 'Loading', component: ListPlaceholderExample },
//     { label: 'No items', component: ListPlaceholderExample, props: {
//       unfilteredTotal: 0, filteredTotal: 0,
//       emptyMessage: 'You do not have any items at the moment.',
//       addControl: (
//         <Button icon={<AddIcon />} label='Add item'
//           path='/items/add'
//           primary={true} a11yTitle={`Add item`} />
//       )
//     } },
//     { label: 'No matches', component: ListPlaceholderExample, props: {
//       unfilteredTotal: 100, filteredTotal: 0,
//       emptyMessage: 'You do not have any items at the moment.',
//       addControl: (
//         <Button icon={<AddIcon />} label='Add item'
//           path='/items/add'
//           primary={true} a11yTitle={`Add item`} />
//       )
//     } }
//   ],
//   title: 'Examples'
// };
