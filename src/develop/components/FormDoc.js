// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Box = require('grommet/components/Box');
var DocsArticle = require('../../DocsArticle');
var FullForm = require('./samples/FullForm');
var AddUserForm = require('./samples/AddUserForm');
var ConfirmationForm = require('./samples/ConfirmationForm');

var FormDoc = React.createClass({

  _onSubmit: function (event) {
    event.preventDefault();
  },

  _onCancel: function (event) {
    event.preventDefault();
  },

  render: function() {
    var inline = [
      "<Form onSubmit={...}>",
      "  <Header>...</Header>",
      "  <fieldset>",
      "    <FormField>",
      "      <label htmlFor=\"item1\">Item 1</label>",
      "      <input id=\"item1\" />",
      "    </FormField>",
      "    ...",
      "  </fieldset>",
      "  <Footer>...</Footer>",
      "</Form>"].join("\n");
    return (
      <DocsArticle title="Form" colorIndex="neutral-3">

        <p>A web form.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>compact   true|false</code></dt>
          <dd>Whether to render the form in a compact style.</dd>
          <dt><code>onSubmit  {"{func}"}</code></dt>
          <dd>A function called when the user submits the form.</dd>
          <dt><code>pad       {"none|small|medium|large|{...}"}</code></dt>
          <dd>The amount of padding to put around the contents.
            An object can be specified to distinguish horizontal and vertical padding: <code>
            {"{horizontal: none|small|medium|large, vertical: none|small|medium|large}"}
            </code>. Defaults to <code>none</code>.
          </dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Regular</h3>
          <div className="example">
            <FullForm prefix="a-" onSubmit={this._onSubmit} onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">{"<Form onSubmit={...}> ..."}</code></pre>

          <h3>Compact</h3>
          <div className="example">
            <FullForm prefix="b-" onSubmit={this._onSubmit} compact={true} onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">{"<Form onSubmit={...} compact={true}> ..."}</code></pre>

          <h3>Add User</h3>
          <div className="example">
            <AddUserForm prefix="a-" onSubmit={this._onSubmit} onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">{"<Form onSubmit={...}> ..."}</code></pre>

          <h3>Confirmation</h3>
          <div className="example">
            <ConfirmationForm prefix="a-" onSubmit={this._onSubmit} onCancel={this._onCancel} />
          </div>
          <pre><code className="html hljs xml">{"<Form onSubmit={...}> ..."}</code></pre>

          <h3>Inverse</h3>
          <Box className="example" colorIndex="neutral-1" pad="large">
            <FullForm prefix="a-" onSubmit={this._onSubmit} onCancel={this._onCancel} />
          </Box>
          <pre><code className="html hljs xml">{"<Form onSubmit={...}> ..."}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = FormDoc;
