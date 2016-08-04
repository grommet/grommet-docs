// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

Quote.displayName = 'Quote';

export default class QuoteDoc extends Component {

  render () {
    return (
      <DocsArticle title="Quote" colorIndex="neutral-3">

        <section>
          <p>A quote with a colored border.</p>
          <Quote credit="A famous person">
            <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.</Paragraph>
          </Quote>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>borderColorIndex   {"{string}"}</code></dt>
            <dd>ColorIndex of the border.</dd>
            <dt><code>size               small|medium|large|full</code></dt>
            <dd>Width of the box containing the quote.
              Defaults to <code>large</code>.</dd>
            <dt><code>credit             {"{string}"}</code></dt>
            <dd>The name of the entity that the quote is credited to.</dd>
            <dt><code>emphasizeCredit    true|false</code></dt>
            <dd>Whether the quote credit should be bolded for emphasis.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            available.</p>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Default" code={
            <Quote credit="A famous person">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.</Paragraph>
            </Quote>
          } />
          <Example name="Small quote, emphasis reversed" code={
            <Quote borderColorIndex="accent-1" size="small"
              emphasizeCredit={false} credit="A famous person">
              <Paragraph><strong>Lorem ipsum dolor sit amet, consectetur
                adipiscing elit, sed do eiusmod tempor incididunt ut labore
                et dolore magna aliqua.</strong></Paragraph>
            </Quote>
          } />
          <Example name="Medium quote, with multiple paragraphs" code={
            <Quote borderColorIndex="accent-2" size="medium"
              credit="A famous person">
              <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.</Paragraph>
              <Paragraph>Ut enim ad minim veniam, quis nostrud exercitation
                ullamrehenderit in voluptate mollit anim.</Paragraph>
            </Quote>
          } />
        </section>

      </DocsArticle>
    );
  }
};
