// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import PreviousIcon from 'grommet/components/icons/base/Previous';
import NextIcon from 'grommet/components/icons/base/Next';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import DocsArticle from '../../../../components/DocsArticle';

import Tiles1 from './Tiles1';
import Tiles2 from './Tiles2';
import Tiles3 from './Tiles3';
import Tiles4 from './Tiles4';
import Tiles5 from './Tiles5';
import Tiles6 from './Tiles6';
import Tiles7 from './Tiles7';
import Tiles8 from './Tiles8';

const TILES = [
  { label: 'Simple', component: Tiles1 },
  { label: 'Not flush, Centered', component: Tiles2 },
  { label: 'Fill, Not flush', component: Tiles3 },
  { label: 'Fill, Flush', component: Tiles4 },
  { label: 'Row', component: Tiles5 },
  { label: 'Single Select', component: Tiles6 },
  { label: 'Multiple Select', component: Tiles7 },
  { label: 'Masonry, 4 Columns', component: Tiles8 }
];

export default class TilesExamplesDoc extends Component {

  constructor () {
    super();
    this._onNext = this._onNext.bind(this);
    this._onPrevious = this._onPrevious.bind(this);
    this.state = { index: 0 };
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
    const { index } = this.state;
    this._select((index < (TILES.length - 1) ? index + 1 : 0));
  }

  _onPrevious () {
    const { index } = this.state;
    this._select((index > 0 ? index - 1 : TILES.length - 1));
  }

  render () {
    const { index } = this.state;

    const items = TILES.map((item, index) => (
      <Anchor key={index} label={item.label}
        onClick={() => this._select(index)} />
    ));
    const Tiles = TILES[this.state.index].component;

    return (
      <DocsArticle title="Tiles Examples" colorIndex="neutral-3" full={true}>
        <Header justify="start" colorIndex="light-2"
          pad={{ horizontal: 'large' }}>
          <Menu label={TILES[index].label} inline={false} size="large">
            {items}
          </Menu>
        </Header>

        <Section appCentered={false} justify="between" align="start"
          direction="row" full="horizontal">
          <Button icon={<PreviousIcon />}
            onClick={this._onPrevious} />
          <Tiles />
          <Button icon={<NextIcon />}
            onClick={this._onNext} />
        </Section>
      </DocsArticle>
    );
  }

};
