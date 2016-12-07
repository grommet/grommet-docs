// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class SplitDoc extends Component {

  constructor () {
    super();
    this.state = { priority: 'right' };
  }

  render () {
    const { priority } = this.state;
    return (
      <DocsArticle title='Split' action={
        <Button primary={true} path='/docs/split/examples'
          label='Examples' />
        }>

        <section>
          <p>A full height container with two children laid out horizontally.
          Typical uses involve placing
          a <Anchor path='/docs/sidebar'>Sidebar</Anchor> on
          the left for primary navigation and then main content on the right.
          The right side might contain a separate Split component to provide
          further content depth. Typically, you will want the top Split to be
          a direct child of
          the <Anchor path='/docs/app'>App</Anchor> component
          as this will provide the best responsive behavior across devices.</p>

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
            <dt><code>fixed               true|false</code></dt>
            <dd>Whether each side should scroll independently.</dd>
            <dt><code>flex                both|left|right</code></dt>
            <dd>Which side to give flexible space to.
              The default value is 'both'.</dd>
            <dt><code>onResponsive        {'{function (columns)}'}</code></dt>
            <dd>Function that will be called when the display area changes.
              When space is limited the 'columns' parameter will be set to
              'single'. Otherwise 'columns' will be set to 'multiple'.</dd>
            <dt><code>priority            left|right</code></dt>
            <dd>Which side to prioritize when space is limited.
              The default value is 'right'.</dd>
            <dt><code>separator           true|false</code></dt>
            <dd>Whether to include a separator between the children.</dd>
            <dt><code>showOnResponsive    priority|both</code></dt>
            <dd>Whether the Split should show both sides for mobile, or
            collapse down to just the priority side.  The default value is
            'priority'</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
