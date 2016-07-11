// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Heading from 'grommet/components/Heading';
import { updatePageTitle } from '../../utils/a11y';

Heading.displayName = 'Heading';

const INLINE = `<Heading>
  ...
</Heading>`;

const LONG_TEXT = 'A Long Heading That Will Probably Wrap Which Should Be Avoided';

export default class HeadingDoc extends Component {
  componentDidMount () {
    updatePageTitle('Heading');
  }

  render () {
    return (
      <DocsArticle title="Heading" colorIndex="neutral-3">

        <p>An HTML heading, one of h1, h2, h3, h4, h5, h6.</p>
        <pre><code className="html hljs xml">{INLINE}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Heading. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Heading. Defaults
              to <code>medium</code>.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the Heading should be bold.  Defaults to <code>false</code>.</dd>
            <dt><code>tag         h1|h2|h3|h4|h5|h6</code></dt>
            <dd>Which HTML heading level should be used.  Defaults to <code>h1</code>.</dd>
            <dt><code>uppercase         true|false</code></dt>
            <dd>Convert the heading to uppercase.  Defaults to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Default" code={
            <Heading>Sample Heading</Heading>
          } />
          <Example name="H2, Centered" code={
            <Heading tag="h2" align="center">Sample Heading</Heading>
          } />
          <Example name="H6, Strong" code={
            <Heading strong={true} tag="h6">Sample Heading</Heading>
          } />
        </section>

        <section>
          <div className="example">
            <h1><strong>H1 strong {LONG_TEXT}</strong></h1>
            <h1>H1 {LONG_TEXT}</h1>
            <h2><strong>H2 strong {LONG_TEXT}</strong></h2>
            <h2>H2 {LONG_TEXT}</h2>
            <h3><strong>H3 strong {LONG_TEXT}</strong></h3>
            <h3>H3 {LONG_TEXT}</h3>
            <h4><strong>H4 strong {LONG_TEXT}</strong></h4>
            <h4>H4 {LONG_TEXT}</h4>
            <h5><strong>H5 strong {LONG_TEXT}</strong></h5>
            <h5>H5 {LONG_TEXT}</h5>
            <h6><strong>H6 strong {LONG_TEXT}</strong></h6>
            <h6>H6 {LONG_TEXT}</h6>
          </div>
        </section>

      </DocsArticle>
    );
  }
};
