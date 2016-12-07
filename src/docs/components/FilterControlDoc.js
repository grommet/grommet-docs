// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import FilterControl from 'grommet-addons/components/FilterControl';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

export default class FilterControlDoc extends Component {

  render () {

    return (
      <DocsArticle title='FilterControl'>

        <section>
          <p>A Button to control filter configuration annotated with counts
            of total and matches.</p>
          <FilterControl unfilteredTotal={100} filteredTotal={50}
            onClick={() => {}} />
          <p><strong>NOTE:</strong> This component comes from
            the <code>grommet-addons</code> repository. You will need to add
            a dependency to that repository in order to use it.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>filteredTotal     {'{number}'}</code></dt>
            <dd>How many items match after filtering.</dd>
            <dt><code>onClick           {'function () {...}'} </code></dt>
            <dd>Function that will be called when the user clicks the
              control.</dd>
            <dt><code>unfilteredTotal   {'{number}'}</code></dt>
            <dd>How many items there are without any filtering.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
            <Code preamble={`import FilterControl from ` +
                `'grommet-addons/components/FilterControl';`}>
              <FilterControl unfilteredTotal={100} filteredTotal={50}
                onClick={() => {}} />
            </Code>
        </section>

      </DocsArticle>
    );
  }
}
