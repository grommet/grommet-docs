// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Paragraph from 'grommet/components/Paragraph';
import Anchor from 'grommet/components/Anchor';
import ExamplesDoc from '../../../components/ExamplesDoc';
import Example from '../../Example';

const TEXT = `Raised on hip-hop and foster care, defiant city kid Ricky
gets a fresh start in the New Zealand countryside. He quickly finds himself
at home with his new foster family: the loving Aunt Bella, the cantankerous
Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
Ricky to another home, both he and Hec go on the run in the bush. As a
national manhunt ensues, the newly branded outlaws must face their
options: go out in a blaze of glory or overcome their differences and
survive as a family.`;

const ParagraphExample = (props) => (
  <Example align="start" code={
    <Paragraph {...props}>{TEXT}</Paragraph>
  } />
);

export default class ParagraphExamplesDoc extends ExamplesDoc {};

ParagraphExamplesDoc.defaultProps = {
  context: <Anchor path="/docs/paragraph">Paragraph</Anchor>,
  examples: [
    { label: 'Default', component: ParagraphExample },
    { label: 'Small', component: ParagraphExample, props: { size: 'small' } },
    { label: 'Large', component: ParagraphExample, props: { size: 'large' } },
    { label: 'XLarge', component: ParagraphExample, props: { size: 'xlarge' } }
  ],
  title: 'Examples'
};
