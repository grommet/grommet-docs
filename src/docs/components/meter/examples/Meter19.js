// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Meter from 'grommet/components/Meter';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Example from '../../../Example';

const SERIES = [
  {label: 'Gen 7', value: 40},
  {label: 'Gen 8', value: 20},
  {label: 'Gen 9', value: 10},
  {label: 'Gen 10', value: 30}
];

export default class Meter19 extends Component {

  constructor () {
    super();
    this.state = {};
  }

  render () {
    const { size } = this.props;
    const { index } = this.state;

    let value, label;
    if (index >= 0) {
      value = SERIES[index].value;
      label = SERIES[index].label;
    } else {
      value = 0;
      SERIES.forEach(serie => value += serie.value);
      label = 'Total';
    }

    return (
      <Example align="center" code={
        <Box>
          <Meter type="circle" stacked={true} series={SERIES}
            label={
              <Value value={value} units="GB" align="center" label={label}
                size={size} />
            } max={100} threshold={90} size={size} activeIndex={index}
            onActive={(index) => this.setState({ index: index })} />
          <Box direction="row" justify="between" align="center"
            responsive={false}>
            <Label size="small">0 GB</Label>
            <Label size="small">100 GB</Label>
          </Box>
        </Box>
      } />
    );
  }

};

Meter19.propTypes = {
  size: PropTypes.string
};
