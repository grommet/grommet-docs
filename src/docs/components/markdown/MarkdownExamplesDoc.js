// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Markdown from 'grommet/components/Markdown';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const MarkdownExample = (props) => (
  <Example align="start" code={
    <Markdown {...props} />
  } />
);

const TEXT = `
# H1

Paragraph [link](/).

## H2

![image](/img/carousel-1.png)
`;

const COMPONENTS = {
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

export default class MarkdownExamplesDoc extends ExamplesDoc {};

MarkdownExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/markdown">Markdown</Anchor>,
  examples: [
    { label: 'Default', component: MarkdownExample,
      props: { content: TEXT } },
    { label: 'Custom Components', component: MarkdownExample,
      props: { content: TEXT, components: COMPONENTS } }
  ],
  title: 'Examples'
};
