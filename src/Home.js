// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import GrommetLogo from 'grommet/components/icons/Grommet';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import Hands from './img/Hands.js';

const HomeSection = (props) => (
  <Section
    appCentered={true} justify="center" align="center" full={true}
    textCentered={true} pad={{vertical: "large"}} {...props}>
    {props.children}
  </Section>
);

export default class Home extends Component {

  render () {
    return (
      <Article className="home">

        <HomeSection primary={true}>
          <Header fixed={false} float={true} appCentered={true} justify="center">
            <Menu direction="row" responsive={false} dropAlign={{left: 'left'}}>
              <Link to="/docs/develop/get-started">
                <Anchor tag="span">Start</Anchor>
              </Link>
              <Link to="/docs">
                <Anchor tag="span">Learn</Anchor>
              </Link>
              <Link to="/docs/develop">
                <Anchor tag="span">Docs</Anchor>
              </Link>
            </Menu>
          </Header>
          <GrommetLogo size="xlarge" a11yTitle=""/>
          <Heading tag="h1" margin="medium">grommet</Heading>
          <Headline size="small" align="center">
            focus on the essential experience
          </Headline>
          <Footer fixed={false} float={true} appCentered={true} justify="center">
            <Menu inline={true} responsive={false} direction="row">
              <Anchor href="http://slackin.grommet.io" icon={<SlackIcon />}/>
              <Anchor href="https://github.com/grommet/grommet" icon={<GithubIcon />}/>
              <Anchor href="https://twitter.com/grommetux" icon={<TwitterIcon />}/>
            </Menu>
          </Footer>
        </HomeSection>

        <HomeSection backgroundImage={'url(img/mobile_first.jpg)'} justify="start"
          colorIndex="dark">
          <Heading tag="h2">Mobile-first ready for business</Heading>
          <Paragraph align="center">Think small. Starting with mobile-first
            design allows for easy app scalability to larger devices.</Paragraph>
          <Button href={`${this.context.routePrefix}learn`} label="Learn" />
        </HomeSection>

        <HomeSection justify="start" colorIndex="neutral-1">
          <Heading tag="h2">Start making now</Heading>
          <Paragraph align="center">The easiest way to learn a new tool is to have it done
            for you and then make it yours!</Paragraph>
          <iframe height='268' scrolling='no'
            src='//codepen.io/grommet/embed/gaEGPY/?height=268&theme-id=0&default-tab=result'
            frameBorder='no' allowTransparency='true' allowFullScreen='true'
            style={{width: '100%'}}>See the Pen
            <a href='http://codepen.io/grommet/pen/gaEGPY/'>Grommet Hello World</a>
            by Grommet UX (<a href='http://codepen.io/grommet'>@grommet</a>) on
            <a href='http://codepen.io'>CodePen</a>.
          </iframe>
          <Paragraph>Need more details. We’ve got a page for that.</Paragraph>
          <Button href={`${this.context.routePrefix}docs`} label="Docs" />
        </HomeSection>

        <HomeSection>
          <Box direction="row">
            <Box align="center">
              <Heading tag="h2">Together is better</Heading>
              <Paragraph align="center">Grommet is structured to foster active communication
                between designers and developers in hopes of creating better
                user experience. </Paragraph>
              <Button href={`${this.context.routePrefix}about`} label="About" />
            </Box>
            <Hands />
          </Box>
        </HomeSection>

        <Footer primary={true} appCentered={true} direction="column">
          <Box direction="row" justify="between" align="start"
            pad={{ between: 'medium'}}>
            <Box direction="row" align="center" responsive={false}
              pad={{ between: 'small'}}>
              <GrommetLogo /> <strong>grommet</strong>
            </Box>
            <Box direction="row" pad={{ between: 'large' }}>
              <Box direction="column">
                <Link to="/docs/develop/get-started">Start</Link>
                <span>Learn</span>
                <Link to="/docs/develop">Docs</Link>
              </Box>
              <Box direction="column">
                <Anchor href="https://blog.grommet.io">Blog</Anchor>
                <Anchor href="https://vimeo.com/grommetux">Training</Anchor>
                <span>About</span>
              </Box>
              <Box direction="column">
                <Anchor href="">Podcast</Anchor>
                <Anchor href="http://slackin.grommet.io">Slack</Anchor>
                <Anchor href="https://github.com/grommet/grommet">Github</Anchor>
              </Box>
              <Box direction="column">
                <Anchor href="https://www.facebook.com/grommetux">Facebook</Anchor>
                <Anchor href="https://twitter.com/grommetux">Twitter</Anchor>
              </Box>
            </Box>
          </Box>
          <Box direction="row" justify="between">
            <Paragraph>
              Documentation licensed under <Anchor
                href="http://creativecommons.org/licenses/by/4.0/legalcode">
                CC BY 4.0
              </Anchor>
            </Paragraph>
            <Paragraph>
              © 2016 Hewlett Packard Enterprise Development LP.
            </Paragraph>
          </Box>
        </Footer>

      </Article>
    );
  }

};

Home.contextTypes = {
  routePrefix: PropTypes.string.isRequired
};
