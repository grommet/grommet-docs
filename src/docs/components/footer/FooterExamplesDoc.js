// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Footer from 'grommet/components/Footer';
import Title from 'grommet/components/Title';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import InteractiveExample from '../../../components/InteractiveExample';
import Logo from '../../../img/Logo';

Footer.displayName = 'Footer';
Menu.displayName = 'Menu';
Paragraph.displayName = 'Paragraph';

const PROPS_SCHEMA = {
  size: { options: ['small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  logo: { value: <Title><Logo /> Title</Title>, initial: true },
  copyright: { value: (
    <Paragraph margin='none'>&copy; 2016 Grommet Labs</Paragraph>
  ), initial: true },
  menu: { value: (
    <Menu direction='row' size='small' dropAlign={{ right: 'right' }}>
      <Anchor href="#">Support</Anchor>
      <Anchor href="#">Contact</Anchor>
      <Anchor href="#">About</Anchor>
    </Menu>
  ), initial: true }
};

export default class FooterExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Footer justify='between' {...elementProps}>
        {contents.logo}
        <Box direction='row' align='center' pad={{ between: 'medium' }}>
          {contents.copyright}
          {contents.menu}
        </Box>
      </Footer>
    );

    return (
      <InteractiveExample contextLabel='Footer' contextPath='/docs/footer'
        justify='end' align='stretch'
        preamble={`import Footer from 'grommet/components/Footer';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
