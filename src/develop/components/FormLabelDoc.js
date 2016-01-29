// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var FormLabel = require('grommet/components/FormLabel');

function convertFormLabelToString(formLabelJSX) {
  return jsxToString(formLabelJSX);
}

var inline =
      "<FormLabel>\n" +
      "  ...\n" +
      "</FormLabel>";

var FormLabelDoc = React.createClass({
  _renderFormLabelCode(formLabel, formLabelJSX) {
    return (
      <div>
        <h3>{formLabel}</h3>
        <div className="example">
          {formLabelJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertFormLabelToString(formLabelJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var defaultFormLabel = (
      <FormLabel>
        Sample Form Label
      </FormLabel>
    );

    var uppercaseFormLabel = (
      <FormLabel uppercase={true}>
        Sample Form Label
      </FormLabel>
    );

    return (
      <DocsArticle title="Form Label" colorIndex="neutral-3">

        <p>Label component. Can be used with or without an associated input.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>labelFor             string</code></dt>
            <dd>ID of the form element that the label is for.  Optional.</dd>
            <dt><code>uppercase         true|false</code></dt>
            <dd>Convert the label to uppercase.  Defaults to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderFormLabelCode('Default', defaultFormLabel)}
          {this._renderFormLabelCode('Uppercase', uppercaseFormLabel)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = FormLabelDoc;
