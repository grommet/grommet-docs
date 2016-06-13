// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
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
import DOM from 'grommet/utils/DOM';

export default class DocsSplit extends Component {

  constructor () {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this._onMenuOpen = this._onMenuOpen.bind(this);
    this._onMenuClick = this._onMenuClick.bind(this);
    this.state = {showMenu: true, responsive: 'multiple'};
  }

  componentDidMount () {
    this._scrollToAnchor();
  }

  componentDidUpdate () {
    this._scrollToAnchor();
  }

  _scrollToAnchor () {
    if (this.refs.doc) {
      const doc = this.refs.doc;
      const hash = window.location.hash.slice(1);
      if (hash) {
        const anchor = document.querySelectorAll('[id=' + hash + ']')[0];
        const scrollParent = DOM.findScrollParents(anchor)[0];
        scrollParent.scrollTop = anchor.offsetTop;
      } else {
        doc.scrollTop = 0;
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
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  _onMenuOpen () {
    this.setState({showMenu: true});
  }

  _onMenuClick () {
    if ('single' === this.state.responsive) {
      this.setState({showMenu: false});
    }
    // allow time for hash to change
    setTimeout(this._scrollToAnchor, 1);
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  _renderTitle () {
    return (
      <Title responsive={false}>
        <Link to={this.context.rootPath}>
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
      <Sidebar size="small" primary={true} separator="right">
        <Header justify="between" size="large" pad={{horizontal: 'medium'}}>
          {title}
          {closer}
        </Header>
        <DocsMenu direction="column" contents={this.props.contents}
          onClick={this._onMenuClick} />
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
            <a onClick={this._onMenuOpen}>Contents</a>
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
    let left;
    let right;
    if (this.state.showMenu) {
      left = this._renderMenu();
      if ('multiple' === this.state.responsive) {
        right = this._renderDoc();
      }
    } else {
      left = this._renderDoc();
    }

    return (
      <Split flex="right" fixed={true} onResponsive={this._onResponsive}>
        {left}
        {right}
      </Split>
    );
  }
};

DocsSplit.propTypes = {
  contents: PropTypes.arrayOf(React.PropTypes.object),
  onChange: PropTypes.func
};

DocsSplit.contextTypes = {
  routePrefix: PropTypes.string.isRequired,
  rootPath: PropTypes.string.isRequired
};
