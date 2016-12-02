// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

Split.displayName = 'Split';

const PROPS_SCHEMA = {
  fixed: { value: true },
  flex: { options: ['both', 'left', 'right'] },
  priority: { options: ['left', 'right'] },
  separator: { value: true },
  showOnResponsive: { options: ['priority', 'both'] }
};

export default class SplitExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = (
      <Split {...elementProps}>
        <Box colorIndex='neutral-1' justify='center' align='center'
          pad='medium'>
          Left Side
        </Box>
        <Box colorIndex='neutral-2' justify='center' align='center'
          pad='medium'>
          Right Side
        </Box>
      </Split>
    );
    return (
      <InteractiveExample contextLabel='Split' contextPath='/docs/split'
        align='stretch' pad='none'
        preamble={`import Split from 'grommet/components/Split';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
