// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component,  PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Code from '../components/Code';

export default class Example extends Component {
  render () {
    const {
      align, full, code, control, name, overrides, preamble
    } = this.props;
    let heading;
    if (name) {
      heading = <h3>{name}</h3>;
    }

    return (
      <Box full={full} pad={{horizontal: 'medium'}}>
        {heading}
        <Box pad={{ between: 'medium' }} align={align}>
          {control || code}
          <Code preamble={preamble} overrides={overrides}>{code}</Code>
        </Box>
      </Box>
    );
  }
}

Example.propTypes = {
  align: PropTypes.oneOf(['start', 'center', 'end']),
  code: PropTypes.node,
  control: PropTypes.node, // for LayerDoc
  name: PropTypes.string,
  overrides: PropTypes.arrayOf(PropTypes.string),
  preamble: PropTypes.string,
  debounceHighlight: PropTypes.bool,
  full: PropTypes.oneOf([true, 'horizontal', 'vertical', false])
};
