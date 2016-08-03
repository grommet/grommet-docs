// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Menu from 'grommet/components/Menu';
import ConfigIcon from 'grommet/components/icons/base/Configuration';
import FilterIcon from 'grommet/components/icons/base/Filter';
import CheckBox from 'grommet/components/CheckBox';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';

Menu.displayName = 'Menu';
CheckBox.displayName = 'CheckBox';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

export default class MenuDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Menu" colorIndex="neutral-3">

        <section>
          <p>Presents a list of choices responsively.</p>
          <Menu label="Label">
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Default is true.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>{"{left: 'left', top: 'bottom'}"}</code>
              would align the left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be
              specified.
            </dd>
            <dt><code>icon          {"{icon}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the Menu. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="column, inline" code={
            <Menu>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="row, inline" code={
            <Menu direction="row">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="row, end, inline, label" code={
            <Menu direction="row" justify="end" inline={true} label="Menu">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="label, down, not inline" code={
            <Menu label="Label">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="icon, down, not inline" code={
            <Menu inline={false}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="custom icon, down, not inline" code={
            <Menu icon={<ConfigIcon />}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="custon icon, label, down, not inline" code={
            <Menu icon={<ConfigIcon />} label="Label">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="custom icon, down, not inline, do not close on click" code={
            <Menu icon={<FilterIcon />} closeOnClick={false} pad="medium">
              <CheckBox id="check-1" label="first" />
              <CheckBox id="check-2" label="second" />
              <CheckBox id="check-3" label="third" />
            </Menu>
          } />
          <Example name="not inline, up" code={
            <Menu inline={false} dropAlign={{bottom: "bottom"}}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="button bar" code={
            <Menu direction="row">
              <Button label="Button 1" onClick={this._onClick} />
              <Button label="Button 2" onClick={this._onClick} />
              <Button label="Button 3" onClick={this._onClick} />
            </Menu>
          } />
          <Example name="small" code={
            <Menu direction="row" size="small">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
          <Example name="large" code={
            <Menu direction="row" size="large">
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
            </Menu>
          } />
        </section>

      </DocsArticle>
    );
  }
};
