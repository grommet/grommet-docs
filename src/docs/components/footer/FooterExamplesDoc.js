// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Footer from 'grommet/components/Header';
import Paragraph from 'grommet/components/Paragraph';
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
  logo: { value: true, initial: true },
  copyright: { value: true, initial: true },
  menu: { value: true, initial: true }
};

export default class FooterExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    let logo;
    if (contents.logo) {
      logo = <Logo />;
    }

    let copyright;
    if (contents.copyright) {
      copyright = (
        <Paragraph margin='none'>&copy; 2016 Grommet Labs</Paragraph>
      );
    }

    let menu;
    if (contents.menu) {
      menu = (
        <Menu direction='row'>
          <Anchor href="#">First</Anchor>
          <Anchor href="#">Second</Anchor>
          <Anchor href="#">Third</Anchor>
        </Menu>
      );
    }

    const element = (
      <Footer justify='between' {...elementProps}>
        {logo}
        {copyright}
        {menu}
      </Footer>
    );

    return (
      <InteractiveExample contextLabel='Footer' contextPath='/docs/footer'
        justify='start' align='stretch'
        preamble={`import Header from 'grommet/components/Footer';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
