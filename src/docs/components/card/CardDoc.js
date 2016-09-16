// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Card.displayName = 'Card';

const USAGE =
`import Card from 'grommet/components/Card';
<Card label="Label" thumbnail="/img/carousel-1.png"
  heading="Heading" description="Description"
  link={<Anchor href="#" primary={true} label="Link" />} />`;

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
          <p>Card could be used in combination
          with <NavAnchor path="/docs/columns">Columns
          </NavAnchor> or <NavAnchor path="/docs/tiles">Tiles</NavAnchor>.</p>

          <Card label="Label" thumbnail="/img/carousel-1.png"
            heading="Heading" description="Description"
            link={<Anchor href="#" primary={true} label="Link" />} />
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>contentPad           {"none|small|medium|large|{...}"}
              </code></dt>
            <dd>Padding for the Box containing the text content.
              See <code>pad</code> in <NavAnchor path="/docs/box">
              Box</NavAnchor> for additional details.</dd>
            <dt><code>description          {'{string}|{element}'}
              </code></dt>
            <dd>Either a string in markdown syntax or an element.
              See <NavAnchor path="/docs/markdown">
              Markdown</NavAnchor> for additional details.</dd>
            <dt><code>heading              {'{string}|{element}'}</code></dt>
            <dd>Heading content.</dd>
            <dt><code>headingStrong        true|false</code></dt>
            <dd>Whether to render the heading strongly. This only has an
              effect when the <code>heading</code> is supplied as a string.</dd>
            <dt><code>label                {'{string}|{element}'}</code></dt>
            <dd>Label content.</dd>
            <dt><code>link                 {'{element}'}</code></dt>
            <dd>Anchor element.
              See <NavAnchor path="/docs/anchor">Anchor</NavAnchor>.</dd>
            <dt><code>textSize             small|medium|large|xlarge</code></dt>
            <dd>Size of text elements within the Card.
              Defaults to <code>medium</code>. If you pass custom
              elements for <code>description</code>, <code>label</code>,
              or <code>heading</code>, they will not be resized.</dd>
            <dt><code>thumbnail            {'{string}|{element}'}</code></dt>
            <dd>Url path to image or
              an <NavAnchor path="/docs/image">Image</NavAnchor> element.
              Use the <code>reverse</code> property to position the thumbnail
              within card.</dd>
            <dt><code>video                {'{source: <string>, ' +
              'type: mp4|webm|ogg}|{element}'}</code></dt>
            <dd>Video media type and source path or
              a <NavAnchor path="/docs/video">Video</NavAnchor> element.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
            also available for Card.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/card/examples`}>
            Card Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
