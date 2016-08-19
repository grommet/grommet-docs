// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Status from 'grommet/components/icons/Status';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

const PREAMBLE =
`var Status = require('grommet/components/icons/Status');
// or var Status = Grommet.Icons.Status;`;

export default class StatusDoc extends Component {

  render () {
    return (
      <DocsArticle title="Status" colorIndex="neutral-3">

        <section>
          <p>A status icon.</p>
          <Box direction="row" wrap={true} align="center"
            pad={{ between: 'medium' }}>
            <Status value="ok"/>
            <Status value="critical" a11yTitle="critical"/>
            <Status value="warning"/>
            <Status value="disabled"/>
            <Status value="unknown"/>
          </Box>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle   {"{string}"}</code></dt>
            <dd>Accessibility Title. If not set uses the default title of
              the status icon.</dd>
            <dt><code>large       true|false</code></dt>
            <dd>Larger sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Status icon.
              Defaults to <code>medium</code>.</dd>
            <dt><code>small       true|false</code></dt>
            <dd>Smaller sized version. Deprecated, use <code>size</code>.</dd>
            <dt><code>value       critical|warning|ok|disabled|unknown
              </code></dt>
            <dd>Which status to indicate.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Small" preamble={PREAMBLE} code={
            <Status value="ok" size="small"/>
          } />
          <Example name="Large" preamble={PREAMBLE} code={
            <Status value="ok" size="large"/>
          } />

        </section>

      </DocsArticle>
    );
  }
};
