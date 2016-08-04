// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Form from 'grommet/components/Form';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class TabsDoc extends Component {

  render () {

    return (
      <DocsArticle title="Tab(s)" colorIndex="neutral-3">

        <section>
          <p>A tabular view component.</p>
          <Tabs>
            <Tab title="First Title">
              <h3>First Tab</h3>
              <p>Contents of the first tab</p>
            </Tab>
            <Tab title="Second Title">
              <h3>Second Tab</h3>
              <p>Contents of the second tab</p>
            </Tab>
            <Tab title="Third Title">
              <h3>Third Tab</h3>
              <p>Contents of the third tab</p>
            </Tab>
          </Tabs>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>initialIndex        {"{number}"}</code></dt>
            <dd>Initial tab index. Defaults to 0.</dd>
            <dt><code>justify             start|center|end</code></dt>
            <dd>How to align the tabs along the main axis.
              Defaults to <code>center</code>.</dd>
            <dt><code>responsive          true|false</code></dt>
            <dd>Whether the row of tabs should be
              switched to a centered column layout when the display area narrows.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple" code={
            <Tabs>
              <Tab title="First Title">
                <h3>First Tab</h3>
                <p>Contents of the first tab</p>
                <Form compact={true}>
                  <FormFields>
                    <fieldset>
                      <FormField label="Your name">
                        <input name="name" type="text" />
                      </FormField>
                    </fieldset>
                  </FormFields>
                </Form>
              </Tab>
              <Tab title="Second Title">
                <h3>Second Tab</h3>
                <p>Contents of the second tab</p>
              </Tab>
              <Tab title="Third Title">
                <h3>Third Tab</h3>
                <p>Contents of the third tab</p>
              </Tab>
            </Tabs>
          } />

          <Example name="Initial Index, Justify Start" code={
            <Tabs initialIndex={1} justify="start">
              <Tab title="First Title">
                <h3>First Tab</h3>
                <p>Contents of the first tab</p>
              </Tab>
              <Tab title="Second Title">
                <h3>Second Tab</h3>
                <p>Contents of the second tab</p>
              </Tab>
              <Tab title="Third Title">
                <h3>Third Tab</h3>
                <p>Contents of the third tab</p>
              </Tab>
            </Tabs>
          } />

        </section>

      </DocsArticle>
    );
  }
};
