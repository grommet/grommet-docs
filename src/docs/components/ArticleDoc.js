// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

Article.displayName = 'Article';

export const DESC = (<span>
  A standard <Anchor
  href='http://www.w3.org/TR/html5/sections.html#the-article-element'>
  HTML5 article</Anchor>. It might
  contain a <Anchor path='/docs/header'>Header</Anchor>, one
  or more <Anchor path='/docs/section'>Sections</Anchor>, and
  a <Anchor path='/docs/footer'>Footer</Anchor>.
</span>);

export default class ArticleDoc extends Component {

  render () {
    return (
      <DocsArticle title='Article'>

        <section>
          <p>{DESC}</p>

          <Article colorIndex='light-2'>
            <Header
              colorIndex="grey-5" justify="center" align="center">
              Header
            </Header>
            <Section basis='medium' pad='large'
              justify='center' align='center'>
              Sections
            </Section>
            <Footer colorIndex="grey-5" justify="center" align="center">
              Footer
            </Footer>
          </Article>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>onSelect      {'{function (selected)}'}</code></dt>
            <dd>Function that will be called when the article
              changes the currently selected chapter.</dd>
            <dt><code>selected      {'{number}'}</code></dt>
            <dd>The currently selected chapter using a zero based index.
              Defaults to 0.</dd>
            <dt><code>scrollStep    true|false</code></dt>
            <dd>Whether to allow keyboard control of stepped scrolling through
            children. When true, directional keys will step through the
            children, depending on the direction they are laid out.
            Note: You cannot use <code>full={'{true}'}</code> with this
            property.</dd>
          </dl>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
          also available.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import Article from 'grommet/components/Article';`}>
            <Article>
              {'{contents}'}
            </Article>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
