// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Example from '../../../Example';

export default class Layer1 extends Component {

  constructor () {
    super();
    this.state = { active: false };
  }

  render () {
    const { active } = this.state;
    const layer = (
      <Layer onClose={() => this.setState({ active: false })} closer={true}
        align="top">
        <Header>
          <Heading tag="h2">Title</Heading>
        </Header>
        <Section>
          <Paragraph>This is a simple dialog.</Paragraph>
        </Section>
      </Layer>
    );
    let activeLayer = active ? layer : undefined;

    const control = (
      <Button onClick={() => this.setState({ active: true })}>Open</Button>
    );

    return (
      <Box pad={{ vertical: 'medium' }} align="start">
        <Example align="center" control={control} code={layer} />
        {activeLayer}
      </Box>
    );
  }

};
