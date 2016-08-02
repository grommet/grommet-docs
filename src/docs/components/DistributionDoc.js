// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Distribution from 'grommet/components/Distribution';

Distribution.displayName = 'Distribution';

const series = [
  {label: 'First', value: 40, colorIndex: 'graph-1'},
  {label: 'Second', value: 30, colorIndex: 'accent-2'},
  {label: 'Third', value: 20, colorIndex: 'unset'},
  {label: 'Fourth', value: 10, colorIndex: 'graph-1'}
];

const clickableSeries = [
  {label: 'First', value: 40, onClick: function () {
    alert('You\'ve clicked on 40');
  }},
  {label: 'Second', value: 30, onClick: function () {
    alert('You\'ve clicked on 30');
  }},
  {label: 'Third', value: 20, onClick: function () {
    alert('You\'ve clicked on 20');
  }},
  {label: 'Fourth', value: 10, onClick: function () {
    alert('You\'ve clicked on 10');
  }}
];

const iconSeries = [
  {label: 'Female', value: 60, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <path d="M20,36 L20,32"></path>
        <path d="M24,13 C21.2,13 19,15.2 19,18 C19,22 15.9,23.9 15.9,23.9 C15.9,23.9 16.6,26 20,26 L21,26 C18.2,26 16,28.2 16,31 L16,36"></path>
        <path d="M28,32 L28,36"></path>
        <path d="M32,36 L32,31 C32,28.2 29.9,26 27.1,26 L27,26 C30.4,26 32.1,23.9 32.1,23.9 C32.1,23.9 29,22 29,18 C29,15.2 26.7,13 24,13"></path>
      </g>
    )}
  },
  {label: 'Male', value: 40, icon: {
    width: 36, height: 36,
    svgElement: (
      <g fill="none" strokeWidth={1}>
        <circle cx="24" cy="18" r="5"></circle>
        <path d="M33,36 L33,31 C33,26.6 29.4,23 25,23 L23,23 C18.6,23 15,26.6 15,31 L15,36"></path>
        <path d="M20,36 L20,31"></path>
        <path d="M28,36 L28,31"></path>
      </g>
    )}
  }
];

export default class DistributionDoc extends Component {

  render () {
    return (
      <DocsArticle title="Distribution" colorIndex="neutral-3">

        <p>Shows a graphic of relatively sized items.
          If colorIndex properties are not specified per series item, they
          will be automatically asigned.
          One way to use a Distribution is to compare items across
          two attributes. One attribute determining the area and another
          determining the color.
          The guidance for coloring items is to use colorIndex 'unset'
          for less important items, neutral or graph colors for normal
          items and accent colors for items to call attention to. Status
          colorIndex values can be used as well.</p>
        <pre><code className="html hljs xml">
          {"<Distribution series={[...]} />"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>full        true|false</code></dt>
            <dd>Whether the height should fill its container.</dd>
            <dt><code>legend      true|false</code></dt>
            <dd>Whether to show a legend.</dd>
            <dt><code>legendTotal true|false</code></dt>
            <dd>Whether to show a total in the legend.</dd>
            <dt><code>series      {"[{value: , label: , labelValue: , colorIndex: , onClick: , icon: }, ...]"}</code></dt>
            <dd>An array of objects describing the
              data. All properties except <code>value</code> are
              optional. <code>labelValue</code> is used as the
              visible value. If <code>labelValue</code> is not
              set, the <code>value</code> is displayed instead.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The height of the Distribution. Defaults to <code>medium</code>.</dd>
            <dt><code>units       {"{string}"}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Basic" code={
            <Distribution series={series} a11yTitleId='distribution-title-1'
              a11yDescId='distribution-desc-1' />
          } />
          <Example name="Legend" code={
            <Distribution legend={true} series={series}
              a11yTitleId='distribution-title-2' a11yDescId='distribution-desc-2' />
          } />
          <Example name="Small" code={
            <Distribution size="small" series={series}
              a11yTitleId='distribution-title-3' a11yDescId='distribution-desc-3' />
          } />
          <Example name="Large" code={
            <Distribution size="large" series={series}
              a11yTitleId='distribution-title-4' a11yDescId='distribution-desc-4' />
          } />
          <Example name="onClick" code={
            <Distribution series={clickableSeries}
              a11yTitleId='distribution-title-6' a11yDescId='distribution-desc-6' />
          } />
          <Example name="Icon" code={
            <Distribution series={iconSeries} units="%"
              a11yTitleId='distribution-title-7' a11yDescId='distribution-desc-7' />
          } overrides={['svgElement']}/>
          <Example name="Loading" code={
            <Distribution a11yTitleId='distribution-title-5'
              a11yDescId='distribution-desc-5' />
          } />
        </section>

      </DocsArticle>
    );
  }
};
