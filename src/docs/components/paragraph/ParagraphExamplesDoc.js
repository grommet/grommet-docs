// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import InteractiveExample from '../../../components/InteractiveExample';

Paragraph.displayName = 'Paragraph';

const TEXT = `Raised on hip-hop and foster care, defiant city kid Ricky
gets a fresh start in the New Zealand countryside. He quickly finds himself
at home with his new foster family: the loving Aunt Bella, the cantankerous
Uncle Hec, and dog Tupac. When a tragedy strikes that threatens to ship
Ricky to another home, both he and Hec go on the run in the bush. As a
national manhunt ensues, the newly branded outlaws must face their
options: go out in a blaze of glory or overcome their differences and
survive as a family.`;


const PROPS_SCHEMA = {
  size: { options: ['small', 'medium', 'large', 'xlarge'] }
};

export default class ParagraphExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    const element = <Paragraph {...elementProps}>{TEXT}</Paragraph>;
    return (
      <InteractiveExample contextLabel='Paragraph' contextPath='/docs/paragraph'
        preamble={`import Paragraph from 'grommet/components/Paragraph';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
