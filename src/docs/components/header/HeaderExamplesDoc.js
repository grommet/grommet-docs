// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  fixed: { value: true },
  float: { value: true },
  size: { options: ['small', 'medium', 'large', 'xlarge'] },
  splash: { value: true }
};

const CONTENTS_SCHEMA = {
  title: { value: <Title>Sample Title</Title>, initial: true },
  search: { value: (
    <Search inline={true} fill={true} size='medium' placeHolder='Search'
      dropAlign={{ right: 'right' }}/>
  ), initial: true },
  menu: { value: (
    <Menu icon={<ActionsIcon />} dropAlign={{right: 'right'}}>
      <Anchor href='#' className='active'>First</Anchor>
      <Anchor href='#'>Second</Anchor>
      <Anchor href='#'>Third</Anchor>
    </Menu>
  ), initial: true }
};

export default class HeaderExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Header {...elementProps}>
        {contents.title}
        <Box flex={true} justify='end' direction='row' responsive={false}>
          {contents.search}
          {contents.menu}
        </Box>
      </Header>
    );

    return (
      <InteractiveExample contextLabel='Header' contextPath='/docs/header'
        justify='start' align='stretch'
        preamble={`import Header from 'grommet/components/Header';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
