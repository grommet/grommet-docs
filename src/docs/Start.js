// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import DocsArticle from '../components/DocsArticle';

export default class Start extends Component {

  render () {
    return (
      <DocsArticle title="Start">
        <Paragraph size='large'>
          There are a bunch of ways of get started with Grommet. Whether
          you’re a designer, developer, or just interested in technology,
          we’ve got you covered.
        </Paragraph>
        <Section>
          <Heading tag='h3'>Design System</Heading>
          <Paragraph margin='none'>
            Grommet was created to align the design and developer workflow into
            one seamless experience. We recommend that everyone take some time
            and familiarize themselves
            with the  <Anchor path="/docs/components"
                id='components-anchor'>
                 Components
              </Anchor> area (especially the examples) to see how the designs
              translate to code before downloading the various resources.
          </Paragraph>
          <Paragraph>
            Our resources provide everything one would need to design a modern
            application; icons, fonts, sticker sheets, and design templates --
            Have fun!
          </Paragraph>
          <Footer direction='column' align='start'
            pad={{ between: 'small' }}>
            <Button label="Download Resources" primary={true}
              path="/docs/resources"/>
            <Anchor
              href="https://github.com/grommet/grommet-design"
              primary={true}
              target='_blank'>
              View on Github</Anchor>
            </Footer>
        </Section>
        <Section separator='top'>
          <Heading tag ='h3'>Component Library</Heading>
          <Paragraph margin='none'>
            The Grommet component library is designed to be a perfect complement
            to the design system. With little setup, you&#39;ll be able to
            create a Grommet application from scratch in minutes and take the
            pain out of translating design files into running application code.
          </Paragraph>
          <Paragraph>
            To run Grommet on your local machine, get access to all the
            components, and the user interface goodness, you don&#39;t have to
            be a developer. With the power of <Anchor href="https://nodejs.org/"
              target="_blank">
              Node.js
            </Anchor>, Grommet will take care of all the details
            through our command line interface (CLI).
          </Paragraph>
          <Footer direction='column' align='start'
              pad={{ between: 'small' }}>
            <Button label="Get Started" primary={true}
              path="/docs/get-started"/>
          </Footer>
        </Section>
      </DocsArticle>
    );
  }
};
