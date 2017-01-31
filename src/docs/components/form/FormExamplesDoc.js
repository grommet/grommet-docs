// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Paragraph from 'grommet/components/Paragraph';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import InteractiveExample from '../../../components/InteractiveExample';
import AllFieldTypes from './AllFieldTypes';

const PROPS_SCHEMA = {
  compact: { value: true },
  pad: { options: ['none', 'small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  header: { value: (
    <Header><Heading tag='h1'>Sample Header</Heading></Header>
  ), initial: true },
  confirmation: { value: (
    <fieldset>
      <Paragraph>
        You must acknowledge the destructive aspects of this action.
      </Paragraph>
      <FormField>
      <CheckBox id={'agree'} name='agree'
        label='I acknowledge that I may lose data.' />
      </FormField>
    </fieldset>
  )},
  'all-types': { value: <AllFieldTypes /> },
  footer: { value: (
    <Footer pad={{vertical: 'medium'}}>
      <Button label='Submit' type='submit' primary={true}
        onClick={() => alert('submit')} />
    </Footer>
  ), initial: true }
};

export default class FormExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Form {...elementProps}>
        {contents.header}
        <FormFields>
          {contents.confirmation}
          {contents['all-types']}
        </FormFields>
        {contents.footer}
      </Form>
    );

    let preamble = `import Form from 'grommet/components/Form';`;
    if (contents['all-types']) {
      preamble +=
        "\n// Please see the documentation for each" +
        "\n// field's component for further example" +
        "\n// details of that component.";
    }

    return (
      <InteractiveExample contextLabel='Form' contextPath='/docs/form'
        preamble={preamble}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
