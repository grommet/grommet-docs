// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
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
import { DESC as TilesDesc } from '../components/tiles/TilesDoc';

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
    title: 'Tiles',
    desc: TilesDesc
  }
];

export default class SubPageDoc extends Component {
  render () {
    const componentsList = COMPONENTS.map(({title, desc}, index) =>
      <Box pad={{vertical:'small'}} key={`component-${index}`}>
        <Anchor label={title} path={`/docs/${title.toLowerCase()}`} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Sub Page" exampleUrl='grommet-sub-page'
        githubUrl="https://github.com/grommet/grommet-sub-page">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large">
            The Sub-level template is useful when structuring an interior hub 
            for a project. Not quite a Primary template, but there is room to 
            add multiple Sections that route the user to other details. The 
            Sub-level template is great for defining your project's 
            tent-pole features. The template allows easy expansion 
            of the design through components.
          </Paragraph>
        </Section>
        <Section>
          <Box direction="row" pad={{between: 'small'}} responsive={false}
            wrap={true}>
            <Box>
              <Label margin="small">Desktop</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" />
                <Box colorIndex="light-1" pad="large" separator="bottom" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all" />
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/2" pad="large"
                      separator="all" />
                    <Box colorIndex="light-1" basis="1/2" pad="large"
                      separator="all" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Tablet</Label>
              <Box separator="all" responsive={false}>
                <Header size="small" colorIndex="grey-5" />
                <Box colorIndex="light-1" pad="large" separator="bottom" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all" />
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/2" pad="large"
                      separator="all" />
                    <Box colorIndex="light-1" basis="1/2" pad="large"
                      separator="all" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Palm</Label>
              <Box separator="all" responsive={false}>
                <Header size="small" colorIndex="grey-5" />
                <Box colorIndex="light-1" pad="large" separator="bottom" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="large" separator="all" />
                  <Box colorIndex="light-1" pad="large" separator="all" />
                  <Box colorIndex="light-1" pad="large" separator="all" />
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
