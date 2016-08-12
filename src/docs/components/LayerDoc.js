// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Layer from 'grommet/components/Layer';
import Header from 'grommet/components/Header';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import FullForm from './samples/FullForm';
import ConfirmationForm from './samples/ConfirmationForm';
import SampleArticle from './samples/SampleArticle';

Box.displayName = 'Box';
Layer.displayName = 'Layer';
Header.displayName = 'Header';
Form.displayName = 'Form';
FormFields.displayName = 'FormFields';

export default class LayerDoc extends Component {

  constructor () {
    super();
    this._onOpen = this._onOpen.bind(this);
    this._onClose = this._onClose.bind(this);
    this.state = { active: undefined };
  }

  _onOpen (which) {
    this.setState({active: which});
  }

  _onClose (event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({active: null});
  }

  render () {

    var simpleLayer = (
      <Layer onClose={this._onClose} closer={true}
        align="top">
        <Form>
          <Header>
            <h2>Title</h2>
          </Header>
          <FormFields>
            <p>This is a simple dialog.</p>
          </FormFields>
        </Form>
      </Layer>
    );

    var editLayer = (
      <Layer onClose={this._onClose} closer={true}
        align="left">
        <FullForm onCancel={this._onClose} onSubmit={this._onClose} />
      </Layer>
    );

    var confirmationLayer = (
      <Layer onClose={this._onClose} closer={true}
        align="right">
        <ConfirmationForm onCancel={this._onClose} onSubmit={this._onClose} />
      </Layer>
    );

    var articleLayer = (
      <Layer onClose={this._onClose} closer={true} flush={true}
        align="center">
        <SampleArticle />
      </Layer>
    );

    var activeLayer = null;
    if (this.state.active) {
      switch (this.state.active) {
        case 'simple':
          activeLayer = simpleLayer;
          break;
        case 'edit':
          activeLayer = editLayer;
          break;
        case 'confirmation':
          activeLayer = confirmationLayer;
          break;
        case 'article':
          activeLayer = articleLayer;
          break;
      }
    }

    return (
      <DocsArticle title="Layer" colorIndex="neutral-3">

        <p>A modal overlay, often containing a <a>Form</a>.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align    center|top|bottom|left|right</code></dt>
            <dd>Which direction the layer contents should emanate from.</dd>
            <dt><code>closer   {"true|false|{node}"}</code></dt>
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
            <dt><code>onClose  {"{function ()}"}</code></dt>
            <dd>Function that will be called when the user clicks on the
              closer control. Clicking the closer control does not automatically
              cause the Layer to be removed. The recipient of this callback can
              still decide whether to continue rendering the Layer or not.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple, top" control={
            <button onClick={this._onOpen.bind(this, 'simple')}>simple</button>
            } code={simpleLayer} />
          <Example name="Edit, left" control={
            <button onClick={this._onOpen.bind(this, 'edit')}>edit</button>
            } code={editLayer} />
          <Example name="Confirmation, right" control={
            <button onClick={this._onOpen.bind(this, 'confirmation')}>
              confirmation
            </button>
            } code={confirmationLayer} />
          <Example name="Article, center" control={
            <button onClick={this._onOpen.bind(this, 'edit')}>edit</button>
            } code={articleLayer} />
        </section>

        {activeLayer}

      </DocsArticle>
    );
  }
};
