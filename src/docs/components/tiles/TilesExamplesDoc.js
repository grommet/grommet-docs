// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Card from 'grommet/components/Card';
import Image from 'grommet/components/Image';
import Box from 'grommet/components/Box';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Tiles.displayName = 'Tiles';
Tile.displayName = 'Tile';

const PROPS_SCHEMA = {
  fill: { value: true },
  flush: { value: true },
  onMore: { options: ['none', 'func'] },
  selectable: { options: ['false', 'true', 'multiple'] }
};

const CONTENTS_SCHEMA = {
  contents: { options: ['Image', 'Card', 'resource'] },
  count: { options: ['1', '3', '4', '10'] },
  basis: { options: ['1/4', '1/3', '1/2'] }
};

export default class TilesExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onMore = this._onMore.bind(this);
    this._onSelect = this._onSelect.bind(this);
    this.state = { contents: { count: '4' }, lazyCount: 4, elementProps: {} };
  }

  _onChange (elementProps, contents) {
    let { lazyCount } = this.state;
    if (! contents.count) {
      contents.count = '4';
    }
    if ('func' !== elementProps.onMore) {
      lazyCount = parseInt(contents.count, 10);
    }
    this.setState({ contents, elementProps, lazyCount });
  }

  _onMore () {
    let { contents: { count }, lazyCount } = this.state;
    this.setState({ lazyCount: lazyCount + parseInt(count, 10) });
  }

  _onSelect (selection) {
    // no-op
  }

  render () {
    let { contents, elementProps, lazyCount } = this.state;
    const props = { ...elementProps };

    if ('multiple' === props.selectable) {
      props.onSelect = this._onSelect;
    } else if ('true' === props.selectable) {
      props.onSelect = this._onSelect;
      props.selectable = true;
    } else {
      delete props.selectable;
    }

    if ('func' === props.onMore) {
      props.onMore = this._onMore;
    } else {
      delete props.onMore;
    }

    let tiles = [];
    for (let i=0; i<lazyCount; i++) {
      let content;
      if ('Card' === contents.contents || ! contents.contents) {
        content = (
          <Tile key={i}>
            <Card thumbnail='/img/carousel-1.png' heading='Sample Heading'
              label='Sample Label'
              description='Sample description providing more details.' />
          </Tile>
        );
      } else if ('Image' === contents.contents) {
        content = <Tile key={i}><Image src='/img/carousel-1.png' /></Tile>;
      } else if ('resource' === contents.contents) {
        content = (
          <Tile key={i} separator='top' align='start' basis={contents.basis}>
            <Header size='small' pad={{ horizontal: 'small' }}>
              <Heading tag='h4' strong={true} margin='none'>
                {`Tile ${i+1}`}
              </Heading>
            </Header>
            <Box pad='small'>
              <Paragraph margin='none'>
                Tile summary content. One or two lines. Tile summary content.
              </Paragraph>
            </Box>
          </Tile>
        );
      }
      tiles.push(content);
    }

    const element = <Tiles {...props}>{tiles}</Tiles>;

    return (
      <InteractiveExample contextLabel='Tiles' contextPath='/docs/tiles'
        justify='start' align='stretch'
        preamble={`import Tiles from 'grommet/components/Tiles';\n` +
          `import Tile from 'grommet/components/Tile';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={this._onChange} />
    );
  }
};
