// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import { announcePageLoaded } from 'grommet/utils/Announcer';
import DocsFooter from './DocsFooter';

const BASE_TITLE = 'Grommet';

export default class DocsArticle extends Component {

  componentDidMount () {
    const { context, title } = this.props;
    let docTitle;
    if (title) {
      if (context) {
        docTitle = `${context.props.children} ${title}`;
      } else {
        docTitle = title;
      }
    }
    if (docTitle) {
      document.title = `${docTitle} | ${BASE_TITLE}`;
    } else {
      document.title = BASE_TITLE;
    }
    announcePageLoaded(docTitle || BASE_TITLE);
  }

  render () {
    const { action, context, full, title, secondaryTitle } = this.props;
    let pad;
    if (! full) {
      pad = {horizontal: 'large'};
    }
    return (
      <Article className='docs-article' primary={true}>
        <Header size='large' pad={{horizontal: 'large'}} responsive={true}
          colorIndex={this.props.colorIndex} justify='between' align='center'>
          <Box direction='row' align='center' pad={{ between: 'medium' }}>
            {context}
            <Heading tag='h1' margin='none'>{title}{secondaryTitle}</Heading>
          </Box>
          {action}
        </Header>
        <Box ref='content' pad={pad}>
          {this.props.children}
        </Box>
        <DocsFooter />
      </Article>
    );
  }
};

DocsArticle.propTypes = {
  action: PropTypes.node,
  colorIndex: PropTypes.string,
  context: PropTypes.element,
  full: PropTypes.bool,
  title: PropTypes.string.isRequired,
  secondaryTitle: PropTypes.node
};
