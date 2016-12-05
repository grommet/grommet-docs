// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Pulse from 'grommet/components/icons/Pulse';
import Anchor from 'grommet/components/Anchor';
import LinkNext from 'grommet/components/icons/base/LinkNext';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Pulse.displayName = 'Pulse';

export default class PulseDoc extends Component {

  render () {
    return (
      <DocsArticle title="Pulse">

        <section>
          <p>
            A pulsing icon which denotes further information is
            available upon interaction. This component can
            be used in combination with
            an <Anchor path="/docs/anchor">
            Anchor</Anchor> or <Anchor path="/docs/button">
            Button</Anchor> component.
          </p>
          <Pulse/>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>icon           {"{element}"}</code></dt>
            <dd>Icon element to place in the pulse.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
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
