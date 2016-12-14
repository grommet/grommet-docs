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
import Animate from 'grommet/components/Animate';
import GrommetLogo from 'grommet/components/icons/Grommet';
import UpIcon from 'grommet/components/icons/base/Up';
import DownIcon from 'grommet/components/icons/base/Down';
import SlackIcon from 'grommet/components/icons/base/SocialSlack';
import GithubIcon from 'grommet/components/icons/base/SocialGithub';
import FacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import TwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import ResourcesIcon from 'grommet/components/icons/base/Resources';
import AccessAccessibilityIcon from
  'grommet/components/icons/base/AccessAccessibility';
import ConfigureIcon from 'grommet/components/icons/base/Configure';
import RunIcon from 'grommet/components/icons/base/Run';
import GrommetIcon from 'grommet/components/icons/base/BrandGrommetOutline';
import ArubaIcon from 'grommet/components/icons/base/PlatformAruba';
import HPEIcon from 'grommet/components/icons/base/BrandHpeStack';
import HPIcon from 'grommet/components/icons/base/PlatformHpi';
import Contents from './docs/Contents';
import Hands from './img/Hands.js';
import GrommetHero from './img/GrommetHero.js';
import ReactGrommetSketch from './img/ReactGrommetSketch.js';

const THEMES = [
  { Icon: HPEIcon, url: '/hpe',
    size: 'xlarge'
  },
  { label: 'grommet', Icon: GrommetIcon, url: '/', size: 'large' },
  { Icon: ArubaIcon, url: '/aruba', size: 'xlarge' },
  { Icon: HPIcon, url: '/hpinc', size: 'large' }
];

class HomeSection extends Component {
  render () {
    const { animate, children, ...props } = this.props;
    let contents = (
      <Section justify='center' align='center'
        pad={{vertical: 'large'}} {...props}>
        {children}
      </Section>
    );
    if (animate) {
      contents = (
        <Animate visible='scroll' keep={true}
          enter={{ animation: 'fade', duration: 1000, delay: 100 }}>
          {contents}
        </Animate>
      );
    }
    return contents;
  }
};

const WhyGrommetItem = (props) => (
  <Tile basis='medium' pad='small'>
    <Animate visible='scroll' keep={true}
      enter={{ animation: 'slide-up', duration: 1000,
        delay: (props.delay || 100) }}>
      <Button href={props.href} path={props.path}>
        <Box pad={{ between: 'small', vertical: 'small' }}>
          <Header direction='column' pad={{ between: 'medium' }}>
            {props.icon}
            <Heading tag='h3' margin='none'>
              {props.heading}
            </Heading>
          </Header>
          <Box pad={{ horizontal: 'medium' }}>
            {props.children}
          </Box>
        </Box>
      </Button>
    </Animate>
  </Tile>
);

export default class Home extends Component {

  constructor () {
    super();
    this._onScroll = this._onScroll.bind(this);
    this._onResize = this._onResize.bind(this);
    this.state = {
      mobileNavHeight: 0, mobileOffset: 0, navActive: false
    };
  }

  componentDidMount () {
    window.addEventListener('resize', this._onResize);
    this._app = document.querySelector('.grommetux-app');
    this._app.addEventListener('scroll', this._onScroll);
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
      mobileNavHeight, mobileOffset, navActive
    } = this.state;

    let articleStyle, footerStyle;
    if (! navActive) {
      articleStyle = { transform: `translateY(-${mobileNavHeight}px)` };
      footerStyle = { marginBottom: `-${mobileNavHeight}px`};
    }

    const mobileStyle = { backgroundPosition: `50% ${50 - mobileOffset}%` };

    const codePen = (
      <iframe height='400' scrolling='no' title='Hello World'
        src={'//codepen.io/grommet/embed/preview/gaEGPY/' +
          '?height=400&theme-id=light&default-tab=result&embed-version=2'}
        frameBorder='no' allowTransparency='true' allowFullScreen='true'
        style={{width: '100%'}} />
    );

    const menuAnchors = Contents.map(section => (
      <Anchor key={section.path} align='center'
        path={section.plain ? section.path : `/docs/${section.path}`}>
        {section.label}
      </Anchor>
    ));

    const themes = THEMES.map((theme, index) => {
      let labelNode;
      if (theme.label) {
        labelNode = (
          <Heading tag='h4' align='center' strong={true} margin='none'>
            {theme.label}
          </Heading>
        );
      }
      return (
        <Tile key={theme.url} pad='large'>
          <Animate visible='scroll' keep={true}
            enter={{ animation: 'slide-up', duration: 1000,
              delay: (100 + (200 * index))}}>
            <Button href={theme.url}>
              <Box direction='row' align='center' justify='center'
                responsive={false} pad={{ between: 'small' }}>
                <theme.Icon size={theme.size} colorIndex='plain' />
                {labelNode}
              </Box>
            </Button>
          </Animate>
        </Tile>
      );
    });

    return (
      <Article className='home' style={articleStyle}>

        <HomeSection ref={(ref) => this._mobileNavRef = ref}
          className='home-mobile' colorIndex='brand'
          pad={{ vertical: 'large', between: 'small' }}>
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
            <Anchor href='https://github.com/grommet/grommet'
              icon={<GithubIcon colorIndex='plain'
              a11yTitle='Grommet Github' />}/>
            <Anchor href='http://slackin.grommet.io'
              icon={<SlackIcon colorIndex='plain'
              a11yTitle='Grommet Slack' />}/>
          </Footer>
        </HomeSection>

        <HomeSection colorIndex='light-2' animate={true}>
          <Box pad='large'>
            <ReactGrommetSketch />
          </Box>
          <Box align='center' pad='large'>
            <Heading tag='h2' align='center' strong={true}>
              A design system made for React.js
            </Heading>

            <Paragraph align='center'>
              Grommet provides all
              the <Anchor path='/docs/learn'>
                guidance
              </Anchor>, <Anchor path='/docs/components'>
                components
              </Anchor>, and <Anchor path='/docs/resources'>
                design resources
              </Anchor> you need
              to take your ideas from concept to a real application.
              We use <Anchor href='https://facebook.github.io/react/'>
                React
              </Anchor> and <Anchor href='https://www.sketchapp.com/'>
                Sketch
              </Anchor> to
              help you on your journey.
            </Paragraph>

            <Button path='/docs/start' label='Start' />
          </Box>
        </HomeSection>

        <HomeSection animate={true}>
          <Heading tag='h2' strong={true}>Start making now</Heading>
          <Paragraph align='center' margin='none'>
            The easiest way to learn a new tool is
            to have it done
            for you and then make it yours!
          </Paragraph>
          <Box pad='medium' size='large'>
            {codePen}
          </Box>
          <Footer pad='medium' justify='center' direction='column'>
            <Paragraph>
              Need more details? We’ve got a page for that.
            </Paragraph>
            <Button path='/docs/components' label='Components' />
          </Footer>
        </HomeSection>

        <HomeSection separator='top' animate={true}>
          <Heading tag='h2' strong={true}>What makes us great</Heading>
          <Paragraph align='center'>
            Grommet is designed to make your design and dev process easier
            by baking in the stuff that is expected.
          </Paragraph>
          <Tiles justify='center'
            pad={{ vertical: 'medium' }}>
            <WhyGrommetItem icon={<ResourcesIcon colorIndex='brand'
              size='large' />}
              heading='Comprehensive' path='/docs/components' delay={100}>
              <Paragraph align='center' margin='none'>
                A curated design and development platform that is more than
                just a ReactJS widget library. Grommet offers the tools
                to create amazing experiences.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<RunIcon colorIndex='brand'
              size='large' />}
              heading='Active' href='http://slackin.grommet.io' delay={300}>
              <Paragraph align='center' margin='none'>
                Our community is open and engaged. Design resources,
                development tools, and online training provide a seamless
                onboarding experience.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<ConfigureIcon colorIndex='brand'
              size='large' />}
              heading='Flexible' path='/docs/learn' delay={500}>
              <Paragraph align='center' margin='none'>
                Responsive web without the hassle of grid management and
                modular components loaded on demand. Themes allow your
                brand to shine.
              </Paragraph>
            </WhyGrommetItem>
            <WhyGrommetItem icon={<AccessAccessibilityIcon colorIndex='brand'
              size='large' />}
              heading='Accessible' href='https://vimeo.com/187068246'
              delay={700}>
              <Paragraph align='center' margin='none'>
                All users matter. Grommet provides a robust foundation
                of accessibility features to meet web standards.
              </Paragraph>
            </WhyGrommetItem>
          </Tiles>
        </HomeSection>

        <HomeSection align='stretch' animate={true}>
          <Box pad='medium' align='center' style={{ overflow: 'hidden' }}>
            <Animate visible='scroll' keep={true}
              enter={{ animation: 'jiggle', duration: 2000, delay: 100 }}>
              <Hands />
            </Animate>
          </Box>
          <Box pad='medium' align='center'>
            <Heading tag='h2' strong={true}>Together is better</Heading>
            <Paragraph align='center' margin='none'>
              Grommet is structured to foster active communication
              between designers and developers in hopes of creating better
              user experiences.
            </Paragraph>
            <Footer pad='medium' justify='center'>
              <Button path='/docs/about' label='About' />
            </Footer>
          </Box>
        </HomeSection>

        <HomeSection colorIndex='light-2' animate={true}>
          <Heading tag='h2' align='center' strong={true}>
            Change themes on the fly
          </Heading>
          <Paragraph align='center' margin='none'>
            Grommet is easily themeable for alignment with your brand.
            Select a theme below to see a preview...
          </Paragraph>
          <Tiles align='center' justify='center' responsive={false}
            pad='large'>
            {themes}
          </Tiles>
        </HomeSection>

        <HomeSection ref={(ref) => this._mobileRef = ref}
          backgroundImage={'url(/img/mobile_first.png)'} justify='start'
          colorIndex='dark' style={mobileStyle} animate={true}>
          <Box className='home__mobile' align='center'>
            <Heading tag='h2' align='center' strong={true}>
              What will you create
            </Heading>
            <Paragraph align='center'>
              Grommet is used by a variety of companies.
              Check out some examples that we think you’ll love.
            </Paragraph>
            <Button path='/docs/showcase' label='Showcase' />
          </Box>
        </HomeSection>

        <Animate visible='scroll' keep={true}
          enter={{ animation: 'fade', duration: 1000, delay: 100 }}>
          <Footer align='stretch' primary={true} direction='column'
            colorIndex='grey-1' style={footerStyle}>
            <Box direction='row' justify='between' pad='medium'>
              <Box direction='row' align='center' pad={{ between: 'medium' }}
                responsive={false}>
                <GrommetLogo />
                <Anchor path='/docs/about'>About</Anchor>
                <Anchor href='https://blog.grommet.io'>Blog</Anchor>
                <Anchor href='https://vimeo.com/grommetux'>Training</Anchor>
                <Anchor href={'https://itunes.apple.com/us/podcast/' +
                  'great-grommet-podcast/id1089989263?mt=2'}>Podcast</Anchor>
              </Box>
              <Box direction='row' responsive={false}
                pad={{ vertical: 'small' }}>
                <Anchor href='https://twitter.com/grommetux'
                  icon={<TwitterIcon a11yTitle='Grommet Twitter' />}/>
                <Anchor href='https://www.facebook.com/grommetux/'
                  icon={<FacebookIcon a11yTitle='Grommet Facebook' />}/>
              </Box>
            </Box>
            <Box direction='row'
              pad={{ horizontal: 'medium', vertical: 'large' }}>
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
        </Animate>

      </Article>
    );
  }

};
