// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Button.displayName = 'Button';
Tiles.displayName = 'Tiles';
Tile.displayName = 'Tile';
Section.displayName = 'Section';

const USAGE =
`import Button from 'grommet/components/Button';
<Button label="Label" onClick={} />`;

export default class ButtonDoc extends Component {

  _onClick () {
    // no-op, just to ensure buttons aren't disabled
  }

  render () {
    return (
      <DocsArticle title="Button" colorIndex="neutral-3">

        <section>
          <p>A button. We have a separate component from the
          browser base so we can style it.</p>
          <Box direction="row" wrap={true} align="center"
            pad={{ between: 'medium' }}>
            <Button label="Action" onClick={this._onClick} />
            <Button label="Action" primary={true} onClick={this._onClick} />
            <Button label="Action" secondary={true} onClick={this._onClick} />
            <Button label="Action" accent={true} onClick={this._onClick} />
            <Button icon={<CloseIcon />} onClick={this._onClick} />
            <Button icon={<EditIcon />} label="Edit" onClick={this._onClick} />
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
          <dt><code>accent         true|false</code></dt>
          <dd>Whether this is an accent button.</dd>
          <dt><code>fill           true|false</code></dt>
          <dd>Whether the button expands to fill all of the available
            width and height.
          </dd>
          <dt><code>href           {"{string}"}</code></dt>
          <dd>If specified, the button will behave like an anchor tag.</dd>
          <dt><code>icon           {"{name}"}</code></dt>
          <dd>Icon element to place in the button.
            See <NavAnchor path="/docs/icon">Icon</NavAnchor>.</dd>
          <dt><code>label          {"{string|node}"}</code></dt>
          <dd>Label text to place in the button.</dd>
          <dt><code>onClick        {"{function}"}</code></dt>
          <dd>Click handler. Not providing an onClick function causes the
            control to be disabled.</dd>
          <dt><code>plain          true|false</code></dt>
          <dd>Whether this is a plain button with no border or padding. Use
            this when wrapping children that provide the complete visualization
            of the control. Do not use plain with label or icon properties.</dd>
          <dt><code>primary        true|false</code></dt>
          <dd>Whether this is a primary button. There should be at most
            one per page or screen.</dd>
          <dt><code>secondary      true|false</code></dt>
          <dd>Whether this is a secondary button.</dd>
          <dt><code>type           button|reset|submit</code></dt>
          <dd>The type of button. Set the type to <code>submit</code> for the
            default button on forms. Defaults to <code>button</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/button/examples`}>
            Button Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
