// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../DocsArticle';
import Example from '../Example';
import Legend from 'grommet/components/Legend';
import { updatePageTitle } from '../../utils/a11y';

Legend.displayName = 'Legend';

const series = [
  {continent: 'NorthAmerica', label: 'North America', value: 40,
    colorIndex: 'graph-1', onClick: () => {
      alert('North America');
    }},
  {continent: 'SouthAmerica', label: 'South America', value: 30,
    colorIndex: 'accent-2', onClick: () => {
      alert('North America');
    }},
  {continent: 'Europe', label: 'Europe', value: 20,
    colorIndex: 'unset', onClick: () => {
      alert('Europe');
    }},
  {continent: 'Africa', label: 'Africa', value: 10,
    colorIndex: 'graph-2', onClick: () => {
      alert('Africa');
    }},
  {continent: 'Asia', label: 'Asia', value: 15,
    colorIndex: 'graph-3', onClick: () => {
      alert('Asia');
    }},
  {continent: 'Australia', label: 'Australia', value: 10,
    colorIndex: 'graph-4', onClick: () => {
      alert('Australia');
    }}
];

export default class LegendDoc extends Component {

  componentDidMount () {
    updatePageTitle('Legend');
  }

  render () {

    return (
      <DocsArticle title="Legend" colorIndex="neutral-3">

        <p>A legend, typically associated with a data visualization such
          as <code>Meter</code>, <code>Distribution</code>,
          or <code>WorldMap</code>.</p>
        <pre><code className="html hljs xml">
          {"<Legend series={[...]} />"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>activeIndex   {"{index}"}</code></dt>
            <dd>Which data item should be shown as active, if any.</dd>
            <dt><code>onActive      {"function (index) {...}"}</code></dt>
            <dd>Function that will be called when the user hovers over one
              of the data items.</dd>
            <dt><code>series        {"[{label: , value: , colorIndex: , onClick: }, ...]"}</code></dt>
            <dd>An array of objects describing the data.</dd>
            <dt><code>total         true|false</code></dt>
            <dd>Whether to show the total of all values.</dd>
            <dt><code>units         {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>
        </section>

        <section>
          <Example name="Example" code={
            <Legend series={series} units="B"/>
          } />
        </section>

      </DocsArticle>
    );
  }
};
