// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Toast from 'grommet/components/Toast';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';

Toast.displayName = 'Toast';

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
        <Toast status='ok' size='medium'
          onClose={() => this.setState({ active: false })}>
          <Box direction='row' justify='between' alignSelf='center'>
            <span>A short message to let the user know something.</span>
          </Box>
        </Toast>
      );
    }

    return (
      <DocsArticle title='Toast'>

        <section>
          <p>A terse notification that will only be displayed for a short
            period of time, overlaying whatever the user is currently doing.</p>

          <Button label='Show toast'
            onClick={() => this.setState({ active: true })} />
          {toast}

          <p>The caller is responsible for determining when to show a Toast.
            The toast should not be distracting or disturbing the user.

            To accomplish this, don't show a toast for every task
            state (i.e. Creating, Processing, Completed, etc). Instead,
            only show a toast at the end state (i.e. when a task has been
            completed).

            Don't show a toast on a task that can be completed quickly.
            Instead, reserve toast for tasks that may take long periods
            of time to completely process.

            Grommet also recommends to incorporate user settings in
            the app to allow the enable or disable of certain preferences
            of these toasts. (i.e. Allow the user to choose 'only show me
            alerts' or 'only show me tasks that complete with errors', etc.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>onClose   {'{function}'}</code></dt>
            <dd>Called when the user clicks on the close control or the
              Toast is automatically closed after a while.</dd>
            <dt><code>size      small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>status    critical|warning|ok|disabled|unknown</code></dt>
            <dd>Which status to indicate.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={`import Toast from 'grommet/components/Toast';`}>
            <Toast status='ok' onClose={() => {}}>
              A short message to let the user know something.
            </Toast>
          </Code>
        </section>

      </DocsArticle>
    );
  }
};
