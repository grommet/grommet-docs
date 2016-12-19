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
import LinkDownIcon from 'grommet/components/icons/base/LinkDown';
import { DESC as ArticleDesc } from '../components/ArticleDoc';
import { DESC as BoxDesc } from '../components/box/BoxDoc';
import { DESC as ChartDesc } from '../components/chart/ChartDoc';
import { DESC as HeaderDesc } from '../components/header/HeaderDoc';
import { DESC as MeterDesc } from '../components/meter/MeterDoc';

const COMPONENTS = [
  {
    title: 'Article',
    desc: ArticleDesc
  },{
    title: 'Box',
    desc: BoxDesc
  },{
    title: 'Chart',
    desc: ChartDesc
  },{
    title: 'Header',
    desc: HeaderDesc
  },{
    title: 'Meter',
    desc: MeterDesc
  }
];

export default class VerticalNarrativeDoc extends Component {
  render () {
    const componentsList = COMPONENTS.map(({title, desc}, index) => 
      <Box pad={{vertical:'small'}} key={`component-${index}`}>
        <Anchor label={title} path={`/docs/${title.toLowerCase()}`} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Vertical Narrative" exampleUrl='grommet-vertical' 
        githubUrl="https://github.com/grommet/grommet-vertical-narrative">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large">
            The Vertical Narrative template provides a slideshow-like experience
            to users. This is great for storytelling to users or crafting an
            explicate content flow. Using the full width and height of
            the viewport, users traverse this experience vertically
            with very simple navigation controls (keyboard or
            up/down arrow keys). Built into the template 
            is a smooth scroll animation to enhance 
            the experience.
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
                  <Box colorIndex="light-1" separator="all" 
                  align="center" justify="end"
                    pad={{ vertical: 'small', horizontal: 'large' }}
                    size={{
                      height: {min: 'small'}, 
                      width: {min: 'small'}
                    }}>
                    <Box justify="center" flex="grow" direction="row"
                      responsive={false} align="center">
                      <Box pad="medium" />
                      Article
                      <Box pad="medium" />
                    </Box>
                    <LinkDownIcon size="small" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Tablet</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" separator="all" 
                  align="center" justify="end"
                    pad={{ vertical: 'small', horizontal: 'large' }}
                    size={{
                      height: {min: 'small'}, 
                      width: {min: 'small'}
                    }}>
                    <Box justify="center" flex="grow" direction="row"
                      responsive={false} align="center">
                      <Box pad="small" />
                      Article
                      <Box pad="small" />
                    </Box>
                    <LinkDownIcon size="small" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Palm</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-5" justify="center">
                  Header
                </Header>
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" separator="all" 
                  align="center" justify="end"
                    pad={{ vertical: 'small', horizontal: 'small' }}
                    size={{
                      height: {min: 'small'}, 
                      width: {min: 'xsmall'}
                    }}>
                    <Box justify="center" flex="grow" align="center">
                      Article
                    </Box>
                    <LinkDownIcon size="small" />
                  </Box>
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
