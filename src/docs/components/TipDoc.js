// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tip from 'grommet/components/Tip';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

const USAGE =
`import Tip from 'grommet/components/Tip';
<Tip target="actions" onClose={...}>Available actions</Tip>`;

export default class TipDoc extends Component {

  constructor () {
    super();
    this.state = { active: true };
  }

  render () {
    const { active } = this.state;
    let tip;
    if (active) {
      tip = (
        <Tip target="actions"
          onClose={() => this.setState({ active: false })}>
          Available actions
        </Tip>
      );
    }

    return (
      <DocsArticle title="Tip" colorIndex="neutral-3">

        <section>
          <p>An attention getter used to highlight an aspect of the interface
            that might not be apparent at first glance. This should be used
            sparingly. Only one Tip should ever be shown on the screen at a time
            and only when it is referring to an action the user is likely to
            need or try imminitely.</p>

          <Menu id="actions" inline={false}>
            <Anchor href="">action 1</Anchor>
            <Anchor href="">action 2</Anchor>
          </Menu>
          {tip}

        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>

          <p>The caller is responsible for determining when to show a Tip.
            The tip should be removed when the <code>
            onClose</code> function is called. Additionally, the Tip should
            not be re-displayed to the user once it has been dismissed, even
            across page loads or visits. Tracking which tips a user
            has seen can be remembered in <Anchor
              href={"https://developer.mozilla.org/en-US/" +
              "docs/Web/API/Window/localStorage"}>local storage</Anchor>.
              
              Tips shouldn’t display any rich information including 
              formatted text and should be limit in usage. Prioritize 
              the tip need on user context relevance rather than what 
              is simply “new” on the interface.
              
              To ensure memorability, keep the tip text to under one 
              sentence to support quick skimming of content.</p>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>colorIndex     {"accent-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>accent-1</code>. Only accent colors
              are available for Tips. Defaults to <code>accent-1</code></dd>
            <dt><code>onClose        {"{function}"}</code></dt>
            <dd>Called when the user clicks on the Tip, clicks on the target
              element, or when the target element loses focus.</dd>
            <dt><code>target         {"{string}"}</code></dt>
            <dd>The DOM id or class of the element the Tip should be associated
              with. The id takes priority over class. If multiple classes
              are found, the first one will be used.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
