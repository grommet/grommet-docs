// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import FullForm from './samples/FullForm';
import AddUserForm from './samples/AddUserForm';
import ConfirmationForm from './samples/ConfirmationForm';

export default class FormDoc extends Component {

  _onSubmit (event) {
    event.preventDefault();
  }

  _onCancel (event) {
    event.preventDefault();
  }

  render () {
    return (
      <DocsArticle title="Form" colorIndex="neutral-3">

        <p>A web form.</p>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>compact   true|false</code></dt>
          <dd>Whether to render the form in a compact style.</dd>
          <dt><code>onSubmit  {"{function}"}</code></dt>
          <dd>A function called when the user submits the form.</dd>
          <dt><code>pad       {"none|small|medium|large|{...}"}</code></dt>
          <dd>The amount of padding to put around the contents.
            An object can be specified to distinguish horizontal and
            vertical padding: <code>
            {"{horizontal: none|small|medium|large, " +
              "vertical: none|small|medium|large}"}
            </code>. Defaults to <code>none</code>.
          </dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Regular</h3>
          <div className="example">
            <FullForm prefix="a-" onSubmit={this._onSubmit}
              onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">
            {"<Form onSubmit={...}> ..."}
          </code></pre>

          <h3>Compact</h3>
          <div className="example">
            <FullForm prefix="b-" onSubmit={this._onSubmit} compact={true}
              onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">
            {"<Form onSubmit={...} compact={true}> ..."}
          </code></pre>

          <h3>Add User</h3>
          <div className="example">
            <AddUserForm prefix="a-" onSubmit={this._onSubmit}
              onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">
            {"<Form onSubmit={...}> ..."}
          </code></pre>

          <h3>Confirmation</h3>
          <div className="example">
            <ConfirmationForm prefix="a-" onSubmit={this._onSubmit}
              onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">
            {"<Form onSubmit={...}> ..."}
          </code></pre>

          <h3>Inverse</h3>
          <Box className="example" colorIndex="neutral-1" pad="large">
            <FullForm prefix="a-" onSubmit={this._onSubmit}
              onCancel={this._onCancel} />
          </Box>
          <pre><code className="html hljs xml">
            {"<Form onSubmit={...}> ..."}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
};
