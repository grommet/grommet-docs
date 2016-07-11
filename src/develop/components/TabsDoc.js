// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Tabs = require('grommet/components/Tabs');
var Tab = require('grommet/components/Tab');
var FormFields = require('grommet/components/FormFields');
var FormField = require('grommet/components/FormField');
var Form = require('grommet/components/Form');
var A11y = require('../../utils/a11y');

var TabsDoc = React.createClass({
  componentDidMount: function () {
    A11y.updatePageTitle('Tabs');
  },

  render: function() {

    var inline =
      "<Tabs>\n" +
      "  <Tab>\n" +
      "   ...\n" +
      "  </Tab>\n" +
      "  ...\n" +
      "</Tabs>";

    return (
      <DocsArticle title="Tab(s)" colorIndex="neutral-3">

        <p>A tabular view component.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>initialIndex        default:0</code></dt>
            <dd>Optional initial tab index.</dd>
          </dl>
          <dl>
            <dt><code>justify             start|center|end</code></dt>
            <dd>How to align the tabs along the main axis.
              Defaults to <code>center</code>.</dd>
          </dl>
          <dl>
            <dt><code>responsive          true|false</code></dt>
            <dd>Whether the row of tabs should be
              switched to a centered column layout when the display area narrows.
              Defaults to <code>true</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
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
          </div>
          <pre><code className="html hljs xml">
            {"<Tabs>\n  <Tab title=\"First Title\">\n    <h3>First Tab</h3>\n    <p>Contents of the first tab</p>\n  </Tab>\n  <Tab title=\"Second Title\">\n    <h3>Second Tab</h3>\n    <p>Contents of the second tab</p>\n  </Tab>\n  <Tab title=\"Third Title\">\n    <h3>Third Tab</h3>\n    <p>Contents of the third tab</p>\n  </Tab>\n</Tabs>"}
          </code></pre>

          <h3>Initial Index, Justify Start</h3>
          <div className="example">
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
          </div>
          <pre><code className="html hljs xml">
            {"<Tabs initialIndex={1}>\n  <Tab title=\"First Title\">\n    <h3>First Tab</h3>\n    <p>Contents of the first tab</p>\n  </Tab>\n  <Tab title=\"Second Title\">\n    <h3>Second Tab</h3>\n    <p>Contents of the second tab</p>\n  </Tab>\n  <Tab title=\"Third Title\">\n    <h3>Third Tab</h3>\n    <p>Contents of the third tab</p>\n  </Tab>\n</Tabs>"}
          </code></pre>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = TabsDoc;
