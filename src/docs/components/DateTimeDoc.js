// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DateTime from 'grommet/components/DateTime';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class DateTimeDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this._onChangeDate = this._onChangeDate.bind(this);
    this._onChangeTime = this._onChangeTime.bind(this);
    this.state = { value: undefined, date: undefined, time: undefined };
  }

  _onChange (value) {
    this.setState({ value: value });
  }

  _onChangeDate (value) {
    this.setState({ date: value });
  }

  _onChangeTime (value) {
    this.setState({ time: value });
  }

  render () {
    return (
      <DocsArticle title="DateTime" colorIndex="neutral-3">

        <section>
          <p>An input field for a date and time.</p>

          <Example code={
            <Form>
              <FormField>
                <DateTime id="item1" name="item-1"
                  onChange={this._onChange} value={this.state.value}  />
              </FormField>
            </Form>
          } />
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>format        {"{string}"}</code></dt>
            <dd>The date format. Available syntax can be seen in the
              documentation
              for <a href="http://momentjs.com/docs/#/displaying/format/">
              moment</a>.
              The default is <code>{"M/D/YYYY h:mm a"}</code>.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"{function ({string})}"}</code></dt>
            <dd>Function that will be called when the user types some text into
              the input or selects a date from the drop down.</dd>
            <dt><code>step          {"{number}"}</code></dt>
            <dd>The step granularity of the least significant format
              element.</dd>
            <dt><code>value         {"{string}|{Date}|{moment}"}</code></dt>
            <dd>If a string is specified, it is put in the input. If a Date
              or moment is specified, it is formatted and put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <DateTime id="item1" name="item-1"
              onChange={this._onChange} value={this.state.value}  />
          } />

          <Example name="Time only, 24 hour time, seconds, step 10" code={
            <DateTime id="item2" name="item-2" format="H:mm:ss" step={10}
              onChange={this._onChangeTime} value={this.state.time}  />
          } />

          <Example name="Time only, hours" code={
            <DateTime id="item3" name="item-3" format="h a"
              onChange={this._onChangeTime} value={this.state.time}  />
          } />

          <Example name="Date only" code={
            <DateTime id="item4" name="item-4" format="M/D/YYYY"
              onChange={this._onChangeDate} value={this.state.date}  />
          } />

        </section>

      </DocsArticle>
    );
  }
};
