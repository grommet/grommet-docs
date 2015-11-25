// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var ReactDOM = require('react-dom');

var DocsHtmlArticle = {
  wrap: function(Component, colorIndex) {

    return React.createClass({

      componentDidMount: function () {
        // decorate the article and header with the classes we need to align with <Article> and <Header>
        var article = ReactDOM.findDOMNode(this.refs.article);
        article.classList.add('box', 'box--direction-column', 'box--responsive',
          'box--pad-none', 'article');
        var header = article.querySelectorAll('header')[0];
        if (header) {
          header.classList.add('box', 'box--direction-row', 'box--align-center',
            'box--pad-horizontal-large', 'background-color-index-' + colorIndex, 'header', 'header--large');
        }
        var sections = article.querySelectorAll('section');
        for (var i=0; i<sections.length; i++) {
          sections[i].classList.add('box', 'box--direction-column',
            'box--pad-horizontal-large', 'section');
        }
      },

      render: function() {
        return React.createElement(Component, {ref: 'article'});
      }
    });
  }
};

module.exports = DocsHtmlArticle;
