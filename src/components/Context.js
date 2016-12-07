// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';

const BACKGROUNDS =
  ['none', 'light', 'dark', 'light on dark', 'dark on light'];
const OUTER_BACKGROUND = {
  'dark': 'grey-4',
  'dark on light': 'light-2',
  'light': 'light-2',
  'light on dark': 'grey-4'
};
const INNER_BACKGROUND = {
  'dark on light': 'grey-4',
  'light on dark': 'light-2'
};

export default class Context extends Component {
  render () {
    const { align, background, children, justify, pad } = this.props;
    let contents = children;
    if (INNER_BACKGROUND[background]) {
      contents = (
        <Box colorIndex={INNER_BACKGROUND[background]} pad='medium'>
          {children}
        </Box>
      );
    }
    return (
      <Box colorIndex={OUTER_BACKGROUND[background]}
        justify={justify} align={align} flex='grow' pad={pad}>
        {contents}
      </Box>
    );
  }
};

Context.propTypes = {
  align: PropTypes.string,
  background: PropTypes.oneOf(BACKGROUNDS),
  justify: PropTypes.string,
  pad: PropTypes.string
};

Context.defaultProps = {
  align: 'center',
  justify: 'center',
  pad: 'medium'
};
