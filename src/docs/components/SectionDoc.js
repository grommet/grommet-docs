import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Anchor from 'grommet/components/Anchor';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Code from '../../components/Code';

Section.displayName = 'Section';

export const DESC = (
  <span>
    A standard <Anchor
    href='http://www.w3.org/TR/html5/sections.html#the-section-element'>
    HTML5 section</Anchor>. It might
    contain a <Anchor path='/docs/heading'>Heading</Anchor>, one
    or more <Anchor path='/docs/paragraph'>Paragraphs</Anchor>
    , <Anchor path='/docs/image'>Images</Anchor>
    , and <Anchor path='/docs/video'>Videos</Anchor>.
  </span>
);

export default class SectionDoc extends Component {

  render () {
    return (
      <DocsArticle title='Section'>

        <section>
          <p>{DESC}</p>

          <Section colorIndex='light-2' pad='medium'>
            <Heading tag='h2'>Sample Heading</Heading>
            <Paragraph>Sample content.</Paragraph>
          </Section>
        </section>

        <section>
          <h2>Properties</h2>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
            available.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import Section from 'grommet/components/Section';`}>
            <Section>
              {'{contents}'}
            </Section>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
