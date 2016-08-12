// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Article from 'grommet/components/Article';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';

export default class ArticleDoc extends Component {

  render () {
    return (
      <DocsArticle title="Article" colorIndex="neutral-3">

        <p>Styles standard HTML5 markup for use in articles.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>onSelect      {"{function (selected)}"}</code></dt>
            <dd>Function that will be called when the article
              changes the currently selected chapter.</dd>
            <dt><code>selected      {"{number}"}</code></dt>
            <dd>The currently selected chapter using a zero based index.
              Defaults to 0.</dd>
            <dt><code>scrollStep    true|false</code></dt>
            <dd>Whether to allow keyboard control of stepped scrolling through
            children. When true, directional keys will step through the
            children, depending on the direction they are laid out.
            If the spacebar is pressed, the children will automatically
            be stepped through at an interval of ten seconds per child.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <Example name="Example" code={
            <Article>
              <Heading tag="h1">Title</Heading>
              <Section>
                <h2>Heading</h2>
                <p>Lorem ipsum ...</p>
              </Section>
            </Article>
          } />
        </section>

      </DocsArticle>
    );
  }
};
