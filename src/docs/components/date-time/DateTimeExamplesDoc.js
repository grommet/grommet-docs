// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DateTime from 'grommet/components/DateTime';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

class DateTimeExample extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = {};
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ value: undefined });
  }

  _onChange (value) {
    this.setState({ value: value });
  }

  render () {
    return (
      <Example code={
        <Form>
          <FormField>
            <DateTime id="id" name="name" {...this.props}
              onChange={this._onChange} value={this.state.value}  />
          </FormField>
        </Form>
      } />
    );
  }

};

export default class DateTimeExamplesDoc extends ExamplesDoc {};

DateTimeExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/date-time">DateTime</NavAnchor>,
  examples: [
    { label: 'Default', component: DateTimeExample },
    { label: 'Time only, 24 hour time, seconds, step 10',
      component: DateTimeExample, props: { format: 'H:mm:ss', step: 10 } },
    { label: 'Time only, hours', component: DateTimeExample,
      props: { format: 'h a' } },
    { label: 'Date only', component: DateTimeExample,
      props: { format: 'M/D/YYYY' } }
  ],
  title: 'Examples'
};
