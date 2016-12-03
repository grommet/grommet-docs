// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Topology from 'grommet/components/Topology';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class TopologyDoc extends Component {

  render () {

    return (
      <DocsArticle title='Topology' action={
        <Button primary={true} path='/docs/topology/examples'
          label='Examples' />
        }>

        <section>
          <p>Visualize structure and connectivity.</p>
          <Box align='start' pad='medium'>
            <Topology links={[
              {colorIndex: 'graph-1', ids: ['p1', 'p2']}
            ]}>
              <Topology.Parts>
                <Topology.Part id='p1' status='ok' label='1' align='center' />
                <Topology.Part id='p2' status='ok' label='2' align='center' />
              </Topology.Parts>
            </Topology>
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>links       {'[{...}]'}</code></dt>
            <dd>An array of: <code>
              {'{ids: [<id>, ...], colorIndex: <string>}'}
              </code>. The ids should reference id properties of
              contained Topology.Part components.</dd>
          </dl>
        </section>

        <section>
          <h2>Available Sub Components</h2>

          <h3>Toplogy.Part</h3>
          <p>An individual part. I Part can contain Parts or another Part.</p>
          <h4>Properties</h4>
          <dl>
            <dt><code>align        start|center|between|end|stretch</code></dt>
            <dd>How to align the contents along the cross axis.</dd>
            <dt><code>demarcate    true|false</code></dt>
            <dd>Whether or not to visually demarcate the boundaries of the
              Part.</dd>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout any child components in.</dd>
            <dt><code>id           {'{string}'}</code></dt>
            <dd>The id of this part. The id should at least be unique within
              the Topology.</dd>
            <dt><code>justify      start|center|between|end</code></dt>
            <dd>How to align the contents along the main axis.</dd>
            <dt><code>label        {'{string}'}</code></dt>
            <dd>The label of this part. This could be a part name or number,
              for example.</dd>
            <dt><code>reverse      true|false</code></dt>
            <dd>Whether to reverse the order of the child components.</dd>
            <dt><code>status       error|warning|ok|disabled|unknown</code></dt>
            <dd>If provided, adds the corresponding status icon.</dd>
          </dl>

          <h3>Toplogy.Parts</h3>
          <p>A container for Part components. It is provided purely to assist
            with Part layout.</p>
          <h4>Properties</h4>
          <dl>
            <dt><code>direction    row|column</code></dt>
            <dd>The orientation to layout the child components in.</dd>
            <dt><code>uniform      true|false</code></dt>
            <dd>Whether or not to all children should be the same size.</dd>
          </dl>

          <h3>Toplogy.Label</h3>
          <p>A label. It provides finer control over how Part labels are
            rendered.</p>
        </section>

      </DocsArticle>
    );
  }
};
