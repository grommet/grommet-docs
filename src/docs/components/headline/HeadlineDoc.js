// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class HeadlineDoc extends Component {

  render () {
    return (
      <DocsArticle title='Headline' action={
        <Button primary={true} path={`/docs/headline/examples`}
          label='Examples' />
        }>

        <section>
          <p>Headline text, usually used in marketing pages.</p>
          <Headline>Sample Headline</Headline>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Headline. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Headline. Defaults
              to <code>medium</code>.</dd>
            <dt><code>size        small|medium|large|xlarge</code></dt>
            <dd>The size of the Headline. Defaults to <code>medium</code>.
              Note: <code>xlarge</code> should only be used for short,
              single word situations.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the headline should be bold.  Defaults
              to <code>false</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
