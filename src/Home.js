// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Article = require('grommet/components/Article');
var DocsHeader = require('./DocsHeader');
var Footer = require('grommet/components/Footer');
var Section = require('grommet/components/Section');
var Headline = require('grommet/components/Headline');
var Heading = require('grommet/components/Heading');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');
var Menu = require('grommet/components/Menu');
var NavButton = require('./NavButton');
var Anchor = require('grommet/components/Anchor');
var GrommetLogo = require('grommet/components/icons/Grommet');
var A11y = require('./utils/a11y');

var HomeSection = React.createClass({
  render: function () {
    return (
      <Section {...this.props}
        appCentered={true} justify="center" align="center" full={true}
        pad={{vertical: "large"}}>
        {this.props.children}
      </Section>
    );
  }
});

var Home = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    A11y.updatePageTitle();
  },

  _onRequestForBlog: function () {
    window.location = 'http://blog.grommet.io';
  },

  render: function() {
    return (
      <Article className="home" scrollStep={true} controls={true}>

        <HomeSection texture={'url(img/home_intro.png)'} primary={true}>
          <DocsHeader float={true} />
          <GrommetLogo large={true} a11yTitle=""/>
          <Heading>Grommet</Heading>
          <Headline size="small">The most advanced open source UX framework for
            enterprise applications.</Headline>
        </HomeSection>

        <HomeSection colorIndex="neutral-1">
          <Heading tag='h2' strong={true}>Create once and deliver everywhere.</Heading>
          <Headline size="small">Application experiences that look great while solving problems.</Headline>
          <Menu direction="row" justify="center" pad={{between: 'small'}}
            full="horizontal" responsive={false}>
            <NavButton label="See more examples" large={true} primary={true}
              href={this.context.routePrefix + "design"}/>
            <NavButton label="Test our demo app" large={true}
              href={this.context.routePrefix + "develop/get-started"}/>
          </Menu>
          <p></p>
          <img src="img/home_scale.png" alt="Tablet and Phone" />
        </HomeSection>

        <HomeSection colorIndex="neutral-2" texture={'url(img/home_features.png)'}>
          <Heading tag='h2' strong={true}>So little gets you sooooooo much!</Heading>
          <Headline size="small">We’ve tried it all in enterprise and we think we’ve got a good foundation.</Headline>
          <Menu direction="row" justify="center" pad={{between: 'small'}}
            full="horizontal" responsive={false}>
            <NavButton label="Our architecture" large={true} primary={true}
              href={this.context.routePrefix + "develop/architecture"}/>
            <NavButton label="How to use" large={true}
              href={this.context.routePrefix + "develop/get-started"}/>
          </Menu>
        </HomeSection>

        <HomeSection texture={'url(img/home_design.png)'}>
          <Heading tag='h2' strong={true}>Ready for your Design Workflow.</Heading>
          <Headline size="small">All the resources you could possibly need! Sticker sheets, Stencils,
            PSDs, and more.</Headline>
          <Menu direction="row" justify="center" pad={{between: 'small'}}
            full="horizontal" responsive={false}>
            <NavButton label="Start designing" large={true} primary={true}
              href={this.context.routePrefix + "design"}/>
            <NavButton label="All resources" large={true}
              href={this.context.routePrefix + "design/resources"}/>
          </Menu>
          <p>or, grab your favorite sticker sheet:</p>
          <Tiles size="small" fill={true}>
            <Tile align="center">
              <img src="img/Adobe_Illustrator.png" alt="Adobe Illustrator"/>
              <span>Adobe Illustrator</span>
            </Tile>
            <Tile align="center">
              <img src="img/Adobe_Photoshop.png" alt="Adobe Photoshop" />
              <span>Adobe Photoshop</span>
            </Tile>
            <Tile align="center">
              <img src="img/Sketch.png" alt="Sketch" />
              <span>Sketch</span>
            </Tile>
            <Tile align="center">
              <img src="img/Axure.png" alt="Axure" />
              <span>Axure</span>
            </Tile>
            <Tile align="center">
              <img src="img/Balsamiq.png" alt="Balsamiq" />
              <span>Balsamiq</span>
            </Tile>
          </Tiles>
        </HomeSection>

        <HomeSection colorIndex="neutral-3">
          <Heading tag='h2' strong={true}>Develop your next project with Grommet.</Heading>
          <Headline size="small">Let’s get an application on your local environment!</Headline>
          <Menu direction="row" justify="center" full="horizontal" responsive={false}>
            <NavButton label="Start project" large={true} primary={true}
              href={this.context.routePrefix + "develop/get-started"}/>
          </Menu>
          <p>or, just copy and paste into terminal:</p>
          <div className="console">
            <h2>Hello Grommet!</h2>
            <p>
              The easiest way to learn a new framework is by writing a simple
              application on top of it. Grommet depends
              on <a href="https://nodejs.org/"
              target="_blank">Node</a> and <a href="http://gulpjs.com/"
              target="_blank">Gulp</a>.
            </p>
            <pre><code>
              {"$ npm install -g grommet\n$ grommet init sample-app"}
            </code></pre>
          </div>
        </HomeSection>

        <HomeSection>
          <Heading tag='h2' strong={true}>Built with the best stuff.</Heading>
          <Headline size="small">The tools you know and love, all packaged together in one
            easy-to-use solution.</Headline>
          <Menu direction="row" justify="center" full="horizontal" responsive={false}>
            <NavButton label="View project on Github" large={true} primary={true}
              href="https://github.com/grommet/grommet" target="_blank"/>
          </Menu>
          <p>or, check out their sites, they have some cool stuff too...</p>
          <Tiles size="small" fill={true} flush={false}>
            <Tile>
              <a href="http://www.w3.org/TR/html5/">
                <img src="img/HTML5.png" alt="HTML5" />
              </a>
            </Tile>
            <Tile>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3">
                <img src="img/CSS3.png" alt="CSS3" />
              </a>
            </Tile>
            <Tile>
              <a href="https://nodejs.org">
                <img src="img/NodeJS.png" alt="NodeJS" />
              </a>
            </Tile>
            <Tile>
              <a href="https://github.com/inuitcss">
                <img src="img/InuitCSS.png" alt="InuitCSS" />
              </a>
            </Tile>
            <Tile>
              <a href="http://facebook.github.io/react/">
                <img src="img/reactjs.png" alt="ReactJS" />
              </a>
            </Tile>
            <Tile>
              <a href="http://gulpjs.com">
                <img src="img/gulp.png" alt="Gulp" />
              </a>
            </Tile>
            <Tile>
              <a href="http://webpack.github.io">
                <img src="img/webpack.png" alt="Webpack" />
              </a>
            </Tile>
          </Tiles>
        </HomeSection>

        <HomeSection colorIndex="neutral-2">
          <Heading tag='h2' strong={true}>Let’s keep in touch!</Heading>
          <Headline size="small">Follow us on the Grommet blog to get the latest updates.</Headline>
          <Menu direction="row" justify="center" full="horizontal" responsive={false}>
            <NavButton label="Grommet blog" large={true} primary={true}
              href="https://blog.grommet.io" target="_blank"/>
          </Menu>
          <p>We also pop our heads out at these place as well...</p>
          <Tiles fill={true}>
            <Tile>
              <a href="http://slackin.grommet.io">
                <img src="img/slack.png" alt="Slack" />
                <div>grommet</div>
              </a>
            </Tile>
            <Tile>
              <a href="https://twitter.com/grommetux">
                <img src="img/twitter.png" alt="Twitter" />
                <div>@grommetux</div>
              </a>
            </Tile>
            <Tile>
              <a href="https://www.facebook.com/grommetux">
                <img src="img/facebook.png" alt="Facebook" />
                <div>grommetux</div>
              </a>
            </Tile>
            <Tile>
              <a href="https://vimeo.com/grommetux">
                <img src="img/vimeo.png" alt="Vimeo" />
                <div>grommetux</div>
              </a>
            </Tile>
            <Tile>
              <a href="http://youtube.com">
                <img src="img/youtube.png" alt="Youtube" />
                <div>grommetux</div>
              </a>
            </Tile>
          </Tiles>
        </HomeSection>

        <Footer className="docs__footer" primary={true}
          appCentered={true} direction="column" align="center" pad="large"
          colorIndex="grey-1">
          <h3>Build your ideas with Grommet!</h3>
          <p>
            This work is licensed under the <a href="http://creativecommons.org/licenses/by/4.0/legalcode">Creative Commons Attribution 4.0 International License</a>.
          </p>
          <Menu label="Theme">
            <Anchor href="/docs/" className={this.props.theme === 'generic' ? 'active' : ''}>Grommet</Anchor>
            <Anchor href="/docs/hpe/" className={this.props.theme === 'hpe' ? 'active' : ''}>HPE</Anchor>
            <Anchor href="/docs/hpinc/" className={this.props.theme === 'hpinc' ? 'active' : ''}>HPInc</Anchor>
            <Anchor href="/docs/aruba/" className={this.props.theme === 'aruba' ? 'active' : ''}>Aruba</Anchor>
          </Menu>
        </Footer>

      </Article>
    );
  }

});

module.exports = Home;
