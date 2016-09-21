// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Label from 'grommet/components/Label';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

Label.displayName = 'Label';

const USAGE =
`import Label from 'grommet/components/Label';
<Label>
  {contents}
</Label>`;

export default class LabelDoc extends Component {

  render () {
    return (
      <DocsArticle title=" Label" colorIndex="neutral-3">

        <section>
          <p>A simple text label. This could be used to annotate
            a <NavAnchor path="/docs/value">Value</NavAnchor> to indicate
            what the value refers to. Or, it can annotate
            a <NavAnchor path="/docs/card">Card</NavAnchor> to indicate
            a category.</p>
          <Label>Sample Label</Label>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>labelFor          {"{string}"}</code></dt>
            <dd>ID of the form element that the label is for.  Optional.</dd>
            <dt><code>uppercase         true|false</code></dt>
            <dd>Convert the label to uppercase.
              Defaults to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Label>Sample Label</Label>
          } />
          <Example name="Uppercase" code={
            <Label uppercase={true}>Sample Label</Label>
          } />
        </section>

      </DocsArticle>
    );
  }
};
