// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Search from 'grommet/components/Search';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';

Search.displayName = 'Search';

const USAGE =
`import Search from 'grommet/components/Search';
<Search value={} onDOMChange={} />`;

export default class SearchDoc extends Component {

  render () {
    return (
      <DocsArticle title="Search" colorIndex="neutral-3">

        <section>
          <p>A responsive search control.</p>
          <Search inline={true}/>
        </section>

        <section>
          <h2>Usage</h2>
          <pre><code className="html hljs xml">{USAGE}</code></pre>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>defaultValue  {"{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>dropAlign     {"{left: left|right, " +
              "right: left|right, top: top|bottom, bottom: top|bottom}"}
              </code></dt>
            <dd>Where to place the drop down.
              At most one of left or right and one of top or bottom should
              be specified.</dd>
            <dt><code>fill          true|false</code></dt>
            <dd>Indicates whether an inline search input should take up the full
              width of its parent container or not.</dd>
            <dt><code>iconAlign     start|end</code></dt>
            <dd>Whether the search icon should align with the start or end of
              the input field. Defaults to <code>end</code>.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates that the search input should always
              be visible.</dd>
            <dt><code>onDOMChange   {"{function (event)}"}</code></dt>
            <dd>Function that will be called when the user types in the
              input.</dd>
            <dt><code>onSelect      {"{function ({target: , suggestion: }, " +
              "selected)}"}</code></dt>
            <dd>Function that will be called when the user selects a
              suggestion. The target corresponds to the embedded input element
              , allowing you to distinguish which component triggered the event
              . The suggestion contains the object chosen from the supplied
              suggestions. selected will be true when the user has chosen one
              of the suggestions, and false when the user presses enter after
              entering text (without selecting a suggestion).</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether the search control is responsive (turns off inline
              search option for small screen sizes).
              If responsive is <code>false</code>, large inputs will shrink to
              the default inline size for smaller screens (instead of reverting
              to the search control button by default).
              Defaults to <code>true</code>.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the inline search input.
              Defaults to <code>medium</code>.</dd>
            <dt><code>suggestions   [{"{string}|{label: {string}, ...}"}, ...]
              </code></dt>
            <dd>Suggestions to show, typically based on what the user has
            typed so far. You can pass an array of strings or objects. Objects
            must have a label: property but can have any other properties you
            like. This object will be given to the onSelect() handler
            if the suggestion is selected.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to show in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <NavAnchor primary={true} path={`/docs/search/examples`}>
            Search Examples
          </NavAnchor>
        </section>

      </DocsArticle>
    );
  }
};
