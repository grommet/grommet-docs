// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Notification from 'grommet/components/Notification';
import InteractiveExample from '../../../components/InteractiveExample';

Notification.displayName = 'Notification';

const PROPS_SCHEMA = {
  status: { options: ['ok', 'critical', 'warning', 'unknown'] },
  state: { value: 'Sample state', initial: true },
  message: { value: 'Sample message', initial: true },
  timestamp: { value: (new Date()), initial: true },
  percentComplete: { value: 30 },
  size: { options: ['small', 'medium', 'large'] }
};

export default class NotificationExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: { message: '' } };
  }

  render () {
    let { elementProps } = this.state;

    const element = (
      <Notification {...elementProps} />
    );

    return (
      <InteractiveExample contextLabel='Notification'
        contextPath='/docs/notification'
        justify='start' align='stretch'
        preamble={`import Notification from 'grommet/components/Notification';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
