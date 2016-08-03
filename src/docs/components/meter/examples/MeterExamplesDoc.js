// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import CheckBox from 'grommet/components/CheckBox';
import PreviousIcon from 'grommet/components/icons/base/Previous';
import NextIcon from 'grommet/components/icons/base/Next';
import KeyboardAccelerators from 'grommet/utils/KeyboardAccelerators';
import DocsArticle from '../../../../components/DocsArticle';

import Meter1 from './Meter1';
import Meter2 from './Meter2';
import Meter3 from './Meter3';
import Meter4 from './Meter4';
import Meter5 from './Meter5';
// import Meter6 from './Meter6';
import Meter6a from './Meter6a';
// import Meter7 from './Meter7';
import Meter7a from './Meter7a';
// import Meter8 from './Meter8';
import Meter8a from './Meter8a';
// import Meter9 from './Meter9';
import Meter9a from './Meter9a';
// import Meter10 from './Meter10';
import Meter10a from './Meter10a';
// import Meter11 from './Meter11';
import Meter11a from './Meter11a';
// import Meter11Labels from './Meter11Labels';
import Meter11LabelsA from './Meter11LabelsA';
// import Meter12 from './Meter12';
import Meter12a from './Meter12a';
// import Meter13 from './Meter13';
import Meter13a from './Meter13a';
// import Meter14 from './Meter14';
import Meter14a from './Meter14a';
// import Meter15 from './Meter15';
import Meter15a from './Meter15a';
// import Meter16 from './Meter16';
import Meter16a from './Meter16a';
import Meter17 from './Meter17';
import Meter18 from './Meter18';
import Meter19 from './Meter19';
import Meter20 from './Meter20';
import Meter21 from './Meter21';

const METERS = [
  { label: 'Horizontal Bar', meter: Meter1 },
  { label: 'Vertical Bar', meter: Meter2 },
  { label: 'Circle', meter: Meter3 },
  { label: 'Horizontal Arc', meter: Meter4 },
  { label: 'Vertical Arc', meter: Meter5 },
  { label: 'Annotated Horizontal Bar', meter: Meter6a },
  { label: 'Annotated Vertical Bar', meter: Meter7a },
  { label: 'Annotated Circle', meter: Meter8a },
  { label: 'Annotated Horizontal Arc', meter: Meter9a },
  { label: 'Annotated Vertical Arc', meter: Meter10a },
  { label: 'Annotated Horizontal Bar Series', meter: Meter11a },
  { label: 'Annotated Horizontal Bar Series Inline Labels', meter: Meter11LabelsA },
  { label: 'Annotated Vertical Bar Series', meter: Meter12a },
  { label: 'Annotated Circle Series', meter: Meter13a },
  { label: 'Annotated Horizontal Arc Series', meter: Meter14a },
  { label: 'Annotated Vertical Arc Series', meter: Meter15a },
  { label: 'Spiral Series', meter: Meter16a },
  { label: 'Annotated Horizontal Bar Series Stacked', meter: Meter17 },
  { label: 'Annotated Vertical Bar Series Stacked', meter: Meter18 },
  { label: 'Annotated Circle Series Stacked', meter: Meter19 },
  { label: 'Annotated Horizontal Arc Series Stacked', meter: Meter20 },
  { label: 'Annotated Vertical Arc Series Stacked', meter: Meter21 }
];

export default class MeterExamplesDoc extends Component {

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
    const { index } = this.state;
    this._select((index < (METERS.length - 1) ? index + 1 : 0));
  }

  _onPrevious () {
    const { index } = this.state;
    this._select((index > 0 ? index - 1 : METERS.length - 1));
  }

  render () {
    const { index, dark } = this.state;

    const items = METERS.map((item, index) => (
      <Anchor key={index} label={item.label} onClick={() => this._select(index)} />
    ));
    const Meter = METERS[this.state.index].meter;

    return (
      <DocsArticle title="Meter Examples" colorIndex="neutral-3" full={true}>
        <Header justify="between" colorIndex="light-2"
          pad={{ horizontal: 'large' }}>
          <span></span>
          <Menu label={METERS[index].label} inline={false} size="large">
            {items}
          </Menu>
          <CheckBox checked={dark} toggle={true}
            onChange={() => this.setState({ dark: ! dark })} />
        </Header>

        <Section appCentered={false} justify="between" align="start"
          direction="row" full="horizontal"
          colorIndex={dark ? 'neutral-1' : undefined}>
          <Button icon={<PreviousIcon />}
            onClick={this._onPrevious} />
          <Meter />
          <Button icon={<NextIcon />}
            onClick={this._onNext} />
        </Section>
      </DocsArticle>
    );
  }

};
