// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var Link = require('react-router').Link;
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var Menu = require('grommet/components/Menu');
var ConfigIcon = require('grommet/components/icons/base/Configuration');
var FilterIcon = require('grommet/components/icons/base/Filter');
var CheckBox = require('grommet/components/CheckBox');
var Anchor = require('grommet/components/Anchor');
var Button = require('grommet/components/Button');
var A11y = require('../../utils/a11y');

Menu.displayName = 'Menu';
CheckBox.displayName = 'CheckBox';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

function convertMenuToString(menuJSX) {
  return jsxToString(menuJSX);
}

var MenuDoc = React.createClass({

  contextTypes: {
    routePrefix: React.PropTypes.string.isRequired
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Menu');
  },

  _onClick: function () {
    // no-op
  },

  _renderMenuCode: function (heading, menuJSX) {
    return (
      <div>
        <h3>{heading}</h3>
        <div className="example">
          {menuJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertMenuToString(menuJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {

    var columnInlineMenu = (
      <Menu>
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var rowInlineMenu = (
      <Menu direction="row">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var rowEndMenu = (
      <Menu direction="row" justify="end" inline={true} label="Menu">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var labelDownMenu = (
      <Menu label="Label">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var iconDownMenu = (
      <Menu inline={false}>
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var customIconMenu = (
      <Menu icon={<ConfigIcon />}>
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var iconLabelMenu = (
      <Menu icon={<ConfigIcon />} label="Label">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var doNotCloseMenu = (
      <Menu icon={<FilterIcon />} closeOnClick={false} pad="medium">
        <CheckBox id="check-1" label="first" />
        <CheckBox id="check-2" label="second" />
        <CheckBox id="check-3" label="third" />
      </Menu>
    );

    var notInlineUpMenu = (
      <Menu inline={false} dropAlign={{bottom: "bottom"}}>
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var buttonBarMenu = (
      <Menu direction="row">
        <Button label="Button 1" onClick={this._onClick} />
        <Button label="Button 2" onClick={this._onClick} />
        <Button label="Button 3" onClick={this._onClick} />
      </Menu>
    );

    var smallInlineMenu = (
      <Menu direction="row" size="small">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    var largeInlineMenu = (
      <Menu direction="row" size="large">
        <Anchor href="#" className="active">First</Anchor>
        <Anchor href="#">Second</Anchor>
        <Anchor href="#">Third</Anchor>
      </Menu>
    );

    return (
      <DocsArticle title="Menu" colorIndex="neutral-3">

        <p>Presents a list of choices responsively.</p>
        <pre><code className="html hljs xml">
          {"<Menu>\n  <Anchor href=\"#\">Link 1</Anchor>\n  ...\n</Menu>"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>closeOnClick  true|false</code></dt>
            <dd>Indicates whether the opened menu drop down should close
            when clicked. Default is true.</dd>
            <dt><code>inline        true|false</code></dt>
            <dd>Indicates whether the menu should be shown inline or
              a control shown to open it in a drop down. If false,
              the specified label or icon will be shown, if neither are
              specified, a default icon will be shown.</dd>
            <dt><code>dropAlign     {"{left: left|right, right: left|right, top: top|bottom, bottom: top|bottom}"}</code></dt>
            <dd>Where to place the drop down. The keys correspond to a side
              of the drop down. The values correspond to a side of the control.
              For instance, <code>{"{left: 'left', top: 'bottom'}"}</code>
              would align the left edges and the top of the drop down to the
              bottom of the control.
              At most one of left or right and one of top or bottom should be
              specified.
            </dd>
            <dt><code>icon          {"{icon}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              icon shown as a control top open it.</dd>
            <dt><code>label         {"{text}"}</code></dt>
            <dd>Indicates that the menu should be collapsed and the
              label shown as a control top open it.</dd>
            <dt><code>responsive    true|false</code></dt>
            <dd>Whether an inline menu should be automatically switched
              to a control + drop down when the window size is reduced.</dd>
            <dt><code>size          small|medium|large</code></dt>
            <dd>The size of the Menu. Defaults to <code>medium</code>.</dd>
          </dl>
          <p>Options for <Link to={this.context.routePrefix + "box"}>Box</Link> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderMenuCode('column, inline', columnInlineMenu)}
          {this._renderMenuCode('row, inline', rowInlineMenu)}
          {this._renderMenuCode('row, end, inline, label', rowEndMenu)}
          {this._renderMenuCode('label, down, not inline', labelDownMenu)}
          {this._renderMenuCode('icon, down, not inline', iconDownMenu)}
          {this._renderMenuCode(
            'custom icon, down, not inline', customIconMenu
          )}
          {this._renderMenuCode('custon icon, label, down, not inline', iconLabelMenu)}
          {this._renderMenuCode(
            'custom icon, down, not inline, do not close on click',
            doNotCloseMenu
          )}
          {this._renderMenuCode('not inline, up', notInlineUpMenu)}
          {this._renderMenuCode('button bar', buttonBarMenu)}
          {this._renderMenuCode('small', smallInlineMenu)}
          {this._renderMenuCode('large', largeInlineMenu)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = MenuDoc;
