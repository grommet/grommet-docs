// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../DocsArticle';
import { updatePageTitle } from '../utils/a11y';

export default class Text extends Component {
  componentDidMount () {
    updatePageTitle('Text');
  }

  render () {
    return (
      <DocsArticle title="Text" colorIndex="neutral-2">
        <Box>
          <p>Text and Typography is arguably one of the most important elements of
          style to get right. Ironically, when done well the text styles and typography
          disappear from the users consciousness and they simply enjoy the beautiful
          and fluid experience. However, when done poorly, the typography can be a
          reason an application just doesn’t feel right. Everything from displeasing
          aesthetics, to unclear organization of information, to physical eye strain
          can result from an application with insufficient attention to this detail.</p>
        </Box>
      </DocsArticle>
    );
  }
};
