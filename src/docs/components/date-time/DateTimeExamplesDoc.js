// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DateTime from 'grommet/components/DateTime';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import InteractiveExample from '../../../components/InteractiveExample';

const PROPS_SCHEMA = {
  format: {
    options: ['M/D/YYYY h:mm a', 'M/D/YYYY', 'D/M/YYYY', 'H:mm:ss', 'h a']
  },
  step: { options: [1, 5] }
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { elementProps: {} };
  }

  _onChange (value) {
    this.setState({ value: value });
  }

  render () {
    const { elementProps, value } = this.state;
    const element = (
      <Form>
        <FormField>
          <DateTime id="id" name="name" {...elementProps}
            onChange={this._onChange} value={value} />
        </FormField>
      </Form>
    );
    return (
      <InteractiveExample contextLabel='DateTime' contextPath='/docs/date-time'
        preamble={`import DateTime from 'grommet/components/DateTime';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
