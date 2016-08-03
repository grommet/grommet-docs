// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Calendar from 'grommet/components/Calendar';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

export default class CalendarDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: (new Date()).toISOString().slice(0, 10) };
  }

  _onChange (value) {
    this.setState({value: value});
  }

  render () {
    return (
      <DocsArticle title="Calendar" colorIndex="neutral-3">

        <section>
          <p>An input field for a date. NOTE: This component is deprecated in
            favor of <NavAnchor path="/docs/date-time">DateTime</NavAnchor>.</p>

          <Example code={
            <Form>
              <FormField>
                <Calendar id="item1" name="item-1"
                  onChange={this._onChange} value={this.state.value} />
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
              for <a href="http://momentjs.com/docs/#/displaying/format/">moment</a>.
              The default is <code>{"M/D/YYYY h:mm a"}</code>.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"function ({string}) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text into
              the input or selects a date from the drop down.</dd>
            <dt><code>value         {"{string}|{Date}|{moment}"}</code></dt>
            <dd>If a string is specified, it is put in the input. If a Date
              or moment is specified, it is formatted and put in the input.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
