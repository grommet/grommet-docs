// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import LoginForm from 'grommet/components/LoginForm';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

LoginForm.displayName = 'LoginForm';

export default class LoginFormDoc extends Component {

  _onSubmit (fields) {
    // no-op
    alert(
      `Username: ${fields.username}, Password: ${fields.password},` +
      ` rememberMe: ${fields.rememberMe}`
    );
  }

  render () {
    return (
      <DocsArticle title='LoginForm' action={
        <Button primary={true} path={`/docs/login-form/examples`}
          label='Examples' />
        }>

        <section>
          <p>The form used to log in.</p>
          <LoginForm onSubmit={this._onSubmit} />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align           start|center|end</code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>defaultValues   {'{username: ..., ' +
              'rememberMe: true|false}'}</code></dt>
            <dd>Default values for username and rememberMe</dd>
            <dt><code>errors          {'[{message}, ...]'}</code></dt>
            <dd>An array of error messages. Use this if there is a failure
              to log in.</dd>
            <dt><code>forgotPassword  {'{element}'}</code></dt>
            <dd>A link that would take the user to a new page.</dd>
            <dt><code>logo            {'{element}'}</code></dt>
            <dd>A react node. Best suited to an svg element or a
              custom component containing an svg element.</dd>
            <dt><code>onSubmit        {'{function ({username: ..., ' +
              'password: ..., rememberMe: ...})}'}</code></dt>
            <dd>Function that will be called with the username, password and
              rememberMe provided.</dd>
            <dt><code>rememberMe      true|false</code></dt>
            <dd>Whether to include a remember me input.</dd>
            <dt><code>secondaryText   {'{string}'}</code></dt>
            <dd>Secondary text related to the product.</dd>
            <dt><code>title           {'{string}'}</code></dt>
            <dd>The product name.</dd>
            <dt><code>usernameType    text|email</code></dt>
            <dd>The type of username input. Defaults to email.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
