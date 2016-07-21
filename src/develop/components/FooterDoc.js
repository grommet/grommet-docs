// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var Link = require('react-router').Link;
var DocsArticle = require('../../DocsArticle');
var Footer = require('grommet/components/Footer');
var Menu = require('grommet/components/Menu');
var Button = require('grommet/components/Button');
var A11y = require('../../utils/a11y');

Footer.displayName = 'Footer';
Menu.displayName = 'Menu';
Button.displayName = 'Button';

var FooterDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Footer');
  },

  _onClick: function () {
    // no-op
  },

  _renderFooterCode(heading, footerJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {footerJSX}
        </div>
        <pre><code className="html hljs xml">
          {jsxToString(footerJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var basicFooter = (
      <Footer>
        <Menu direction="row">
          <Button label="OK" primary={true} onClick={this._onClick} />
          <Button label="Cancel" onClick={this._onClick} />
        </Menu>
      </Footer>
    );

    var rightFooter = (
      <Footer justify="end">
        <Menu direction="row" justify="end">
          <Button label="Cancel" onClick={this._onClick} />
          <Button label="OK" primary={true} onClick={this._onClick} />
        </Menu>
      </Footer>
    );

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
            <dd>The size of the Footer. Defaults to <code>medium</code>.</dd>
            <dt><code>primary     true|false</code></dt>
            <dd>Whether it should be treated as main footer or not.
              Used for Accessibility.</dd>
            <dt><code>fixed       true|false</code></dt>
            <dd>Whether the footer is fixed on the page, typically 
              so content above it will scroll under it.</dd>
            <dt><code>float       true|false</code></dt>
            <dd>Whether the footer floats above content underneath it.</dd>              
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderFooterCode("Form Footer", basicFooter)}
          {this._renderFooterCode("Form Footer, right", rightFooter)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = FooterDoc;
