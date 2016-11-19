// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import DocsArticle from '../components/DocsArticle';

export default class Components extends Component {

  render () {
    return (
      <DocsArticle title="Components">
        <Paragraph>
          Whether it's structuring content, controlling interaction,
          or visualizing data, Grommet provides a wide range of components for
          a variety of situations. And, all components are fully responsive
          and accessible.
        </Paragraph>
      </DocsArticle>
    );
  }
};
