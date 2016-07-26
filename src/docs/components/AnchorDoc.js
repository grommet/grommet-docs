// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Section from 'grommet/components/Section';
import Anchor from 'grommet/components/Anchor';
import NextIcon from 'grommet/components/icons/base/Next';
import EditIcon from 'grommet/components/icons/base/Edit';
import { updatePageTitle } from '../utils/a11y';

Section.displayName = 'Section';
Anchor.displayName = 'Anchor';

export default class AnchorDoc extends Component {

  componentDidMount () {
    updatePageTitle('Anchor');
  }

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Anchor" colorIndex="neutral-3">

        <p>A text link. We have a separate component from the
        browser base so we can style it. You can either set the icon and/or
        label properties or just use children.</p>
        <pre><code className="html hljs xml">
          {"<Anchor href=\"...\">label</Anchor>"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>disabled       true|false</code></dt>
            <dd>
              Whether to disable the anchor. Default is false.
            </dd>
            <dt><code>href           {"{location}"}</code></dt>
            <dd>Hyperlink reference to place in the anchor.</dd>
            <dt><code>icon           {"{element}"}</code></dt>
            <dd>Icon element to place in the anchor.
              See <NavAnchor path="/develop/icon">Icon</NavAnchor>.</dd>
            <dt><code>label          {"{text}"}</code></dt>
            <dd>Label text to place in the anchor.</dd>
            <dt><code>onClick        {"{func}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>primary        true|false</code></dt>
            <dd>Whether this is a primary anchor.</dd>
            <dt><code>reverse        true|false</code></dt>
            <dd>Whether an icon and label should be reversed so that the icon
              is at the end of the anchor.</dd>
            <dt><code>tag            {"{text}"}</code></dt>
            <dd>The DOM tag to use for the element. The default is {'<a>'}.
              This should be used in conjunction with components like
              Link from React Router. In this case, Link controls the
              navigation while Anchor controls the styling.</dd>
            <dt><code>target         {"{location}"}</code></dt>
            <dd>
              Target of the link,
              examples targets=_blank|_self|_parent|_top|framename.
            </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>
          <Example name="Default" code={
            <Anchor href="" onClick={this._onClick}>Child text</Anchor>
          } />
          <Example name="Primary, Label" code={
            <Anchor href="" label="Label" primary={true}
              onClick={this._onClick} />
          } />
          <Example name="Icon, Label" code={
            <Anchor href="" icon={<EditIcon />} label="Edit"
              onClick={this._onClick} />
          } />
          <Example name="Icon, Label, Reverse" code={
            <Anchor href="" icon={<NextIcon />} label="Next" reverse={true}
              onClick={this._onClick} />
          } />
          <Example name="Icon" code={
            <Anchor href="" icon={<EditIcon />} onClick={this._onClick} />
          } />
          <Example name="Target" code={
            <Anchor href="" target="_blank" label="Label" onClick={this._onClick} />
          } />
          <Example name="Disabled" code={
            <Anchor primary={true} disabled={true}>Text</Anchor>
          } />
          <Example name="In a Header" code={
            <h3>
              <Anchor href="" label="Label" onClick={this._onClick} />
            </h3>
          } />
          <Example name="Colored context" code={
            <Section colorIndex="neutral-1"
              pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>
              <Anchor href="" onClick={this._onClick}>Text</Anchor>
              <Anchor href="" primary={true} label="Label" onClick={this._onClick} />
              <Anchor href="" icon={<EditIcon />} onClick={this._onClick} />
              <Anchor href="" icon={<EditIcon />} label="Edit" onClick={this._onClick} />
            </Section>
          } />
        </section>
      </DocsArticle>
    );
  }
};
