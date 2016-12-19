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
import { DESC as QuoteDesc } from '../components/quote/QuoteDoc';
import { DESC as SectionDesc } from '../components/SectionDoc';
import { DESC as VideoDesc } from '../components/video/VideoDoc';

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
    title: 'Quote',
    desc: QuoteDesc
  },{
    title: 'Section',
    desc: SectionDesc
  },{
    title: 'Video',
    desc: VideoDesc
  }
];

export default class DetailsPageDoc extends Component {
  render () {
    const componentsList = COMPONENTS.map(({title, desc}, index) =>
      <Box pad={{vertical:'small'}} key={`component-${index}`}>
        <Anchor label={title} path={`/docs/${title.toLowerCase()}`} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Detail Page" exampleUrl='grommet-details-page'
        githubUrl="https://github.com/grommet/grommet-details-page">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large">
            The Detail template is useful when highlighting feature content in 
            the interior of your project. The Detail template provides space 
            for storytelling in article-like format below the fold. To 
            extend the template, components can be used to change 
            it from a product-centric design to a narrative 
            style easily.
          </Paragraph>
        </Section>
        <Section>
          <Box direction="row" pad={{between: 'small'}} responsive={false}
            wrap={true}>
            <Box>
              <Label margin="small">Desktop</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="2/3" pad="large"
                      separator="all" align="center">
                      Box
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="large"
                      separator="all" align="center">
                      Card
                    </Box>
                  </Box>
                  <Box colorIndex="light-1" pad="large" separator="all"
                    align="center">
                    Hero
                  </Box>
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" align="center">
                      Card
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" align="center">
                      Card
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
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
            <Box>
              <Label margin="small">Tablet</Label>
              <Box separator="all" responsive={false}
                size={{width: {min: "small"}}}>
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all"
                    justify="center" direction="row" responsive={false}>
                    <Box pad="small" />
                    Box
                    <Box pad="small" />
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Card
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Hero
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all" 
                    align="center">
                    Card
                  </Box>
                </Box>
                <Footer colorIndex="grey-5" justify="center">
                  Footer
                </Footer>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Palm</Label>
              <Box separator="all" responsive={false}>
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all"
                    align="center">
                    Box
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Card
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Hero
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all" 
                    align="center">
                    Card
                  </Box>
                </Box>
                <Footer colorIndex="grey-5" justify="center">
                  Footer
                </Footer>
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
