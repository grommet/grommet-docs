// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Distribution from 'grommet/components/Distribution';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

Distribution.displayName = 'Distribution';

export default class DistributionDoc extends Component {

  render () {
    return (
      <DocsArticle title='Distribution' action={
        <Button primary={true} path='/docs/distribution/examples'
          label='Examples' />
        }>

        <section>
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
          <Distribution series={[
            {label: 'First', value: 80},
            {label: 'Second', value: 20}
          ]} />
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>full         true|false</code></dt>
            <dd>Whether the height should fill its container.</dd>
            <dt><code>series       {'[{value: , label: , labelValue: , ' +
              'colorIndex: , onClick: , icon: }, ...]'}</code></dt>
            <dd>An array of objects describing the
              data. All properties except <code>value</code> are
              optional. <code>labelValue</code> is used as the
              visible value. If <code>labelValue</code> is not
              set, the <code>value</code> is displayed instead.</dd>
            <dt><code>size         small|medium|large|full</code></dt>
            <dd>The height of the Distribution.
              Defaults to <code>medium</code>.</dd>
            <dt><code>units        {'{string}'}</code></dt>
            <dd>Optional units to display next to the value label.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
