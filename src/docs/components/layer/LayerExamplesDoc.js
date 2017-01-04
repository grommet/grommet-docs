// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import Layer from 'grommet/components/Layer';
import InteractiveExample from '../../../components/InteractiveExample';
import SampleArticle from '../samples/SampleArticle';
import ConfirmationForm from '../samples/ConfirmationForm';
import FullForm from '../samples/FullForm';
import LazyList from '../samples/LazyList';
import LazyTiles from '../samples/LazyTiles';
import LazyTable from '../samples/LazyTable';

Layer.displayName = 'Layer';

const PROPS_SCHEMA = {
  closer: { value: true },
  flush: { value: true },
  align: { options: ['center', 'top', 'bottom', 'left', 'right'] }
};

const CONTENTS_SCHEMA = {
  contents: { options: [
    'article', 'form', 'confirmation', 'lazy list', 'lazy tiles', 'lazy table'
  ] }
};

export default class ColumnsExamplesDoc extends Component {

  constructor () {
    super();
    this._onClose = this._onClose.bind(this);
    this.state = {
      active: false, contents: {}, elementProps: {}
    };
  }

  _onClose () {
    this.setState({ active: false });
  }

  render () {
    const { active, contents, elementProps } = this.state;

    let content;
    if ('article' === contents.contents || ! contents.contents) {
      content = <SampleArticle />;
    } else if ('form' === contents.contents) {
      content = (
        <FullForm onCancel={this._onClose} onSubmit={this._onClose} />
      );
    } else if ('confirmation' === contents.contents) {
      content = (
        <ConfirmationForm onCancel={this._onClose} onSubmit={this._onClose} />
      );
    } else if ('lazy list' === contents.contents) {
      content = <LazyList />;
    } else if ('lazy tiles' === contents.contents) {
      content = <LazyTiles />;
    } else if ('lazy table' === contents.contents) {
      content = <LazyTable />;
    }

    const layer = (
      <Layer {...elementProps} onClose={this._onClose}>
        {content}
      </Layer>
    );

    const control = (
      <Button label='Show layer'
        onClick={() => this.setState({ active: true })} />
    );

    const element = active ? layer : control;

    return (
      <InteractiveExample contextLabel='Layer' contextPath='/docs/layer'
        preamble={`import Layer from 'grommet/layer/Layer';`}
        propsSchema={PROPS_SCHEMA}
        codeElement={layer}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
