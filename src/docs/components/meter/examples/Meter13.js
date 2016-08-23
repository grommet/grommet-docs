// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Example from '../../../Example';

export default class Meter13 extends Component {

  render () {
    return (
      <Example align="center" code={
        <Meter type="circle" series={[
          {label: 'Gen 7', value: 50},
          {label: 'Gen 8', value: 20},
          {label: 'Gen 9', value: 10},
          {label: 'Gen 10', value: 30}
        ]} units="GB"
          min={{value: 0, label: '0 GB'}} max={{value: 100, label: '100 GB'}}
          threshold={90} />
      } />
    );
  }

};
