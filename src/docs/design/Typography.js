// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Headline from 'grommet/components/Headline';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Label from 'grommet/components/Label';
import Value from 'grommet/components/Value';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

export default class Typography extends Component {

  componentDidMount () {
    var fontNameElement = this.refs.fontName;
    var fontFamily = window.getComputedStyle(fontNameElement).fontFamily;
    fontNameElement.innerHTML = fontFamily.split(',')[0];
  }

  render () {
    return (
      <DocsArticle title="Typography">

        <section>
          <p>Applications use the <span ref="fontName">Arial</span> font.  The
          typographic scale and styles can be found in the design resources.</p>
        </section>

        <section>
          <h2><Anchor path="/docs/headline">Headline</Anchor></h2>
          <Headline size="xlarge"><strong>XL Headline</strong></Headline>
          <Headline size="xlarge">XL Headline</Headline>
          <Headline size="large"><strong>Large Headline</strong></Headline>
          <Headline size="large">Large Headline</Headline>
          <Headline size="medium"><strong>Medium Headline</strong></Headline>
          <Headline size="medium">Medium Headline</Headline>
          <Headline size="small"><strong>Small Headline</strong></Headline>
          <Headline size="small">Small Headline</Headline>
        </section>

        <section>
          <h2><Anchor path="/docs/heading">Heading</Anchor></h2>
          <Heading tag="h1"><strong>H1 Heading</strong></Heading>
          <Heading tag="h1">H1 Heading</Heading>
          <Heading tag="h2"><strong>H2 Heading</strong></Heading>
          <Heading tag="h2">H2 Heading</Heading>
          <Heading tag="h3"><strong>H3 Heading</strong></Heading>
          <Heading tag="h3">H3 Heading</Heading>
          <Heading tag="h4"><strong>H4 Heading</strong></Heading>
          <Heading tag="h4">H4 Heading</Heading>
          <Heading tag="h5"><strong>H5 Heading</strong></Heading>
          <Heading tag="h5">H5 Heading</Heading>
        </section>

        <section>
          <h2><Anchor path="/docs/label">Label</Anchor></h2>
          <Box>
            <Label size="medium" uppercase={true}>Medium Label</Label>
            <Label size="medium">Medium Label</Label>
            <Label size="small" uppercase={true}>Small Label</Label>
            <Label size="small">Small Label</Label>
          </Box>
        </section>

        <section>
          <h2><Anchor path="/docs/paragraph">Paragraph</Anchor></h2>
          <Paragraph size="xlarge">XL Paragraph</Paragraph>
          <Paragraph size="large">Large Paragraph</Paragraph>
          <Paragraph size="medium">Medium Paragraph</Paragraph>
          <Paragraph size="small">Small Paragraph</Paragraph>
        </section>

        <section>
          <h2><Anchor path="/docs/value">Value</Anchor></h2>
          <Box>
            <Value size="xlarge" value={100} units="% XL" align="start" />
            <Value size="large" value={100} units="% Large" align="start" />
            <Value size="medium" value={100} units="% Medium" align="start" />
            <Value size="small" value={100} units="% Small" align="start" />
          </Box>
        </section>
      </DocsArticle>
    );
  }
};
