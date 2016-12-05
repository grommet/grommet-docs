// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Anchor from 'grommet/components/Anchor';
import Logo from '../../../img/Logo';
import InteractiveExample from '../../../components/InteractiveExample';

LoginForm.displayName = 'LoginForm';

const PROPS_SCHEMA = {
  logo: { value: <Logo /> },
  title: { value: 'Sample Title' },
  secondaryText: { value: 'Sample secondary text' },
  forgotPassword: { value: <Anchor href='#' label='Forgot password?' /> },
  align: { options: ['start', 'center', 'end'] },
  rememberMe: { value: true },
  usernameType: { options: ['text', 'email'] }
};

export default class ImageExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  _onSubmit (fields) {
    alert(
      `Username: ${fields.username}, Password: ${fields.password},` +
      ` rememberMe: ${fields.rememberMe}`
    );
  }

  render () {
    const { elementProps } = this.state;
    const element = <LoginForm onSubmit={this._onSubmit} {...elementProps} />;
    return (
      <InteractiveExample contextLabel='LoginForm'
        contextPath='/docs/login-form'
        preamble={`import LoginForm from 'grommet/components/LoginForm';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
