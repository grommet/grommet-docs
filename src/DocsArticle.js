// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Article = require('grommet/components/Article');
var Header = require('grommet/components/Header');
var Box = require('grommet/components/Box');
var DocsFooter = require('./DocsFooter');

var DocsArticle = React.createClass({

  propTypes: {
    colorIndex: React.PropTypes.string,
    title: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {colorIndex: 'neutral-1'};
  },

  render: function() {
    return (
      <Article primary={true}>
        <Header size="large" pad={{horizontal: 'large'}}
          colorIndex={this.props.colorIndex}>
          <h1>{this.props.title}</h1>
        </Header>
        <Box pad={{horizontal: 'large'}}>
          {this.props.children}
        </Box>
        <DocsFooter />
      </Article>
    );
  }
});

module.exports = DocsArticle;
