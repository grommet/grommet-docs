// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Timestamp from 'grommet/components/Timestamp';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';
import Example from '../../Example';

export default class TimestampDoc extends Component {

  render () {
    const now = (new Date()).toISOString();
    return (
      <DocsArticle title='Timestamp' action={
        <Button primary={true} path={`/docs/timestamp/examples`}
          label='Examples' />
        }>

        <section>
          <p>A localized timestamp.</p>
          <Timestamp value={now}/>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align     start|center|end</code></dt>
            <dd>The horizontal alignment of the Timestamp.</dd>
            <dt><code>fields    date|time|year|month|day|hour|minute|second
              </code></dt>
            <dd>Which fields to include in the Timestamp.</dd>
            <dt><code>value     {'{ISO8601 string}|{Date}'}</code></dt>
            <dd>The date value as an ISO8601 string or
              a <code>Date</code> object.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name='Default' code={
            <Timestamp value={now} />
          } />
          <Example name='Date only' code={
            <Timestamp value={now} fields='date' />
          } />
          <Example name='Month and day only' code={
            <Timestamp value={now} fields={['month', 'day']} />
          } />
          <Example name='Date and time with seconds' code={
            <Timestamp value={now} fields={['date', 'time', 'seconds']} />
          } />
          <Example name='Time only' code={
            <Timestamp value={now} fields='time' />
          } />
          <Example name='Time with seconds' code={
            <Timestamp value={now} fields={['time', 'seconds']} />
          } />
          <Example name='Hours only' code={
            <Timestamp value={now} fields='hours' />
          } />
        </section>

      </DocsArticle>
    );
  }
};
