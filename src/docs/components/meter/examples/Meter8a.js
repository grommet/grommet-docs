// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter8a extends Component {

  render () {
    const { size } = this.props;
    return (
      <Example align="center" code={
        <Box>
          <Meter type="circle" value={40} threshold={90}
            label={<Value value={40} units="GB" size={size} />} size={size} />
          <Box direction="row" justify="center" pad={{ between: 'small' }}
            responsive={false}>
            <Label size="small">0 GB</Label>
            <Label size="small">100 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};

Meter8a.propTypes = {
  size: PropTypes.string
};
