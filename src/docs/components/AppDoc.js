// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import App from 'grommet/components/App';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

App.displayName = 'App';
Header.displayName = 'Header';
Title.displayName = 'Title';

export default class AppDoc extends Component {

  render () {

    return (
      <DocsArticle title="App" colorIndex="neutral-3">

        <p>Grommet main container, usually containing Header and Footer.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>centered  true|false</code></dt>
            <dd>
              Whether to centralize or not the content inside the container.
              Default is true.
            </dd>
            <dt><code>inline    true|false</code></dt>
            <dd>
              Whether to render the app relative to the container (inline) or
              to the browser window. Default is false.
            </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="App, header with title" code={
            <App inline={true}>
              <Header>
                <Title>My App</Title>
              </Header>
            </App>
          } />
        </section>

      </DocsArticle>
    );
  }
};
