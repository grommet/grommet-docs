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
    this._onChangeRange = this._onChangeRange.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onSearchInputChange = this._onSearchInputChange.bind(this);
    this._onDateTimeChange = this._onDateTimeChange.bind(this);
    this._onTextInputDOMChange = this._onTextInputDOMChange.bind(this);
    this._onTextInputSelect = this._onTextInputSelect.bind(this);
    this._onSelectSearch = this._onSelectSearch.bind(this);
    this._onSelectChange = this._onSelectChange.bind(this);
    this.state = {
      rangeValue: 10,
      searchInput: { suggestions: VALUES },
      select: { options: VALUES },
      textInput: { suggestions: VALUES, value: '' },
      calendarDate: (new Date()).toISOString().slice(0, 10)
    };
  }

  _onChangeRange (event) {
    this.setState({rangeValue: parseInt(event.target.value, 10)});
  }

  _onChange (event) {
    // console.log('!!! FullForm changed', event.target, 'to',
    //   event.target.value);
  }

  _onSearchInputChange (value) {
    // console.log('!!! FullForm _onSearchInputChange', value);
    this.setState({
      searchInput: {
        value: value,
        suggestions: this._searchInputSuggestions
      }
    });
  }

  _onTextInputDOMChange (event) {
    const regexp = new RegExp('^' + event.target.value);
    const suggestions = VALUES.filter(val => {
      return regexp.test(val);
    });
    this.setState({
      textInput: { value: event.target.value, suggestions: suggestions }
    });
  }

  _onTextInputSelect (pseudoEvent) {
    this.setState({
      textInput: { value: pseudoEvent.suggestion, suggestions: VALUES }
    });
  }

  _onSelectSearch (event) {
    const regexp = new RegExp('^' + event.target.value);
    const options = VALUES.filter(val => regexp.test(val));
    this.setState({ select: { options: options } });
  }

  _onSelectChange (pseudoEvent) {
    this.setState({ select: { value: pseudoEvent.option, options: VALUES } });
  }

  _onDateTimeChange (value) {
    this.setState({ date: value });
  }

  render () {
    return (
      <fieldset>

        <legend>Text</legend>
        <FormField label='input' htmlFor='f-input'
          help={<span>sample help <Anchor>learn more ...</Anchor></span>}>
          <input id='f-input' name='input' type='text'
            onChange={this._onChange} />
        </FormField>
        <FormField label='textarea' htmlFor='f-textarea'
          error='something is wrong'>
          <textarea id='f-textarea' name='textarea'/>
        </FormField>
        <FormField label='TextInput' htmlFor='text-input'>
          <TextInput id='text-input'
            value={this.state.textInput.value}
            suggestions={this.state.textInput.suggestions}
            onDOMChange={this._onTextInputDOMChange}
            onSelect={this._onTextInputSelect} />
        </FormField>

        <legend>Toggles</legend>
        <FormField>
          <CheckBox id='f-check-box' name='check' label='CheckBox'
            onChange={this._onChange} />
        </FormField>
        <FormField>
          <CheckBox id='f-toggle' name='toggle' label='CheckBox toggle'
            toggle={true} onChange={this._onChange} />
        </FormField>
        <FormField label='RadioButton'>
          <RadioButton id='f-radio-1' name='radio' label='RadioButton 1'
            onChange={this._onChange} />
          <RadioButton id='f-radio-2' name='radio' label='RadioButton 2'
            onChange={this._onChange} />
        </FormField>

        <legend>Other</legend>
        {/*}
        <FormField label='select' htmlFor='f-select'>
          <select id='f-select' name='select'>
            <option>first</option>
            <option>second</option>
            <option>third</option>
          </select>
        </FormField>
        {*/}
        <FormField label='Select' htmlFor='f-Select'>
          <Select id='f-Select' name='Select'
            value={this.state.select.value}
            options={this.state.select.options}
            onSearch={this._onSelectSearch}
            onChange={this._onSelectChange} />
        </FormField>
        <FormField label='NumberInput' htmlFor='f-number-input'>
          <NumberInput id='f-number-input' name='number'
            value={this.state.rangeValue}
            onChange={this._onChangeRange} />
        </FormField>
        <FormField label='DateTime' htmlFor='f-date-time'>
          <DateTime id='f-date-time' name='date-time'
            format='YYYY-MM-DD h:mm a' step={5}
            value={this.state.date}
            onChange={this._onDateTimeChange} />
        </FormField>
        <FormField label='input - range' htmlFor='f-range'
          help={this.state.rangeValue}>
          <input id='f-range' name='range' type='range'
            min='1' max='20' value={this.state.rangeValue}
            onChange={this._onChangeRange}
            onMouseUp={this._onChangeRange}/>
        </FormField>
        <FormField label='input - file' htmlFor='f-file'>
          <input id='f-file' name='file' type='file' />
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
