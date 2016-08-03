// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Box from 'grommet/components/Box';
import DocsFooter from './DocsFooter';

//hjjs configuration
const hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

const DEFAULT_TITLE = 'Grommet';

export function updatePageTitle (title) {
  if (document) {
    if (title) {
      document.title = `${title} | Grommet`;
    } else {
      document.title = DEFAULT_TITLE;
    }
  }
};

export default class DocsArticle extends Component {

  componentDidMount () {
    updatePageTitle(this.props.title);
    this._highlightCode();
  }

  componentDidUpdate () {
    this._highlightCode();
  }

  _highlightCode () {
    const nodes = document.querySelectorAll('pre code');
    for (let i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  }

  render () {
    const { full } = this.props;
    let pad;
    if (! full) {
      pad = {horizontal: 'large'};
    }
    return (
      <Article primary={true}>
        <Header size="large" pad={{horizontal: 'large'}}
          colorIndex={this.props.colorIndex}>
          <h1>{this.props.title}</h1>
        </Header>
        <Box pad={pad}>
          {this.props.children}
        </Box>
        <DocsFooter />
      </Article>
    );
  }
};

DocsArticle.propTypes = {
  colorIndex: PropTypes.string,
  full: PropTypes.bool,
  title: PropTypes.string.isRequired
};

DocsArticle.defaultProps = {
  colorIndex: 'neutral-1'
};
