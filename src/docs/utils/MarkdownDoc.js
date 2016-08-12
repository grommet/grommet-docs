// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Markdown from 'grommet/components/Markdown';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

Markdown.displayName = 'Markdown';

const TEXT = `
# H1

Paragraph [link](/).

## H2

![image](/img/carousel-1.png)
`;

const components = {
  h1: {
    props: {
      strong: true
    }
  },
  h2: {
    props: {
      strong: true
    }
  },
  p: {
    props: {
      size: 'large'
    }
  },
  img: {
    props: {
      size: 'small'
    }
  }
};

export default class MarkdownDoc extends Component {

  render () {
    return (
      <DocsArticle title="Markdown" colorIndex="neutral-4">

        <p>Render <a href="http://daringfireball.net/projects/markdown/">
          markdown</a> content
          using Grommet components.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>components   {'{Component: { props: { } }}'}</code></dt>
            <dd>Set properties for components used in the markdown
              rendering. Possible components are 'a', 'h1-h6',
              'img', and 'p'</dd>
            <dt><code>content      {'{markdown text}'}</code></dt>
            <dd>The markdown text to render.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Markdown content={TEXT} />
          } />

          <Example name="Custom Props" code={
            <Markdown content={TEXT} components={components} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
