// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Value from 'grommet/components/Value';
import Example from '../../../Example';

export default class Meter3 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Meter value={40} type="circle" label={<Value value={40} />} />
      } />
    );
  }

};
