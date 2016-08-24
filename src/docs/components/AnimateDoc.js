// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import ScrollAnimation from './samples/ScrollAnimation';
import BoxesAnimation from './samples/BoxesAnimation';

Section.displayName = 'Section';
Animate.displayName = 'Animate';

export default class AnimateDoc extends Component {
  constructor () {
    super();
    this.state = {
      toggleFade: true,
      toggleSlide: true
    };
  }

  render () {
    return (
      <DocsArticle title="Animate" colorIndex="neutral-3">

        <p>An animation wrapper to transition components in &amp; out.</p>
        <pre><code className="html hljs xml">
{`<Animate enter={...} leave={...}>
  <Box />
</Animate>`}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>enter              {"{animation: , duration: , delay: }"}
            </code></dt>
            <dd>Animation when component is entering.</dd>
            <dt><code>leave              {"{animation: , duration: , delay: }"}
            </code></dt>
            <dd>Animation when component is leaving. Defaults to
              <code>enter</code> animation.</dd>
            <dt><code>component          {"{string}|{Component}"}</code></dt>
            <dd>Wrapping component. Defaults to <code>div</code>.</dd>
            <dt><code>visible            true|false</code></dt>
            <dd>Toggle visibility.</dd>
            <dt><code>keep               true|false</code></dt>
            <dd>Whether to keep or remove element from the DOM.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Button
            label="Toggle"
            primary={true}
            onClick={() => this.setState({toggleFade: !this.state.toggleFade})}
          />
          <Example name="Fade" code={
            <Animate
              enter={{ animation: 'fade', duration: 1000 }}
              visible={this.state.toggleFade}
              keep={true}
            >
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </Animate>
          } />

          <Button
            label="Toggle"
            primary={true}
            onClick={() => this.setState({
              toggleSlide: !this.state.toggleSlide
            })}
          />
          <Example name="Slide" code={
            <Animate
              enter={{ animation: 'slide-up', duration: 1000 }}
              leave={{ animation: 'slide-down', duration: 1000 }}
              visible={this.state.toggleSlide}
            >
              <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </Paragraph>
            </Animate>
          } />

          <BoxesAnimation />

          <ScrollAnimation />
        </section>
      </DocsArticle>
    );
  }
};
