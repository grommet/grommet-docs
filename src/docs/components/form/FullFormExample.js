// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component, PropTypes } from 'react';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Header from 'grommet/components/Header';
import CheckBox from 'grommet/components/CheckBox';
import RadioButton from 'grommet/components/RadioButton';
import TextInput from 'grommet/components/TextInput';
import Select from 'grommet/components/Select';
import SearchInput from 'grommet/components/SearchInput';
import NumberInput from 'grommet/components/NumberInput';
import Table from 'grommet/components/Table';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import DateTime from 'grommet/components/DateTime';
import Example from '../../Example';

const VALUES = ['one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight'];

export default class FullFormExample extends Component {

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
    this.setState({rangeValue: event.target.value});
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
    const p = this.props.prefix;

    return (
      <Example align="start" code={
        <Form onSubmit={this.props.onSubmit} compact={this.props.compact}>
          <Header>
            <h1>Edit</h1>
          </Header>
          <FormFields>
            <fieldset>
              <legend>First section</legend>
              <FormField label="Item 1" htmlFor={p + "item1"}
                help="something helpful">
                <input id={p + "item1"} name="item-1" type="text"
                  onChange={this._onChange} />
              </FormField>
              <FormField>
                <CheckBox id={p + "item2"} name="item-2" label="Item 2"
                  onChange={this._onChange} />
              </FormField>
              <FormField>
                <CheckBox id={p + "item3"} name="item-3" label="Item 3"
                  toggle={true}
                  onChange={this._onChange} />
              </FormField>
              <FormField label="Item 4">
                <RadioButton id={p + "item4-1"} name="item-4" label="first"
                  onChange={this._onChange} />
                <RadioButton id={p + "item4-2"} name="item-4" label="second"
                  onChange={this._onChange} />
              </FormField>
              <FormField label="Item 5" htmlFor={p + "item5"}
                error="something's wrong">
                <textarea id={p + "item5"} name="item-5"></textarea>
              </FormField>
              <FormField label="Item 6a" htmlFor={p + "item6a"}>
                <TextInput id={p + "item6a"} name="item-6a"
                  value={this.state.textInput.value}
                  suggestions={this.state.textInput.suggestions}
                  onDOMChange={this._onTextInputDOMChange}
                  onSelect={this._onTextInputSelect} />
              </FormField>
              <FormField label="Item 6b" htmlFor={p + "item6b"}>
                <SearchInput id={p + "item6b"} name="item-6"
                  value={this.state.searchInput.value}
                  suggestions={this.state.searchInput.suggestions}
                  onChange={this._onSearchInputChange}
                  onSearch={this._onSearchInputSearch} />
              </FormField>
              <FormField label="Item 7a" htmlFor={p + "item7a"}
                help={<a>learn more ...</a>}>
                <select id={p + "item7a"} name="item-7a">
                  <option>first</option>
                  <option>second</option>
                  <option>third</option>
                </select>
              </FormField>
              <FormField label="Item 7b" htmlFor={p + "item7b"}>
                <Select id={p + "item6b"} name="item-7b"
                  value={this.state.select.value}
                  options={this.state.select.options}
                  onSearch={this._onSelectSearch}
                  onChange={this._onSelectChange} />
              </FormField>
              <FormField label="Item 9" htmlFor={p + "item9"}>
                <NumberInput id={p + "item9"} name="item-9"
                  value={this.state.rangeValue}
                  onChange={this._onChangeRange} />
              </FormField>
              <FormField label="Item 10" htmlFor={p + "item10"}
                help={this.state.rangeValue}>
                <input id={p + "item10"} name="item-10" type="range"
                  min="1" max="20" value={this.state.rangeValue}
                  onChange={this._onChangeRange}
                  onMouseUp={this._onChangeRange}/>
              </FormField>
            </fieldset>
            <fieldset>
              <legend>Another section</legend>
              <p>Some informational text.</p>
              <FormField label="Item 11">
                <Table selectable={true} defaultSelection={0}>
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
              <FormField label="Item 12" htmlFor={p + "item12"}>
                <input id={p + "item12"} name="item-12" type="file" />
              </FormField>
              <FormField label="Item 13" htmlFor={p + "item13"}>
                <DateTime id={p + "item13"} name="item-13"
                  format="YYYY-MM-DD h:mm a" step={5}
                  value={this.state.date}
                  onChange={this._onDateTimeChange} />
              </FormField>
            </fieldset>
          </FormFields>
          <Footer pad={{vertical: 'medium'}}>
            <Button label="OK" primary={true} strong={true}
              onClick={() => alert('submit')} />
          </Footer>
        </Form>
      } />
    );
  }
};

FullFormExample.propTypes = {
  compact: PropTypes.bool,
  onCancel: PropTypes.func,
  onSubmit: PropTypes.func,
  prefix: PropTypes.string
};

FullFormExample.defaultProps = {
  prefix: 'ff'
};
