// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class ResponsiveDoc extends Component {

  render () {

    const example =
`import Responsive from 'grommet/utils/Responsive';

export default class Dashboard extends Component {

  constructor() {
    super();
    this._onResponsive = this._onResponsive.bind(this);
    this.state = {};
  }

  componentDidMount () {
    this._responsive = Responsive.start(this._onResponsive);
  }

  componentWillUnmount {
    this._responsive.stop();
  }

  _onResponsive(small) {
    this.setState({ small });
  }

})`;

    return (
      <DocsArticle title='Responsive'>

        <section>
          <p>
            Utility function for being notified when the window size
            crosses the threshold between mobile and desktop. In general,
            grommet components take care of handling responsiveness within
            themselves. But, sometimes there are situations that require
            custom responsive handling. Using this utility guarantees
            that your changes will be in sync with the grommet ones at the
            same breakpoint.
          </p>
        </section>

        <section>
          <h2>Methods</h2>
          <dl>
            <dt>
              <code>start ({'{function (true|false)}'})</code>
            </dt>
            <dd>Called when the browser window size crosses the threshold
              between mobile and desktop. The argument
              is <code>true</code> when mobile
              and <code>false</code> when desktop.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <Example preamble={example}/>
        </section>

      </DocsArticle>
    );
  }
};
