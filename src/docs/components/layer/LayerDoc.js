// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class LayerDoc extends Component {
  render () {
    return (
      <DocsArticle title='Layer' action={
        <Button primary={true} path='/docs/layer/examples'
          label='Examples' />
        }>

        <section>
          <p>A modal overlay. This could contain
            a <Anchor path='/docs/form'>Form</Anchor> or
            an <Anchor path='/docs/article'>Article</Anchor>.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align    center|top|bottom|left|right</code></dt>
            <dd>Which direction the layer contents should emanate from.</dd>
            <dt><code>closer   {'true|false|{node}'}</code></dt>
            <dd>Adds a visible control to close the layer.
              If the caller provides a node, it is the caller&#39;s
              responsibility to listen to events from the node.</dd>
            <dt><code>flush    true|false</code></dt>
            <dd>Whether the contents are flush with the edges or not.
              Defaults to false.</dd>
            <dt><code>hidden   true|false</code></dt>
            <dd>Whether the contents are rendered offscreen.
              Defaults to false.</dd>
            <dt><code>peek     true|false</code></dt>
            <dd>Whether the hidden contents are shown just a bit.
              Defaults to false.</dd>
            <dt><code>onClose  {'{function ()}'}</code></dt>
            <dd>Function that will be called when the user clicks on the
              closer control. Clicking the closer control does not automatically
              cause the Layer to be removed. The recipient of this callback can
              still decide whether to continue rendering the Layer or not.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
