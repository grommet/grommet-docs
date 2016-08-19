// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class RestDoc extends Component {

  render () {

    const example =
`import { headers, buildQuery, processStatus } from 'grommet/utils/Rest';

export default class MyComponent extends Component {

  _getData (filters) {
    const query = buildQuery(filters);
    const options = { method: 'GET', headers: { ...headers, Auth: _token };
    fetch(\`/rest/index/resources\${query}\`, options)
    .then(processStatus)
    .then(response => response.json())
    .then(result => this.setState({ result: result, error: undefined }))
    .catch(error => this.setState({ result: undefined, error: error }));
  }

})`;

    const deprecatedExample =
`export default class MyComponent extends Component {
  ...
  _onResponse (err, res) {
    if (err && err.timeout > 1000) {
      this.setState({error: 'Timeout', result: {}});
    } else if (res.status === 400) {
      Actions.logout();
    } else if (!res.ok) {
      this.setState({error: res.body || res.text, result: {}});
    } else {
      var result = res.body;
      this.setState({result: result, error: null});
    }
  }
  ...
  _getData () {
    Rest.get('/rest/index/resources', this.state.options.params)
      .end(this._onResponse);
  }
  ...
})`;

    return (
      <DocsArticle title="Rest" colorIndex="neutral-4">

        <p>Utility functions for performing REST calls. Applications that
          interact with REST APIs should
          use <a href="https://github.com/whatwg/fetch">fetch</a> and
          <a href="https://www.promisejs.org">promises</a>. This Rest
          module provides a few helper functions along the way.</p>

        <section>
          <h2>Variables</h2>

          <dl>
            <dt><code>headers</code></dt>
            <dd><code>Accept</code> and <code>Content-Type</code> headers for
              JSON APIs.</dd>
          </dl>

          <h2>Methods</h2>
          <dl>
            <dt><code>buildParams    ({"{object}"})</code></dt>
            <dd>Converts object to parameter array of strings
              of <code>name=URI-encoded-value</code>. Handles array values.</dd>
            <dt><code>buildQuery     ({"{object}|{Array}"})</code></dt>
            <dd>Calls <code>buildParams</code> if passed an object. Then joins
              the params array with '&' and adds a '?' prefix if needed</dd>
            <dt><code>processStatus  ({"{response}"})</code></dt>
            <dd>For use in a <a href="https://www.promisejs.org">promise</a>
              chain.
              Rejects promise if response is not ok.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>
          <pre><code className="javascript">
            {example}
          </code></pre>
        </section>

        <section>
          <h2>Deprecated</h2>

          <p>The following methods and the embedding
            of <a href="https://github.com/visionmedia/superagent">
            superagent</a> are
            deprecated and will be removed in a future release. The
            rationale for
            this is that fetch is a simple enough interface.</p>

          <h2>Deprecated Methods</h2>
          <dl>
            <dt><code>del (uri)</code></dt>
            <dd>Delete the resource indicated by the uri.</dd>
            <dt><code>get (uri, object)</code></dt>
            <dd>Get the resource indicated by the uri and optional
              query parameters.
            The second argument will be converted into a query string.</dd>
            <dt><code>head (uri, object)</code></dt>
            <dd>Chek the resource indicated by the uri and optional query
              parameters.
            The second argument will be converted into a query string.</dd>
            <dt><code>patch (uri, data)</code></dt>
            <dd>Update some of the resource indicated by the uri with the
              provided data.</dd>
            <dt><code>post (uri, data)</code></dt>
            <dd>Create a resource under the indicated uri with the provided
              data.</dd>
            <dt><code>put (uri, data)</code></dt>
            <dd>Create or update the resource indicated by the uri with the
              provided data.</dd>
            <dt><code>setHeader (name, value)</code></dt>
            <dd>Set a default HTTP header.</dd>
            <dt><code>setHeaders (object)</code></dt>
            <dd>Set multiple HTTP headers.</dd>
            <dt><code>setTimeout</code></dt>
            <dd>Set the default request timeout.</dd>
          </dl>

          <p>Note, the object returned from head, get, patch, post, put,
            and del is
          the superagent request object. You must call <code>end()</code> to
          actually
          perform the request.</p>
        </section>

        <section>
          <h2>Deprecated Example</h2>
          <pre><code className="javascript">
            {deprecatedExample}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
};
