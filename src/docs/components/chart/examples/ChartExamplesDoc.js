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

import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';
import Chart4 from './Chart4';
import Chart5 from './Chart5';
import Chart6 from './Chart6';
import Chart6s from './Chart6s';
import Chart7 from './Chart7';
import Chart8 from './Chart8';
import Chart9 from './Chart9';
import Chart10 from './Chart10';
import Chart11 from './Chart11';
// import Chart12 from './Chart12';
import Chart13 from './Chart13';
import Chart14 from './Chart14';

const CHARTS = [
  { label: 'Area with Value', component: Chart9 },
  { label: 'Line with Value', component: Chart10 },
  { label: 'Bar with Value', component: Chart11 },
  { label: 'Area and Line with Value', component: Chart6 },
  { label: 'Smooth Area and Line with Value', component: Chart6s },
  { label: 'Vertical Area and Line with Value and updating',
    component: Chart7 },
  { label: 'Area and Line scaled to width and Legend', component: Chart8 },
  { label: 'Range selector', component: Chart13 },
  { label: 'Vertical Range selector', component: Chart14 },
  { label: 'Vertical Meters with Values, Axis, and Threshold',
    component: Chart1 },
  { label: 'Horizontal Meters with Values, Axis, and Threshold',
    component: Chart2 },
  { label: 'Horizontal Meters with inline labels and Values',
    component: Chart3 },
  { label: 'Vertical Meters with multiple segments and Legend',
    component: Chart4 },
  { label: 'Vertical Meters with stacked segments and Legend',
    component: Chart5 }
  // // { label: 'Stacked Meters scaled to width', component: Chart12 }
];

export default class ChartExamplesDoc extends Component {

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
    this._select((index < (CHARTS.length - 1) ? index + 1 : 0));
  }

  _onPrevious () {
    const { index } = this.state;
    this._select((index > 0 ? index - 1 : CHARTS.length - 1));
  }

  render () {
    const { index, dark } = this.state;

    const items = CHARTS.map((item, index) => (
      <Anchor key={index} label={item.label}
        onClick={() => this._select(index)} />
    ));
    const Chart = CHARTS[this.state.index].component;

    return (
      <DocsArticle title="Chart Examples" colorIndex="neutral-3" full={true}>
        <Header justify="between" colorIndex="light-2"
          pad={{ horizontal: 'large' }}>
          <Menu label={CHARTS[index].label} inline={false} size="large">
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
          <Chart />
          <Button icon={<NextIcon />}
            onClick={this._onNext} />
        </Section>
      </DocsArticle>
    );
  }

};
