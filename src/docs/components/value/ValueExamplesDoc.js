// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import UpIcon from 'grommet/components/icons/base/LinkUp';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  icon: { value: <GlobeIcon />, initial: true },
  label: { value: 'Sample label', initial: true },
  trendIcon: { value: <UpIcon />, initial: true },
  units: { value: '%', initial: true },
  size: { options: ['small', 'medium', 'large', 'xlarge'] },
  responsive: { value: true },
  align: { options: ['start', 'center', 'end'] },
  colorIndex: { options: ['accent-1', 'accent-2'] }
};

export default class ValueExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const { size, colorIndex } = elementProps;
    const iconProps = { size, colorIndex };
    // adjust icon sizes if necessary
    if (elementProps.size) {
      if (elementProps.icon) {
        elementProps.icon = <GlobeIcon {...iconProps} />;
      }
      if (elementProps.trendIcon) {
        elementProps.trendIcon = <UpIcon {...iconProps} />;
      }
    }
    const element = <Value value={75} {...elementProps} />;
    return (
      <InteractiveExample contextLabel='Value' contextPath='/docs/value'
        preamble={`import Value from 'grommet/components/Value';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
