// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Tabs.displayName = 'Tabs';
Tab.displayName = 'Tab';

const PROPS_SCHEMA = {
  activeIndex: { options: ['none', '0', '1'] },
  justify: { options: ['start', 'center', 'end'] },
  responsive: { value: true, initial: true }
};

export default class TabsExamplesDoc extends Component {

  constructor () {
    super();
    this._onElementProps = this._onElementProps.bind(this);
    this._onActive = this._onActive.bind(this);
    this.state = { elementProps: {}, value1: '', value2: '' };
  }

  _onElementProps (nextElementProps) {
    const elementProps = { ...nextElementProps };
    if ('none' === elementProps.activeIndex) {
      delete elementProps.activeIndex;
    } else if (elementProps.hasOwnProperty('activeIndex')) {
      elementProps.activeIndex = parseInt(elementProps.activeIndex, 10);
      elementProps.onActive = this._onActive;
    }
    this.setState({ elementProps });
  }

  _onActive (activeIndex) {
    const elementProps = { ...this.state.elementProps };
    elementProps.activeIndex = parseInt(activeIndex, 10);
    this.setState({ elementProps });
  }

  render () {
    const { elementProps } = this.state;
    const element = (
      <Tabs {...elementProps}>
        <Tab title='First Title'>
          <Paragraph>First contents</Paragraph>
          <input type='text' value={this.state.value1}
            onChange={event => this.setState({ value1: event.target.value })} />
        </Tab>
        <Tab title='Second Title'>
          <Paragraph>Second contents</Paragraph>
          <input type='text' value={this.state.value2}
            onChange={event => this.setState({ value2: event.target.value })} />
        </Tab>
      </Tabs>
    );
    return (
      <InteractiveExample contextLabel='Tabs' contextPath='/docs/tabs'
        align='stretch'
        preamble={`import Tabs from 'grommet/components/Tabs';`}
        propsSchema={PROPS_SCHEMA}
        element={element} onChange={this._onElementProps} />
    );
  }
};
