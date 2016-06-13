// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';

export default class Interactions extends Component {
  render () {
    return (
      <DocsArticle title="Interactions" colorIndex="neutral-1">
        <section>
          <dl>
            <dt>Use device appropriate gestures and interactions</dt>
            <dd>Users expect interfaces to work naturally on their device.
            Delight your users by providing the expected interactions for
            the device they are using.</dd>

            <dt>Use animation to explain transitions and aid discovery</dt>
            <dd>Animations should be natural and reinforce the user’s
            interaction with  your application.  They should not be distracting
            or disruptive.</dd>
          </dl>
        </section>
      </DocsArticle>
    );
  }
};
