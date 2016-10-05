// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Link } from 'react-router';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import GrommetLogo from 'grommet/components/icons/Grommet';
import DocsMenu from './DocsMenu';

export default class DocsSplit extends Component {

  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onMenuOpen = this._onMenuOpen.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);
    this.state = {showMenu: true, responsive: 'multiple'};
  }

  componentDidMount () {
    this._scrollMenu();
  }

  componentDidUpdate () {
    if (this.refs.doc) {
      findDOMNode(this.refs.doc).scrollIntoView();
    }
  }

  _scrollMenu () {
    if (this.refs.doc) {
      const path = window.location.pathname;
      const anchor = document.querySelector(`[href="${path}"]`);
      if (anchor) {
        const sidebar = findDOMNode(this.refs.sidebar);
        const anchorRect = anchor.getBoundingClientRect();
        const sidebarRect = sidebar.getBoundingClientRect();
        // Divide by 3 to put it towards the top but still in the middle
        sidebar.scrollTop =
          (anchorRect.top - sidebarRect.top) - (window.innerHeight / 3);
      }
    }
  }

  _onResponsive (responsive) {
    this.setState({responsive: responsive});
    if ('multiple' === responsive) {
      this.setState({showMenu: true});
    }
    if ('single' === responsive) {
      this.setState({showMenu: false});
    }
  }

  _onMenuOpen () {
    this.setState({showMenu: true});
  }

  _onMenuClick () {
    if ('single' === this.state.responsive) {
      this.setState({showMenu: false});
    }
    this.refs.doc.scrollTop = 0;
  }

  _renderTitle () {
    return (
      <Title responsive={false}>
        <Link to="/">
          <Box align="center" direction="row">
            <GrommetLogo />
          </Box>
        </Link>
      </Title>
    );
  }

  _renderMenu () {
    const title = this._renderTitle();
    let closer;
    if ('single' === this.state.responsive) {
      closer = (
        <Button icon={<CloseIcon />} onClick={this._onMenuClick} />
      );
    }
    return (
      <Sidebar ref="sidebar" size="small" separator="right" full={false}>
        <Header justify="between" size="large" pad={{horizontal: 'medium'}}>
          {title}
          {closer}
        </Header>
        <DocsMenu onClick={this._onMenuClick} />
      </Sidebar>
    );
  }

  _renderDoc () {
    let header;
    if ('single' === this.state.responsive) {
      const title = this._renderTitle();
      header = (
        <Header justify="between" size="large" pad={{horizontal: 'large'}}>
          {title}
          <Menu direction="row" responsive={false}>
            <a href="#" onClick={this._onMenuOpen}>Contents</a>
          </Menu>
        </Header>
      );
    }
    return (
      <div ref="doc" className="docs-split__doc">
        {header}
        {this.props.children}
      </div>
    );
  }

  render () {
    let priority = ('single' === this.state.responsive && this.state.showMenu ?
      'left' : 'right');
    return (
      <Split flex="right" priority={priority} fixed={true}
        onResponsive={this._onResponsive}>
        {this._renderMenu()}
        {this._renderDoc()}
      </Split>
    );
  }
};
