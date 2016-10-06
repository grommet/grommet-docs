// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import CheckBox from 'grommet/components/CheckBox';
import RadioButton from 'grommet/components/RadioButton';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Validator from 'grommet/utils/Validator';
import Example from '../../Example';

export default class AddUserFormExample extends Component {

  constructor () {
    super();
    this._validate = this._validate.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onChangeCheckBox = this._onChangeCheckBox.bind(this);
    this.state = {
      user: {
        login: '',
        name: '',
        password: '',
        role: 'specialized',
        backupAdmin: false,
        networkAdmin: false,
        serverAdmin: false,
        storageAdmin: false,
        email: '',
        officePhone: '',
        mobilePhone: ''
      },
      validation: {errors: {}},
      submitting: false
    };
  }

  componentDidUpdate () {
    const errors = document.querySelectorAll('.form-field--error');
    if (errors.length > 0) {
      const input = errors[0].querySelectorAll('input')[0];
      if (input) {
        input.focus();
      }
    }
  }

  _validate (submitting) {
    const user = this.state.user;

    const rules = [
      {field: 'login', test: (! user.login), message: 'required'},
      {field: 'password', tests: [
        {test: (! user.password), message: 'required'},
        {test: (user.password.length < 8),
          message: 'must be at least 8 characters'}
      ]}
    ];

    const validation = Validator.validate(rules);

    if (submitting) {
      this.setState({validation: validation});
    }

    return validation.valid;
  }

  _onSubmit (event) {
    event.preventDefault();
    const valid = this._validate(true);
    if (valid) {
      this.props.onSubmit();
    }
  }

  _onChange (event) {
    let user = this.state.user;
    user[event.target.getAttribute('name')] = event.target.value;
    this.setState({user: user});
    this._validate(false);
  }

  _onChangeCheckBox (event) {
    let user = this.state.user;
    user[event.target.getAttribute('name')] = event.target.checked;
    this.setState({user: user});
    this._validate(false);
  }

  render () {
    const p = this.props.prefix;
    const user = this.state.user;
    const errors = this.state.validation.errors;

    return (
      <Example align="start" code={
        <Form onSubmit={this._onSubmit} compact={this.props.compact}>
          <Header>
            <h1>Add User</h1>
          </Header>
          <FormFields>
            <fieldset>
              <FormField label="Login name" htmlFor={p + "login"}
                error={errors.login}>
                <input id={p + "login"} name="login" type="text"
                  value={user.login} onChange={this._onChange} />
              </FormField>
              <FormField label="Full name" htmlFor={p + "name"}
                error={errors.name}>
                <input id={p + "name"} name="name" type="text"
                  value={user.name} onChange={this._onChange} />
              </FormField>
              <FormField label="Password" htmlFor={p + "password"}
                error={errors.password}>
                <input id={p + "password"} name="password" type="password"
                  value={user.password} onChange={this._onChange} />
              </FormField>
            </fieldset>

            <fieldset>
              <legend>Role</legend>
              <FormField>
                <RadioButton id={p + "role-specialized"} name="role"
                  label="Specialized"
                  value="specialized" checked={user.role === 'specialized'}
                  onChange={this._onChange} />
                <FormField hidden={user.role !== 'specialized'}>
                  <CheckBox id={p + "sub-role-backup"} name="backupAdmin"
                    label="Backup administrator"
                    checked={user.backupAdmin}
                    onChange={this._onChangeCheckBox} />
                  <CheckBox id={p + "sub-role-network"} name="networkAdmin"
                    label="Network administrator"
                    checked={user.networkAdmin}
                    onChange={this._onChangeCheckBox} />
                  <CheckBox id={p + "sub-role-server"} name="serverAdmin"
                    label="Server administrator"
                    checked={user.serverAdmin}
                    onChange={this._onChangeCheckBox} />
                  <CheckBox id={p + "sub-role-storage"} name="storageAdmin"
                    label="Storage administrator"
                    checked={user.storageAdmin}
                    onChange={this._onChangeCheckBox} />
                </FormField>
              </FormField>
              <FormField>
                <RadioButton id={p + "role-full"} name="role" label="Full"
                  value="full" checked={user.role === 'full'}
                  onChange={this._onChange} />
              </FormField>
              <FormField>
                <RadioButton id={p + "role-read-only"} name="role"
                  label="Read only"
                  value="read-only" checked={user.role === 'read-only'}
                  onChange={this._onChange} />
              </FormField>
            </fieldset>

            <fieldset>
              <legend>Contact</legend>
              <FormField label="Email" htmlFor={p + "email"}>
                <input id={p + "email"} name="email" type="text"
                  value={user.email} onChange={this._onChange} />
              </FormField>
              <FormField label="Office phone" htmlFor={p + "office-phone"}>
                <input id={p + "office-phone"} name="officePhone" type="text"
                  value={user.officePhone} onChange={this._onChange} />
              </FormField>
              <FormField label="Mobile phone" htmlFor={p + "mobile-phone"}>
                <input id={p + "mobile-phone"} name="mobilePhone" type="text"
                  value={user.mobilePhone} onChange={this._onChange} />
              </FormField>
            </fieldset>
          </FormFields>
          <Footer pad={{vertical: 'medium'}}>
            <Button label="Add" primary={true} onClick={this._onSubmit} />
          </Footer>
        </Form>
      } />
    );
  }
};

AddUserFormExample.propTypes = {
  compact: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  prefix: PropTypes.string
};

AddUserFormExample.defaultProps = {
  prefix: 'auf'
};
