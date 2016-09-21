// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

Article.displayName = 'Article';

const USAGE =
`import Article from 'grommet/components/Article';
<Article>
  {contents}
</Article>`;

export default class ArticleDoc extends Component {

  render () {
    return (
      <DocsArticle title="Article" colorIndex="neutral-3">

        <section>
          <p>A standard <Anchor
            href="http://www.w3.org/TR/html-markup/article.html">
            HTML5 article</Anchor>. It might
            contain a <NavAnchor path="/docs/header">Header</NavAnchor>, one
            or more <NavAnchor path="/docs/section">Sections</NavAnchor>, and
            a <NavAnchor path="/docs/footer">Footer</NavAnchor>.</p>

          <Article colorIndex="light-2">
            <Header
              colorIndex="grey-4" justify="center" align="center">
              Header
            </Header>
            <Section basis="medium" pad="large"
              justify="center" align="center">
              Sections
            </Section>
            <Footer colorIndex="grey-4" justify="center" align="center">
              Footer
            </Footer>
          </Article>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
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
          <p>Properties for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <Example name="Example" code={
            <Article>
              <Heading tag="h1">Heading</Heading>
              <Section>
                <Heading tag="h2">Sub Heading</Heading>
                <Paragraph>Lorem ipsum ...</Paragraph>
              </Section>
            </Article>
          } />
        </section>

      </DocsArticle>
    );
  }
};
