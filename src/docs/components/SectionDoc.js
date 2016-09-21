import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Heading from 'grommet/components/Heading';
import Anchor from 'grommet/components/Anchor';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';

Section.displayName = 'Section';

const USAGE =
`import Section from 'grommet/components/Section';
<Section>
  {contents}
</Section>`;

export default class SectionDoc extends Component {

  render () {
    return (
      <DocsArticle title="Section" colorIndex="neutral-3">

        <section>
          <p>A standard <Anchor
            href="http://www.w3.org/TR/html5/sections.html#the-section-element">
            HTML5 section</Anchor>. It might
            contain a <NavAnchor path="/docs/heading">Heading</NavAnchor>, one
            or more <NavAnchor path="/docs/pargraph">Paragraphs</NavAnchor>,
            <NavAnchor path="/docs/image">Images</NavAnchor>, and
            <NavAnchor path="/docs/video">Videos</NavAnchor>.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <p>Properties for <NavAnchor path="/docs/box">Box</NavAnchor> are
            available.</p>
        </section>

        <section>
          <h2>Example</h2>
          <Example code={
            <Section>
              <Header align="center" justify="between">
                <Heading tag="h3">Heading</Heading>
                <Menu direction="row">
                  <Anchor href="">Anchor 1</Anchor>
                  <Anchor href="">Anchor 2</Anchor>
                </Menu>
              </Header>
              <Paragraph>Lorem ipsum ...</Paragraph>
              <Image src="/img/carousel-1.png" />
            </Section>
          } />
        </section>

      </DocsArticle>
    );
  }
};
