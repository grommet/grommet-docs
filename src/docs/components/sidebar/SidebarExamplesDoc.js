// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import UserIcon from 'grommet/components/icons/base/User';
import InteractiveExample from '../../../components/InteractiveExample';

Sidebar.displayName = 'Sidebar';
Header.displayName = 'Header';

const PROPS_SCHEMA = {
  size: { options: ['xsmall', 'small', 'medium', 'large'] },
  fixed: { value: true },
  full: { value: true }
};

const CONTENTS_SCHEMA = {
  header: { value: true, initial: true },
  menu: { value: true, initial: true },
  footer: { value: true, initial: true }
};

export default class SidebarExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    let header;
    if (contents.header) {
      header = (
        <Header pad='medium' justify='between'>
          <Title>Title</Title>
        </Header>
      );
    }

    let menu;
    if (contents.menu) {
      menu = (
        <Box flex='grow' justify='start'>
          <Menu primary={true}>
            <Anchor href='#' className='active'>First</Anchor>
            <Anchor href='#'>Second</Anchor>
            <Anchor href='#'>Third</Anchor>
          </Menu>
        </Box>
      );
    }

    let footer;
    if (contents.footer) {
      footer = (
        <Footer pad='medium'>
          <Button icon={<UserIcon />} />
        </Footer>
      );
    }

    const element = (
      <Sidebar colorIndex='neutral-1' {...elementProps}>
        {header}
        {menu}
        {footer}
      </Sidebar>
    );

    return (
      <InteractiveExample contextLabel='Sidebar' contextPath='/docs/sidebar'
        justify='start' align='stretch'
        preamble={`import Sidebar from 'grommet/components/Sidebar';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
