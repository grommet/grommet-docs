// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import CheckBox from 'grommet/components/CheckBox';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

Menu.displayName = 'Menu';
CheckBox.displayName = 'CheckBox';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

const USAGE =
`import Menu from 'grommet/components/Menu';
<Menu label="Label">
  <Anchor href="#">First action</Anchor>
  <Anchor href="#">Second action</Anchor>
</Menu>`;

export default class MenuDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Menu">

        <section>
          <p>Presents a list of choices responsively.</p>
          <Menu label="Label">
            <Anchor href="#">First action</Anchor>
            <Anchor href="#">Second action</Anchor>
          </Menu>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Defaults to true.</dd>
            <dt><code>dropAlign     {"{left: left|right, " +
              "right: left|right, top: top|bottom, " +
              "bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>
              {"{left: 'left', top: 'bottom'}"}</code> would align the
              left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be
              specified.
            </dd>
            <dt><code>icon          {"{element}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>label         {"{string}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the Menu. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Properties for <Anchor path="/docs/box">Box</Anchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Anchor primary={true} path={`/docs/menu/examples`}>
            Menu Examples
          </Anchor>
        </section>

      </DocsArticle>
    );
  }
};
