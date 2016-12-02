// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import CheckBox from 'grommet/components/CheckBox';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import DocsArticle from '../../../components/DocsArticle';

Menu.displayName = 'Menu';
CheckBox.displayName = 'CheckBox';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

export default class MenuDoc extends Component {

  render () {
    return (
      <DocsArticle title='Menu'
        action={
          <Button primary={true} path='/docs/menu/examples' label='Examples' />
        }>

        <section>
          <p>Presents a list of choices responsively. A Menu can either
            present the list of choices inline or within a drop down behind
            a control that opens it.</p>
          <Box direction='row' wrap={true} align='center'
            pad={{ between: 'medium' }}>
            <Menu label='Label'>
              <Anchor href='#'>First action</Anchor>
              <Anchor href='#'>Second action</Anchor>
            </Menu>
            <Menu>
              <Anchor href='#'>First action</Anchor>
              <Anchor href='#'>Second action</Anchor>
            </Menu>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Defaults to true.</dd>
            <dt><code>dropAlign     {'{left: left|right, ' +
              'right: left|right, top: top|bottom, ' +
              'bottom: top|bottom}'}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>
              {"{left: 'left', top: 'bottom'}"}</code> would align the
              left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be
              specified.
            </dd>
            <dt><code>icon          {'{element}'}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>fill          true|false</code></dt>
            <dd>Indicates whether an inline menu should take up the available
              space of its parent container or not. Defaults to false.</dd>
            <dt><code>label         {'{string}'}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the Menu. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
          also available.</p>
        </section>

      </DocsArticle>
    );
  }
};
