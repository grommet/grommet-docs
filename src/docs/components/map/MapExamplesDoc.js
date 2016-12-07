// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Map from 'grommet/components/Map';
import Box from 'grommet/components/Box';
import InteractiveExample from '../../../components/InteractiveExample';

Map.displayName = 'Map';

const PROPS_SCHEMA = {
  vertical: { value: true }
};

const CONTENTS_SCHEMA = {
  'data-node': { value: true }
};

const DATA = {
  categories: [
    {id: "category-1", label: "First category", items: [
      {id: "item-1-1", label: "First item"},
      {id: "item-1-2", label: "Second item"},
      {id: "item-1-3", label: "Third item"}
    ]},
    {id: "category-2", label: "Second category", items: [
      {id: "item-2-1", label: "Fourth item"},
      {id: "item-2-2", label: "Fifth item"}
    ]},
    {id: "category-3", label: "Third category", items: [
      {id: "item-3-1", label: "Sixth item"},
      {id: "item-3-2", label: "Seventh item"}
    ]}
  ],
  links: [
    {parentId: "item-1-1", childId: "item-2-2"},
    {parentId: "item-1-2", childId: "item-2-2"},
    {parentId: "item-1-2", childId: "item-2-1"},
    {parentId: "item-2-2", childId: "item-3-1"},
    {parentId: "item-2-1", childId: "item-3-2"}
  ]
};

const RICH_DATA = {
  categories: DATA.categories.map(category => (
    { ...category, items: category.items.map(item => (
      {...item, node: (
        <Box colorIndex="grey-5" pad="small">{item.label}</Box>
      )}
    ))}
  )),
  links: DATA.links
};


export default class MapExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    let data;
    if (contents['data-node']) {
      data = RICH_DATA;
    } else {
      data = DATA;
    }
    const element = <Map {...elementProps} data={data} />;
    return (
      <InteractiveExample contextLabel='Map' contextPath='/docs/map'
        preamble={`import Map from 'grommet/components/Map';`}
        align='stretch'
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
