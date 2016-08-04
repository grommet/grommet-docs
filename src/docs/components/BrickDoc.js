// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Bricks from 'grommet/components/Bricks';
import Brick from 'grommet/components/Brick';
import Box from 'grommet/components/Box';
import GrommetLogo from 'grommet/components/icons/Grommet';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Brick.displayName = 'Brick';
Bricks.displayName = 'Bricks';
Box.displayName = 'Box';
GrommetLogo.displayName = 'GrommetLogo';

export default class BrickDoc extends Component {

  _onClick () {
    // No-op
  }

  render () {

    return (
      <DocsArticle title="Brick(s)" colorIndex="neutral-3">

        <p>Lay out equivalently sized Bricks of content.</p>

        <section>
          <h2>Brick Options</h2>
          <dl>
            <dt><code>label        {"{string}"}</code></dt>
            <dd>The label of the Brick.</dd>
          </dl>
          <dl>
            <dt><code>href         {"{string}"}</code></dt>
            <dd>The hyperlink reference that the Brick links to.</dd>
          </dl>
          <dl>
            <dt><code>type         small|large|wide|tall</code></dt>
            <dd>The shape type of the Brick.  Defaults to <code>small</code>.</dd>
          </dl>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color of the
              Brick.  For example: <code>"neutral-1"</code></dd>
          </dl>
          <dl>
            <dt><code>texture      {"{string}"}</code></dt>
            <dd>A texture image URL to apply to the background.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple" code={
            <Bricks>
              <Brick label="First" />
              <Brick label="Second" />
              <Brick label="Third" />
            </Bricks>
          } />

          <Example name="Varying Colors, Sizes, and Content" code={
            <Bricks>
              <Brick colorIndex="neutral-1" type="large"
                href="http://www.grommet.io/" texture="/img/carousel-1.png" />
              <Brick label="Second" colorIndex="neutral-2" type="tall" />
              <Brick label="Third" colorIndex="neutral-3">
                <GrommetLogo size="large" />
              </Brick>
              <Brick label="Fourth" colorIndex="neutral-4" />
            </Bricks>
          } />
        </section>

      </DocsArticle>
    );
  }
};
