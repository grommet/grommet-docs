// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Markdown from 'grommet/components/Markdown';
import InteractiveExample from '../../../components/InteractiveExample';

Markdown.displayName = 'Markdown';

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

const PROPS_SCHEMA = {
  components: { value: COMPONENTS }
};

export default class MarkdownExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Markdown {...elementProps} content={TEXT} />;
    return (
      <InteractiveExample contextLabel='Markdown' contextPath='/docs/markdown'
        preamble={`import Markdown from 'grommet/components/Markdown';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};


// import Anchor from 'grommet/components/Anchor';
// import ExamplesDoc from '../../../components/ExamplesDoc';
// import Example from '../../Example';
//
// Markdown.displayName = 'Markdown';
//
// const MarkdownExample = (props) => (
//   <Example align="start" code={
//     <Markdown {...props} />
//   } />
// );
//
// const TEXT = `
// # H1
//
// Paragraph [link](/).
//
// ## H2
//
// ![image](/img/carousel-1.png)
// `;
//
// const COMPONENTS = {
//   h1: {
//     props: {
//       strong: true
//     }
//   },
//   h2: {
//     props: {
//       strong: true
//     }
//   },
//   p: {
//     props: {
//       size: 'large'
//     }
//   },
//   img: {
//     props: {
//       size: 'small'
//     }
//   }
// };
//
// export default class MarkdownExamplesDoc extends ExamplesDoc {};
//
// MarkdownExamplesDoc.defaultProps = {
//   context: <Anchor path="/docs/markdown">Markdown</Anchor>,
//   examples: [
//     { label: 'Default', component: MarkdownExample,
//       props: { content: TEXT } },
//     { label: 'Custom Components', component: MarkdownExample,
//       props: { content: TEXT, components: COMPONENTS } }
//   ],
//   title: 'Examples'
// };
