// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';

export default class ValueDoc extends Component {

  render () {
    return (
      <DocsArticle title="Value" action={
        <Button primary={true} path='/docs/value/examples'
          label='Examples' />
        }>

        <section>
          <p>Value component, focusing on a single number.</p>
          <Value value={75} />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>align        start|center|end</code></dt>
            <dd>The horizontal alignment of the label. Defaults
              to <code>center</code>.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the text color.
              For example: <code>
              neutral-1</code>. See <Anchor path="/docs/color">
              Color</Anchor> for possible values.</dd>
            <dt><code>icon         {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
            <dt><code>label        {"{string}"}</code></dt>
            <dd>Optional short description of the value.</dd>
            <dt><code>onClick      {"{function}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>responsive   true|false</code></dt>
            <dd>Whether the font size and spacing should adapt to the
              resolution. This is useful when used in combination with
              a Meter that is responsively adjusting.
              Defaults to <code>false</code>.</dd>
            <dt><code>size         small|medium|large|xlarge</code></dt>
            <dd>The size of the value. Defaults to <code>medium</code>.</dd>
            <dt><code>trendIcon    {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value indicating
              the trend. For example, a <code>LinkUp</code> icon.
              See <Anchor path="/docs/icon">Icon</Anchor>.</dd>
            <dt><code>value        {"{number}"}</code></dt>
            <dd>The value itself.</dd>
            <dt><code>units        {"{string}"}</code></dt>
            <dd>Optional units to display next to the value.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
}
