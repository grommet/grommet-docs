// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Notification from 'grommet/components/Notification';
import Button from 'grommet/components/Button';
import Example from '../../Example';

export default class NotificationCloserExample extends Component {

  constructor () {
    super();
    this.state = { active: true };
  }

  render () {
    const { active } = this.state;
    let result;
    if (active) {
      result = (
        <Example code={
          <Notification status='critical' announce={true}
            message='Temperature threshold exceeded by 10 degrees.'
            timestamp={new Date('Mon Jan 25 2016')}
            state='Active' closer={true}
            onClose={() => this.setState({ active: false })} />
        } />
      );
    } else {
      result = (
        <Button label="Re-open"
          onClick={() => this.setState({ active: true })} />
      );
    }
    return result;
  }

};
