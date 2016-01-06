// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Box = require('grommet/components/Box');
var Layer = require('grommet/components/Layer');
var Header = require('grommet/components/Header');
var Form = require('grommet/components/Form');
var FormFields = require('grommet/components/FormFields');
var FullForm = require('./samples/FullForm');
var ConfirmationForm = require('./samples/ConfirmationForm');
var SampleArticle = require('./samples/SampleArticle');

function convertLayerToString(layerJSX) {
  return jsxToString(layerJSX, {
    keyValueOverride: {
      onClose: 'this._onClose',
      onCancel: 'this._onClose',
      onSubmit: 'this._onClose'
    }
  });
}

var LayerDoc = React.createClass({

  getInitialState: function () {
    return {
      active: undefined
    };
  },

  _onOpen: function (which) {
    this.setState({active: which});
  },

  _onClose: function (event) {
    if (event) {
      event.preventDefault();
    }
    this.setState({active: null});
  },

  _renderLayerCode: function (heading, id, layerJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <button onClick={this._onOpen.bind(this, id)}>
          {id}
        </button>
        <Box pad={{vertical: "small"}}>
          <pre><code className="html hljs xml">
            {convertLayerToString(layerJSX)}
          </code></pre>
        </Box>
      </div>
    );
  },

  render: function() {

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
        <pre><code className="html hljs xml">
          {"<Layer>\n  ...\n</Layer>"}
        </code></pre>

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
            <dt><code>onClose  {"function () {...}"}</code></dt>
            <dd>Function that will be called when the user clicks on the
              closer control. Clicking the closer control does not automatically
              cause the Layer to be removed. The recipient of this callback can
              still decide whether to continue rendering the Layer or not.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderLayerCode('Simple, top', 'simple', simpleLayer)}
          {this._renderLayerCode('Edit, left', 'edit', editLayer)}
          {this._renderLayerCode(
            'Confirmation, right', 'confirmation', confirmationLayer
          )}
          {this._renderLayerCode('Article, center', 'article', articleLayer)}
        </section>

        {activeLayer}

      </DocsArticle>
    );
  }
});

module.exports = LayerDoc;
