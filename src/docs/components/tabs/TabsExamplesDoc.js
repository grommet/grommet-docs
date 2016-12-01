// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Tabs.displayName = 'Tabs';
Tab.displayName = 'Tab';

const PROPS_SCHEMA = {
  justify: { options: ['start', 'center', 'end'] },
  responsive: { value: true, initial: true }
};

export default class TabsExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = (
      <Tabs {...elementProps}>
        <Tab title='First Title'>
          <Paragraph>First contents</Paragraph>
        </Tab>
        <Tab title='Second Title'>
          <Paragraph>Second contents</Paragraph>
        </Tab>
      </Tabs>
    );
    return (
      <InteractiveExample contextLabel='Tabs' contextPath='/docs/tabs'
        align='stretch'
        preamble={`import Tabs from 'grommet/components/Tabs';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
