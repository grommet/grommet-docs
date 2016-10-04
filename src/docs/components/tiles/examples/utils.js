// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

export function renderRichTiles (options={}, onClick) {
  var richTiles = [];
  var index = 1;
  while (index <= (options.count || 8)) {
    var bottom;
    if ('button' === options.bottom) {
      bottom = <Button fill={true} label="Action" onClick={onClick} />;
    } else if ('menu' === options.bottom) {
      bottom = (
        <Footer justify="between">
          <span></span>
          <Menu inline={false} dropAlign={{bottom: 'bottom', right: 'right'}}>
            <a>action 1</a>
            <a>action 2</a>
            <a>action 3</a>
          </Menu>
        </Footer>
      );
    }

    var colorIndex;
    if (options.colorIndex) {
      if ('random' === options.colorIndex) {
        colorIndex = 'neutral-' + index;
      } else {
        colorIndex = options.colorIndex;
      }
    }

    richTiles.push(
      <Tile key={index} align="start" basis="small" flex={false}
        separator={options.separator ? 'top' : undefined}
        colorIndex={colorIndex}>
        <Header size="small" pad={{horizontal: 'small'}}>
          <Heading tag="h4"><strong>{"Tile " + index}</strong></Heading>
        </Header>
        <Box pad="small">
          <p>{(options.alternateContent && index % 2 === 0) ?
            'Tile summary content. One or two lines.' :
            'Tile summary content. One or two lines. Tile summary content.\
            One or two lines.'}</p>
        </Box>
        {bottom}
      </Tile>
    );
    index += 1;
  }
  return richTiles;
}
