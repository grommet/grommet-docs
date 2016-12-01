// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (
  <span>
    An annotated summary of something. This could be used on a
    home/marketing page to provide snippets of content that the user
    can click through for more detail. Or, as search result items.
    All properties are optional and can be mixed and matched as
    needed.
  </span>
);

export default class CardDoc extends Component {
  render () {
    return (
      <DocsArticle title='Card' action={
        <Button primary={true} path='/docs/card/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <p>Card could be used in combination
          with <Anchor path='/docs/columns'>Columns
          </Anchor> or <Anchor path='/docs/tiles'>Tiles</Anchor>.</p>

          <Box pad='medium' colorIndex='light-2'>
            <Card label='Label' thumbnail='/img/carousel-1.png'
              heading='Heading' description='Description'
              link={<Anchor href='#' primary={true} label='Link' />}
              colorIndex='light-1' />
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>contentPad           {"none|small|medium|large|{...}"}
              </code></dt>
            <dd>Padding for the Box containing the text content.
              See <code>pad</code> in <Anchor path="/docs/box">
              Box</Anchor> for additional details.</dd>
            <dt><code>description          {'{string}|{element}'}
              </code></dt>
            <dd>Either a string in markdown syntax or an element.
              See <Anchor path='/docs/markdown'>
              Markdown</Anchor> for additional details.</dd>
            <dt><code>heading              {'{string}|{element}'}</code></dt>
            <dd>Heading content.</dd>
            <dt><code>headingStrong        true|false</code></dt>
            <dd>Whether to render the heading strongly. This only has an
              effect when the <code>heading</code> is supplied as a string.</dd>
            <dt><code>label                {'{string}|{element}'}</code></dt>
            <dd>Label content.</dd>
            <dt><code>link                 {'{element}'}</code></dt>
            <dd>Anchor element.
              See <Anchor path='/docs/anchor'>Anchor</Anchor>.</dd>
            <dt><code>textSize             small|medium|large|xlarge</code></dt>
            <dd>Size of text elements within the Card.
              Defaults to <code>medium</code>. If you pass custom
              elements for <code>description</code>, <code>label</code>,
              or <code>heading</code>, they will not be resized.</dd>
            <dt><code>thumbnail            {'{string}|{element}'}</code></dt>
            <dd>Url path to image or
              an <Anchor path='/docs/image'>Image</Anchor> element.
              Use the <code>reverse</code> property to position the thumbnail
              within card.</dd>
            <dt><code>video                {'{source: <string>, ' +
              'type: mp4|webm|ogg}|{element}'}</code></dt>
            <dd>Video media type and source path or
              a <Anchor path='/docs/video'>Video</Anchor> element.</dd>
          </dl>
          <p>Properties for <Anchor path='/docs/box'>Box</Anchor> are
            also available for Card.</p>
        </section>

      </DocsArticle>
    );
  }
};
