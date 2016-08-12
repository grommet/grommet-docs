// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Label from 'grommet/components/Label';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Label.displayName = 'Label';

export default class LabelDoc extends Component {

  render () {
    return (
      <DocsArticle title=" Label" colorIndex="neutral-3">

        <p>Label component. Can be used with or without an associated input.</p>

        <section>
          <h2>Options</h2>
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
