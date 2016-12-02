// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class AccordionDoc extends Component {
  render () {
    return (
      <DocsArticle title='Accordion' action={
        <Button primary={true} path='/docs/accordion/examples'
          label='Examples' />
        }>

        <section>
          <p>A collapsible accordion component.</p>
          <Accordion>
            <AccordionPanel heading='First Panel'>
              <Paragraph>First panel contents</Paragraph>
            </AccordionPanel>
            <AccordionPanel heading='Second Panel'>
              <Paragraph>Second panel contents</Paragraph>
            </AccordionPanel>
          </Accordion>
        </section>

        <section>
          <h2>Accordion Properties</h2>
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
          <h2>AccordionPanel Properties</h2>
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

      </DocsArticle>
    );
  }
};
