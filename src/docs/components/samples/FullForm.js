// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import AllFieldTypes from '../form/AllFieldTypes';

export default class FullForm extends Component {

  render () {
    const { compact, onSubmit } = this.props;
    return (
      <Form onSubmit={onSubmit} compact={compact}>
        <Header>
          <Heading tag='h1' margin='none'>Edit</Heading>
        </Header>
        <FormFields>
          <AllFieldTypes />
        </FormFields>
        <Footer pad={{vertical: 'medium'}}>
          <Button label="OK" primary={true} onClick={onSubmit} />
        </Footer>
      </Form>
    );
  }
};

FullForm.propTypes = {
  compact: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func
};
