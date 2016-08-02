// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Button from 'grommet/components/Button';
import Section from 'grommet/components/Section';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import CloseIcon from 'grommet/components/icons/base/Close';
import EditIcon from 'grommet/components/icons/base/Edit';

Button.displayName = 'Button';
Tiles.displayName = 'Tiles';
Tile.displayName = 'Tile';
Section.displayName = 'Section';

export default class ButtonDoc extends Component {

  _onClick () {
    // no-op, just to ensure buttons aren't disabled
  }

  render () {
    return (
      <DocsArticle title="Button" colorIndex="neutral-3">

        <p>A button. We have a separate component from the
        browser base so we can style it.</p>
        <pre><code className="html hljs xml">
          {`<Button label="Item 1">`}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>accent         true|false</code></dt>
          <dd>Whether this is an accent button.</dd>
          <dt><code>fill           true|false</code></dt>
          <dd>Whether the button expands to fill all of the available
            width and height.
          </dd>
          <dt><code>href           {"{text}"}</code></dt>
          <dd>If specified, the button will behave like an anchor tag.</dd>
          <dt><code>icon           {"{name}"}</code></dt>
          <dd>Icon element to place in the button.
            See <NavAnchor path="/docs/icon">Icon</NavAnchor>.</dd>
          <dt><code>label          {"{text|node}"}</code></dt>
          <dd>Label text to place in the button.</dd>
          <dt><code>onClick        {"{func}"}</code></dt>
          <dd>Click handler. Not providing an onClick function causes the
            control to be disabled.</dd>
          <dt><code>plain          true|false</code></dt>
          <dd>Whether this is a plain button with no border or padding. Use
            this when wrapping children that provide the complete visualization
            of the control.</dd>
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
          <Example name="Default" code={
            <Button label="Action" onClick={this._onClick} />
          } />
          <Example name="Primary" code={
            <Button label="Action" primary={true} onClick={this._onClick} />
          } />
          <Example name="Secondary" code={
            <Button label="Action" secondary={true} onClick={this._onClick} />
          } />
          <Example name="Accent" code={
            <Button label="Action" accent={true} onClick={this._onClick} />
          } />
          <Example name="Icon" code={
            <Button icon={<CloseIcon />} onClick={this._onClick} />
          } />
          <Example name="Icon, label" code={
            <Button icon={<EditIcon />} label="Edit" onClick={this._onClick} />
          } />
          <Example name="Icon, label, plain" code={
            <Button icon={<EditIcon />} label="Edit" plain={true}
              onClick={this._onClick} />
          } />
          <Example name="Disabled" code={
            <Button label="Action" />
          } />
          <Example name="Long" code={
            <Button label="Action with a really long name that should be shortened"
              onClick={this._onClick} />
          } />
          <Example name="Fill" code={
            <Tiles fill={true}>
              <Tile pad="small">
                <Button fill={true} onClick={this._onClick} label="One With Long Text" />
              </Tile>
              <Tile pad="small">
                <Button fill={true} onClick={this._onClick} label="Two" />
              </Tile>
              <Tile pad="small">
                <Button fill={true} onClick={this._onClick} label="Three" />
              </Tile>
              <Tile pad="small">
                <Button fill={true} onClick={this._onClick} label="Four" />
              </Tile>
            </Tiles>
          } />
          <Example name="Colored context" code={
            <Section colorIndex="neutral-1" align="start"
              pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>
              <Button label="Default" onClick={this._onClick} />
              <Button label="Primary" primary={true} onClick={this._onClick} />
              <Button label="Secondary" secondary={true} onClick={this._onClick} />
              <Button label="Accent" accent={true} onClick={this._onClick} />
              <Button label="Disabled" />
              <Button icon={<CloseIcon />} onClick={this._onClick} />
            </Section>
          } />
          <Example name="Href" code={
            <Button href="/" label="Home Page" />
          } />
        </section>

      </DocsArticle>
    );
  }
};
