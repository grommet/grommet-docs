// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class SidebarDoc extends Component {

  constructor () {
    super();
    this.state = { priority: 'right' };
  }
  _onClose () {
    // no-op
  }

  render () {
    const { priority } = this.state;
    return (
      <DocsArticle title="Sidebar" action={
        <Button primary={true} path='/docs/sidebar/examples'
          label='Examples' />
        }>

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

          <Split fixed={false} flex='right' priority={priority}>
            <Sidebar full={false}>
              <Box pad="large" colorIndex="grey-5"
                justify="center" align="center"
                onClick={() => this.setState({ priority: 'right' })}>
                Sidebar
              </Box>
            </Sidebar>
            <Box pad="large" colorIndex='light-2'
              justify="center" align="center"
              onClick={() => this.setState({ priority: 'left' })}>
              Main content
            </Box>
          </Split>
        </section>


        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>fixed      true|false</code></dt>
            <dd>
              Whether the sidebar height should be fixed at the full
              viewport size. Defaults to false.</dd>
            <dt><code>size       xsmall|small|medium|large</code></dt>
            <dd>The size of the Sidebar. Defaults to <code>medium</code>.</dd>
            <dt><code>full       true|false</code></dt>
            <dd>Whether the sidebar should take up the full browser height or
              not. Defaults to true.</dd>
          </dl>
          <p>Properties for <Anchor path="/docs/box">Box</Anchor> are
            also available.</p>
        </section>

      </DocsArticle>
    );
  }
};
