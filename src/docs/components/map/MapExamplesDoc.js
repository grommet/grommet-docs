// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Map from 'grommet/components/Map';
import Box from 'grommet/components/Box';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const MapExample = (props) => (
  <Example code={
    <Map {...props} />
  } />
);

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
        <Box colorIndex="grey-4" pad="small">{item.label}</Box>
      )}
    ))}
  )),
  links: DATA.links
};

export default class MapExamplesDoc extends ExamplesDoc {};

MapExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/map">Map</NavAnchor>,
  examples: [
    { label: 'Default', component: MapExample, props: { data: DATA } },
    { label: 'Rich data', component: MapExample, props: { data: RICH_DATA } }
  ],
  property: {
    name: 'vertical'
  },
  title: 'Examples'
};
