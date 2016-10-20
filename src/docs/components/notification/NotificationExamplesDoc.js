// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Notification from 'grommet/components/Notification';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';
import NotificationCloserExample from './NotificationCloserExample';

const NotificationExample = (props) => (
  <Example code={
    <Notification {...props} />
  } />
);

export default class NotificationExamplesDoc extends ExamplesDoc {};

NotificationExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/notification">Notification</Anchor>,
  examples: [
    { label: 'Unknown', component: NotificationExample,
      props: { message: 'Unknown Message' }},
    { label: 'Warning', component: NotificationExample,
      props: { status: 'warning',
        message: 'Inconsistent configuration detected.',
        timestamp: new Date('Mon Jan 25 2016'),
        state: 'Active' }},
    { label: 'Critical', component: NotificationExample,
      props: { status: 'critical',
        message: 'Temperature threshold exceeded by 10 degrees.',
        timestamp: new Date('Mon Jan 25 2016'),
        state: 'Active' }},
    { label: 'OK', component: NotificationExample,
      props: { status: 'ok',
        message: 'Updated server configuration.',
        timestamp: new Date('Mon Jan 25 2016'),
        state: 'Completed' }},
    { label: 'Percent Complete', component: NotificationExample,
      props: { status: 'unknown',
        message: 'Updating server profile.',
        timestamp: new Date('Mon Jan 25 2016'),
        state: 'Running', percentComplete: 30 }},
    { label: 'Closer', component: NotificationCloserExample }
  ],
  title: 'Examples'
};
