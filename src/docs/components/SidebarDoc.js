// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Sidebar.displayName = 'Sidebar';

const USAGE =
`import Sidebar from 'grommet/components/Sidebar';
<Sidebar>
  {contents}
</Sidebar>`;

export default class SidebarDoc extends Component {

  _onClose () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Sidebar">

        <section>
          <p>A full height, fixed width container. Usually a Sidebar is placed
          inside a <Anchor path="/docs/split">Split</Anchor> component.
          A typical usage is for primary navigation, where it typically
          contains a <Anchor path="/docs/header">Header</Anchor> and
          a <Anchor path="/docs/menu">Menu</Anchor>. The Sidebar may
          or may not be always visible. If it comes and goes, it is typically
          controlled via a <Anchor path="/docs/title">
          Title</Anchor> component
          inside a <Anchor path="/docs/header">Header</Anchor> component
          residing in the other side of the Split.</p>

          <Box direction="row" colorIndex="light-2">
            <Box basis="1/3" pad="large"
              colorIndex="grey-4" justify="center" align="center">
              Sidebar
            </Box>
            <Box basis="2/3" pad="large"
              justify="center" align="center">
              Main content
            </Box>
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>fixed      true|false</code></dt>
            <dd>Whether any contained Header and Footer should be fixed to
              the top and bottom.</dd>
            <dt><code>size       xsmall|small|medium|large</code></dt>
            <dd>The size of the Sidebar. Defaults to <code>medium</code>.</dd>
            <dt><code>full       true|false</code></dt>
            <dd>Whether the sidebar should take up the full browser height or
              not. Defaults to true.</dd>
          </dl>
          <p>Properties for <Anchor path="/docs/box">Box</Anchor> are
            also available.</p>
        </section>

        <section>
          <Example name="Example" code={
            <Sidebar colorIndex="neutral-1" full={false}>
              <Header pad="medium" justify="between">
                <Title>Title</Title>
                <Button icon={<CloseIcon />} onClick={this._onClose} />
              </Header>
              <Menu primary={true}>
                <Anchor>Navigation 1</Anchor>
                <Anchor>Navigation 2</Anchor>
                <Anchor>Navigation 3</Anchor>
              </Menu>
            </Sidebar>
          } />
        </section>

      </DocsArticle>
    );
  }
};
