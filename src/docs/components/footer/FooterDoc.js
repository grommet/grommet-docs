// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';
import Logo from '../../../img/Logo';

export const DESC = (
  <span>
    Put things at the bottom.
  </span>
);

export default class FooterDoc extends Component {

  render () {
    return (
      <DocsArticle title='Footer' action={
        <Button primary={true} path='/docs/footer/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>

          <Box pad='medium' colorIndex='light-2'>
            <Footer pad={{ horizontal: 'medium' }} justify='between'
              colorIndex='light-1'>
              <Logo />
              <Paragraph>&copy; 2016 Grommet Labs</Paragraph>
              <Menu direction='row' size='small' dropAlign={{ right: 'right' }}>
                <Anchor href='#'>First</Anchor>
                <Anchor href='#'>Second</Anchor>
                <Anchor href='#'>Third</Anchor>
              </Menu>
            </Footer>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>primary     true|false</code></dt>
            <dd>Whether it should be treated as main footer or not.
              Used for Accessibility.</dd>
          </dl>
          <p>Options for <Anchor path='/docs/box'>Box</Anchor> are
          also available.</p>
        </section>

      </DocsArticle>
    );
  }
};
