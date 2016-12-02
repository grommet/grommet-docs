// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import EditIcon from 'grommet/components/icons/base/Edit';
import ComponentDoc from '../../../components/ComponentDoc';

Anchor.displayName = 'Anchor';

export default class AnchorDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    const hero = (
      <Box direction="row" wrap={true} align="center"
        pad={{ between: 'medium' }}>
        <Anchor href="" onClick={this._onClick}>Child text</Anchor>
        <Anchor href="" label="Label" primary={true}
          onClick={this._onClick} />
        <Anchor href="" icon={<EditIcon id='edit-icon-1' />} label="Label"
          onClick={this._onClick} />
        <Anchor href="" icon={<EditIcon id='edit-icon-2' />}
          onClick={this._onClick} />
      </Box>
    );
    const examples = (
      <Button primary={true} path='/docs/anchor/examples'
        label='Examples' />
    );
    const icon = <span> See <Anchor path="/docs/icon">Icon</Anchor>.</span>;
    return (
      <ComponentDoc component={Anchor} hero={hero} examples={examples}
        properties={{ icon }}/>
    );
  }
};
