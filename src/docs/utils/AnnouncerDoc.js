// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class AnnouncerDoc extends Component {

  render () {

    const example =
`import { announce, announcePageLoaded } from 'grommet/utils/Announcer';

export default class Dashboard extends Component {

  componentDidMount () {
    announce('Dashboard was loaded');
    // or announcePageLoaded('Dashboard');
  }

})`;

    const liveRegionsURL = (
      'https://developer.mozilla.org/en-US/docs/' +
      'Web/Accessibility/ARIA/ARIA_Live_Regions'
    );

    const link = (
      <a href={liveRegionsURL} target="_blank">Aria Live MDN</a>
    );

    return (
      <DocsArticle title="Announcer" colorIndex="neutral-4">

        <p>
          Utility functions for announcing things in a page.
          This is used for accessibility where screen readers will read the
          message to the user as you call the announce functions. Behind the
          scenes we are using aria live regions. See {link} for additional
          references around this topic.
        </p>
        <p>
          You should use it carefully, if you add too many announcements it will
          definitely upset users. Few use cases where it is useful: page loads
          for single page apps, alerts, notifications, and things that are
          dynamically added to the page that users with disabilities will have
          issues locating.
        </p>

        <section>
          <h2>Methods</h2>
          <dl>
            <dt>
              <code>announce ({"message: {string}, mode: {string}"})</code>
            </dt>
            <dd>Adds a message to be announced. Mode is optional with default
              value being 'assertive'. You can use mode polite to wait
              until the screen reader finishes the current message to
              read the next one.</dd>
            <dt><code>announcePageLoaded ({"title: {string}"})</code></dt>
            <dd>Announces a page load with a given title.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <Example preamble={example}/>
        </section>

      </DocsArticle>
    );
  }
};
