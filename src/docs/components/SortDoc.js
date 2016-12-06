// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Sort from 'grommet-addons/components/Sort';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

export default class SortDoc extends Component {

  constructor () {
    super();
    this.state = { value: 'name', direction: 'asc' };
  }

  render () {
    const { direction, value } = this.state;
    return (
      <DocsArticle title='Sort'>

        <section>
          <p>A combination of <Anchor path='/docs/select'>Select</Anchor> and
            two direction <Anchor path='/docs/button'>Buttons</Anchor> for
            use as a means of choosing how to sort something.</p>
          <Sort options={[
            { label: 'Name', value: 'name'},
            { label: 'Modified', value: 'modified'}
          ]} value={value} direction={direction}
            onChange={(object) => this.setState(object)} />
          <p><strong>NOTE:</strong> This component comes from
            the <code>grommet-addons</code> repository. You will need to add
            a dependency to that repository in order to use it.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>direction   asc|desc</code></dt>
            <dd>The active direction.</dd>
            <dt><code>onChange    {'function ({ value: , direction: }) {}'}
              </code></dt>
            <dd>Function that will be called when the user makes a choice. It
              is passed an object describing the current option value and
              direction.</dd>
            <dt><code>options     {'[{label: , value: , direction: }, ...]'}
              </code></dt>
            <dd>Array of possible options. When an option is chosen, the
              intial direction will be set as defined for that option.</dd>
            <dt><code>value       {'{string}'}</code></dt>
            <dd>The active option value.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import Sort from 'grommet-addons/components/Sort';`}>
            <Sort options={[]} value='name' direction='asc'
              onChange={() => {}} />
          </Code>
        </section>

      </DocsArticle>
    );
  }
}
