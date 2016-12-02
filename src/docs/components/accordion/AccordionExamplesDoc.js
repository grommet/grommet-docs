// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Accordion.displayName = 'Accordion';

const PREAMBLE = `import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';`;

const PROPS_SCHEMA = {
  animate: { value: true, initial: true },
  openMulti: { value: true }
};

export default class AccordionExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;

    const element = (
      <Accordion {...elementProps}>
        <AccordionPanel heading="First Title">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </AccordionPanel>
        <AccordionPanel heading="Second Title">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </AccordionPanel>
        <AccordionPanel heading="Third Title">
          <Paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </Paragraph>
        </AccordionPanel>
      </Accordion>
    );

    return (
      <InteractiveExample contextLabel='Accordion' contextPath='/docs/accordion'
        align='stretch'
        preamble={PREAMBLE}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
