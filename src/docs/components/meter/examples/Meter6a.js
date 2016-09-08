// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter6a extends Component {

  render () {
    const { size } = this.props;
    return (
      <Example align="center" code={
        <Box>
          <Value value={40} units="GB" align="start" size={size} />
          <Meter value={40} label={false} threshold={90} size={size} />
          <Box direction="row" justify="between" responsive={false}>
            <Label size="small">0 GB</Label>
            <Label size="small">100 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};

Meter6a.propTypes = {
  size: PropTypes.string
};
