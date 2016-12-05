// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';
import Example from '../../Example';

AnnotatedMeter.displayName = 'AnnotatedMeter';

const USAGE =
`import AnnotatedMeter from 'grommet-addons/components/AnnotatedMeter';
<AnnotatedMeter series={} />`;

export default class AnnotatedMeterDoc extends Component {

  constructor () {
    super();
    this._onChange = this._onChange.bind(this);
    this.state = { value: 10 };
  }

  _onChange (event) {
    this.setState({value: event.target.value});
  }

  render () {
    return (
      <DocsArticle title='AnnotatedMeter' action={
        <Button primary={true} path='/docs/annotated-meter/examples'
          label='Examples' />
        }>

        <section>
          <p>An interactive <Anchor path='/docs/meter'>Meter</Anchor> annotated
            with a <Anchor path='/docs/value'>Value</Anchor> and
            optional <Anchor path='/docs/legend'>Legend</Anchor>.</p>
          <Box direction='row' align='center' pad={{ between: 'large' }}>
            <AnnotatedMeter type='bar' series={[
              { label: 'First', value: 20 },
              { label: 'Second', value: 50 }
            ]} />
            <AnnotatedMeter type='circle' series={[
              { label: 'First', value: 20 },
              { label: 'Second', value: 50 }
            ]} />
          </Box>
          <p><strong>NOTE:</strong> This component comes from
            the <code>grommet-addons</code> repository. You will need to add
            a dependency to that repository in order to use it.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className='html hljs xml'>{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>legend      true|false</code></dt>
            <dd>Whether to show a Legend below the Meter. Defaults
              to <code>false</code>.</dd>
            <dt><code>max         {'{number}'}</code></dt>
            <dd>The largest possible value.</dd>
            <dt><code>series      {'[{value: , colorIndex: , ' +
              'onClick: }, ...]'}</code></dt>
            <dd>An array of objects describing the data.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Meter and Value. Defaults
              to <code>medium</code>.</dd>
            <dt><code>type        bar|circle</code></dt>
            <dd>Whether to draw a bar or a circle visual.</dd>
            <dt><code>units       {'{string}'}</code></dt>
            <dd>Optional units to display next to the value.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <Example code={
            <AnnotatedMeter type='circle' series={[
              { label: 'First', value: 20 },
              { label: 'Second', value: 50 }
            ]} legend={true} />
          } />
        </section>

      </DocsArticle>
    );
  }
};
