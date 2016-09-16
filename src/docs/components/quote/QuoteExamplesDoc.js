// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Quote from 'grommet/components/Quote';
import Paragraph from 'grommet/components/Paragraph';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const TEXT = `Uncle, you're basically a criminal now. But on the bright side,
you're famous.`;

const SINGLE = <Paragraph>{TEXT}</Paragraph>;
const STRONG = <Paragraph><strong>{TEXT}</strong></Paragraph>;
const MULTIPLE = [
  <Paragraph key={1}>Trees. Birds. Rivers. Sky.</Paragraph>,
  <Paragraph key={2}>Running with my Uncle Hec</Paragraph>,
  <Paragraph key={3}>Living forever.</Paragraph>
];

const QuoteExample = (props) => (
  <Example align="start" code={
    <Quote {...props} />
  } />
);

export default class QuoteExamplesDoc extends ExamplesDoc {};

QuoteExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/quote">Quote</NavAnchor>,
  examples: [
    { label: 'Default', component: QuoteExample,
      props: { children: SINGLE, credit: 'Ricky Baker' }},
    { label: 'Small quote, emphasis reversed', component: QuoteExample,
      props: { children: STRONG, credit: 'Ricky Baker',
        borderColorIndex: 'accent-1', size: 'small',
        emphasizeCredit: false }},
    { label: 'Medium quote, multiple paragraphs', component: QuoteExample,
      props: { children: MULTIPLE, credit: 'Ricky Baker',
        borderColorIndex: 'accent-2', size: 'medium' }}
  ],
  title: 'Examples'
};
