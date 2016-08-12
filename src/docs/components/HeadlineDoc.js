// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Headline.displayName = 'Headline';

export default class HeadlineDoc extends Component {

  render () {
    return (
      <DocsArticle title="Headline" colorIndex="neutral-3">

        <section>
          <p>Headline text, usually used in marketing pages.</p>
          <Headline>Sample Headline</Headline>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Headline. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Headline. Defaults
              to <code>medium</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Headline. Defaults to <code>medium</code>.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the headline should be bold.  Defaults
              to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Headline>Sample Headline</Headline>
          } />
          <Example name="Strong" code={
            <Headline strong={true}>Sample Headline</Headline>
          } />
          <Example name="Small" code={
            <Headline size="small">Sample Headline</Headline>
          } />
          <Example name="Large" code={
            <Headline size="large">Sample Headline</Headline>
          } />
        </section>

      </DocsArticle>
    );
  }
};
