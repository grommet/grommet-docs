// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var NumberInput = require('grommet/components/NumberInput');

var NumberInputDoc = React.createClass({

  getInitialState: function () {
    return {value: 10};
  },

  _onChange: function (event) {
    this.setState({value: parseInt(event.target.value)});
  },

  render: function() {
    var inline = [
      "<NumberInput id=\"item1\" >"
    ].join("\n");
    return (
      <DocsArticle title="NumberInput" colorIndex="neutral-3">

        <p>A number input in a web form. We have a separate component from the
          browser base so we can style it.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
          <dt><code>checked         true|false</code></dt>
          <dd>Same as React {"<input checked= >"}.</dd>
          <dt><code>defaultChecked  true|false</code></dt>
          <dd>Same as React {"<input defaultChecked= >"}.</dd>
          <dt><code>disabled        true|false</code></dt>
          <dd>Same as React {"<input disabled= >"}.
            Also adds a hidden input element with the same name so
            form submissions work.</dd>
          <dt><code>id              {"{text}"}</code></dt>
          <dd>The DOM id attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>label           {"{text|node}"}</code></dt>
          <dd>Label text to place next to the control.</dd>
          <dt><code>name            {"{text}"}</code></dt>
          <dd>The DOM name attribute value to use for the underlying
            {"<input>"} element.</dd>
          <dt><code>onChange        {"{func}"}</code></dt>
          <dd>Same as React {"<input onChange= >"}.</dd>
          <dt><code>toggle         true|false</code></dt>
          <dd>Whether to visualize it as a toggle switch.</dd>
          <dt><code>ariaDescribedby {"{text}"}</code></dt>
          <dd>Optional attribute to enhance accessibility in case the checkbox is used inside a context.</dd>
          </dl>
        </section>

        <section>
          <h2>Example</h2>

          <h3>Basic</h3>
          <div className="example">
            <NumberInput id="item2" name="item2" label="Item 2"
              value={this.state.value} onChange={this._onChange} />
          </div>
          <pre><code className="html hljs xml">{"<NumberInput id=\"item2\" name=\"item2\" label=\"Item 2\" />"}</code></pre>

          <h3>Disabled</h3>
          <div className="example">
            <NumberInput id="item4" name="item4" label="Item 4" disabled={true}
              value={this.state.value} />
          </div>
          <pre><code className="html hljs xml">{"<NumberInput id=\"item4\" name=\"item4\" label=\"Item 4\" disabled=\{true\} />"}</code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = NumberInputDoc;
