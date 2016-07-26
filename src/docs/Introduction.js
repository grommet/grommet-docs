// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../components/DocsArticle';
import NavAnchor from '../components/NavAnchor';
import Menu from 'grommet/components/Menu';
import { updatePageTitle } from './utils/a11y';

export default class Introduction extends Component {
  componentDidMount () {
    updatePageTitle('Docs');
  }

  render () {
    return (
      <DocsArticle title="Docs" colorIndex="neutral-1">
        <section>
          <p>Grommet was created to give developers and designers alike access to tools
          that otherwise are out of reach of most product teams. Grommet’s goal is to
          assist in creating experiences that work accross the many different interaction
          methods and screen sizes.</p>
          <Menu direction="column">
            <NavAnchor path="/docs/hello-world" primary={true}>
              Hello World
            </NavAnchor>
            <NavAnchor path="/docs/get-started" primary={true}>
              Get Started
            </NavAnchor>
            <NavAnchor path="/docs/resources" primary={true}>
              Design Resources
            </NavAnchor>
          </Menu>
        </section>
      </DocsArticle>
    );
  }
};
