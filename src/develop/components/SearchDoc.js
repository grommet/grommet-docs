// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var stringify = require("json-stringify-pretty-compact");
var DocsArticle = require('../../DocsArticle');
var Search = require('grommet/components/Search');

var SIMPLE_SUGGESTIONS = ['item 1', 'item 2', 'item 3'];
var RICH_SUGGESTIONS = [
  {label: 'item 1', data: '/item-1'},
  {label: 'item 2', data: '/item-2'},
  {label: 'item 3', data: '/item-3'}
];

var SearchDoc = React.createClass({

  getInitialState: function () {
    return {
      value: "",
      simpleSuggestions: [],
      richSuggestions: []
    };
  },

  _onDOMChange: function (event) {
    var regexp = new RegExp('^' + event.target.value);
    var simpleSuggestions = SIMPLE_SUGGESTIONS.filter(function (suggestion) {
      return regexp.test(suggestion);
    });
    var richSuggestions = RICH_SUGGESTIONS.filter(function (suggestion) {
      return regexp.test(suggestion.label);
    });

    this.setState({
      value: event.target.value,
      simpleSuggestions: simpleSuggestions,
      richSuggestions: richSuggestions
    });
  },

  _onSelect: function (pseudoEvent, selected) {
    var value;
    if (pseudoEvent.suggestion && pseudoEvent.suggestion.hasOwnProperty('label')) {
      value = pseudoEvent.suggestion.label;
    } else {
      value = pseudoEvent.suggestion;

    }
    this.setState({
      value: value,
      simpleSuggestions: [],
      richSuggestions: []
    });
  },

  render: function() {
    var inline =
    "<Search onDOMChange={...} onSelect={...} />";
    return (
      <DocsArticle title="Search" colorIndex="neutral-3">

        <p>A responsive search control.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>defaultValue  {"{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down.
              At most one of left or right and one of top or bottom should be specified.</dd>
            <dt><code>fill          true|false</code></dt>
            <dd>Indicates whether an inline search input should take up the full
              width of its parent container or not.</dd>
            <dt><code>iconAlign     start|end</code></dt>
            <dd>Whether the search icon should align with the start or end of
              the input field. Defaults to <code>end</code>.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates that the search input should always
              be visible.</dd>
            <dt><code>onChange      {"function ({value: , label: }|{string}) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text
              into the input. This property is deprecated in favor of
              onDOMChange and onSelect.</dd>
            <dt><code>onDOMChange   {"function (event) {...}"}</code></dt>
            <dd>Function that will be called when the user types in the input.</dd>
            <dt><code>onSelect      {"function ({target: , suggestion: }, selected) {...}"}</code></dt>
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
            <dt><code>size          medium|large</code></dt>
            <dd>The size of the inline search input. Defaults to <code>medium</code>.</dd>
            <dt><code>suggestions   [{"{string}|{label: {string}, ...}"}, ...]</code></dt>
            <dd>Suggestions to show, typically based on what the user has
            typed so far. You can pass an array of strings or objects. Objects
            must have a label: property but can have any other properties you
            like. This object will be given to the onSelect() handler (or
            onChange() handler) if the suggestion is selected.</dd>
            <dt><code>value         {"{string}"}</code></dt>
            <dd>What text to show in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
            <Search onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search />"}</code></pre>

          <h3>Left</h3>
          <div className="example">
            <Search onDOMChange={this._onDOMChange} onSelect={this._onSelect}  dropAlign={{right: 'right'}} />
          </div>
          <pre><code className="html hljs xml">{"<Search dropAlign={{right: \"right\"}} />"}</code></pre>

          <h3>Suggestions and Value</h3>
          <div className="example">
            <Search value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search defaultValue=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "} />"}</code></pre>

          <h3>Inline</h3>
          <div className="example">
            <Search inline={true}/>
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true}/>"}</code></pre>

          <h3>Inline, IconAlign Start</h3>
          <div className="example">
            <Search inline={true} iconAlign="start"/>
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} iconAlign=\"start\" />"}</code></pre>

          <h3>Inline, Placeholder</h3>
          <div className="example">
            <Search inline={true} placeHolder="Search" />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} placeHolder=\"Search\" />"}</code></pre>

          <h3>Inline, Value, and Suggestions</h3>
          <div className="example">
            <Search inline={true} value={this.state.value}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} value=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "}/>"}</code></pre>

          <h3>Inline, Value, Rich Suggestions</h3>
          <div className="example">
            <Search inline={true} value={this.state.value}
              suggestions={this.state.richSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search inline={true} value=\"" +
            this.state.value + "\" suggestions={" +
            stringify(this.state.simpleSuggestions) + "}/>"}</code></pre>

          <h3>Large</h3>
          <div className="example">
            <Search inline={true} value={this.state.value} size="large"
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search size=\"large\"> ..."}</code></pre>

          <h3>Large, Fill, Responsive False</h3>
          <div className="example">
            <Search inline={true} value={this.state.value} size="large"
              fill={true} responsive={false}
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search size=\"large\" fill={true} responsive={false}> ..."}</code></pre>

          {/*}
          <h3>Small</h3>
          <p>Avoid using this size as it is too small for touch devices.</p>
          <div className="example">
            <Search inline={true} value={this.state.value} size="small"
              suggestions={this.state.simpleSuggestions}
              onDOMChange={this._onDOMChange} onSelect={this._onSelect} />
          </div>
          <pre><code className="html hljs xml">{"<Search size=\"small\"> ..."}</code></pre>
          {*/}

        </section>

      </DocsArticle>
    );
  }
});

module.exports = SearchDoc;
