// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Tags from 'grommet/components/Tags';
import Tag from 'grommet/components/Tag';

Tags.displayName = 'Tags';
Tag.displayName = 'Tag';

export default class TagsDoc extends Component {

  _onClick () {
    // No-op
  }

  render () {
    var inline =
      "<Tags>\n" +
      "  <Tag />\n" +
      "  ...\n" +
      "</Tags>";

    return (
      <DocsArticle title="Tag(s)" colorIndex="neutral-3">

        <p>A list of tags. The preferred method of populating Tags is to use Tag children.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Tags Options</h2>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout the child components in.
              Defaults to <code>row</code>.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Tag Options</h2>
          <dl>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Label text for the tag.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/anchor">Anchor</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>
          <p>These examples show a variety of different options for the Tags.</p>
          <Example name="Default" code={
            <Tags>
              <Tag label="First" />
              <Tag label="Second" />
              <Tag label="Third" />
            </Tags>
          } />
          <Example name="Column" code={
            <Tags direction="column">
              <Tag label="First" />
              <Tag label="Second" />
              <Tag label="Third" />
            </Tags>
          } />
        </section>

      </DocsArticle>
    );
  }
};
