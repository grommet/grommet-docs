// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Chart, { Base, Range, Layers } from 'grommet/components/chart/Chart';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../../components/DocsArticle';
import BackControl from './BackControl';

export default class RangeDoc extends Component {

  render () {
    return (
      <DocsArticle context={<BackControl />} title='Range'>

        <section>
          <p>A means of selecting a range within
            a <Anchor path={`/docs/chart`}>Chart</Anchor>. It is structured
            as a specified number of slots that the user can select by clicking
            and dragging across.
            It should be placed inside a <Anchor path={`/docs/chart-layers`}>
            Layers</Anchor> component.</p>

          <Chart>
            <Base height='small' />
            <Layers>
              <Range count={5} active={{ start: 1, end: 3 }} />
            </Layers>
          </Chart>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>active       {'{start: {number}, end: {number}}'}
              </code></dt>
            <dd>The starting and ending selected slot indexes.</dd>
            <dt><code>count        {'{number}'}</code></dt>
            <dd>The number of slots, including both ends.
              This property is required.</dd>
            <dt><code>onActive     {'{function ({start: {number}, ' +
              'end: {number}})}'}</code></dt>
            <dd>This function is called when the user changes the selected
              range.</dd>
            <dt><code>vertical     true|false</code></dt>
            <dd>Whether the slots should be layed out horizontally
              or vertically.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>
          <Anchor path={`/docs/chart-examples#7`} primary={true}>
            Range selector</Anchor>
        </section>

      </DocsArticle>
    );
  }
};
