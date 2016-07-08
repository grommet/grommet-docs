// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../DocsArticle';
import Notification from 'grommet/components/Notification';
import { Link } from 'react-router';
import { updatePageTitle } from '../../utils/a11y';

Notification.displayName = 'Notification';

function convertNotificationToString(notificationJSX) {
  return jsxToString(notificationJSX);
}

export default class NotificationDoc extends Component {
  componentDidMount () {
    updatePageTitle('Notification');
  }

  _renderNotificationCode(heading, notificationJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {notificationJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertNotificationToString(notificationJSX)}
        </code></pre>
      </div>
    );
  }

  render () {

    var unknownMessage = (
      <Notification message='Unknown Message' />
    );

    var warningMessage = (
      <Notification status='warning'
        message='Inconsistent configuration detected.'
        timestamp={new Date('Mon Jan 25 2016')}
        state='Active' />
    );

    var criticalMessage = (
      <Notification status='critical'
        message='Temperature threshold exceeded by 10 degrees.'
        timestamp={new Date('Mon Jan 25 2016')}
        state='Active' />
    );

    var okMessage = (
      <Notification status='ok'
        message='Updated server configuration.'
        timestamp={new Date('Mon Jan 25 2016')}
        state='Completed' />
    );

    var percentCompleteMessage = (
      <Notification status='ok'
        message='Updating server profile.'
        timestamp={new Date('Mon Jan 25 2016')}
        state='Running'
        percentComplete={30} />
    );

    return (
      <DocsArticle title="Notification" colorIndex="neutral-3">

        <p>A box to display Notification messages.</p>

        <pre><code className="html hljs xml">
          {"<Notification message=\"...\" />"}
        </code></pre>

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
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available for Notification.</p>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderNotificationCode('Unknown', unknownMessage)}
          {this._renderNotificationCode('Warning', warningMessage)}
          {this._renderNotificationCode('Critical', criticalMessage)}
          {this._renderNotificationCode('Ok', okMessage)}
          {this._renderNotificationCode(
            'Percent Complete', percentCompleteMessage
          )}
        </section>
      </DocsArticle>
    );
  }
};

NotificationDoc.contextTypes = {
  routePrefix: PropTypes.string.isRequired
};
