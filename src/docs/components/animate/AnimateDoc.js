// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';

Section.displayName = 'Section';
Animate.displayName = 'Animate';

const USAGE = `import Animate from 'grommet/components/Animate';
<Animate enter={...} leave={...}>
  <p>Animate me</p>
</Animate>
`;

export default class AnimateDoc extends Component {
  constructor () {
    super();
    this.state = {
      toggleFade: true
    };
  }

  render () {
    return (
      <DocsArticle title="Animate" colorIndex="neutral-3">

        <section>
          <p>An animation wrapper to transition components in &amp; out.</p>
          <Button
            label="Toggle"
            primary={true}
            onClick={() => this.setState({toggleFade: !this.state.toggleFade})}
          />
          <Box pad={{vertical: 'small'}}>
            <Animate enter={{ animation: 'fade', duration: 1000 }} keep={true}
              visible={this.state.toggleFade}>
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </Animate>
          </Box>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html xml hljs">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>component          {"{string}|{Component}"}</code></dt>
            <dd>Wrapping component. Defaults to <code>{'<div/>'}</code>.</dd>
            <dt><code>enter              {"{animation: , duration: , delay: }"}
            </code></dt>
            <dd>Animation when component is entering.</dd>
            <dt><code>keep               true|false</code></dt>
            <dd>Whether to keep or remove element from the DOM.
              Defaults to false.</dd>
            <dt><code>leave              {"{animation: , duration: , delay: }"}
            </code></dt>
            <dd>Animation when component is leaving. Defaults
              to enter animation.</dd>
            <dt><code>visible            true|false</code></dt>
            <dd>Toggle visibility. Defaults to false.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/animate/examples`}>
            Animate Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
