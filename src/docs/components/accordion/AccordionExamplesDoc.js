// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const DefaultAccordion = (props) => (
  <Example code={
    <Accordion {...props}>
      <AccordionPanel heading="First Title">
        <h3>First Accordion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionPanel>
      <AccordionPanel heading="Second Title">
        <h3>Second Accordion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionPanel>
      <AccordionPanel heading="Third Title">
        <h3>Third Accordion</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.</p>
      </AccordionPanel>
    </Accordion>
  } />
);

export default class AccordionExamplesDoc extends ExamplesDoc {};

AccordionExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/accordion">Accordion</NavAnchor>,
  examples: [
    { label: 'Default', component: DefaultAccordion },
    { label: 'multiple, no animation', component: DefaultAccordion,
      props: { animate: false, openMulti: true }
    },
    { label: 'multiple, active', component: DefaultAccordion,
      props: { active: [0, 2], openMulti: true }
    },
    { label: 'onActive', component: DefaultAccordion,
      props: { onActive: (index) => alert(
        `Active panel: ${index}`
      )}
    },
    { label: 'multiple, onActive', component: DefaultAccordion,
      props: { onActive: (index) => alert(
        `Active panels: ${index}`
      ), openMulti: true}
    }
  ],
  title: 'Examples'
};
