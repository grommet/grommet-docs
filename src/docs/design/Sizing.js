// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Header from 'grommet/components/Header';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

export default class Sizing extends Component {
  render () {
    return (
      <DocsArticle title="Sizing">

        <section>
          <p>Grommet uses T-shirt sizing concepts for both layout and
            typography.</p>
        </section>

        <section>
          <h2>General Layout</h2>
          <p>Components
          like <Anchor path="/docs/box">
          Box</Anchor>, <Anchor path="/docs/sidebar">
          Sidebar</Anchor>, <Anchor path="/docs/image">
          Image</Anchor>, <Anchor path="/docs/video">
          Video</Anchor>, <Anchor path="/docs/meter">
          Meter</Anchor>, <Anchor path="/docs/chart">
          Chart</Anchor>, and <Anchor path="/docs/distribution">
          Distribution</Anchor> use
          sizes for width stops as illustrated
          below.</p>

          <Box pad={{ between: 'medium' }}>
            <Box size={{ height: 'xsmall', width: 'xsmall' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>XSmall</strong></Label>
            </Box>
            <Box size={{ height: 'small', width: 'small' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>Small</strong></Label>
            </Box>
            <Box size={{ height: 'medium', width: 'medium' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>Medium</strong></Label>
            </Box>
            <Box size={{ height: 'large', width: 'large' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>Large</strong></Label>
            </Box>
            <Box size={{ height: 'xlarge', width: 'xlarge' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>XLarge</strong></Label>
            </Box>
            <Box size={{ height: 'xxlarge', width: 'xxlarge' }}
              justify="center" align="center" colorIndex="grey-5">
              <Label><strong>XXLarge</strong></Label>
            </Box>
          </Box>
        </section>

        <section>
          <h2>Header</h2>
          <p>Components
          like <Anchor path="/docs/header">
          Header</Anchor> use sizes for height stops as illustrated
          below.</p>

          <Box pad={{ between: 'medium' }}>
            <Header size="medium" pad="medium" colorIndex="grey-5">
              <strong>Medium</strong>
            </Header>
            <Header size="large" pad="medium" colorIndex="grey-5">
              <strong>Large</strong>
            </Header>
          </Box>
        </section>

      </DocsArticle>
    );
  }
};
