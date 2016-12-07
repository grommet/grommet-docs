// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (
  <span>General purpose flexible box layout. This supports many,
    but not all, of the <a
    href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
    flexbox</a> capabilities.
  </span>
);

export default class BoxDoc extends Component {

  render () {

    return (
      <DocsArticle title='Box' action={
        <Button primary={true} path='/docs/box/examples'
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <Box pad='large' colorIndex='light-2'>
            contents in a Box
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>a11yTitle      {'{string}'}</code></dt>
            <dd>Custom title used by screen readers. Defaults to 'Box'.
              Only used if onClick handler is specified.</dd>
            <dt><code>align          start|center|end|
              baseline|stretch</code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>alignContent   start|center|end|
              between|around|stretch</code></dt>
            <dd>How to align the contents when there is extra space in
              the cross axis. Defaults to <code>stretch</code></dd>
            <dt><code>alignSelf      start|center|end|stretch</code></dt>
            <dd>How to align within its container along the cross axis.</dd>
            <dt><code>appCentered    true|false</code></dt>
            <dd>Whether the box background should stretch across an App that
              is centered.</dd>
            <dt><code>basis          xsmall|small|medium|large|
              xlarge|xxlarge|
              full|1/2|1/3|2/3|1/4|3/4</code></dt>
            <dd>Whether to use a fixed or relative size within its
              container.</dd>
            <dt><code>colorIndex     {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>'neutral-1'</code>.
              See <Anchor path='/docs/color'>Color</Anchor> for
              possible values.</dd>
            <dt><code>direction      row|column</code></dt>
            <dd>The orientation to layout the child components in.
              Defaults to <code>column</code>.</dd>
            <dt><code>focusable      true|false</code></dt>
            <dd>Whether keyboard focus should be added for clickable Boxes.
              Defaults to <code>true</code>.</dd>
            <dt><code>flex           true|grow|shrink|false</code></dt>
            <dd>Whether flex-grow and/or flex-shrink is true.</dd>
            <dt><code>full           true|horizontal|vertical|false</code></dt>
            <dd>Whether the width and/or height should take the full viewport
              size.</dd>
            <dt><code>onClick        {'{function}'}</code></dt>
            <dd>Optional click handler.</dd>
            <dt><code>justify        start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>pad            {'none|small|medium|large|{...}'}
              </code></dt>
            <dd>The amount of padding to put around the contents.
              An object can be specified to distinguish horizontal padding,
              vertical padding, and padding between child components: <code>
              {'{horizontal: none|small|medium|large, ' +
                'vertical: none|small|medium|large, ' +
                'between: none|small|medium|large}'}
              </code>. Defaults to <code>none</code>.
              Padding set using <code>between</code> only affects components
              based on the direction set
              (adds horizontal padding between components for <code>row</code>,
              or vertical padding between components for <code>column</code>).
            </dd>
            <dt><code>primary        true|false</code></dt>
            <dd>
              Whether this is a primary Box that will receive skip to main
              content anchor. Defaults to false.
            </dd>
            <dt><code>reverse        true|false</code></dt>
            <dd>Whether to reverse the order of the child components.</dd>
            <dt><code>responsive     true|false</code></dt>
            <dd>Whether children laid out in a row direction should be
              switched to a column layout when the display area narrows.
              Defaults to <code>true</code>.</dd>
            <dt><code>separator      top|bottom|left|right|
              horizontal|vertical|all|none</code></dt>
            <dd>Add a separator.</dd>
            <dt><code>size           auto|xsmall|small|medium|large|
              xlarge|xxlarge|full|{'...'}</code></dt>
            <dd>The width of the Box.  Defaults to <code>auto</code>.
              An object can be specified to distinguish width, height (with
              additional min and max options for width and height). E.g. <code>
              {'{height: small, ' +
                'width: {max: large}}'}
              </code>.</dd>
            <dt><code>tag            {'{string}'}</code></dt>
            <dd>The DOM tag to use for the element.
              Defaults to <code>div</code>.</dd>
            <dt><code>textAlign      left|center|right</code></dt>
            <dd>Set text-align for the Box contents.</dd>
            <dt><code>texture        {'{string}'}</code></dt>
            <dd>A texture image URL to apply to the background.</dd>
            <dt><code>wrap           true|false</code></dt>
            <dd>Whether children can wrap if they {"can't"} all fit.
              Defaults to <code>false</code>.</dd>
          </dl>
        </section>
      </DocsArticle>
    );
  }
};
