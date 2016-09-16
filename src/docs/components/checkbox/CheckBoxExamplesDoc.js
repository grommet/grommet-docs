// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import CheckBox from 'grommet/components/CheckBox';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

class CheckBoxExample extends Component {
  constructor () {
    super ();
    this._onChange = this._onChange.bind(this);
    this.state = { checked: false };
  }

  _onChange () {
    this.setState({checked: ! this.state.checked});
  }

  render () {
    const { checked } = this.state;
    return (
      <Example align="start" code={
        <CheckBox id="unique-id" name="label"
          onChange={this._onChange} checked={checked} {...this.props} />
      } />
    );
  }
};

export default class CheckBoxExamplesDoc extends ExamplesDoc {};

CheckBoxExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/check-box">CheckBox</NavAnchor>,
  examples: [
    { label: 'Basic', component: CheckBoxExample,
      props: { label: 'Label' } },
    { label: 'Toggle', component: CheckBoxExample,
      props: { label: 'Label', toggle: true } },
    { label: 'Disabled', component: CheckBoxExample,
      props: { label: 'Label', onChange: undefined, disabled: true } },
    { label: 'Disabled Toggle', component: CheckBoxExample,
      props: { label: 'Label', onChange: undefined, toggle: true,
        disabled: true } },
    { label: 'Reverse', component: CheckBoxExample,
      props: { label: 'Label', reverse: true } },
    { label: 'No label', component: CheckBoxExample }
  ],
  title: 'Examples'
};
