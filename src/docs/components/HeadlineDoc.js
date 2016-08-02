// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../components/DocsArticle';
import Headline from 'grommet/components/Headline';

// function convertHeadingToString(headingJSX) {
//   return jsxToString(headingJSX);
// }
Headline.displayName = 'Headline';

const inline =
      "<Headline>\n" +
      "  ...\n" +
      "</Headline>";

export default class HeadlineDoc extends Component {

  _renderCode (name, jsx) {
    return (
      <div>
        <h3>{name}</h3>
        <div className="example">
          {jsx}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(jsx)}
        </code></pre>
      </div>
    );
  }

  render () {
    var simpleHeadline = (
      <Headline>
        Sample Headline
      </Headline>
    );

    var strongHeadline = (
      <Headline strong={true}>
        Sample Headline
      </Headline>
    );

    var smallHeadline = (
      <Headline size="small">
        Sample Headline
      </Headline>
    );

    var largeHeadline = (
      <Headline size="large">
        Sample Headline
      </Headline>
    );

    return (
      <DocsArticle title="Headline" colorIndex="neutral-3">

        <p>Headline text, usually used in marketing pages.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align       start|center|end</code></dt>
            <dd>The horizontal alignment of the Headline. Defaults
              to <code>start</code>.</dd>
            <dt><code>margin      none|small|medium|large</code></dt>
            <dd>The vertical margin below the Headline. Defaults
              to <code>medium</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Headline. Defaults to <code>medium</code>.</dd>
            <dt><code>strong      true|false</code></dt>
            <dd>If the headline should be bold.  Defaults
              to <code>false</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderCode('Default', simpleHeadline)}
          {this._renderCode('Strong', strongHeadline)}
          {this._renderCode('Small', smallHeadline)}
          {this._renderCode('Large', largeHeadline)}
        </section>

      </DocsArticle>
    );
  }
};
