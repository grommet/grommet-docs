// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Article = require('grommet/components/Article');
var Header = require('grommet/components/Header');
var Box = require('grommet/components/Box');
var DocsFooter = require('./DocsFooter');

//hjjs configuration
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var DocsArticle = React.createClass({

  propTypes: {
    colorIndex: React.PropTypes.string,
    title: React.PropTypes.string.isRequired
  },

  getDefaultProps: function () {
    return {colorIndex: 'neutral-1'};
  },

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  _highlightCode: function () {
    var nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  render: function() {
    return (
      <Article primary={true}>
        <Header size="large" pad={{horizontal: 'large'}}
          colorIndex={this.props.colorIndex}>
          <h1>{this.props.title}</h1>
        </Header>
        <Box pad={{horizontal: 'large', vertical: 'medium'}}>
          {this.props.children}
        </Box>
        <DocsFooter />
      </Article>
    );
  }
});

module.exports = DocsArticle;
