// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Header = require('grommet/components/Header');
var Title = require('grommet/components/Title');
var Box = require('grommet/components/Box');
var GrommetLogo = require('grommet/components/icons/Grommet');
var Menu = require('grommet/components/Menu');
var Link = require('react-router').Link;

var DocsHeader = React.createClass({

  propTypes: {
    float: React.PropTypes.bool
  },

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <Header fixed={false} float={this.props.float} size="large"
        appCentered={true} justify="between">
        <Title responsive={false}>
          <Link to={this.context.routePrefix}>
            <Box align="center" direction="row">
              <GrommetLogo a11yTitle=""/>
            </Box>
          </Link>
        </Title>
        <Menu direction="row" responsive={false}>
          <Link id="design-link" to={this.context.routePrefix + 'design'}>Design</Link>
          <Link id="develop-link" to={this.context.routePrefix + 'develop'}>Develop</Link>
          <a href="http://blog.grommet.io" target="_blank">Blog</a>
        </Menu>
      </Header>
    );
  }
});

module.exports = DocsHeader;
