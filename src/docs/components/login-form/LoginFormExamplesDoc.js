// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import LoginForm from 'grommet/components/LoginForm';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Logo from '../../../img/Logo';
import Example from '../../Example';

const onSubmit = (fields) => {
  alert(
    `Username: ${fields.username}, Password: ${fields.password},` +
    ` rememberMe: ${fields.rememberMe}`
  );
};

const LoginFormExample = (props) => (
  <Example code={
    <LoginForm onSubmit={onSubmit} {...props} />
  } />
);

export default class LoginFormExamplesDoc extends ExamplesDoc {};

LoginFormExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/login-form">LoginForm</NavAnchor>,
  examples: [
    { label: 'Default', component: LoginFormExample },
    { label: 'Everything', component: LoginFormExample, props: {
      logo: <Logo />, title: 'Product Name',
      secondaryText: 'Product Secondary Text',
      rememberMe: true, forgotPassword: <a>Forgot password?</a>,
      errors: ['Invalid username or password.'],
      defaultValues: {
        username: 'username@grommet.io',
        rememberMe: true
      }
    } },
    { label: 'Everything, align start', component: LoginFormExample, props: {
      logo: <Logo />, title: 'Product Name', align: 'start',
      secondaryText: 'Product Secondary Text',
      rememberMe: true, forgotPassword: <a>Forgot password?</a>,
      errors: ['Invalid username or password.'],
      defaultValues: {
        username: 'username@grommet.io',
        rememberMe: true
      }
    } }
  ],
  title: 'Examples'
};
