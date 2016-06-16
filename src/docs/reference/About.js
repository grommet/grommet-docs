// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import TBD from 'grommet/components/TBD';

export default class About extends Component {

  render () {
    return (
      <DocsArticle title="About" colorIndex="neutral-4">

        <TBD />

      </DocsArticle>
    );
  }
};
