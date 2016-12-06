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
import { DESC as BoxDesc } from '../components/box/BoxDoc';
import { DESC as HeaderDesc } from '../components/header/HeaderDoc';

const COMPONENTS = [
  {
    title: 'Box',
    desc: BoxDesc
  },{
    title: 'Header',
    desc: HeaderDesc
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
            The Detail Page template is most effective as an interior page 
            and can be customized with components for any purpose that 
            fits your needs. 
          </Paragraph>
        </Section>
        <Section>
          <Box direction="row" pad={{between: 'small'}} responsive={false} 
            wrap={true}>
            <Box>
              <Label margin="small">Desktop</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-4" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="small" separator="all" 
                  align="center" justify="end"
                    size={{
                      height: {min: 'small'}, 
                      width: {min: 'small'}
                    }}>
                    <Box direction="row" pad="medium">
                      <Box pad="large" />
                      <Box pad="large" />
                    </Box>
                    <LinkDownIcon size="small" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Tablet</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-4" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="small" separator="all" 
                  align="center" justify="end"
                    size={{
                      height: {min: 'small'}, 
                      width: {min: 'small'}
                    }}>
                    <LinkDownIcon size="small" />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box>
              <Label margin="small">Palm</Label>
              <Box separator="all">
                <Header size="small" colorIndex="grey-4" />
                <Box colorIndex="light-2"
                  pad={{ horizontal: 'medium', vertical: 'medium',
                    between: 'medium' }}>
                  <Box colorIndex="light-1" pad="small" separator="all" 
                  align="center" justify="end"
                    size={{
                      height: {min: 'small'}
                    }}>
                    <Box pad={{horizontal: 'large'}}/>
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
