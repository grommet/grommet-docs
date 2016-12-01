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
  header: { value: (
    <Header pad='medium' justify='between'><Title>Title</Title></Header>
  ), initial: true },
  menu: { value: (
    <Box flex='grow' justify='start'>
      <Menu primary={true}>
        <Anchor href='#' className='active'>First</Anchor>
        <Anchor href='#'>Second</Anchor>
        <Anchor href='#'>Third</Anchor>
      </Menu>
    </Box>
  ), initial: true },
  footer: { value: (
    <Footer pad='medium'><Button icon={<UserIcon />} /></Footer>
  ), initial: true }
};

export default class SidebarExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Sidebar colorIndex='neutral-1' {...elementProps}>
        {contents.header}
        {contents.menu}
        {contents.footer}
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
