// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Title from 'grommet/components/Title';
import DocsArticle from '../../components/DocsArticle';
import Logo from '../../img/Logo';
import Example from '../Example';

Title.displayName = 'Title';

const USAGE =
`import Title from 'grommet/components/Title';
<Title>{contents}</Title>`;

export default class TitleDoc extends Component {

  render () {
    return (
      <DocsArticle title="Title" colorIndex="neutral-3">

        <section>
          <p>Title component usually rendered inside a Header.</p>
          <Title>Sample Title</Title>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>a11yTitle      {"{string}"}</code></dt>
            <dd>Custom title used by screen readers. Default is "Title".
              Only used if onClick handler is specified.</dd>
            <dt><code>onClick        {"{function}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>responsive     true|false</code></dt>
            <dd>Whether to only display the logo when the display area
              narrows.</dd>
            <dt><code>truncate       true|false</code></dt>
            <dd>Restrict the text to a single line and truncate with
              ellipsis if it is too long to all fit.
              Defaults to <code>true</code>.</dd>
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
