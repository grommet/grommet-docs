// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { Link } from 'react-router';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import UpIcon from 'grommet/components/icons/base/LinkUp';
import { updatePageTitle } from '../../utils/a11y';

Value.displayName = 'Value';

export default class ValueDoc extends Component {
  componentDidMount () {
    updatePageTitle('Value');
  }

  render () {
    return (
      <DocsArticle title="Value" colorIndex="neutral-3">

        <p>Value component, focusing on a single number.</p>
        <pre><code className="html hljs xml">{'<Value value={75} />'}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>align        start|center|end</code></dt>
            <dd>The horizontal alignment of the label. Defaults
              to <code>center</code>.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the text color.
              For example: <code>"neutral-1"</code></dd>
            <dt><code>icon         {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value.
              See <Link to={this.context.routePrefix + "icon"}>Icon</Link>.</dd>
            <dt><code>label        {"{string}"}</code></dt>
            <dd>Optional short description of the value.</dd>
            <dt><code>onClick      {"{func}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>size         small|medium|large|xlarge</code></dt>
            <dd>The size of the value. Defaults to <code>medium</code>.</dd>
            <dt><code>trendIcon    {"{element}"}</code></dt>
            <dd>Optional icon element to place next to the value indicating
              the trend. For example, a <code>LinkUp</code> icon.
              See <Link to={this.context.routePrefix + "icon"}>Icon</Link>.</dd>
            <dt><code>value        {"{number}"}</code></dt>
            <dd>The value itself.</dd>
            <dt><code>units        {"{string}"}</code></dt>
            <dd>Optional units to display next to the value.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={
            <Value value={75} />
          } />

          <Example name="Units, Icon, Trend, Label, Color" code={
            <Value value={75} units="%"
              icon={<GlobeIcon colorIndex="neutral-1" />}
              trendIcon={<UpIcon colorIndex="neutral-1" />}
              label="World wide coverage" colorIndex="neutral-1" />
          } />

          <Example name="Small" code={
            <Value value={75} units="%"
              icon={<GlobeIcon />}
              trendIcon={<UpIcon size="small" colorIndex="ok" />}
              label="World wide coverage" size="small" />
          } />

          <Example name="Large" code={
            <Value value={75} units="%"
              icon={<GlobeIcon size="large" colorIndex="neutral-1" />}
              trendIcon={<UpIcon size="large" colorIndex="neutral-1" />}
              label="World wide coverage" size="large" colorIndex="neutral-1" />
          } />

          <Example name="xLarge" code={
            <Value value={75} units="%"
              icon={<GlobeIcon size="xlarge" colorIndex="neutral-1" />}
              trendIcon={<UpIcon size="xlarge" colorIndex="neutral-1" />}
              label="World wide coverage" size="xlarge" colorIndex="neutral-1" />
          } />
        </section>

      </DocsArticle>
    );
  }
}

ValueDoc.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};
