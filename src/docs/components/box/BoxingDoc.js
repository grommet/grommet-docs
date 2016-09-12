// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import NumberInput from 'grommet/components/NumberInput';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);
const MARGIN_SIZES = ['small', 'medium', 'large', 'none'];
const PAD_SIZES = ['small', 'medium', 'large', 'none'];

export default class BoxingDoc extends Component {

  constructor () {
    super();
    this._onChangeCount = this._onChangeCount.bind(this);
    let boxes = [];
    for (let i=0; i<4; i+=1) {
      boxes.push({ pad: 'medium' });
    }
    this.state = { count: 4, direction: 'row', justify: 'between',
      align: 'center', boxes: boxes };
  }

  _activate (index) {
    return (event) => {
      event.stopPropagation();
      let boxes = this.state.boxes.slice(0);
      if (! boxes[index]) {
        boxes[index] = {};
      }
      this.setState({ active: index, boxes: boxes });
    };
  }

  _onChangeCount (event) {
    const nextCount = parseInt(event.target.value, 10);
    let boxes = this.state.boxes.slice(0, nextCount);
    while (nextCount > boxes.length) {
      boxes.push({ pad: 'medium' });
    }
    this.setState({ count: nextCount, boxes: boxes });
  }

  _changeBoxProp (index, prop) {
    return (event) => {
      let boxes = this.state.boxes.slice(0);
      let value = event.target.value || undefined;
      if ('true' === value) {
        value = true;
      } else if ('false' === value) {
        value = false;
      }
      boxes[index][prop] = value;
      this.setState({ boxes: boxes });
    };
  }

  _setAll (index) {
    return () => {
      const { count } = this.state;
      let boxes = this.state.boxes.slice(0);
      const master = boxes[index];
      for (let i=0; i<count; i+=1) {
        boxes[i] = {...master};
      }
      this.setState({ boxes: boxes });
    };
  }

  _removeBox (index) {
    return () => {
      let boxes = this.state.boxes.slice(0);
      boxes.splice(index, 1);
      this.setState({
        boxes: boxes,
        count: this.state.count - 1,
        active: undefined
      });
    };
  }

  _renderContainerForm () {
    const { align, count, direction, justify, reverse, wrap } = this.state;
    return (
      <Form>
        <Header size="large" tag="h3" pad="medium">
          Properties
        </Header>
        <FormFields>
          <fieldset>
            <FormField label="direction">
              <select value={direction}
                onChange={event =>
                  this.setState({ direction: event.target.value })}>
                <option>column</option>
                <option>row</option>
              </select>
            </FormField>
            <FormField label="justify">
              <select value={justify}
                onChange={event =>
                  this.setState({ justify: event.target.value })}>
                <option>start</option>
                <option>center</option>
                <option>between</option>
                <option>end</option>
              </select>
            </FormField>
            <FormField label="align">
              <select value={align}
                onChange={event =>
                  this.setState({ align: event.target.value })}>
                <option>stretch</option>
                <option>start</option>
                <option>center</option>
                <option>baseline</option>
                <option>end</option>
              </select>
            </FormField>
            <FormField>
              <CheckBox label="wrap" checked={wrap || false}
                onChange={() =>
                  this.setState({ wrap: ! wrap })}/>
            </FormField>
            <FormField>
              <CheckBox label="reverse" checked={reverse || false}
                onChange={() =>
                  this.setState({ reverse: ! reverse })}/>
            </FormField>
          </fieldset>
          <fieldset>
            <FormField label="Count">
              <NumberInput value={count} onChange={this._onChangeCount} />
            </FormField>
          </fieldset>
        </FormFields>
      </Form>
    );
  }

  _renderBoxForm (active) {
    const { boxes } = this.state;
    const props = boxes[active];

    let basisOptions = SIZES.map(size => <option key={size}>{size}</option>);
    basisOptions.unshift(<option key={0}></option>);

    let padOptions = PAD_SIZES.map(size => <option key={size}>{size}</option>);
    padOptions.unshift(<option key={0}></option>);

    let marginOptions =
      MARGIN_SIZES.map(size => <option key={size}>{size}</option>);
    marginOptions.unshift(<option key={0}></option>);

    return (
      <Form>
        <Header size="large" tag="h3" pad="medium">
          {`Box ${active + 1} Properties`}
        </Header>
        <FormFields>
          <fieldset>
            <FormField label="basis">
              <select value={props.basis || ''}
                onChange={this._changeBoxProp(active, 'basis')}>
                {basisOptions}
              </select>
            </FormField>
            <FormField label="flex">
              <select value={props.flex || ''}
                onChange={this._changeBoxProp(active, 'flex')}>
                <option></option>
                <option>grow</option>
                <option>shrink</option>
                <option value={true}>true</option>
                <option value={false}>false</option>
              </select>
            </FormField>
            <FormField label="pad">
              <select value={props.pad || ''}
                onChange={this._changeBoxProp(active, 'pad')}>
                {padOptions}
              </select>
            </FormField>
            <FormField label="margin">
              <select value={props.margin || ''}
                onChange={this._changeBoxProp(active, 'margin')}>
                {marginOptions}
              </select>
            </FormField>
          </fieldset>
        </FormFields>
        <Footer pad="medium" justify="between">
          <Button label="Set all" secondary={true}
            onClick={this._setAll(active)} />
          <Button label="Remove" secondary={true}
            onClick={this._removeBox(active)} />
        </Footer>
      </Form>
    );
  }

  render () {
    const { active, align, boxes, count, direction, justify, reverse, wrap }
      = this.state;

    let contents = [];
    for ( let i=0; i<count; i+=1 ) {
      const colorIndex = active === i ? 'grey-1' : 'light-2';
      const props = boxes[i] || {};
      contents.push(
        <Box key={i} colorIndex={colorIndex}
          basis={props.basis} flex={props.flex}
          pad={props.pad} margin={props.margin}
          onClick={this._activate(i)}
          onFocus={this._activate(i)}>
          <Value value={i + 1} />
        </Box>
      );
    }

    let form;
    if (active >= 0) {
      form = this._renderBoxForm(active);
    } else {
      form = this._renderContainerForm();
    }

    return (
      <Split flex="left">
        <DocsArticle title="Boxing" colorIndex="neutral-3">

          <p>This is a boxing gym where you can spar
            with <NavAnchor path="/docs/box">Boxes</NavAnchor>.</p>

          <Example code={
            <Box direction={direction} justify={justify} align={align}
              wrap={wrap} reverse={reverse}
              onClick={() => this.setState({ active: undefined })}
              onFocus={() => this.setState({ active: undefined })}>
              {contents}
            </Box>
          }/>

        </DocsArticle>
        <Sidebar separator="left" colorIndex="light-2">
          {form}
        </Sidebar>
      </Split>
    );
  }
};
