// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import CheckBox from 'grommet/components/CheckBox';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

CheckBox.displayName = 'CheckBox';

export default class CheckBoxDoc extends Component {

  constructor () {
    super ();
    this._onChange = this._onChange.bind(this);
    this.state = { checked: false };
  }

  _onChange () {
    this.setState({checked: ! this.state.checked});
  }

  render () {
    return (
      <DocsArticle title='CheckBox' action={
        <Button primary={true} path='/docs/check-box/examples'
          label='Examples' />
        }>

        <section>
          <p>A check box in a web form. We have a separate component from the
            browser base so we can style it.</p>
          <Box direction='row' wrap={true} align='center'
            pad={{ between: 'medium' }}>
            <CheckBox id='item1' name='item1' label='Item 1'
              checked={this.state.checked} onChange={this._onChange} />
            <CheckBox id='item2' name='item2' label='Item 2'
              checked={this.state.checked} toggle={true}
              onChange={this._onChange} />
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
          <dt><code>checked         true|false</code></dt>
          <dd>Same as React <code>{'<input checked={} />'}</code>.</dd>
          <dt><code>defaultChecked  true|false</code></dt>
          <dd>Same as React <code>{'<input defaultChecked={} />'}</code>.</dd>
          <dt><code>disabled        true|false</code></dt>
          <dd>Same as React <code>{'<input disabled={} />'}</code>.
            Also adds a hidden input element with the same name so
            form submissions work.</dd>
          <dt><code>id              {'{string}'}</code></dt>
          <dd>The DOM id attribute value to use for the
            underlying <code>{'<input/>'}</code> element.</dd>
          <dt><code>label           {'{string|node}'}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {'{string}'}</code></dt>
          <dd>The DOM name attribute value to use for the
            underlying <code>{'<input/>'}</code> element.</dd>
          <dt><code>onChange        {'{function}'}</code></dt>
          <dd>Same as React <code>{'<input onChange={} />'}</code>.</dd>
          <dt><code>reverse         true|false</code></dt>
          <dd>Whether to show the label in front of the checkbox.
            Defaults to false.</dd>
          <dt><code>toggle          true|false</code></dt>
          <dd>Whether to visualize it as a toggle switch.
            Defaults to false.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
