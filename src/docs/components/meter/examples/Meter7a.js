// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter7a extends Component {

  render () {
    const { size } = this.props;
    return (
      <Example align="center" code={
        <Box direction="row">
          <Meter value={40} vertical={true} label={false} threshold={90}
            size={size} />
          <Box justify="between">
            <Label size="small">100 GB</Label>
            <Value value={40} units="GB" align="start" size={size} />
            <Label size="small">0 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};

Meter7a.propTypes = {
  size: PropTypes.string
};
