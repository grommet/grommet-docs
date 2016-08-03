// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Example from '../../../Example';

export default class Meter21 extends Component {

  render () {
    return (
      <Example code={
        <Meter type="arc" stacked={true} vertical={true} series={[
          {label: 'Gen 7', value: 40},
          {label: 'Gen 8', value: 20},
          {label: 'Gen 9', value: 10},
          {label: 'Gen 10', value: 30}
        ]} units="GB"
          min={{value: 0, label: '0 GB'}} max={{value: 100, label: '100 GB'}}
          a11yTitleId='meter-title' a11yDescId='meter-desc' />
      } />
    );
  }

};
