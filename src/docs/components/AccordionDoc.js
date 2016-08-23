// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Accordion.displayName = 'Accordion';

export default class AccordionDoc extends Component {

  render () {
    return (
      <DocsArticle title="Accordion" colorIndex="neutral-3">

        <p>A collapsible accordion component.</p>

        <section>
          <h2>Accordion Options</h2>
          <dl>
            <dt><code>animate             {'{bool}'}</code></dt>
            <dd>Transition content in &amp; out with a slide down animation.
              Defaults to true.</dd>
            <dt><code>openMulti           {'{bool}'}</code></dt>
            <dd>Allow multiple panels to be opened at once.
              Defaults to false.</dd>
            <dt><code>initialIndex        {'{number}'}</code></dt>
            <dd>Optional initial accordion index.</dd>
          </dl>
        </section>

        <section>
          <h2>AccordionPanel Options</h2>
          <dl>
            <dt><code>active              {'{bool}'}</code></dt>
            <dd>Optional flag to set the panel active (open).
              Defaults to false.</dd>
            <dt><code>heading             {'{string}|{node}'}</code></dt>
            <dd>heading of panel, displayed when panel is collapsed.
              Required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Accordion>
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

          <Example name="Open multiple, No animation" code={
            <Accordion animate={false} openMulti={true}>
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

          <Example name="Open multiple, Active" code={
            <Accordion animate={false} openMulti={true}>
              <AccordionPanel heading="First Title" active={true}>
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
              <AccordionPanel heading="Third Title" active={true}>
                <h3>Third Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
            </Accordion>
          } />
        </section>
      </DocsArticle>
    );
  }
};
