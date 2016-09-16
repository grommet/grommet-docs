// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Footer from 'grommet/components/Footer';
import Menu from 'grommet/components/Menu';
import Button from 'grommet/components/Button';

Footer.displayName = 'Footer';
Menu.displayName = 'Menu';
Button.displayName = 'Button';

const USAGE =
`import Footer from 'grommet/components/Footer';
<Footer>
  <Menu />
</Footer>`;

export default class FooterDoc extends Component {

  _onClick () {
    // no-op
  }

  render () {
    return (
      <DocsArticle title="Footer" colorIndex="neutral-3">

        <section>
          <p>Put things at the bottom.</p>
          <Footer>
            <Menu direction="row">
              <Button label="OK" primary={true} onClick={this._onClick} />
              <Button label="Cancel" onClick={this._onClick} />
            </Menu>
          </Footer>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
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
          <h2>Example</h2>

          <Example code={
            <Footer>
              <Menu direction="row">
                <Button label="OK" primary={true} onClick={this._onClick} />
                <Button label="Cancel" onClick={this._onClick} />
              </Menu>
            </Footer>
          } />
        </section>

      </DocsArticle>
    );
  }
};
