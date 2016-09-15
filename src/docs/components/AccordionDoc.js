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
            <dt><code>active        {'{number}|Array({number})'}</code></dt>
            <dd>Optional active panels to be opened by default.</dd>
            <dt><code>animate             {'{bool}'}</code></dt>
            <dd>Transition content in &amp; out with a slide down animation.
              Defaults to true.</dd>
            <dt><code>onActive           {'{function}'}</code></dt>
            <dd>Function that will be called when the Accordion
              changes the currently active panels.</dd>
            <dt><code>openMulti           {'{bool}'}</code></dt>
            <dd>Allow multiple panels to be opened at once.
              Defaults to false.</dd>
          </dl>
        </section>

        <section>
          <h2>AccordionPanel Options</h2>
          <dl>
            <dt><code>heading             {'{string}|{node}'}</code></dt>
            <dd>Heading of panel, displayed when panel is collapsed.
              Required.</dd>
            <dt>
              <code>
                pad                 none|small|medium|large|{`{...}`}
              </code>
            </dt>
            <dd>The amount of padding to put around the Accordion panel heading
              &amp; it's content</dd>
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

          <Example name="Open multiple, Padded, No animation" code={
            <Accordion animate={false} openMulti={true}>
              <AccordionPanel pad="medium" heading="First Title">
                <h3>First Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
              <AccordionPanel pad="medium" heading="Second Title">
                <h3>Second Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
              <AccordionPanel pad="medium" heading="Third Title">
                <h3>Third Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
            </Accordion>
          } />

          <Example name="Open multiple, Active" code={
            <Accordion animate={false} openMulti={true} active={[0, 2]}>
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

          <Example name="onActive, single" code={
            <Accordion onActive={
              (index) => alert(
                `Active panels: ${index}`
              )
            }>
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

          <Example name="onActive, multiple" code={
            <Accordion openMulti={true} onActive={
              (index) => alert(
                `Active panels: ${index}`
              )
            }>
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
        </section>
      </DocsArticle>
    );
  }
};
