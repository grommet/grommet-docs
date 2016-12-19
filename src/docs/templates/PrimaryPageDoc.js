// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Label from 'grommet/components/Label';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import DocsTemplate from '../../components/DocsTemplate';
import { DESC as BoxDesc } from '../components/box/BoxDoc';
import { DESC as CardDesc } from '../components/card/CardDoc';
import { DESC as FooterDesc } from '../components/footer/FooterDoc';
import { DESC as HeroDesc } from '../components/hero/HeroDoc';
import { DESC as HeaderDesc } from '../components/header/HeaderDoc';
import { DESC as SectionDesc } from '../components/SectionDoc';

const COMPONENTS = [
  {
    title: 'Box',
    desc: BoxDesc
  },{
    title: 'Card',
    desc: CardDesc
  },{
    title: 'Footer',
    desc: FooterDesc
  },{
    title: 'Header',
    desc: HeaderDesc
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
        <Anchor label={title} path={`/docs/${title.toLowerCase()}`} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Primary Page" exampleUrl='grommet-primary-page'
        githubUrl="https://github.com/grommet/grommet-primary-page">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large">
            The Primary template is a bold presentation that uses a large 
            Marquee, paired with an introduction Section and Social 
            Feed, to capture the attention of users. It is most 
            effective as a homepage or a landing page, and 
            can be customized with components to further 
            enhance the experience.
          </Paragraph>
        </Section>
        <Section>
          <Box direction="row" pad={{between: 'small'}} wrap={true}
            responsive={false}>
            <Box>
              <Label margin="small">Desktop</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box pad="large" separator="bottom" align="center">
                  Hero
                </Box>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all" 
                    align="center" justify="center">
                    Section
                  </Box>
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" align="center" justify="center">
                      Card
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" align="center" justify="center">
                      Card
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" align="center" justify="center">
                      Card
                    </Box>
                  </Box>
                </Box>
                <Footer colorIndex="grey-5" justify="center">
                  Footer
                </Footer>
              </Box>  
            </Box>
            <Box>
              <Label margin="small">Tablet</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box pad="large" separator="bottom" align="center">
                  Hero
                </Box>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all" 
                    align="center">
                    Section
                  </Box>
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/2" pad="medium"
                      separator="all">
                      Card
                    </Box>
                    <Box colorIndex="light-1" basis="1/2" pad="medium"
                      separator="all">
                      Card
                    </Box>
                  </Box>
                </Box>
                <Footer colorIndex="grey-5" justify="center">
                  Footer
                </Footer>
              </Box>
            </Box>
            <Box>
              <Box>
              <Label margin="small">Palm</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box pad="large" separator="bottom" align="center">
                  Hero
                </Box>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="medium" separator="all">
                    Section
                  </Box>
                  <Box pad={{ between: 'medium' }}>
                    <Box colorIndex="light-1" pad="small"
                      separator="all" align="center">
                      Card
                    </Box>
                    <Box colorIndex="light-1" pad="small"
                      separator="all" align="center">
                      Card
                    </Box>
                  </Box>
                </Box>
                <Footer colorIndex="grey-5" justify="center">
                  Footer
                </Footer>
              </Box>
            </Box>
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
