// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';

export default class Typography extends Component {

  componentDidMount () {
    var fontNameElement = this.refs.fontName;
    var fontFamily = window.getComputedStyle(fontNameElement).fontFamily;
    fontNameElement.innerHTML = fontFamily.split(',')[0];
  }

  render () {
    return (
      <DocsArticle title="Typography" colorIndex="neutral-2">
        <Box>
          <p>Applications use the <span ref="fontName">Arial</span> font.  The
          typographic scale and styles can be found in the attached assets.</p>
          <h1 className="font-sample">H1 font sample</h1>
          <h2 className="font-sample">H2 font sample</h2>
          <h3 className="font-sample">H3 font sample</h3>
          <h4 className="font-sample">H4 font sample</h4>
          <h5 className="font-sample">H5 font sample</h5>
        </Box>
      </DocsArticle>
    );
  }
};
