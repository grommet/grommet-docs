// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Toast from 'grommet/components/Toast';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../components/DocsArticle';

const USAGE =
`import Toast from 'grommet/components/Toast';
<Toast status="ok" onClose={...}>
  A short message to let the user know something.
</Toast>`;

export default class ToastDoc extends Component {

  constructor () {
    super();
    this.state = { active: true };
  }

  render () {
    const { active } = this.state;

    let toast;
    if (active) {
      toast = (
        <Toast status="ok"
          onClose={() => this.setState({ active: false })}>
          <Box direction="row" justify="between" alignSelf="center">
            <span>A short message to let the user know something.</span>
          </Box>
        </Toast>
      );
    }

    return (
      <DocsArticle title="Toast" colorIndex="neutral-3">

        <section>
          <p>A terse notification that will only be displayed for a short
            period of time, overlaying whatever the user is currently doing.</p>

          <Button label="Show toast"
            onClick={() => this.setState({ active: true })} />
          {toast}

        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
          
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>onClose   {"{function}"}</code></dt>
            <dd>Called when the user clicks on the close control or the
              Toast is automatically closed after a while.</dd>
            <dt><code>status    critical|warning|ok|disabled|unknown</code></dt>
            <dd>Which status to indicate.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
