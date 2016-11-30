// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import FormField from 'grommet/components/FormField';
import Heading from 'grommet/components/Heading';
import Select from 'grommet/components/Select';
import Theme from './Theme';

const BACKGROUNDS =
  ['none', 'light', 'dark', 'light on dark', 'dark on light'];

export default class ContextFields extends Component {

  _change (property) {
    return (event) => {
      let nextProps = {};
      const value = event.value;
      if ('none' !== value) {
        nextProps[property] = value;
      }
      this.props.onChange(nextProps);
    };
  }

  render () {
    const { background } = this.props;
    return (
      <fieldset>
        <Heading tag='h3'>Context</Heading>
        <FormField label='Background'>
          <Select options={BACKGROUNDS}
            value={background} onChange={this._change('background')} />
        </FormField>
        <FormField label='Theme'>
          <Theme />
        </FormField>
      </fieldset>
    );
  }
};

ContextFields.propTypes = {
  background: PropTypes.oneOf(BACKGROUNDS),
  onChange: PropTypes.func
};

ContextFields.defaultProps = {
  background: BACKGROUNDS[0]
};
