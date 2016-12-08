// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

const BoxPad = (props) => (
  <Box pad={props.pad} size={{ height: 'small', width: 'small' }}
    colorIndex="grey-5">
    <Box colorIndex="light-2" flex={true} justify="center" align="center">
      <Label><strong>{props.pad}</strong></Label>
    </Box>
  </Box>
);

export default class Padding extends Component {

  render () {
    return (
      <DocsArticle title="Padding">
        <section>
          <p>Padding around elements is based off of multiples and fractions of
            24px. This value is used for line height, sizing, padding,
            margins on objects, etc. Many components expose padding via
            a <code>pad</code> property.</p>
        </section>

        <section>
          <p>Components
          like <Anchor path="/docs/box">
          Box</Anchor>, <Anchor path="/docs/header">
          Header</Anchor>, <Anchor path="/docs/footer">
          Footer</Anchor>, <Anchor path="/docs/form">
          Form</Anchor>, <Anchor path="/docs/sidebar">
          Sidebar</Anchor>, and <Anchor path="/docs/menu">
          Menu</Anchor> use pad stops as illustrated below.</p>

          <Box direction="row" wrap={true} pad={{ between: 'medium' }}>
            <BoxPad pad="none" />
            <BoxPad pad="small" />
            <BoxPad pad="medium" />
            <BoxPad pad="large" />
          </Box>
        </section>

        <section>
          <p>
            The <code>pad</code> attribute can be set to 
            <code>small</code>, <code>medium</code>, <code>large</code>, 
            or an object which just affects the padding of components 
            horizontally or vertically,
            or in-between multiple 
            components: <code>{"{ horizontal: none|small|medium|large, " 
              + "vertical: none|small|medium|large }"}</code>. Padding
            set using <code>between</code> only affects components
            based on the direction set (adds horizontal padding
            between components for <code>row</code>, or vertical
            padding between components for <code>column</code>).
          </p>
        </section>

      </DocsArticle>
    );
  }
};
