// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import { getDocAsJSON } from 'react-desc';
import DocsArticle from './DocsArticle';

export default (props) => {
  const { component, examples, hero, properties } = props;

  const componentDoc = getDocAsJSON(component);
  
  const propertiesNode = componentDoc.properties.map((property, index) => {
    let defaultVaule = '';
    if (property.defaultValue) {
      defaultVaule = [`The default is `, <b>{property.defaultValue}</b>, '.'];
    }
    let format = `{${property.format}}`.replace(/,/g, '|');
    if (property.format === 'boolean') {
      format = '{true|false}';
      if (typeof property.defaultValue === 'undefined') {
        defaultVaule = [`The default is `, <b>false</b>, '.'];
      }
    }
    format = format.replace(/&#124;/g, '|');

    //add spacing so the prop values line up
    let name = property.name;
    while (name.length < 20) {
      name += ' ';
    }

    let extra = '';
    if (properties && properties[property.name]) {
      extra = properties[property.name];
    }
    return (
      <dl key={index}>
        <dt><code>{name}{format}</code></dt>
        <dd>{property.description} {defaultVaule} {extra}</dd>
      </dl>
    );
  });

  return (
    <DocsArticle title={componentDoc.name}  action={examples}>

      <section>
        <p>{componentDoc.description}</p>
        {hero}
      </section>

      <section>
        <h2>Properties</h2>
        {propertiesNode}
      </section>

    </DocsArticle>
  );
};
