// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import TextInput from 'grommet/components/TextInput';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  label: { value: 'Sample label', initial: true },
  help: { value: 'sample help' },
  error: { value: 'sample error' }
};

const CONTENTS_SCHEMA = {
  contents: { options: ['TextInput', 'CheckBox'] }
};

const CONTENTS_MAP = {
  'TextInput': <TextInput />,
  'CheckBox': <CheckBox label='Sample label'/>
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    const content = CONTENTS_MAP[contents.contents || 'TextInput'];
    const element = (
      <Form>
        <FormField {...elementProps}>{content}</FormField>
      </Form>
    );
    return (
      <InteractiveExample contextLabel='FormField'
        contextPath='/docs/form-field'
        preamble={`import FormField from 'grommet/components/FormField';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
