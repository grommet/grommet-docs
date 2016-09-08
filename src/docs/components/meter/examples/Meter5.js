// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

export default class Meter5 extends Component {

  render () {
    const { size } = this.props;
    return (
      <Example align="center" code={
        <Box direction="row" align="center" responsive={false}>
          <Meter type="arc" vertical={true} value={40} label={false}
            size={size} />
          <Value value={40} align="center" size={size} />
        </Box>
      } />
    );
  }

};

Meter5.propTypes = {
  size: PropTypes.string
};
