// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Spinning from 'grommet/components/icons/Spinning';

const inline = `var Spinning = require('grommet/components/icons/Spinning');
//or var Spinning = Grommet.Icons.Spinning
`;

export default class SpinningDoc extends Component {

  render () {
    return (
      <DocsArticle title="Spinning" colorIndex="neutral-3">

        <p>An indeterminate spinning/busy icon. This should be used sparingly.
        If at all possible, use Meter with % to indicate progress. For content
        loading situations, Meter, Chart, and Distribution already have
        visuals for when the data has not arrived yet. In general,
        there should not be more than one Spinning icon on the screen at a
        time.</p>

        <pre>
          <code>
            {inline}
          </code>
        </pre>

        <section>
          <h2>Example</h2>

          <div className="example">
            <Spinning />
          </div>
          <pre><code className="html hljs xml">
            {"<Spinning />"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
};
