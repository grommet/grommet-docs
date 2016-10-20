// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Menu from 'grommet/components/Menu';
import DocsArticle from '../components/DocsArticle';

export default class Introduction extends Component {

  render () {
    return (
      <DocsArticle title="Docs" colorIndex="neutral-1">
        <section>
          <p>Grommet was created to give developers and designers alike access
            to tools
          that otherwise are out of reach of most product teams. Grommet’s
          goal is to
          assist in creating experiences that work accross the many different
          interaction
          methods and screen sizes.</p>
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
