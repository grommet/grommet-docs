// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

const COLORS = ['brand',
  'neutral-1', 'neutral-1-t', 'neutral-2', 'neutral-2-t',
  'neutral-3', 'neutral-3-t', 'neutral-4',
  'accent-1', 'accent-1-t', 'accent-2', 'accent-2-t',
  'grey-1', 'grey-2', 'grey-3', 'grey-4', 'light-2', 'light-1',
  'critical', 'warning', 'ok', 'unknown'];

export default class BoxDoc extends Component {

  render () {

    var coloredBoxes = COLORS.map(function (color) {
      return <Box key={color} colorIndex={color} pad="small">{color}</Box>;
    });

    return (
      <DocsArticle title="Box" colorIndex="neutral-3">

        <p>General purpose flexible box layout. This does not support all of the
          <a href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
            flexbox capabilities</a>.</p>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle      {"{string}"}</code></dt>
            <dd>Custom title used by screen readers. Defaults to "Box".
              Only used if onClick handler is specified.</dd>
            <dt><code>align          start|center|end|baseline|stretch
              </code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>alignContent   start|center|end|between|around|stretch
              </code></dt>
            <dd>How to align within a container when there is extra space in
              the cross axis. Defaults to <code>stretch</code></dd>
            <dt><code>appCentered    true|false</code></dt>
            <dd>Whether the box background should stretch across an App that
              is centered.</dd>
            <dt><code>basis          {"xsmall|small|medium|large|xlarge|" +
              "xxlarge|full|1/2|1/3|2/3|1/4|3/4"}</code></dt>
            <dd>Whether to use a fixed or relative size for the Box's
              flex-basis.</dd>
            <dt><code>colorIndex     {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code></dd>
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
            <dt><code>onClick        {"{function}"}</code></dt>
            <dd>Optional click handler.</dd>
            <dt><code>justify        start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>pad            {"none|small|medium|large|{...}"}
              </code></dt>
            <dd>The amount of padding to put around the contents.
              An object can be specified to distinguish horizontal padding,
              vertical padding, and padding between child components: <code>
              {"{horizontal: none|small|medium|large, " +
                "vertical: none|small|medium|large, " +
                "between: none|small|medium|large}"}
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
            <dt><code>separator      {"top|bottom|left|right|horizontal|" +
              "vertical|all|none"}</code></dt>
            <dd>Add a separator.</dd>
            <dt><code>size           {"auto|xsmall|small|medium|large|" +
              "xlarge|xxlarge|full|{...}"}</code></dt>
            <dd>The width of the Box.  Defaults to <code>auto</code>.
              An object can be specified to distinguish width, height (with
              additional min and max options for width and height). E.g. <code>
              {"{height: small, " +
                "width: {max: large}}"}
              </code>.</dd>
            <dt><code>tag            {"{string}"}</code></dt>
            <dd>The DOM tag to use for the element.
              Defaults to <code>div</code>.</dd>
            <dt><code>textAlign      left|center|right</code></dt>
            <dd>Set text-align for the Box contents.</dd>
            <dt><code>texture        {"{string}"}</code></dt>
            <dd>A texture image URL to apply to the background.</dd>
            <dt><code>wrap           true|false</code></dt>
            <dd>Whether children can wrap if they {"can't"} all fit.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Box>
              <div>first</div>
              <div>second</div>
            </Box>
          } />

          <Example name="Row" code={
            <Box direction="row">
              <div>first</div>
              <div>second</div>
            </Box>
          } />

          <Example name="Kitchen sink" code={
            <Box direction="row" align="center" colorIndex="neutral-1"
              justify="between" pad="large" reverse={true} tag="aside">
              <div>first</div>
              <div>second</div>
            </Box>
          } />

          <Example name="Color indexes" code={
            <Box direction="row" wrap={true}>
              {coloredBoxes}
            </Box>
          } />

        </section>

      </DocsArticle>
    );
  }
};
