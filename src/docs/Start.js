// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import DocsArticle from '../components/DocsArticle';

export default class Start extends Component {

  render () {
    return (
      <DocsArticle title="Start">
        <section>
          <p>There are a bunch of ways of get started with Grommet. Whether
          you’re a designer, developer, or just interested in technology,
          we’ve got you covered.</p>
          <Menu direction="column">
            <Anchor path="/docs/hello-world" primary={true}
              id='hello-world-anchor'>
              Hello World
            </Anchor>
            <Anchor path="/docs/get-started" primary={true}
              id='get-started-anchor'>
              Get Started
            </Anchor>
            <Anchor path="/docs/resources" primary={true}
              id='resources-anchor'>
              Design Resources
            </Anchor>
          </Menu>
        </section>
      </DocsArticle>
    );
  }
};
