// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Header = require('grommet/components/Header');
var Title = require('grommet/components/Title');
var Box = require('grommet/components/Box');
var GrommetLogo = require('grommet/components/icons/Grommet');
var Menu = require('grommet/components/Menu');
var Anchor = require('grommet/components/Anchor');
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
      <Header fixed={false} float={this.props.float}
        appCentered={true} justify="between">
        <Title responsive={false}>
          <Link to={this.context.routePrefix}>
            <Box align="center" direction="row">
              <GrommetLogo a11yTitle=""/>
            </Box>
          </Link>
        </Title>
        <Menu direction="row" responsive={true} dropAlign={{right: 'right'}}>
          <Link id="design-link" to={this.context.routePrefix + 'design'}>
            <Anchor tag="span">Design</Anchor>
          </Link>
          <Link id="develop-link" to={this.context.routePrefix + 'develop'}>
            <Anchor tag="span">Develop</Anchor>
          </Link>
          <Anchor href="http://blog.grommet.io" target="_blank">Blog</Anchor>
        </Menu>
      </Header>
    );
  }
});

module.exports = DocsHeader;
