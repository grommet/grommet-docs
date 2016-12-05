// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Columns from 'grommet/components/Columns';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

Columns.displayName = 'Columns';

const PROPS_SCHEMA = {
  responsive: { value: true },
  size: { options: ['small', 'medium', 'large'] },
  justify: { options: ['start', 'center', 'between', 'end'] },
  masonry: { value: true },
  maxCount: { options: [1, 2, 3, 4] }
};

export default class ColumnsExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    let boxes = [];
    for (let i=0; i<6; i+=1) {
      boxes.push(
        <Box key={i} align="center" pad="medium"
          margin="small" colorIndex="light-2">
          {`Box ${i + 1}`}
        </Box>
      );
    }
    const element = <Columns {...elementProps}>{boxes}</Columns>;
    return (
      <InteractiveExample contextLabel='Columns' contextPath='/docs/columns'
        preamble={`import Columns from 'grommet/components/Columns';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
