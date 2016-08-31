// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Pulse from 'grommet/components/icons/Pulse';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

export default class PulseDoc extends Component {

  render () {
    return (
      <DocsArticle title="Pulse" colorIndex="neutral-3">
        <p>
          A pulsing icon which denotes further information is 
          available upon interaction. This component can 
          be used in combination with an Anchor or Button 
          component.
        </p>
        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>icon           {"{element}"}</code></dt>
            <dd>Icon element to place in the pulse.
              See <NavAnchor path="/docs/icon">Icon</NavAnchor>.</dd>
          </dl>
        </section>
        <section>
          <h2>Examples</h2>
          <Example code={<Pulse/>} />
          <Example code={<Pulse icon={<LinkNext />} />} />
        </section>
      </DocsArticle>
    );
  }
};
