// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Section from 'grommet/components/Section';
import Headline from 'grommet/components/Headline';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  direction: { options: ['row', 'column'] },
  scrollStep: { value: true },
  controls: { value: true }
};

export default class ArticleExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    let propsSchema = { ...PROPS_SCHEMA };
    let props = { ...elementProps };

    if (! props.scrollStep) {
      delete props.controls;
      delete propsSchema.controls;
    }

    let sectionFull;
    if (elementProps.scrollStep) {
      sectionFull =
        elementProps.direction === 'row' ? true : 'vertical';
    } else if (elementProps.direction === 'row') {
      sectionFull = 'vertical';
    }

    const element = (
      <Article {...props}>
        <Section pad='large' justify='center' align='center' full={sectionFull}>
          <Headline margin='none'>Section 1</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full={sectionFull}
          colorIndex='grey-4'>
          <Headline margin='none'>Section 2</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full={sectionFull}>
          <Headline margin='none'>Section 3</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full={sectionFull}
          colorIndex='grey-4'>
          <Headline margin='none'>Section 4</Headline>
        </Section>
        <Section pad='large' justify='center' align='center' full={sectionFull}>
          <Headline margin='none'>Section 5</Headline>
        </Section>
      </Article>
    );
    return (
      <InteractiveExample contextLabel='Article' contextPath='/docs/article'
        preamble={`import Article from 'grommet/components/Article';`}
        propsSchema={propsSchema} pad='none' align='stretch'
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
