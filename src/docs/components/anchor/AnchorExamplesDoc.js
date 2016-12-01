// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import EditIcon from 'grommet/components/icons/base/Edit';
import Heading from 'grommet/components/Heading';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  icon: { value: <EditIcon />, initial: true },
  label: { value: 'Label', initial: true },
  primary: { value: true },
  reverse: { value: true },
  disabled: { value: true },
  animateIcon: { value: true, initial: true },
  path: { value: '/' },
  href: { value: '#', initial: true },
  target: { value: '_blank' }
};

const CONTENTS_SCHEMA = {
  textChild: { value: 'Text label' },
  headingChild: { value: <Heading tag='h3'>Heading Label</Heading> }
};

export default class CardExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    let element;
    if (Object.keys(contents).length === 0) {
      element = <Anchor {...elementProps} />;
    } else {
      element = (
        <Anchor {...elementProps}>
          {contents.headingChild}
          {contents.textChild}
        </Anchor>
      );
    }
    return (
      <InteractiveExample contextLabel='Anchor' contextPath='/docs/anchor'
        preamble={`import Anchor from 'grommet/components/Anchor';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
