// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Box from 'grommet/components/Box';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import CheckBox from 'grommet/components/CheckBox';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

export default class ConfirmationForm extends Component {

  constructor () {
    super();
    this._onSubmit = this._onSubmit.bind(this);
    this._onChangeCheckBox = this._onChangeCheckBox.bind(this);
    this.state = {acknowledged: false, error: null};
  }

  _onSubmit (event) {
    event.preventDefault();
    if (this.state.acknowledged) {
      this.props.onSubmit();
    } else {
      this.setState({error: 'required'});
    }
  }

  _onChangeCheckBox (event) {
    var acknowledged = event.target.checked;
    this.setState({acknowledged: acknowledged});
    if (acknowledged) {
      this.setState({error: null});
    }
  }

  render () {
    const p = this.props.prefix;

    return (
      <Box full="vertical" justify="center">
        <Form onSubmit={this._onSubmit} compact={this.props.compact}>
          <Header>
            <h1>Confirmation</h1>
          </Header>
          <FormFields>
            <fieldset>
              <p>You must acknowledge the destructive aspects of this
                action.</p>
              <FormField error={this.state.error}>
              <CheckBox id={p + "agree"} name="agree"
                label="I acknowledge that I may lose data."
                onChange={this._onChangeCheckBox} />
              </FormField>
            </fieldset>
          </FormFields>
          <Footer pad={{vertical: 'medium'}}>
            <Button label="Destroy" primary={true} onClick={this._onSubmit} />
          </Footer>
        </Form>
      </Box>
    );
  }
};

ConfirmationForm.propTypes = {
  compact: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  prefix: PropTypes.string
};

ConfirmationForm.defaultProps = {
  prefix: 'cf'
};
