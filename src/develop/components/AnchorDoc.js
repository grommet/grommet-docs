// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Section = require('grommet/components/Section');
var Anchor = require('grommet/components/Anchor');
var NextIcon = require('grommet/components/icons/base/Next');
var EditIcon = require('grommet/components/icons/base/Edit');

function convertAnchorToString(anchorJSX) {
  return jsxToString(anchorJSX, {
    keyValueOverride: {
      onClick: 'this._onClick'
    }
  });
}

var AnchorDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  _onClick: function () {
    // no-op
  },

  _renderAnchorCode(heading, anchorJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {anchorJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertAnchorToString(anchorJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {

    var defaultAnchor = (
      <Anchor href=""  onClick={this._onClick}>Child text</Anchor>
    );

    var primaryAnchor = (
      <Anchor href="" label="Label" primary={true} onClick={this._onClick} />
    );

    var iconLabelAnchor = (
      <Anchor href="" icon={<EditIcon />} label="Edit" onClick={this._onClick} />
    );

    var iconLabelReverseAnchor = (
      <Anchor href="" icon={<NextIcon />} label="Next" reverse={true}
        onClick={this._onClick} />
    );

    var iconAnchor = (
      <Anchor href="" icon={<EditIcon />} onClick={this._onClick} />
    );

    var targetAnchor = (
      <Anchor href="" target="_blank" label="Label" onClick={this._onClick} />
    );

    var inHeaderAnchor = (
      <h3>
        <Anchor href="" label="Label" onClick={this._onClick} />
      </h3>
    );

    var coloredContextAnchor = (
      <Section colorIndex="neutral-1"
        pad={{horizontal: 'medium', vertical: 'medium', between: 'medium'}}>
        <Anchor href="" onClick={this._onClick}>Text</Anchor>
        <Anchor href="" primary={true} label="Label" onClick={this._onClick} />
        <Anchor href="" icon={<EditIcon />} onClick={this._onClick} />
        <Anchor href="" icon={<EditIcon />} label="Edit" onClick={this._onClick} />
      </Section>
    );

    var disabledAnchor = (
      <Anchor primary={true} disabled={true}>Text</Anchor>
    );

    return (
      <DocsArticle title="Anchor" colorIndex="neutral-3">

        <p>A text link. We have a separate component from the
        browser base so we can style it. You can either set the icon and/or
        label properties or just use children.</p>
        <pre><code className="html hljs xml">
          {"<Anchor href=\"...\">label</Anchor>"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>disabled       true|false</code></dt>
            <dd>
              Whether to disable the anchor. Default is false.
            </dd>
            <dt><code>href           {"{location}"}</code></dt>
            <dd>Hyperlink reference to place in the anchor.</dd>
            <dt><code>icon           {"{element}"}</code></dt>
            <dd>Icon element to place in the anchor.
              See <Link to={this.context.routePrefix + "icon"}>Icon</Link>.</dd>
            <dt><code>label          {"{text}"}</code></dt>
            <dd>Label text to place in the anchor.</dd>
            <dt><code>onClick        {"{func}"}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>primary        true|false</code></dt>
            <dd>Whether this is a primary anchor.</dd>
            <dt><code>reverse        true|false</code></dt>
            <dd>Whether an icon and label should be reversed so that the icon
              is at the end of the anchor.</dd>
            <dt><code>tag            {"{text}"}</code></dt>
            <dd>The DOM tag to use for the element. The default is {'<a>'}.
              This should be used in conjunction with components like
              Link from React Router. In this case, Link controls the
              navigation while Anchor controls the styling.</dd>
            <dt><code>target         {"{location}"}</code></dt>
            <dd>
              Target of the link,
              examples targets=_blank|_self|_parent|_top|framename.
            </dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderAnchorCode('Default', defaultAnchor)}
          {this._renderAnchorCode('Primary, Label', primaryAnchor)}
          {this._renderAnchorCode('Icon, Label', iconLabelAnchor)}
          {this._renderAnchorCode('Icon, Label, Reverse', iconLabelReverseAnchor)}
          {this._renderAnchorCode('Icon', iconAnchor)}
          {this._renderAnchorCode('Target', targetAnchor)}
          {this._renderAnchorCode('Disabled', disabledAnchor)}
          {this._renderAnchorCode('In a Header', inHeaderAnchor)}
          {this._renderAnchorCode('Colored context', coloredContextAnchor)}
        </section>
      </DocsArticle>
    );
  }
});

module.exports = AnchorDoc;
