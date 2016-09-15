// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

export default class Sizing extends Component {
  render () {
    return (
      <DocsArticle title="Sizing" colorIndex="neutral-2">

        <section>
          <p>Grommet sizes things using T-shirt sizing.
          Components like <NavAnchor path="/docs/box">Box</NavAnchor> use
          sizes for width and height stops as illustrated
          below.</p>
        </section>

        <section>
          <Box pad={{ between: 'medium' }}>
            <Box size={{ height: 'xsmall', width: 'xsmall' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XSmall</Label>
            </Box>
            <Box size={{ height: 'small', width: 'small' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Small</Label>
            </Box>
            <Box size={{ height: 'medium', width: 'medium' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Medium</Label>
            </Box>
            <Box size={{ height: 'large', width: 'large' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>Large</Label>
            </Box>
            <Box size={{ height: 'xlarge', width: 'xlarge' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XLarge</Label>
            </Box>
            <Box size={{ height: 'xxlarge', width: 'xxlarge' }}
              justify="center" align="center" colorIndex="grey-4">
              <Label>XXLarge</Label>
            </Box>
          </Box>
        </section>

      </DocsArticle>
    );
  }
};
