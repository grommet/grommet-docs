// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';
import { updatePageTitle } from '../utils/a11y';

Footer.displayName = 'Footer';
Menu.displayName = 'Menu';
Button.displayName = 'Button';

export default class FooterDoc extends Component {

  componentDidMount () {
    updatePageTitle('Footer');
  }

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Footer" colorIndex="neutral-3">

        <p>Put things at the bottom.</p>
        <pre><code className="html hljs xml">
          {"<Footer>\n  ...\n</Footer>"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>primary     true|false</code></dt>
            <dd>Whether it should be treated as main footer or not.
              Used for Accessibility.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

            <Example name="Form Footer" code={
              <Footer>
                <Menu direction="row">
                  <Button label="OK" primary={true} onClick={this._onClick} />
                  <Button label="Cancel" onClick={this._onClick} />
                </Menu>
              </Footer>
            } />

            <Example name="Form Footer, right" code={
              <Footer justify="end">
                <Menu direction="row" justify="end">
                  <Button label="Cancel" onClick={this._onClick} />
                  <Button label="OK" primary={true} onClick={this._onClick} />
                </Menu>
              </Footer>
            } />
        </section>

      </DocsArticle>
    );
  }
};
