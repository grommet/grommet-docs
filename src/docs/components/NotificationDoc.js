// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Notification from 'grommet/components/Notification';

Notification.displayName = 'Notification';

export default class NotificationDoc extends Component {

  render () {
    return (
      <DocsArticle title="Notification" colorIndex="neutral-3">

        <section>
          <p>A box to display Notification messages.</p>
          <Notification status='warning'
            message='Inconsistent configuration detected.' />
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>message  {"{string}"}</code></dt>
            <dd>
              Message to display in the notification box.
            </dd>
            <dt><code>percentComplete  {"{number}"}</code></dt>
            <dd>
              Number to measure the progress of an ongoing notification.
            </dd>
            <dt><code>size  small|medium|large</code></dt>
            <dd>
              Size of the notification box.
            </dd>
            <dt><code>state  {"{string}"}</code></dt>
            <dd>
              State of the element on the notification message (e.g. Active, Running).
            </dd>
            <dt><code>status  {"{string}"}</code></dt>
            <dd>
              Status of the element on the nofitication message (e.g. Ok, Critical).
            </dd>
            <dt><code>timestamp  {"{date}"}</code></dt>
            <dd>
              Timestamp of the notification message.
            </dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available for Notification.</p>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Unknown" code={
            <Notification message='Unknown Message' />
          } />
          <Example name="Warning" code={
            <Notification status='warning'
              message='Inconsistent configuration detected.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Active' />
          } />
          <Example name="Critical" code={
            <Notification status='critical'
              message='Temperature threshold exceeded by 10 degrees.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Active' />
          } />
          <Example name="OK" code={
            <Notification status='ok'
              message='Updated server configuration.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Completed' />
          } />
          <Example name="Percent Complete" code={
            <Notification status='ok'
              message='Updating server profile.'
              timestamp={new Date('Mon Jan 25 2016')}
              state='Running'
              percentComplete={30} />
          } />
        </section>
      </DocsArticle>
    );
  }
};
