// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../DocsArticle';
import { updatePageTitle } from '../utils/a11y';

export default class Accessibility extends Component {
  componentDidMount () {
    updatePageTitle('Accessibility');
  }

  render () {
    return (
      <DocsArticle title="Accessibility" colorIndex="neutral-1">
        <Box>
          <p>Products that are accessible to all users are good for people,
          products, and business.  All users should be empowered with access
          and the ability to have a pleasant experience with your application.</p>

          <p>We follow the <a href="http://www.w3.org/TR/WCAG20/">Web Content
          Accessibility Guidelines (WCAG)</a>.  By following this style guide
          and utilizing the accompanying implementation platform, you will be
          well on your way to satisfying the WCAG recommendations.</p>
        </Box>
      </DocsArticle>
    );
  }
};
