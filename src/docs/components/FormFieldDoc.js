// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import RadioButton from 'grommet/components/RadioButton';
import NumberInput from 'grommet/components/NumberInput';
import SearchInput from 'grommet/components/SearchInput';
import DateTime from 'grommet/components/DateTime';
import Example from '../Example';

export default class FormFieldDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: undefined };
  }

  _onChange (value) {
    this.setState({ value: value });
  }

  render () {
    return (
      <DocsArticle title="FormField" colorIndex="neutral-3">

        <section>
          <p>A field in a web form.</p>
          <Form>
            <FormField label="Item 1" htmlFor="item1">
              <input id="item1" type="text" />
            </FormField>
          </Form>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>error     {"{string|node}"}</code></dt>
          <dd>Validation errors.</dd>
          <dt><code>help      {"{string|node}"}</code></dt>
          <dd>Helpful text.</dd>
          <dt><code>htmlFor   {"{string}"}</code></dt>
          <dd>Id of the input element that the label should be associated
            with.</dd>
          <dt><code>label     {"{string|node}"}</code></dt>
          <dd>Label for the field.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example name="Text input" code={
            <Form>
              <FormField label="Item 1" htmlFor="item1">
                <input id="item1" type="text" />
              </FormField>
            </Form>
          } />

          <Example name="Text input with errors" code={
            <Form>
              <FormField label="Item 1" htmlFor="item1" error="error text">
                <input id="item1" type="text" />
              </FormField>
            </Form>
          } />

          <Example name="Checkbox" code={
            <Form>
              <FormField label="">
                <CheckBox id="item2" label="Item 2" />
              </FormField>
            </Form>
          } />

          <Example name="Range" code={
            <Form>
              <FormField label="item 6" htmlFor="item6">
                <input id="item6" type="range" min="0" max="80"
                  defaultValue="40" />
              </FormField>
            </Form>
          } />

          <Example name="RadioButton with help" code={
            <Form>
              <FormField label="item 3" help="help text">
                <RadioButton id="item3-1" label="choice 1" name="choice"/>
                <RadioButton id="item3-2" label="choice 2" name="choice"/>
              </FormField>
            </Form>
          } />

          <Example name="NumberInput" code={
            <Form>
              <FormField label="item 4" htmlFor="item4">
                <NumberInput id="item4" name="number" />
              </FormField>
            </Form>
          } />

          <Example name="SearchInput" code={
            <Form>
              <FormField label="item 5" htmlFor="item5">
                <SearchInput id="item5"
                  defaultValue={"This is a really long search value " +
                    "that keeps going and going. Wow it is really long!"} />
              </FormField>
            </Form>
          } />

          <Example name="DateTime" code={
            <FormField label="item 7" htmlFor="item7">
              <DateTime id="item7" onChange={this._onChange}
                value={this.state.value} />
            </FormField>
          } />
        </section>

      </DocsArticle>
    );
  }
};
