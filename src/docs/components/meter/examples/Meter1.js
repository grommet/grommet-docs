// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Meter from 'grommet/components/Meter';
import Example from '../../../Example';

export default class Meter1 extends Component {

  render () {
    return (
      <Example code={
        <Meter value={40} a11yTitleId='meter-title'
          a11yDescId='meter-desc' />
      } />
    );
  }

};
