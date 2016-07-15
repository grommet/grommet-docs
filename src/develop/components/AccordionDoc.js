// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Accordion from 'grommet/components/Accordion';
import AccordionPanel from 'grommet/components/AccordionPanel';
import { updatePageTitle } from '../../utils/a11y';

Accordion.displayName = 'Accordion';

export default class AccordionDoc extends Component {
  componentDidMount () {
    updatePageTitle('Accordion');
  }

  render () {
    return (
      <DocsArticle title="Accordion" colorIndex="neutral-3">

        <p>A collapsible accordion component.</p>
        <pre><code className="html hljs xml">
{`<Accordion>
    <AccordionPanel>
      ...
    </AccordionPanel>
    ...
</Accordion>`}
        </code></pre>

        <section>
          <h2>Accordion Options</h2>
          <dl>
            <dt><code>headline            {'{string}'}</code></dt>
            <dd>Headline of the section.</dd>
            <dt><code>subHeadline         {'{string}'}</code></dt>
            <dd>Content for the subheadline.</dd>
            <dt><code>colorIndex          {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code></dd>
          </dl>
        </section>

        <section>
          <h2>AccordionPanel Options</h2>
          <dl>
            <dt><code>panelTitle          {'{string}'}</code></dt>
            <dd>Title of panel, displayed when panel is collapsed. Required.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Accordion>
              <AccordionPanel panelTitle="First Title">
                <h3>First Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
              <AccordionPanel panelTitle="Second Title">
                <h3>Second Accordion</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.</p>
              </AccordionPanel>
              <AccordionPanel panelTitle="Thrid Title">
                <h3>Thrid Accordion</h3>
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

AccordionDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};
