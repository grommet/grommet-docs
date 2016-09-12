// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

export default class CardDoc extends Component {
  render () {
    return (
      <DocsArticle title="Card" colorIndex="neutral-3">

        <section>
          <p>An annotated summary of something. This could be used on a
          home/marketing page to provide snippets of content that the user
          can click through for more detail. Or, as search result items.
          All properties are optional and can be mixed and matched as
          needed.</p>
          <p>This can be used in combination
          with <NavAnchor path="/docs/columns">Columns
          </NavAnchor> or <NavAnchor path="/docs/tiles">Tiles</NavAnchor>.</p>
        </section>

        <section>
          <h2>Card Options</h2>
          <dl>
            <dt><code>description          {'{string|[string, ...]}'}
              </code></dt>
            <dd>Array of strings will that will render as multiple
              paragraphs.</dd>
            <dt><code>direction            {'column|row'}</code></dt>
            <dd>Applies the Card in a column (default) or row direction.
              Expects multiple Card modules to be wrapped in
              a <NavAnchor path="/docs/tiles">Tiles</NavAnchor> or <NavAnchor
              path="/docs/columns">Columns</NavAnchor> component.</dd>
            <dt><code>heading              {'{string}'}</code></dt>
            <dd>Content heading.</dd>
            <dt><code>label                {'{string}'}</code></dt>
            <dd>Content label.</dd>
            <dt><code>link                 {'{element}'}</code></dt>
            <dd>Anchor element to place in the anchor.
              See <NavAnchor path="/docs/anchor">Anchor</NavAnchor>.</dd>
            <dt><code>onClick              {'{function}'}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>reverse              {'true|false'}</code></dt>
            <dd>If thumbnail url is set, align thumbnail to top or bottom of
              card. Defaults to <code>false</code>.</dd>
            <dt><code>textSize             small|medium|large|xlarge</code></dt>
            <dd>Size of text within Card. Defaults to <code>medium</code>.</dd>
            <dt><code>thumbnail            {'{url}'}</code></dt>
            <dd>Url path to image. Use reverse option to position thumbnail
              within card.</dd>
            <dt><code>video                {'{source: <string>, ' +
              'type: mp4|webm|ogg}|{element}'}</code></dt>
            <dd>Video media type and source path. Also accepts
              a <NavAnchor path="/docs/video">Video</NavAnchor> element.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            also available for Card.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/card-examples`}>
            Grommet Card Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
