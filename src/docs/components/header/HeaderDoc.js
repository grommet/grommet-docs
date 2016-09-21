// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Header.displayName = 'Header';

const USAGE =
`import Header from 'grommet/components/Header';
<Header>
  {contents}
</Header>`;

export default class HeaderDoc extends Component {

  render () {
    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <section>
          <p>Combines Title and Menu elements responsively.</p>
          <Header justify="between">
            <Title>Title</Title>
            <Menu direction="row" align="center" responsive={false}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
              <Search dropAlign={{right: "right"}} />
            </Menu>
          </Header>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>fixed       true|false</code></dt>
            <dd>Whether the header is fixed on the page, typically so content
              below it will scroll under it.</dd>
            <dt><code>float       true|false</code></dt>
            <dd>Whether the header floats above content underneath it.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>splash      true|false</code></dt>
            <dd>Whether to render it in a style suitable for a splash
              screen.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/header/examples`}>
            Header Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
