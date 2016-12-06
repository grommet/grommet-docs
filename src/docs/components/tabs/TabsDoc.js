// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import Paragraph from 'grommet/components/Paragraph';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class TabsDoc extends Component {

  render () {

    return (
      <DocsArticle title='Tab(s)' action={
        <Button primary={true} path='/docs/tabs/examples' label='Examples' />
      }>

        <section>
          <p>A tabular view component.</p>
          <Tabs>
          <Tab title='First Title'>
            <Paragraph>First contents</Paragraph>
          </Tab>
          <Tab title='Second Title'>
            <Paragraph>Second contents</Paragraph>
          </Tab>
          </Tabs>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>activeIndex         {'{number}'}</code></dt>
            <dd>Active tab index. Defaults to 0.</dd>
            <dt><code>justify             start|center|end</code></dt>
            <dd>How to align the tabs along the main axis.
              Defaults to <code>center</code>.</dd>
            <dt><code>onActive            {'{function}'}</code></dt>
            <dd>Function that will be called with the active tab index when
              the currently active tab changes.</dd>
            <dt><code>responsive          true|false</code></dt>
            <dd>Whether the row of tabs should be
              switched to a centered column layout when the display
              area narrows.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
