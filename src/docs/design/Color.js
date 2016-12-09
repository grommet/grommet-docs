// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import Box from 'grommet/components/Box';
import Label from 'grommet/components/Label';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

const COLOR_REGEXP = /rgb\((\d+), (\d+), (\d+)\)/;
const COLOR_ALPHA_REGEXP = /rgba\((\d+), (\d+), (\d+), (0\.\d+)\)/;

const COLORS = [
  { label: 'Primary', prefix: 'brand', count: 1 },
  { label: 'Accent', prefix: 'accent', count: 3, tint: true, alpha: true },
  { label: 'Neutral', prefix: 'neutral', count: 4, tint: true, alpha: true },
  { label: 'Grey', prefix: 'grey', count: 4, alpha: true },
  { label: 'Light', prefix: 'light', count: 2 },
  { label: 'Status', values: ['critical', 'warning', 'ok', 'unknown'] }
];

class Swatch extends Component {

  constructor () {
    super();
    this.state = {};
  }

  componentDidMount () {
    const box = findDOMNode(this._boxRef);
    const color = getComputedStyle(box).backgroundColor;
    let match = COLOR_REGEXP.exec(color) || COLOR_ALPHA_REGEXP.exec(color);
    if (match) {
      const value = match.slice(1, 4).map(channel => {
        let string = parseInt(channel, 10).toString(16);
        return (string.length < 2) ? string = `0${string}` : string;
      }).join('');
      const opacity =
        (match.length > 4) ? `${parseFloat(match[4]) * 100}%` : '';
      this.setState({ hex: `#${value} ${opacity}` });
    }
  }

  render () {
    const { colorIndex } = this.props;
    const { hex } = this.state;
    return (
      <Box align='stretch' pad={{ vertical: 'medium' }}>
        <Box ref={ref => this._boxRef = ref}
          colorIndex={colorIndex} pad='large' />
        <Label margin='small'>{colorIndex}</Label>
        <Label margin='none'>{hex}</Label>
      </Box>
    );
  }
};

export default class Color extends Component {

  render () {

    const colors = COLORS.map(section => {
      const variants = [];
      if (section.count) {

        for (let i=0; i<section.count; i+=1) {
          const suffix = section.count > 1 ? `-${i+1}` : '';
          variants.push(
            <Swatch key={i} colorIndex={`${section.prefix}${suffix}`} />);
          if (section.tint) {
            variants.push(
              <Swatch key={i + 20}
                colorIndex={`${section.prefix}${suffix}-t`} />
            );
          }
          if (section.alpha) {
            variants.push(
              <Swatch key={i + 40}
                colorIndex={`${section.prefix}${suffix}-a`} />
            );
          }
        }

      } else {

        section.values.forEach(value => {
          variants.push(<Swatch key={value} colorIndex={value} />);
        });

      }

      return (
        <section key={section.label}>
          <h3>{section.label}</h3>
          <Box direction='row' pad={{ between: 'medium' }} wrap={true}>
            {variants}
          </Box>
        </section>
      );
    });

    return (
      <DocsArticle title='Color'>
        <section>
          <div className='generic-branding'>
            <p>These are the generic, or unbranded, colors. It is expected that
              applications will define their own brand color scheme.</p>
          </div>
          <div className='hpe-branding'>
          <p>The Hewlett Packard Enterprise color palette is utilized in
            applications for the
          most part. However there are variances in the palette that apply
          specifically
          to applications.</p>

          <p>For application design the Hewlett Packard Enterprise
            orange/salmon accent color
          is modified to be more red so it can be used as a status indicator
          and it should
          not be used as an accent color in non-status contexts.</p>

          <p>Also, dark yellow color is added for use as a warning status
            color.</p>
          </div>

          <p>These colors can be used as the background color
            for a <Anchor path='/docs/box'>Box</Anchor> via
            the <code>colorIndex</code> property.</p>
        </section>

        {colors}

      </DocsArticle>
    );
  }
};
