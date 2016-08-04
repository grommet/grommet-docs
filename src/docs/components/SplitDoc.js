// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Section from 'grommet/components/Section';

export default class SplitDoc extends Component {

  render () {
    return (
      <DocsArticle title="Split" colorIndex="neutral-3">

        <p>A full height container with two children laid out horizontally.
        Typical uses involve placing
        a <NavAnchor path="/docs/sidebar">Sidebar</NavAnchor> on
        the left for primary navigation and then main content on the right.
        The right side might contain a separate Split component to provide
        further content depth. Typically, you will want the top Split to be
        a direct child of
        the <NavAnchor path="/docs/app">App</NavAnchor> component
        as this will provide the best responsive behavior across devices.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>fixed               true|false</code></dt>
            <dd>Whether each side should scroll independently.</dd>
            <dt><code>flex                both|left|right</code></dt>
            <dd>Which side to give flexible space to.
              The default value is 'both'.</dd>
            <dt><code>onResponsive        {"{function (columns)}"}</code></dt>
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

        <section>
          <Example name="Example" code={
            <Split flex="right">
              <Sidebar size="small" colorIndex="neutral-1">
                <Header pad={{horizontal: 'medium'}}>Header One</Header>
                <Menu primary={true}>
                  <Anchor>Navigation 1</Anchor>
                  <Anchor>Navigation 2</Anchor>
                  <Anchor>Navigation 3</Anchor>
                </Menu>
              </Sidebar>
              <Article>
                <Header pad={{horizontal: 'medium'}}>Header Two</Header>
                <Section pad="medium">Content</Section>
              </Article>
            </Split>
          } />
        </section>

      </DocsArticle>
    );
  }
};
