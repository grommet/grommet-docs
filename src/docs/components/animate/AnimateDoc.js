// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Animate from 'grommet/components/Animate';
import DocsArticle from '../../../components/DocsArticle';

Section.displayName = 'Section';
Animate.displayName = 'Animate';

export default class AnimateDoc extends Component {
  constructor () {
    super();
    this.state = {
      toggleFade: true
    };
  }

  render () {
    return (
      <DocsArticle title='Animate' action={
        <Button primary={true} path={`/docs/animate/examples`}
          label='Examples' />
        }>

        <section>
          <p>An animation wrapper to transition components in &amp; out.</p>
          <Button
            label='Toggle'
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
          <h2>Properties</h2>
          <dl>
            <dt><code>component          {'{string}|{Component}'}</code></dt>
            <dd>Wrapping component. Defaults to <code>{'<div/>'}</code>.</dd>
            <dt><code>enter              {'{animation: , duration: , delay: }'}
            </code></dt>
            <dd>Animation when component is entering. Possible animations:
              <code>fade|slide-up|slide-down|slide-left|slide-right</code></dd>
            <dt><code>keep               true|false</code></dt>
            <dd>Whether to keep or remove element from the DOM.
              Defaults to false.</dd>
            <dt><code>leave              {'{animation: , duration: , delay: }'}
            </code></dt>
            <dd>Animation when component is leaving. Defaults
              to enter animation.</dd>
            <dt><code>visible            true|false|scroll</code></dt>
            <dd>Toggle visibility. When set to <code>scroll</code>, the
              animation will happen when the component scrolls into
              view. Defaults to false.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
