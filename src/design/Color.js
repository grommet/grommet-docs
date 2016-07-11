// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../DocsArticle';
import { updatePageTitle } from '../utils/a11y';

export default class Color extends Component {
  componentDidMount () {
    updatePageTitle('Color');
  }

  render () {
    return (
      <DocsArticle title="Color" colorIndex="neutral-2">
        <Box>
          <div className="generic-branding">
            <p>These are the generic, or un-branded, colors. It is expected that
              applications will define their own brand color scheme.</p>
          </div>
          <div className="hpe-branding">
          <p>The Hewlett Packard Enterprise color palette is utilized in applications for the
          most part. However there are variances in the palette that apply specifically
          to applications.</p>

          <p>For application design the Hewlett Packard Enterprise orange/salmon accent color
          is modified to be more red so it can be used as a status indicator and it should
          not be used as an accent color in non-status contexts.</p>

          <p>Also, dark yellow color is added for use as a warning status color.</p>
          </div>

          <h3>Primary</h3>
          <span className="swatch brand"></span>
          <h3>Accent</h3>
          <span className="swatch accent-1"></span>
          <span className="swatch accent-2"></span>
          <span className="swatch accent-3"></span>
          <h3>Neutral</h3>
          <span className="swatch neutral-1"></span>
          <span className="swatch neutral-2"></span>
          <span className="swatch neutral-3"></span>
          <span className="swatch neutral-4"></span>
          <span className="swatch neutral-5"></span>

          <h3>Status</h3>
          <p>These colors are used to convey status.</p>
          <span className="swatch status-error"></span>
          <span className="swatch status-warning"></span>
          <span className="swatch status-ok"></span>
          <span className="swatch status-unknown"></span>

          <h3>Graph</h3>
          <p>These colors are used to draw graphs and charts.</p>
          <span className="swatch graph-1"></span>
          <span className="swatch graph-2"></span>
          <span className="swatch graph-3"></span>
          <span className="swatch graph-4"></span>
          <span className="swatch graph-5"></span>
          <span className="swatch graph-6"></span>
        </Box>
      </DocsArticle>
    );
  }
};
