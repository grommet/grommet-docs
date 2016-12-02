// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import DocsTemplate from '../../components/DocsTemplate';
import { DESC as BoxDesc } from '../components/box/BoxDoc';
import { DESC as CardDesc } from '../components/card/CardDoc';
import { DESC as HeroDesc } from '../components/hero/HeroDoc';
import { DESC as SectionDesc } from '../components/SectionDoc';

const COMPONENTS = [
  {
    title: 'Box',
    desc: BoxDesc
  },{
    title: 'Card',
    desc: CardDesc
  },{
    title: 'Hero',
    desc: HeroDesc
  },{
    title: 'Section',
    desc: SectionDesc
  }
];

export default class PrimaryPageDoc extends Component {
  render () {
    const componentsList = COMPONENTS.map(({title, desc}, index) => 
      <Box pad={{vertical:'small'}} key={`component-${index}`}>
        <Anchor label={title} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Primary Page" exampleUrl='grommet-primary-page' 
        githubUrl="https://github.com/grommet/grommet-primary-page">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large">
            The Primary Page template is bold and impactful with a large 
            Marquee, intro, and social feed. It is most effective as
            a home page or landing page and can be customized with
            components for any purpose that fits your needs.
          </Paragraph>
        </Section>
        <Section>
          <Box direction="row" pad={{between: 'small'}}>
            <Box>
              <Paragraph margin="small">
                Desktop
              </Paragraph>
              <img src="/img/templates/template-primary-desktop.png" />
            </Box>
            <Box>
              <Paragraph margin="small">
                Tablet
              </Paragraph>
              <img src="/img/templates/template-primary-tablet.png" />
            </Box>
            <Box>
              <Paragraph margin="small">
                Palm
              </Paragraph>
              <img src="/img/templates/template-primary-palm.png" />
            </Box>
          </Box>
        </Section>
        <Section>
          <Heading tag="h3">
            Components
          </Heading>
          {componentsList}
        </Section>
      </DocsTemplate>
    );
  }
};
