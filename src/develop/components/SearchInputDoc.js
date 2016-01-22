// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var SearchInput = require('grommet/components/SearchInput');
var Box = require('grommet/components/Box');

var SearchInputSuggestion = React.createClass({
  propTypes: {
    name: React.PropTypes.string,
    annotation: React.PropTypes.string
  },

  render: function () {
    return (
      <Box direction="row" justify="between">
        {this.props.name}
        <span className="secondary">{this.props.annotation}</span>
      </Box>
    );
  }
});

var SearchInputDoc = React.createClass({

  getInitialState: function () {
    return {
      value: "one",
      suggestions: this._values,
      richValue: "second",
      richSuggestions: this._richValues
    };
  },

  _values: ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight'],

  _richValues: [
    {value: "first", sub: "alpha",
      label: <SearchInputSuggestion name="first" annotation="alpha" />},
    {value: "second", sub: "beta",
      label: <SearchInputSuggestion name="second" annotation="beta" />},
    {value: "third", sub: "gamma",
      label: <SearchInputSuggestion name="third" annotation="gamma" />},
    {value: "fourth", sub: "delta",
      label: <SearchInputSuggestion name="fourth" annotation="delta" />}
  ],

  _onChange: function (value, selected) {
    if (selected) {
      this.setState({value: value, suggestions: this._values});
    } else {
      var regexp = new RegExp('^' + value);
      var suggestions = this._values.filter(function (val) {
        return regexp.test(val);
      });
      this.setState({value: value, suggestions: suggestions});
    }
  },

  _onDOMChange: function (event) {
    var regexp = new RegExp('^' + event.target.value);
    var suggestions = this._richValues.filter(function (richValue) {
      return regexp.test(richValue.value) || regexp.test(richValue.sub);
    });
    this.setState({richValue: event.target.value, richSuggestions: suggestions});
  },

  _onSelect: function (pseudoEvent) {
    this.setState({richValue: pseudoEvent.suggestion.value, richSuggestions: this._richValues});
  },

  render: function() {
    var inline =
      "<SearchInput onChange={...} />";
    return (
      <DocsArticle title="SearchInput" colorIndex="neutral-3">

        <p>An input field with a search control.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>defaultValue  {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to start with in the input.</dd>
            <dt><code>id            {"{string}"}</code></dt>
            <dd>The id attribute of the input.</dd>
            <dt><code>name          {"{string}"}</code></dt>
            <dd>The name attribute of the input.</dd>
            <dt><code>onChange      {"function ({value: , label: }|{string}, selected) {...}"}</code></dt>
            <dd>Function that will be called when the user types some text into the input.
              selected will be true when the user has chosen one of the suggestions.
              This property is deprecated in favor of onDOMChange and onSelect.</dd>
            <dt><code>onDOMChange      {"function (event) {...}"}</code></dt>
            <dd>Function that will be called when the user types in the input.</dd>
            <dt><code>onSelect      {"function ({target: , suggestion: }) {...}"}</code></dt>
            <dd>Function that will be called when the user selects a suggestion.
              The target corresponds to the embedded input element, allowing you
              to distinguish which component triggered the event. The suggestion
              contains the object chosen from the supplied suggestions.</dd>
            <dt><code>placeHolder   {"{string}"}</code></dt>
            <dd>Placeholder text to use when the input is empty.</dd>
            <dt><code>suggestions   {"[{value: , label: }|{string}, ...]"}</code></dt>
            <dd>Suggestions can be either a string or an object.
              The <code>label</code> property of suggestion objects can be a
              string or a React element. This allows rendering richer
              suggestion representations.</dd>
            <dt><code>value         {"{value: , label: }|{string}"}</code></dt>
            <dd>What text to put in the input.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <SearchInput id="item2" name="item-2"
              value={this.state.value} onChange={this._onChange}
              suggestions={this.state.suggestions} />
          </div>
          <pre><code className="html hljs xml">{"<SearchInput value=\"" + this.state.value + "\" />"}</code></pre>

          <h3>Rich Suggestions</h3>
          <div className="example">
            <SearchInput id="item2" name="item-2"
              value={this.state.richValue} onDOMChange={this._onDOMChange}
              onSelect={this._onSelect}
              suggestions={this.state.richSuggestions} />
          </div>
          <pre><code className="html hljs xml">{"<SearchInput value=\"" + this.state.richValue + "\" />"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = SearchInputDoc;
