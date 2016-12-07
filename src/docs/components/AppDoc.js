// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import App from 'grommet/components/App';
import Box from 'grommet/components/Box';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

App.displayName = 'App';

export default class AppDoc extends Component {

  constructor () {
    super();
    this.state = { priority: 'right' };
  }

  render () {
    const { priority } = this.state;
    return (
      <DocsArticle title='App'>

        <section>
          <p>This is the primary Grommet container outer. Typically it will
            either contain a <Anchor path='/docs/split'>Split</Anchor> or
            an <Anchor path='/docs/article'>Article</Anchor>.</p>

          <Box pad={{ between: 'large' }} direction='column'>

            <Split fixed={false} flex='right' priority={priority}>
              <Sidebar full={false}>
                <Box pad='large' colorIndex='grey-5'
                  justify='center' align='center'
                  onClick={() => this.setState({ priority: 'right' })}>
                  Sidebar
                </Box>
              </Sidebar>
              <Box pad='large' colorIndex='light-2'
                justify='center' align='center'
                onClick={() => this.setState({ priority: 'left' })}>
                Main content
              </Box>
            </Split>

            <Article colorIndex='light-2'>
              <Header colorIndex='grey-5' justify='center' align='center'>
                Header
              </Header>
              <Section pad='large' justify='center' align='center'>
                Sections
              </Section>
              <Footer colorIndex='grey-5' justify='center' align='center'>
                Footer
              </Footer>
            </Article>

          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>centered  true|false</code></dt>
            <dd>Whether to centralize or not the content inside the container.
              Defaults to true.</dd>
            <dt><code>inline    true|false</code></dt>
            <dd> Whether o render the app relative to the container (inline) or
              to the browser window. Defaults to false.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import App from 'grommet/components/App';`}>
            <App>
              {'{contents}'}
            </App>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
