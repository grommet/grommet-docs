// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

FormField.displayName = 'FormField';

const USAGE =
`import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
<Form>
  <FormField label="Item 1">
    {contents}
  </FormField>
</Form>`;

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
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
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
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/form-field/examples`}>
            FormField Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
