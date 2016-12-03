// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import GrommetLogo from 'grommet/components/icons/Grommet';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Box from 'grommet/components/Box';
// import Image from 'grommet/components/Image';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import GitHubIcon from 'grommet/components/icons/base/SocialGithub';

const ProjectTile = (props) => {
  let github;
  if (props.githubUrl) {
    github = <Anchor href={props.githubUrl} icon={<GitHubIcon />} />;
  }
  return (
    <Tile basis='medium'>
      <Button href={props.url} fill={true}>
        {props.image}
        <Box pad='medium' direction='row' justify='between'>
          <Box>
            <Heading tag='h2'>{props.name}</Heading>
            <Paragraph margin='none'>{props.description}</Paragraph>
          </Box>
          {github}
        </Box>
      </Button>
    </Tile>
  );
};

export default class Start extends Component {

  render () {
    return (
      <Article>

        <Header size='large' pad='medium'>
          <Title responsive={false}>
            <Anchor path='/'>
              <GrommetLogo />
            </Anchor>
          </Title>
        </Header>

        <Section align='center'>
          <Headline size='large'>Showcase</Headline>
          <Paragraph size='large' align='center' margin='none'>
            Reimagine your applications in Grommet. All of these examples
            are ready to be used for your projects.
          </Paragraph>
        </Section>

        <Section pad='medium'>
          <Tiles flush={false} align='center'>
            <ProjectTile name='Ferret'
              description='System administration'
              url='https://ferret.grommet.io'
              githubUrl='https://github.com/grommet/grommet-ferret'
              image={<Box colorIndex='light-2' pad='large' />} />
            <ProjectTile name='Pathfinder'
              description='Marketing splash'
              url='https://www.hewlettpackardpathfinder.com'
              image={<Box colorIndex='light-2' pad='large' />} />
            <ProjectTile name='HPE Labs'
              description='Futuring'
              url='https://www.labs.hpe.com'
              image={<Box colorIndex='light-2' pad='large' />} />
            <ProjectTile name='PeopleFinder'
              description='Directory'
              url='http://peoplefinder.grommet.io'
              githubUrl='https://github.com/grommet/grommet-people-finder'
              image={<Box colorIndex='light-2' pad='large' />} />
          </Tiles>
        </Section>
      </Article>
    );
  }
};
