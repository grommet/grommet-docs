// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Header = require('grommet/components/Header');
var SearchInput = require('grommet/components/SearchInput');
var Tiles = require('grommet/components/Tiles');
var Tile = require('grommet/components/Tile');
var Button = require('grommet/components/Button');
var SVGIcon = require('grommet/components/SVGIcon');
var iconsMap = require('./iconsMap');
var iconNames = Object.keys(iconsMap);
import Example from '../Example';

//hjjs configuration
var hljs = require('highlight.js/lib/highlight');
hljs.registerLanguage('bash', require('highlight.js/lib/languages/bash'));
hljs.registerLanguage('xml', require('highlight.js/lib/languages/xml'));
hljs.registerLanguage('javascript', require('highlight.js/lib/languages/javascript'));
hljs.registerLanguage('scss', require('highlight.js/lib/languages/scss'));

var IconDoc = React.createClass({

  getInitialState: function () {
    return {
      value: '',
      inputData: '',
      icons: iconNames,
      pageIndex: 1
    };
  },

  componentDidMount: function () {
    this._highlightCode();
  },

  componentDidUpdate: function () {
    this._highlightCode();
  },

  _onChange: function (e) {
    var value = e.target.value;
    var caseInsensitiveValue = new RegExp(value, 'i');
    var icons = iconNames.filter(function (icon) {
      return icon.match(caseInsensitiveValue);
    });

    this.setState({
      value: value,
      inputData: value,
      icons: icons,
      pageIndex: 1
    });
  },

  _highlightCode: function () {
    var nodes = document.querySelectorAll('pre code');
    for (var i = 0; i < nodes.length; i++) {
      hljs.highlightBlock(nodes[i]);
    }
  },

  _onIconSelect: function (e) {
    var parentNode = e.currentTarget;
    var textNode = parentNode.getElementsByTagName('span')[0];

    this.setState({value: textNode.textContent});
  },

  _onMoreIcons: function () {
    var pageIndex = this.state.pageIndex;
    this.setState({pageIndex: pageIndex + 1});
  },

  render: function() {
    var componentName = (this.state.value || 'SomeIcon')
      .replace(/^(.)|-([a-z])/g, function (g) {
        return g.length > 1 ? g[1].toUpperCase() : g.toUpperCase();
      });

    var inline = [
      "var " + componentName + " = require('grommet/components/icons/base/" + componentName + "');",
      "//or var " + componentName + " = Grommet.Icons.Base." + componentName,
      "<" + componentName + " />"
    ].join("\n");

    var endIndex = this.state.pageIndex * 50;
    var currentIcons = this.state.icons.slice(0, endIndex);
    var tiles = currentIcons.map(function (iconName, index) {

      var iconText = iconName.replace(this.state.inputData, function (g) {
        return g ? '<strong>' + g + '</strong>' : '';
      });

      const name = iconName.replace(/^(.)|-([a-z])/g, function (g) {
        return g.length > 1 ? g[1].toUpperCase() : g.toUpperCase();
      });

      var Icon = require(`grommet/components/icons/base/${name}`);

      return (
        <Tile key={'tile_' + index} direction="row"
          align="center" justify="start">
          <Button icon={<Icon />} onClick={this._onIconSelect} />
          <span dangerouslySetInnerHTML={{__html: iconText}} />
        </Tile>
      );
    }.bind(this));

    var moreIcons;
    if (this.state.icons.length > 50 &&
      endIndex < this.state.icons.length) {
      moreIcons = this._onMoreIcons;
    }

    var Icon;
    if (iconsMap.hasOwnProperty(this.state.value)) {
      Icon = iconsMap[this.state.value];
    } else {
      Icon = iconsMap.cloud; // just picking one as an example
    }

    return (
      <DocsArticle title="Icon" colorIndex="neutral-3">

        <p>Load icons inside your Grommet application.</p>
        <pre><code className="html hljs xml">
          {"<SVGIcon type=\"...\" viewBox=\"...\"><path .../></SVGIcon>"}
        </code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the stroke color.
              For example: <code>"brand"</code></dd>
            <dt><code>size         small|medium|large|xlarge|huge</code></dt>
            <dd>The icon size.  Defaults to <code>medium</code>.</dd>
            <dt><code>type         control|logo|status</code></dt>
            <dd>The type of the icon. Defaults to <code>control</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Custom Logo" code={
            <SVGIcon viewBox='0 0 130 108' version='1.1'
              type='logo' a11yTitle='Locations Finder'>
              <g stroke='#865CD6' strokeWidth='4' fill='none' strokeLinejoin='round'>
                <path d='M40,65 L40,96 L16,107 L16,49 L16,49 L28.4679195,43.2855369 M75.6892892,43.6424091 L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z M52,49 C56.971,49 61,44.971 61,40 C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 C43,44.971 47.029,49 52,49 L52,49 Z M52,76 C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 C76,58 52,76 52,76 Z' />
              </g>
            </SVGIcon>
          } />
        </section>

        <section>
          <h2>Built-in icons</h2>
          <p>Most likely the icon you are looking is already available inside
            Grommet iconography. This is how you import it:</p>
          <pre><code className="html hljs xml">{inline}</code></pre>

        </section>

        <section>
          <h2>Examples</h2>

          <h3>Default</h3>
          <div className="example">
            <Icon />
          </div>
          <pre><code className="html hljs xml">{"<" + componentName + " /> ..."}</code></pre>

          <h3>Large, colored</h3>
          <div className="example">
            <Icon size="large" colorIndex="brand" />
          </div>
          <pre><code className="html hljs xml">{"<" + componentName + " size=\"large\" colorIndex=\"brand\" /> ..."}</code></pre>

          <h3>Huge</h3>
          <div className="example">
            <Icon size="huge" colorIndex="brand" />
          </div>
          <pre><code className="html hljs xml">{"<" + componentName + " size=\"huge\" /> ..."}</code></pre>

        </section>

        <section>
          <Header tag="h2">
            Icons
            <SearchInput id="iconSearchInput" name="iconSearchInput"
              onDOMChange={this._onChange} value={this.state.inputData} />
          </Header>
          <Tiles flush={true} onMore={moreIcons}>
            {tiles}
          </Tiles>
        </section>

      </DocsArticle>
    );
  }
});

module.exports = IconDoc;
