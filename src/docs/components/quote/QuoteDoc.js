// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (<span>
  A quote with a colored border.
</span>);

export default class QuoteDoc extends Component {

  render () {
    return (
      <DocsArticle title='Quote' action={
        <Button primary={true} path={`/docs/quote/examples`}
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
            <Quote credit='Ricky Baker'>
              <Paragraph>
                Uncle, you're basically a criminal now. But on the bright
                side, you're famous.
              </Paragraph>
            </Quote>
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

          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
            available.</p>
        </section>

      </DocsArticle>
    );
  }
};
