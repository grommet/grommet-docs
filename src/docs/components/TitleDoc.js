// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Title from 'grommet/components/Title';
import DocsArticle from '../../components/DocsArticle';
import Logo from '../../img/Logo';
import Example from '../Example';

export default class TitleDoc extends Component {

  render () {
    return (
      <DocsArticle title="Title" colorIndex="neutral-3">

        <section>
          <p>Title component usually rendered inside a Header.</p>
          <Title>Sample Title</Title>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle      {"{string}"}</code></dt>
            <dd>
              Custom title used by screen readers. Default is "Title".
              Only used if onClick handler is specified.
            </dd>
            <dt><code>onClick        {"{function}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>responsive     true|false</code></dt>
            <dd>Whether to only display the logo when the display area
              narrows.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple" code={
            <Title>Sample Title</Title>
          } />
          <Example name="Logo and text" code={
            <Title><Logo /> Sample Title</Title>
          } />
        </section>

      </DocsArticle>
    );
  }
};
