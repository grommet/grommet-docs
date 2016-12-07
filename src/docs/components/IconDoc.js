// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import SearchInput from 'grommet/components/SearchInput';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Button from 'grommet/components/Button';
import SVGIcon from 'grommet/components/SVGIcon';
import iconsMap from './iconsMap';
const iconNames = Object.keys(iconsMap);
import DocsArticle from '../../components/DocsArticle';
import Code from '../../components/Code';
import Example from '../Example';

const PAGE_SIZE = 50;
const KEBAB_REGEXP = /^([a-z])|-([a-z])/g;

function kebabToCamel (string) {
  return string.replace(KEBAB_REGEXP, match => (
    match.length > 1 ? match[1].toUpperCase() : match.toUpperCase()));
}

export default class IconDoc extends Component {

  constructor () {
    super();

    this._onChangeSearch = this._onChangeSearch.bind(this);
    this._onMoreIcons = this._onMoreIcons.bind(this);

    const kebabName = 'cloud';
    const camelName = kebabToCamel(kebabName);
    const Icon = iconsMap[kebabName];
    this.state = {
      camelName: camelName,
      Icon: Icon,
      icons: iconNames,
      inputData: '',
      pageIndex: 1,
      searchText: ''
    };
  }

  _onChangeSearch (event) {
    const searchText = event.target.value;
    const regexp = new RegExp(searchText, 'i');
    const icons = iconNames.filter(icon => icon.match(regexp));

    this.setState({
      icons: icons,
      pageIndex: 1,
      searchText: searchText
    });
  }

  _selectIcon (camelName, kebabName) {
    return () => this.setState({
      camelName: camelName, Icon: iconsMap[kebabName]
    });
  }

  _onMoreIcons () {
    const { pageIndex } = this.state;
    this.setState({pageIndex: pageIndex + 1});
  }

  render () {
    const {
      camelName, Icon, icons, pageIndex, searchText
    } = this.state;

    Icon.displayName = `${camelName}Icon`; // align with common practice
    const endIndex = pageIndex * PAGE_SIZE;
    const tiles = icons.slice(0, endIndex).map((kName, index) => {

      const label = kName.replace(searchText, text => (
        text ? `<strong>${text}</strong>` : ''));
      const cName = kebabToCamel(kName);
      const Icon = require(`grommet/components/icons/base/${cName}`);

      // We use dangerouslySetInnerHTML to allow wrapping <strong> around
      // search text sub-string matches.
      return (
        <Tile key={index} direction="row" size="small"
          align="center" justify="start">
          <Button icon={<Icon />} onClick={this._selectIcon(cName, kName)} />
          <span dangerouslySetInnerHTML={{ __html: label }} />
        </Tile>
      );
    });

    let onMoreIcons;
    if (endIndex < icons.length) {
      onMoreIcons = this._onMoreIcons;
    }

    return (
      <DocsArticle title="Icon">

        <section>
          <p>Load icons inside your Grommet application.</p>
          <Box direction="row" align="center" pad={{ between: 'medium' }}>
            <Icon size="small" />
            <Icon />
            <Icon size="large" />
            <Icon size="xlarge" />
            <Icon size="huge" />
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the stroke color.
              For example: <code>"brand"</code>. Use <code>"plain"</code> to
              keep the original icon colors.</dd>
            <dt><code>size         small|medium|large|xlarge|huge</code></dt>
            <dd>The icon size.  Defaults to <code>medium</code>.</dd>
            <dt><code>type         control|logo|status</code></dt>
            <dd>The type of the icon. Defaults to <code>control</code>.</dd>
          </dl>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={
            `import ${camelName}Icon from ` +
            `'grommet/components/icons/base/${camelName}';\n` +
            `//or var ${camelName}Icon = Grommet.Icons.Base.${camelName};`}>
            <Icon />
          </Code>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Custom Logo"
            preamble={`import SVGIcon from 'grommet/components/SVGIcon';`}
            code={<SVGIcon viewBox='0 0 130 108' version='1.1'
              type='logo' a11yTitle='Locations Finder'>
              <g stroke='#865CD6' strokeWidth='4' fill='none'
                strokeLinejoin='round'>
                <path d={'M40,65 L40,96 L16,107 L16,49 L16,49 ' +
                  'L28.4679195,43.2855369 M75.6892892,43.6424091 ' +
                  'L88,38 L88,96 L64,107 L64,64.5 L64,64.5 M64,64 L64,107 ' +
                  'L40,96 L40,65 M89,38 L113,49 L113,107 L89,96 L89,38 Z ' +
                  'M52,49 C56.971,49 61,44.971 61,40 ' +
                  'C61,35.029 56.971,31 52,31 C47.029,31 43,35.029 43,40 ' +
                  'C43,44.971 47.029,49 52,49 L52,49 Z M52,76 ' +
                  'C52,76 28,58 28,40 C28,25 40,16 52,16 C64,16 76,25 76,40 ' +
                  'C76,58 52,76 52,76 Z'} />
              </g>
            </SVGIcon>
          } />
        </section>

        <section>
          <Header justify="between">
            <Heading tag="h2">Icons</Heading>
            <SearchInput value={searchText}
              onDOMChange={this._onChangeSearch} />
          </Header>
          <Tiles flush={true} onMore={onMoreIcons}>
            {tiles}
          </Tiles>
        </section>

      </DocsArticle>
    );
  }
};
