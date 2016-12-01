// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Paragraph from 'grommet/components/Paragraph';

export default class About extends Component {

  render () {
    return (
      <DocsArticle title='About'>

        <section>
          <Paragraph>
            Grommet is about mixing fresh, pragmatic user interface design
            with an implementation library and resources in an open
            community.
          </Paragraph>
        </section>

      </DocsArticle>
    );
  }
};
