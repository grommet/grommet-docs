// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';
import PreviousIcon from 'grommet/components/icons/base/Previous';
import NextIcon from 'grommet/components/icons/base/Next';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import DocsArticle from './DocsArticle';

export default class ExamplesDoc extends Component {

  constructor () {
    super();
    this._onNext = this._onNext.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this.state = { index: 0, dark: false };
  }

  componentDidMount () {
    this._keys = {left: this._onPrevious, right: this._onNext};
    KeyboardAccelerators.startListeningToKeyboard(this, this._keys);
    // load index from location
    const index = parseInt(window.location.hash.slice(1), 10);
    this.setState({ index: index || 0 });
  }

  componentWillUnmount () {
    KeyboardAccelerators.stopListeningToKeyboard(this, this._keys);
  }

  _select (index) {
    this.setState({ index: index });
    window.location.hash = index;
  }

  _onNext () {
    const { examples } = this.props;
    const { index } = this.state;
    this._select((index < (examples.length - 1) ? index + 1 : 0));
  }

  _onPrevious () {
    const { examples } = this.props;
    const { index } = this.state;
    this._select((index > 0 ? index - 1 : examples.length - 1));
  }

  render () {
    const { examples, title } = this.props;
    const { index, dark } = this.state;

    const items = examples.map((item, index) => (
      <Anchor key={index} label={item.label}
        onClick={() => this._select(index)} />
    ));
    const Component = examples[this.state.index].component;

    return (
      <DocsArticle title={title} colorIndex="neutral-3" full={true}>
        <Header justify="between" colorIndex="light-2"
          pad={{ horizontal: 'large' }}>
          <Menu label={examples[index].label} inline={false} size="large">
            {items}
          </Menu>
          <CheckBox checked={dark} toggle={true} label="dark"
            onChange={() => this.setState({ dark: ! dark })} />
        </Header>

        <Section appCentered={false} justify="between" align="start"
          direction="row" full="horizontal"
          colorIndex={dark ? 'grey-2' : undefined}>
          <Button icon={<PreviousIcon />}
            onClick={this._onPrevious} />
          <Component />
          <Button icon={<NextIcon />}
            onClick={this._onNext} />
        </Section>
      </DocsArticle>
    );
  }
};

ExamplesDoc.propTypes = {
  examples: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    component: PropTypes.func
  })),
  title: PropTypes.string
};
