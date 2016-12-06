// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Button from 'grommet/components/Button';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (
  <span>
    Combines Title and Menu elements responsively.
  </span>
);

export default class HeaderDoc extends Component {

  render () {
    return (
      <DocsArticle title='Header' action={
        <Button primary={true} path='/docs/header/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>

          <Box pad='medium' colorIndex='light-2'>
            <Header pad={{ horizontal: 'medium' }} justify='between'
              colorIndex='light-1'>
              <Title>Title</Title>
              <Box flex={true} justify='end' direction='row' responsive={false}>
                <Search inline={true} fill={true} placeHolder='Search'
                  size='medium' dropAlign={{ right: 'right' }}/>
                <Menu inline={false} dropAlign={{ right: 'right' }}>
                  <Anchor href='#' className='active'>First</Anchor>
                  <Anchor href='#'>Second</Anchor>
                  <Anchor href='#'>Third</Anchor>
                </Menu>
              </Box>
            </Header>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>fixed       true|false</code></dt>
            <dd>Whether the header is fixed on the page, typically so content
              below it will scroll under it.</dd>
            <dt><code>float       true|false</code></dt>
            <dd>Whether the header floats above content underneath it.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>splash      true|false</code></dt>
            <dd>Whether to render it in a style suitable for a splash
              screen.</dd>
          </dl>
          <p>Options for <Anchor path='/docs/box'>Box</Anchor> are
          also available.</p>
        </section>

      </DocsArticle>
    );
  }
};
