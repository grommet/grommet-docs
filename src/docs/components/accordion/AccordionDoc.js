// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Accordion.displayName = 'Accordion';

const USAGE =
`import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
<Accordion>
  <AccordionPanel heading="First Panel">
    <p>First Panel contents</p>
  </AccordionPanel>
  <AccordionPanel heading="Second Panel">
    <p>First Panel contents</p>
  </AccordionPanel>
</Accordion>`;

export default class AccordionDoc extends Component {
  render () {
    return (
      <DocsArticle title="Accordion" colorIndex="neutral-3">

        <section>
          <p>A collapsible accordion component.</p>
          <Accordion>
            <AccordionPanel heading="First Panel">
              <h3>First Panel</h3>
            </AccordionPanel>
            <AccordionPanel heading="Second Panel">
              <h3>Second Panel</h3>
            </AccordionPanel>
          </Accordion>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html xml hljs">{USAGE}</code></pre>
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

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/accordion/examples`}>
            Accordion Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
