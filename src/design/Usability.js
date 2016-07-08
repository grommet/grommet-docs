// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../DocsArticle';
import { updatePageTitle } from '../utils/a11y';

export default class Usability extends Component {
  componentDidMount () {
    updatePageTitle('Usability');
  }

  render () {
    return (
      <DocsArticle title="Usability" colorIndex="neutral-1">
        <section>
          <dl>
            <dt>Use progressive disclosure to create depth of content</dt>
            <dd>Minimize content and avoid clutter in the interface by presenting the user with
            only the elements that make sense at a given point in the experience.
            Then progressively grow the experience as necessary.</dd>

            <dt>Use simple messages</dt>
            <dd>In user interfaces, massive amounts of text are usually
            treated as blocks of irrelevant information. If you want people
            to be aware of your content use short phrases or bullet points
            instead, or highlight important data and messages with proper styling.</dd>

            <dt>Provided tutorials vs. contextual help</dt>
            <dd>Well designed tutorials enable your user to remember how the
            product works and they will need less hand holding while navigating
            through your interface.</dd>
          </dl>
        </section>
      </DocsArticle>
    );
  }
};
