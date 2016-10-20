// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

Quote.displayName = 'Quote';

const USAGE =
`import Quote from 'grommet/components/Quote';
<Quote credit="Ricky Baker">
  <Paragraph>
    Uncle, you're basically a criminal now. But on the bright side,
    you're famous.
  </Paragraph>
</Quote>`;

export default class QuoteDoc extends Component {

  render () {
    return (
      <DocsArticle title="Quote" colorIndex="neutral-3">

        <section>
          <p>A quote with a colored border.</p>
            <Quote credit="Ricky Baker">
              <Paragraph>
                Uncle, you're basically a criminal now. But on the bright
                side, you're famous.
              </Paragraph>
            </Quote>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
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

          <p>Properties for <Anchor path="/docs/box">Box</Anchor> are
            available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/quote/examples`}>
            Quote Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
