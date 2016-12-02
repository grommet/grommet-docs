// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Quote.displayName = 'Quote';
Paragraph.displayName = 'Paragraph';

const PROPS_SCHEMA = {
  credit: { value: 'Ricky Baker', initial: true },
  emphasizeCredit: { value: true, initial: true },
  size: { options: ['small', 'medium', 'large', 'full'] },
  borderColorIndex: { options: ['brand', 'accent-1', 'accent-2'] }
};

const CONTENTS_SCHEMA = {
  line1: { value: <Paragraph>Trees. Birds. Rivers. Sky.</Paragraph>,
    initial: true },
  line2: { value: <Paragraph>Running with my Uncle Hec</Paragraph>,
    initial: true },
  line3: { value: <Paragraph>Living forever.</Paragraph>, initial: true }
};

export default class QuoteExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    const element = (
      <Quote {...elementProps}>
        {contents.line1}
        {contents.line2}
        {contents.line3}
      </Quote>
    );
    return (
      <InteractiveExample contextLabel='Quote' contextPath='/docs/quote'
        preamble={`import Quote from 'grommet/components/Quote';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};

// const SINGLE = <Paragraph>{TEXT}</Paragraph>;
// const STRONG = <Paragraph><strong>{TEXT}</strong></Paragraph>;
// const MULTIPLE = [
//   <Paragraph key={1}>Trees. Birds. Rivers. Sky.</Paragraph>,
//   <Paragraph key={2}>Running with my Uncle Hec</Paragraph>,
//   <Paragraph key={3}>Living forever.</Paragraph>
// ];
//
// const QuoteExample = (props) => (
//   <Example align="start" code={
//     <Quote {...props} />
//   } />
// );
//
// export default class QuoteExamplesDoc extends ExamplesDoc {};
//
// QuoteExamplesDoc.defaultProps = {
//   context: <Anchor path="/docs/quote">Quote</Anchor>,
//   examples: [
//     { label: 'Default', component: QuoteExample,
//       props: { children: SINGLE, credit: 'Ricky Baker' }},
//     { label: 'Small quote, emphasis reversed', component: QuoteExample,
//       props: { children: STRONG, credit: 'Ricky Baker',
//         borderColorIndex: 'accent-1', size: 'small',
//         emphasizeCredit: false }},
//     { label: 'Medium quote, multiple paragraphs', component: QuoteExample,
//       props: { children: MULTIPLE, credit: 'Ricky Baker',
//         borderColorIndex: 'accent-2', size: 'medium' }}
//   ],
//   title: 'Examples'
// };
