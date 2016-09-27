// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Timestamp from 'grommet/components/Timestamp';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Timestamp.displayName = 'Timestamp';

const USAGE =
`import Timestamp from 'grommet/components/Timestamp';
<Timestamp value={} />`;

export default class TimestampDoc extends Component {

  render () {
    const now = (new Date()).toISOString();
    return (
      <DocsArticle title="Timestamp" colorIndex="neutral-3">

        <section>
          <p>A localized timestamp.</p>
          <Timestamp value={now}/>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align     start|center|end</code></dt>
            <dd>The horizontal alignment of the Timestamp.</dd>
            <dt><code>fields    date|time</code></dt>
            <dd>Whether to show just the date or just the time.</dd>
            <dt><code>seconds    true|false</code></dt>
            <dd>Whether to show seconds after the time. Defaults to false.</dd>
            <dt><code>value     {'{ISO8601 string}|{Date}'}</code></dt>
            <dd>The date value as an ISO8601 string or
              a <code>Date</code> object.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Timestamp value={now} />
          } />
          <Example name="Default with seconds" code={
            <Timestamp value={now} seconds={true} />
          } />
          <Example name="Date only" code={
            <Timestamp value={now} fields="date" />
          } />
          <Example name="Time only" code={
            <Timestamp value={now} fields="time" />
          } />
          <Example name="Time with seconds" code={
            <Timestamp value={now} fields="time" seconds={true} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
