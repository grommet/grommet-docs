// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Notification from 'grommet/components/Notification';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

export default class NotificationDoc extends Component {

  render () {
    return (
      <DocsArticle title='Notification' action={
        <Button primary={true} path='/docs/notification/examples'
          label='Examples' />
        }>

        <section>
          <p>A box to display notification messages.</p>
          <Notification status='warning'
            message='You will need a tray. The food is hot.' />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>closer           {"true|false|{node}"}</code></dt>
            <dd>Adds a visible control to close the layer.
              If the caller provides a node, it is the caller&#39;s
              responsibility to listen to events from the node.</dd>
            <dt><code>message          {"{string}"}</code></dt>
            <dd>Message to display in the notification box.</dd>
            <dt><code>onClose          {"{function}"}</code></dt>
            <dd>Function that will be called when the user clicks on the
              closer control. Clicking the closer control does not automatically
              cause the Notification to be removed.
              The recipient of this callback can
              still decide whether to continue rendering the Notification
              or not.</dd>
            <dt><code>percentComplete  {"{number}"}</code></dt>
            <dd>Number to measure the progress of an ongoing notification.</dd>
            <dt><code>size             small|medium|large</code></dt>
            <dd>Size of the notification box.</dd>
            <dt><code>state            {"{string}"}</code></dt>
            <dd>State of the element on the notification message
              (e.g. Active, Running).</dd>
            <dt><code>status           {"{string}"}</code></dt>
            <dd>Status of the element on the nofitication message
              (e.g. Ok, Critical). Please see the Status component for full list
              of supported values.</dd>
            <dt><code>timestamp        {"{date}"}</code></dt>
            <dd>Timestamp of the notification message.</dd>
          </dl>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
          also available for Notification.</p>
        </section>

      </DocsArticle>
    );
  }
};
