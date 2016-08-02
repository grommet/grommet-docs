// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../components/DocsArticle';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';

App.displayName = 'App';
Header.displayName = 'Header';
Title.displayName = 'Title';

const inline =
      "<App>\n" +
      "  ...\n" +
      "</App>";

export default class AppDoc extends Component {

  render () {

    const appCode = (
      <App inline={true}>
        <Header>
          <Title>My App</Title>
        </Header>
      </App>
    );

    return (
      <DocsArticle title="App" colorIndex="neutral-3">

        <p>Grommet main container, usually containing Header and Footer.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>centered  true|false</code></dt>
            <dd>
              Whether to centralize or not the content inside the container.
              Default is true.
            </dd>
            <dt><code>inline  true|false</code></dt>
            <dd>
              Whether to render the app relative to the container (inline) or
              to the browser window. Default is false.
            </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>App, header with title</h3>
          <div className="example">
            {appCode}
          </div>
          <pre><code className="html hljs xml">
            {jsxToString(appCode)}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
};
