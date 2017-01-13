// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import RadioButton from 'grommet/components/RadioButton';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';
import NumberInput from 'grommet/components/NumberInput';
import Table from 'grommet/components/Table';
import Anchor from 'grommet/components/Anchor';
import DateTime from 'grommet/components/DateTime';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight'];

export default class AllFieldTypes extends Component {

  constructor () {
    super();
    this.state = {
      boolean: false,
      date: (new Date()).toISOString().slice(0, 10),
      number: 10,
      option: '',
      suggestions: VALUES,
      text: ''
    };
  }

  _change (type) {
    return (event) => {
      const nextState = { suggestions: VALUES };
      let value;
      if ('boolean' === type) {
        value = event.target.checked;
      } else if ('number' === type) {
        value = parseInt(event.target.value, 10);
      } else if (event.hasOwnProperty('suggestion')) {
        value = event.suggestion;
      } else if (event.hasOwnProperty('value')) {
        value = event.value;
      } else if (event.hasOwnProperty('target')) {
        value = event.target.value;
      } else {
        value = event;
      }
      nextState[type] = value;
      this.setState(nextState);
    };
  }

  _domChange (type) {
    return (event) => {
      const value = event.target.value;
      const regexp = new RegExp('^' + value);
      const suggestions = VALUES.filter(val => regexp.test(val));
      const nextState = { suggestions };
      if ('text' === type) {
        nextState[type] = value;
      }
      this.setState(nextState);
    };
  }

  render () {
    const { boolean, date, number, option, suggestions, text } = this.state;
    return (
      <fieldset>

        <legend>Text</legend>
        <FormField label='TextInput' htmlFor='text-input'
          help={<span>sample help <Anchor>learn more ...</Anchor></span>}>
          <TextInput id='text-input'
            value={text} suggestions={suggestions}
            onDOMChange={this._domChange('text')}
            onSelect={this._change('text')} />
        </FormField>
        <FormField label='input - text' htmlFor='f-input'>
          <input id='f-input' name='input' type='text'
            value={text} onChange={this._change('text')} />
        </FormField>
        <FormField label='textarea' htmlFor='f-textarea'
          error='something is wrong'>
          <textarea id='f-textarea' name='textarea'
            value={text} onChange={this._change('text')} />
        </FormField>

        <legend>Toggles</legend>
        <FormField>
          <CheckBox id='f-check-box' name='check' label='CheckBox'
            checked={boolean} onChange={this._change('boolean')} />
        </FormField>
        <FormField>
          <CheckBox id='f-toggle' name='toggle' label='CheckBox toggle'
            toggle={true}
            checked={boolean} onChange={this._change('boolean')} />
        </FormField>
        <FormField label='RadioButton'>
          <RadioButton id='f-radio-1' name='radio' label='RadioButton 1'
            onChange={this._onChange} />
          <RadioButton id='f-radio-2' name='radio' label='RadioButton 2'
            onChange={this._onChange} />
        </FormField>

        <legend>Other</legend>
        <FormField label='Select' htmlFor='f-Select'>
          <Select id='f-Select' name='Select'
            value={option} options={suggestions}
            onSearch={this._domChange('option')}
            onChange={this._change('option')} />
        </FormField>
        <FormField label='DateTime' htmlFor='f-date-time'>
          <DateTime id='f-date-time' name='date-time'
            format='YYYY-MM-DD h:mm a' step={5}
            value={date} onChange={this._change('date')} />
        </FormField>
        <FormField label='NumberInput' htmlFor='f-number-input'>
          <NumberInput id='f-number-input' name='number'
            value={number} onChange={this._change('number')} />
        </FormField>
        <FormField label='input - range' htmlFor='f-range'
          help={number}>
          <input id='f-range' name='range' type='range'
            min='1' max='20' value={number}
            onChange={this._change('number')}
            onMouseUp={this._change('number')}/>
        </FormField>
        <FormField label='input - file' htmlFor='f-file'>
          <input id='f-file' name='file' type='file' />
        </FormField>
        <FormField label='input - color' htmlFor='f-color'>
          <input id='f-color' name='color' type='color' />
        </FormField>

        <FormField label='Table'>
          <Table selectable={true}>
            <tbody>
              <tr>
                <td>first</td>
                <td>123</td>
              </tr>
              <tr>
                <td>second</td>
                <td>456</td>
              </tr>
              <tr>
                <td>third</td>
                <td>789</td>
              </tr>
            </tbody>
          </Table>
        </FormField>
      </fieldset>
    );
  }
};
