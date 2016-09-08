// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

export default class Meter10a extends Component {

  render () {
    const { size } = this.props;
    return (
      <Example align="center" code={
        <Box direction="row" pad={{ between: 'small' }} responsive={false}>
          <Meter type="arc" vertical={true} value={40} label={false}
            threshold={90} size={size} />
          <Box justify="between" align="start" responsive={false}>
            <Label size="small">100 GB</Label>
            <Value value={40} units="GB" align="start" size={size} />
            <Label size="small">0 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};

Meter10a.propTypes = {
  size: PropTypes.string
};
