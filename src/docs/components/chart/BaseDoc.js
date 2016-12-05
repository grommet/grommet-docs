// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class BaseDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='Base'>

        <p>The base area of a <Anchor path={`/docs/chart`}>Chart</Anchor>.
          When there are no child components, the width and height control the
          drawing area. There should be exactly one Base component within a
          Chart.</p>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>height       xxsmall|xsmall|small|medium|large|sparkline
              </code></dt>
            <dd>The height of the drawing area. Defaults
              to <code>medium</code>.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether contained children should be layed out horizontally
              or vertically. When using a horizontal layout, children will
              be given equivalent width.</dd>
            <dt><code>width        small|medium|large|full</code></dt>
            <dd>The width of the drawing area. Defaults
              to <code>medium</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
