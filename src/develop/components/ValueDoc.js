import React from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Value from 'grommet/components/Value';
import GlobeIcon from 'grommet/components/icons/base/Globe';
import UpIcon from 'grommet/components/icons/base/LinkUp';

var inline =
      "<Value value={75} />";

var ValueDoc = React.createClass({
  render: function() {
    return (
      <DocsArticle title="Value" colorIndex="neutral-3">

        <p>Value component, focusing on a single number.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>a11yTitle      {"{string}"}</code></dt>
            <dd>
              Custom title used by screen readers. Default is "Title".
              Only used if onClick handler is specified.
            </dd>
            <dt><code>onClick        {"{func}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>responsive     true|false</code></dt>
            <dd>Whether to only display the logo when the display area narrows.</dd>
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

          <Example name="Large" code={
            <Value value={75} units="%"
              icon={<GlobeIcon size="large" colorIndex="neutral-1" />}
              trendIcon={<UpIcon size="large" colorIndex="neutral-1" />}
              label="World wide coverage" colorIndex="neutral-1" size="large" />
          } />

          <Example name="Small" code={
            <Value value={75} units="%"
              icon={<GlobeIcon />}
              trendIcon={<UpIcon size="small" colorIndex="ok" />}
              label="World wide coverage" size="small" />
          } />
        </section>

      </DocsArticle>
    );
  }
});

module.exports = ValueDoc;
