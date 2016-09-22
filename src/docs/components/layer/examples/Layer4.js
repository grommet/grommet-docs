// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Example from '../../../Example';
import SampleArticle from '../../samples/SampleArticle';

export default class Layer4 extends Component {

  constructor () {
    super();
    this._onClose = this._onClose.bind(this);
    this.state = { active: false };
  }

  _onClose () {
    this.setState({ active: false });
  }

  render () {
    const { active } = this.state;
    const layer = (
      <Layer onClose={this._onClose} closer={true} align="right">
        <SampleArticle />
      </Layer>
    );
    let activeLayer = active ? layer : undefined;

    const control = (
      <Button onClick={() => this.setState({ active: true })}>Open</Button>
    );

    return (
      <Box pad={{ vertical: 'medium' }} align="start">
        <Example align="center" control={control} code={layer} />
        {activeLayer}
      </Box>
    );
  }

};
