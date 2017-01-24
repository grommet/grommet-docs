// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialGithubIcon from 'grommet/components/icons/base/SocialGithub';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';

const teamMembers = [
  {
    name: 'Alan Souza',
    avatar: '/docs/img/team/grommet-peep-alan.svg',
    twitter: 'https://twitter.com/alansouzati',
    github: 'https://github.com/alansouzati'
  },
  {
    name: 'Bryan Jacqout',
    avatar: '/docs/img/team/grommet-peep-bryan.svg',
    twitter: 'https://twitter.com/bryanjacquot',
    github: 'https://github.com/bryanjacquot'
  },
  {
    name: 'Chris Carlozzi',
    avatar: '/docs/img/team/grommet-peep-chris.svg',
    twitter: 'https://twitter.com/cclozzi',
    github: 'https://github.com/L0ZZI'
  },
  {
    name: 'Eric Soderberg',
    avatar: '/docs/img/team/grommet-peep-eric.svg',
    twitter: 'https://twitter.com/ericsoderberg',
    github: 'https://github.com/ericsoderberghp'
  },
  {
    name: 'Tracy Barmore',
    avatar: '/docs/img/team/grommet-peep-tracy.svg',
    twitter: 'https://twitter.com/tracybarmore',
    github: 'https://github.com/tracybarmore'
  }
];

export default class About extends Component {

  render () {
    return (
      <DocsArticle title='About'>

        <Section>
          <Paragraph size="large">
            Grommet came to the world from four individuals inside 
            Hewlett Packard that wanted to make designing a modern 
            web experience for enterprise companies (or anyone really) 
            easy. Working day to day, the designer and developer 
            hand off is always a point of contention when it 
            comes to our productivity and ensuring a 
            unique vision is delivered to 
            customers—So that’s where we started.
          </Paragraph>
          <Paragraph size="medium">
            Our team used years of design and development experience 
            to form Grommet. Taking the knowledge from various 
            web technologies and customer focused experiences, 
            we ventured out to the community to bootstrap with 
            the best tools out there. Initially using 
            Facebook’s React.js, Node.js, and Inuit as the 
            underlying technologies, and layering on a 
            visual design system and with some secret sauce to 
            tie it all together. This provided the 
            flexibility needed to create a dynamic library of components and 
            allow Grommet to be one of the leading React UI 
            Framework out there (horn toot).
          </Paragraph>
          <Paragraph size="medium">
            We originally created Grommet to be a solution 
            for our own organization’s needs. We quickly 
            found the usefulness for a tool like this outside 
            Hewlett Packard, and taking a note from our own 
            founders, Dave and Bill, we shared it with the 
            open source community with great response. As 
            with any company, change is inevitabe, 
            and change it did…Hewlett Packard became 
            two companies. The split became proof that 
            Grommet was not only a valuable tool 
            to the community, but to our own ecosystem.
          </Paragraph>
          <Paragraph size="medium">
            Our goal is to continually enhance our 
            toolset and make better experiences easier to create. 
          </Paragraph>
        </Section>

        <Section style={{ maxWidth: 576 }}>
          <Heading tag="h2" align="center" strong pad="medium">
            Our Team
          </Heading>
          <Box
            direction="row"
            justify="center"
            align="center"
            pad={{ vertical: "medium" }}
          >
            {teamMembers.map((member, i) =>
              <Box key={i} pad="small">
                <Image size="small" src={member.avatar} />
                <Heading align="center" tag="h4">
                  {member.name}
                </Heading>
                <Menu responsive={false} inline align="center">
                  <Anchor
                    href={member.twitter} 
                    icon={
                      <SocialTwitterIcon
                        colorIndex="plain"
                        size="small"
                      />
                    } 
                  />
                  <Anchor
                    href={member.github} 
                    icon={<SocialGithubIcon size="small" />}
                  />
                </Menu>
              </Box>  
            )}
          </Box>
        </Section>

      </DocsArticle>
    );
  }
};
