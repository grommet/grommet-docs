// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Query from 'grommet-addons/utils/Query';
import DocsArticle from '../../components/DocsArticle';

let query = new Query('(a OR b) AND (n:v OR n:w) "big deal" NOT ' +
  '01:23:45:67:89:ab 2016-01-31T16:45:46Z');
let errorQuery = new Query('a b "');

export default class QueryDoc extends Component {

  render () {
    return (
      <DocsArticle title='Query'>

        <section>
          <p>Utility functions for managing search and filter contexts. It can
            be used for:</p>
          <ul>
            <li>User typed text containing simple text terms, which
              might be quoted. For
              instance, <strong>name</strong> or <strong>
              'search term'</strong>.</li>
            <li>User typed text containing faceted filter terms. For
              instance, <strong>name:value</strong>.</li>
            <li>Combined text terms, faceted filters, and boolean logic. The
              boolean logic available
              includes <code>AND</code>, <code>OR</code>, <code>NOT</code>, and
              parentheses for grouping.</li>
          </ul>
          <p><strong>NOTE:</strong> This component comes from
            the <code>grommet-addons</code> repository. You will need to add
            a dependency to that repository in order to use it.</p>
        </section>

        <section>
          <h2>Constructor</h2>

          <dl>
            <dt><code>string</code></dt>
            <dd>Typically, this is the user typed text string.</dd>
          </dl>

          <h2>Methods</h2>
          <dl>
            <dt><code>error    ({'{object}'})</code></dt>
            <dd>An exception object indicating syntactical issues with
              parsing.</dd>
            <dt><code>set      ({'{string}'})</code></dt>
            <dd>Replace the current text string.</dd>
            <dt><code>toString ()</code></dt>
            <dd>Gets the current text string.</dd>
            <dt><code>tree     ()</code></dt>
            <dd>Returns a boolean logic tree object. This permits syntax
              highlighting and programmatic processing. Connecting nodes are
              of the form <code>{'{ op: and|or, left: , right: }'}</code>. Leaf
              nodes are of the form <code>
              {'{ text: , name:, value: , not: true|false }'}</code></dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>
          <h3>Boolean Logic</h3>
          <pre><code className='javascript'>
            {`let query = new Query('${query.toString()}');\n`}
            {'query.toString();\n'}
            {'>> ' + query.toString() + '\n'}
            {'query.error();\n'}
            {'>> ' + query.error() + '\n'}
            {'query.tree();\n'}
            {'>> ' + JSON.stringify(query.tree(), null, '  ')}
          </code></pre>

          <h3>Syntax error</h3>
          <pre><code className='javascript'>
            {`let errorQuery = new Query('${errorQuery.toString()}');\n`}
            {'errorQuery.toString();\n'}
            {'>> ' + errorQuery.toString() + '\n'}
            {'errorQuery.error();\n'}
            {'>> ' + errorQuery.error() + '\n'}
          </code></pre>
        </section>

      </DocsArticle>
    );
  }
};
