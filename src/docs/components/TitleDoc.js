// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Title from 'grommet/components/Title';
import Logo from '../../img/Logo';

const inline =
      "<Title>\n" +
      "  ...\n" +
      "</Title>";

export default class TitleDoc extends Component {

  render () {
    return (
      <DocsArticle title="Title" colorIndex="neutral-3">

        <p>Title component usually rendered inside a Header.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle      {"{string}"}</code></dt>
            <dd>
              Custom title used by screen readers. Default is "Title".
              Only used if onClick handler is specified.
            </dd>
            <dt><code>onClick        {"{func}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>responsive     true|false</code></dt>
            <dd>Whether to only display the logo when the display area narrows.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <Title>Sample Title</Title>
          </div>
          <pre><code className="html hljs xml">
            {"<Title>\n  Sample Title\n</Title>"}
          </code></pre>

          <h3>Logo and text</h3>
          <div className="example">
            <Title><Logo /> Sample Title</Title>
          </div>
          <pre><code className="html">
            {"<Title>\n  <Logo />\n  Sample Title\n</Title>"}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
};
