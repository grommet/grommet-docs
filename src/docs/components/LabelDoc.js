// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../components/DocsArticle';
import Label from 'grommet/components/Label';

Label.displayName = 'Label';

function convertLabelToString(LabelJSX) {
  return jsxToString(LabelJSX);
}

const inline =
      "<Label>\n" +
      "  ...\n" +
      "</Label>";

export default class LabelDoc extends Component {

  _renderLabelCode (Label, LabelJSX) {
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
  }

  render () {
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
};
