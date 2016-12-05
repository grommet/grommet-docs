// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import GrommetLogo from 'grommet/components/icons/Grommet';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import AccessAccessibilityIcon from
  'grommet/components/icons/base/AccessAccessibility';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import ArubaIcon from 'grommet/components/icons/base/PlatformAruba';
import HPEIcon from 'grommet/components/icons/base/BrandHpeElementOutline';
import HPIcon from 'grommet/components/icons/base/PlatformHpi';
import Contents from './docs/Contents';
import Hands from './img/Hands.js';
import GrommetHero from './img/GrommetHero.js';

const THEMES = [
  { label: 'Grommet', Icon: GrommetIcon, url: '/' },
  { label: 'Aruba', Icon: ArubaIcon, url: '/aruba' },
  { label: 'Hewlett Packard Enterprise', Icon: HPEIcon, url: '/hpe' },
  { label: 'HP Inc.', Icon: HPIcon, url: '/hpinc'}
];

class HomeSection extends Component {
  render () {
    return (
      <Section justify='center' align='center'
        pad={{vertical: 'large'}} {...this.props}>
        {this.props.children}
      </Section>
    );
  }
};

const WhyGrommetItem = (props) => (
  <Box basis='1/4' pad={{ between: 'small', 'vertical': 'small' }}>
    <Header direction='column' pad={{ between: 'medium' }}>
      {props.icon}
      <Heading tag='h3' strong={true}>{props.heading}</Heading>
    </Header>
    {props.children}
  </Box>
);

export default class Home extends Component {

  constructor () {
    super();
    this._onScroll = this._onScroll.bind(this);
    this._onResize = this._onResize.bind(this);
    this.state = {
      mobileNavHeight: 0, mobileOffset: 0, navActive: false,
      showCodePen: false
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this._onResize);
    this._app = document.querySelector('.grommetux-app');
    this._app.addEventListener('scroll', this._onScroll);
    // delay showing the codepen to avoid interfering with logo animation
    this.timeout = setTimeout(() => this.setState({ showCodePen: true }), 2000);
    if (document) {
      document.title = 'Grommet';
    }
    this._layout();
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this._onResize);
    this._app.removeEventListener('scroll', this._onScroll);
    clearTimeout(this.timeout);
  }

  _onResize () {
    this._layout();
  }

  _layout () {
    if (this._mobileNavRef) {
      const rect = findDOMNode(this._mobileNavRef).getBoundingClientRect();
      this.setState({ mobileNavHeight: rect.height });
    }
  }

  _onScroll (event) {
    const elem = findDOMNode(this._mobileRef);
    const rect = elem.getBoundingClientRect();
    if (rect.top < 0) {
      this.setState({ mobileOffset: Math.abs(rect.top) / 12 });
    }
  }

  render () {
    const {
      mobileNavHeight, mobileOffset, navActive, showCodePen
    } = this.state;

    let articleStyle;
    if (! navActive) {
      articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
    }

    const mobileStyle = { backgroundPosition: `50% ${50 - mobileOffset}%` };

    let codePen;
    if (showCodePen) {
      codePen = (
        <iframe height='268' scrolling='no'
          src={'//codepen.io/grommet/embed/gaEGPY/?' +
            'height=268&theme-id=0&default-tab=js'}
          frameBorder='no' allowTransparency='true' allowFullScreen='true'
          style={{width: '100%'}}>See the Pen
          <a href='http://codepen.io/grommet/pen/gaEGPY/'>
            Grommet Hello World</a>
          by Grommet UX (<a href='http://codepen.io/grommet'>@grommet</a>) on
          <a href='http://codepen.io'>CodePen</a>.
        </iframe>
      );
    } else {
      codePen = <div style={{ height: 268 }} />;
    }

    const menuAnchors = Contents.map(section => (
      <Anchor key={section.path} align='center'
        path={section.plain ? section.path : `/docs/${section.path}`}>
        {section.label}
      </Anchor>
    ));

    const themes = THEMES.map(theme => {
      return (
        <Tile key={theme.label} basis="1/4" pad={{ vertical: 'large' }}>
          <Button href={theme.url}>
            <Box textAlign='center' align='center' pad={{ between: 'small' }}>
              {<theme.Icon size='large' colorIndex='plain' />}
              <span>{theme.label}</span>
            </Box>
          </Button>
        </Tile>
      );
    });

    return (
      <Article className='home' style={articleStyle}>

        <HomeSection ref={(ref) => this._mobileNavRef = ref}
          className='home-mobile' colorIndex='brand'
          pad={{ vertical: 'medium', between: 'small' }}>
          <GrommetLogo a11yTitle='Grommet Logo' invert={true} />
          <Menu primary={true} align='center'>
            {menuAnchors}
          </Menu>
        </HomeSection>

        <Header className='home-desktop' fixed={false} appCentered={true}
          pad={{ vertical: 'medium', between: 'medium' }}>
          <GrommetLogo a11yTitle='Grommet Logo' />
          <Menu direction='row' responsive={false}>
            {menuAnchors}
          </Menu>
        </Header>

        <HomeSection pad={{ vertical: 'medium' }} align='stretch'
          basis='large'>

          <Button className='home-mobile'
            onClick={() => this.setState({ navActive: ! navActive })}>
            <Box align='center' pad={{ between: 'small' }}>
              {navActive ? <UpIcon /> : <DownIcon />}
              MENU
            </Box>
          </Button>

          <Box primary={true} pad={{vertical: 'large'}} direction='column'
            justify='center' align='center' flex='grow'>

            <Box className='home-desktop' pad='large'>
              <GrommetHero />
            </Box>

            <Box className='home-mobile' align='center'
              pad={{ between: 'medium' }}>
              <GrommetLogo size='large' a11yTitle='Grommet Logo'
                a11yTitleId='hero_logo' />
              <Heading tag='h1'>grommet</Heading>
            </Box>

            <Paragraph size='large' align='center' margin='none'>
              focus on the essential experience
            </Paragraph>
          </Box>

          <Footer appCentered={true} justify='center'>
            <Menu inline={true} responsive={false} direction='row'>
              <Anchor href='http://slackin.grommet.io'
                icon={<SlackIcon colorIndex='plain'
                  a11yTitle='Grommet Slack' />}/>
              <Anchor href='https://github.com/grommet/grommet'
                icon={<GithubIcon
                  a11yTitle='Grommet Github' />}/>
              <Anchor href='https://twitter.com/grommetux'
                icon={<TwitterIcon colorIndex='plain'
                a11yTitle='Grommet Twitter' />}/>
            </Menu>
          </Footer>
        </HomeSection>

        <HomeSection ref={(ref) => this._mobileRef = ref}
          backgroundImage={'url(/img/mobile_first.jpg)'} justify='start'
          colorIndex='dark' style={mobileStyle}>
          <Box className='home__mobile' align='center'>
            <Heading tag='h2' align='center'>
              Mobile-first ready for business
            </Heading>
            <Paragraph align='center'>Think small. Starting with mobile-first
              design allows for easy app scalability to larger
              devices.</Paragraph>
            {/*}
            <Button path='/docs/learn' label='Learn' />
            {*/}
          </Box>
        </HomeSection>

        <HomeSection colorIndex='brand'>
          <Heading tag='h2'>Why Grommet?</Heading>
          <Box direction='row' full='horizontal'
            pad={{
              between: 'large', vertical: 'medium', horizontal: 'medium'
            }}>
            <WhyGrommetItem icon={<ResourcesIcon size='xlarge' />}
              heading='Comprehensive'>
              <Paragraph align='center'>
                A curated design and development platform that is more than
                just a ReactJS widget library. Grommet offers the tools
                to create amazing experiences.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon size='xlarge' />}
              heading='Flexible'>
              <Paragraph align='center'>
                Responsive web without the hassle of grid management and
                modular components loaded on-demand. Themes allow your
                brand to shine.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<AccessAccessibilityIcon size='xlarge' />}
              heading='Accessible'>
              <Box flex={true}>
                <Paragraph align='center'>
                  All users matter. Grommet provides a robust foundation
                  of accessibility features to meet web standards.
                </Paragraph>
              </Box>
              <Footer justify='center' align='center'>
                <Anchor primary={true} target='_blank'
                  href='https://vimeo.com/187068246'>Watch this</Anchor>
              </Footer>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon size='xlarge' />}
              heading='Active'>
              <Paragraph align='center'>
                Our community is open and engaged. Design resources, development
                tools, and online training provide a seamless on-boarding
                experience.
              </Paragraph>
            </WhyGrommetItem>
          </Box>
        </HomeSection>

        <HomeSection className='home-code-pen'>
          <Heading tag='h2'>Start making now</Heading>
          <Paragraph align='center'>The easiest way to learn a new tool is
            to have it done
            for you and then make it yours!</Paragraph>
          {codePen}
          <Paragraph>Need more details. We’ve got a page for that.</Paragraph>
          <Button path='/docs' label='Docs' />
        </HomeSection>

        <HomeSection colorIndex='light-2'>
          <Box direction='row'>
            <Box align='center' pad='medium'>
              <Heading tag='h2'>Together is better</Heading>
              <Paragraph align='center'>Grommet is structured to foster
                active communication
                between designers and developers in hopes of creating better
                user experience. </Paragraph>
              <Button path='/docs/about' label='About' />
            </Box>
            <Hands />
          </Box>
        </HomeSection>

        <HomeSection>
          <Heading tag='h2'>Themes</Heading>
          <Paragraph align='center'>
            Grommet is easily themeable to align with your brand.
          </Paragraph>
          <Tiles direction='row'>
            {themes}
          </Tiles>
        </HomeSection>

        <Footer align='start' primary={true} direction='column' pad='medium'
          colorIndex='light-2'>
          <Box direction='row' justify='between' align='start'
            pad={{ between: 'medium' }} size={{ width: 'full' }}>
            <Box direction='row' align='center' responsive={false}
              pad={{ between: 'small'}}>
              <GrommetLogo /> <strong>grommet</strong>
            </Box>
            <Box direction='row' pad={{ between: 'large' }}
              responsive={false}>
              <Box direction='column'>
                <Anchor path='/docs/get-started'>Start</Anchor>
                <Anchor path='/docs/learn'>Learn</Anchor>
                <Anchor path='/docs/showcase'>Showcase</Anchor>
                <Anchor path='/docs/templates'>Templates</Anchor>
                <Anchor path='/docs/components'>Components</Anchor>
              </Box>
              <Box direction='column'>
                <Anchor href='https://blog.grommet.io'>Blog</Anchor>
                <Anchor href='https://vimeo.com/grommetux'>Training</Anchor>
                <Anchor href='http://slackin.grommet.io'>Slack</Anchor>
                <Anchor href='https://github.com/grommet/grommet'>
                  Github
                </Anchor>
                <Anchor path='/docs/about'>About</Anchor>
              </Box>
              <Box direction='column'>
                <Anchor href={'https://itunes.apple.com/us/podcast/' +
                  'great-grommet-podcast/id1089989263?mt=2'}>Podcast</Anchor>
                <Anchor href='https://www.facebook.com/grommetux'>
                  Facebook
                </Anchor>
                <Anchor href='https://twitter.com/grommetux'>Twitter</Anchor>
              </Box>
            </Box>
          </Box>
          <Box direction='row' justify='between' pad={{ vertical: 'medium' }}>
            <span>
              Documentation licensed under <Anchor
                href='http://creativecommons.org/licenses/by/4.0/legalcode'>
                CC BY 4.0
              </Anchor>
            </span>
            <span>
              © 2016 Hewlett Packard Enterprise Development LP.
            </span>
          </Box>
        </Footer>

      </Article>
    );
  }

};
