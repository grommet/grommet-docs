// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Label = require('grommet/components/Label');
var A11y = require('../../utils/a11y');

Label.displayName = 'Label';

function convertLabelToString(LabelJSX) {
  return jsxToString(LabelJSX);
}

var inline =
      "<Label>\n" +
      "  ...\n" +
      "</Label>";

var LabelDoc = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Label');
  },

  _renderLabelCode(Label, LabelJSX) {
    return (
      <div>
        <h3>{Label}</h3>
        <div className="example">
          {LabelJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertLabelToString(LabelJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var defaultLabel = (
      <Label>
        Sample Label
      </Label>
    );

    var uppercaseLabel = (
      <Label uppercase={true}>
        Sample Label
      </Label>
    );

    return (
      <DocsArticle title=" Label" colorIndex="neutral-3">

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

          {this._renderLabelCode('Default', defaultLabel)}
          {this._renderLabelCode('Uppercase', uppercaseLabel)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = LabelDoc;
