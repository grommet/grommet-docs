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
import { DESC as HeaderDesc } from '../components/header/HeaderDoc';
import { DESC as MeterDesc } from '../components/meter/MeterDoc';
import { DESC as ChartDesc } from '../components/chart/ChartDoc';
import { DESC as MapDesc } from '../components/world-map/WorldMapDoc';

const COMPONENTS = [
  {
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
  },{
    title: 'World Map',
    desc: MapDesc,
    slug: 'world-map'
  }
];

export default class InfographicDoc extends Component {
  render () {
    const componentsList = COMPONENTS.map(({title, desc, slug}, index) =>
      <Box pad={{vertical:'small'}} key={`component-${index}`}>
        <Anchor label={title} path={`/docs/${slug || title.toLowerCase()}`} />
        <Paragraph margin="small">{desc}</Paragraph>
      </Box>
    );

    return (
      <DocsTemplate title="Infographic" exampleUrl='grommet-infographic'
        githubUrl="https://github.com/grommet/grommet-infographic">
        <Section pad={{between: 'large'}}>
          <Paragraph size="large" margin="small">
            The infographic template can be used as another method for 
            displaying data or illustrations to create a view 
            specifically for visual storytelling. Combining 
            your art with Grommet's Icon, Meter, and Chart 
            components, you can create multiple layout 
            combinations to maximize the visual impact.
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
                  <Box colorIndex="light-1" pad="large" separator="all" 
                    align="center">
                    Box
                  </Box>
                  <Box direction="row" pad={{ between: 'medium' }}
                    responsive={false}>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" justify="center" align="center"
                      textAlign="center">
                      Meter
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" justify="center" align="center"
                      textAlign="center">
                      Chart
                    </Box>
                    <Box colorIndex="light-1" basis="1/3" pad="medium"
                      separator="all" justify="center" align="center"
                      textAlign="center">
                      World Map
                    </Box>
                  </Box>
                </Box>
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
                    Meter
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Chart
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    World Map
                  </Box>
                </Box>
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
                    Meter
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    Chart
                  </Box>
                  <Box colorIndex="light-1" pad="medium" separator="all"
                    align="center">
                    World Map
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
