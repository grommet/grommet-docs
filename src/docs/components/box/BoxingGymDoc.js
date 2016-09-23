// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import stringify from 'json-stringify-pretty-compact';
import Split from 'grommet/components/Split';
import Sidebar from 'grommet/components/Sidebar';
import Header from 'grommet/components/Header';
import Footer from 'grommet/components/Footer';
import Heading from 'grommet/components/Heading';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import CheckBox from 'grommet/components/CheckBox';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Button from 'grommet/components/Button';
import CloseIcon from 'grommet/components/icons/base/Close';
import LinkPreviousIcon from 'grommet/components/icons/base/LinkPrevious';
import DocsArticle from '../../../components/DocsArticle';
import NavAnchor from '../../../components/NavAnchor';
import Example from '../../Example';

const FIXED_SIZES = ['xsmall', 'small', 'medium', 'large', 'xlarge', 'xxlarge'];
const RELATIVE_SIZES = ['full', '1/2', '1/3', '2/3', '1/4', '3/4'];
const SIZES = FIXED_SIZES.concat(RELATIVE_SIZES);
const MARGIN_SIZES = ['small', 'medium', 'large', 'none'];
const PAD_SIZES = ['small', 'medium', 'large', 'none'];
const DEFAULT_BOX = {
  direction: 'row', align: 'center', justify: 'start',
  margin: 'small', pad: 'medium',
  wrap: true
};
const INITIAL_COUNT = 4;
const COLOR_INDEXES = ['light-2', 'light-1'];

export default class BoxingGymDoc extends Component {

  constructor () {
    super();

    this._onResponsive = this._onResponsive.bind(this);

    let nextId = 1;
    let boxes = {};

    let root = { ...DEFAULT_BOX,
      id: nextId++, colorIndex: COLOR_INDEXES[0], childIds: [] };
    boxes[root.id] = root;
    [...Array(INITIAL_COUNT)].forEach(() => {
      const child = { ...DEFAULT_BOX,
        id: nextId++,
        colorIndex: COLOR_INDEXES[1],
        parentId: root.id,
        childIds: []
      };
      root.childIds.push(child.id);
      boxes[child.id] = child;
    });

    this.state = {
      boxes: boxes, nextId: nextId,
      rootId: root.id, priority: 'left', activeId: root.id
    };
  }

  _onResponsive (responsive) {
    this.setState({ responsive: responsive, priority: 'left' });
  }

  _activate (id) {
    return (event) => {
      event.stopPropagation();
      this.setState({ activeId: id, priority: 'right', raw: false });
    };
  }

  _changeBoxProp (id, prop) {
    return (event) => {
      let value = event.target.value || undefined;
      if ('true' === value) {
        value = true;
      } else if ('false' === value) {
        value = false;
      }
      let boxes = { ...this.state.boxes };
      boxes[id][prop] = value;
      this.setState({ boxes: boxes });
    };
  }

  _toggleBoxProp (id, prop) {
    return () => {
      let boxes = { ...this.state.boxes };
      boxes[id][prop] = ! boxes[id][prop];
      this.setState({ boxes: boxes });
    };
  }

  _setPeers (id) {
    return () => {
      let nextBoxes = { ...this.state.boxes };
      const master = nextBoxes[id];
      // get parent and update all parent's children
      nextBoxes[master.parentId].childIds.forEach(childId => {
        let child = nextBoxes[childId];
        nextBoxes[childId] = { ...master, childIds: child.childIds };
      });
      this.setState({ boxes: nextBoxes });
    };
  }

  _removeBox (id, boxes=undefined) {
    return () => {
      let nextBoxes = boxes || { ...this.state.boxes };
      const box = nextBoxes[id];
      box.childIds.forEach(childId => this._removeBox(childId, nextBoxes)());
      const parent = nextBoxes[box.parentId];
      parent.childIds.splice(parent.childIds.indexOf(id), 1);
      delete nextBoxes[id];
      if (! boxes) { // only from the initial context
        this.setState({ boxes: nextBoxes, activeId: box.parentId });
      }
    };
  }

  _depth (id) {
    const box = this.state.boxes[id];
    return (box.parentId ? this._depth(box.parentId) : 0) + 1;
  }

  _addBox (parentId) {
    return () => {
      let nextBoxes = { ...this.state.boxes };
      let nextId = this.state.nextId;
      let colorIndex =
        COLOR_INDEXES[this._depth(parentId) % COLOR_INDEXES.length];
      const box = { ...DEFAULT_BOX, id: nextId++, colorIndex: colorIndex,
        parentId: parentId, childIds: [] };
      nextBoxes[box.id] = box;
      nextBoxes[parentId].childIds.push(box.id);
      this.setState({ boxes: nextBoxes, nextId: nextId });
    };
  }

  _renderForm () {
    const { activeId, boxes, responsive } = this.state;
    const box = boxes[activeId] || { ...DEFAULT_BOX };

    let close;
    if ('single' === responsive) {
      close = (
        <Button icon={<CloseIcon />}
          onClick={() => this.setState({ priority: 'left' })} />
      );
    }

    let basisOptions = SIZES.map(size => <option key={size}>{size}</option>);
    basisOptions.unshift(<option key={0}></option>);

    let padOptions = PAD_SIZES.map(size => <option key={size}>{size}</option>);
    padOptions.unshift(<option key={0}></option>);

    let marginOptions =
      MARGIN_SIZES.map(size => <option key={size}>{size}</option>);
    marginOptions.unshift(<option key={0}></option>);

    let containedFields;
    if (box.parentId) {
      containedFields = (
        <fieldset>
          <FormField label="basis">
            <select value={box.basis || ''}
              onChange={this._changeBoxProp(box.id, 'basis')}>
              {basisOptions}
            </select>
          </FormField>
          <FormField label="flex">
            <select value={box.flex || ''}
              onChange={this._changeBoxProp(box.id, 'flex')}>
              <option></option>
              <option>grow</option>
              <option>shrink</option>
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
          </FormField>
        </fieldset>
      );
    }

    let containerFields;
    if (box.childIds.length > 0) {
      containerFields = (
        <fieldset>
          <FormField label="direction">
            <select value={box.direction}
              onChange={this._changeBoxProp(box.id, 'direction')}>
              <option>column</option>
              <option>row</option>
            </select>
          </FormField>
          <FormField>
            <CheckBox label="wrap" checked={box.wrap || false}
              onChange={this._toggleBoxProp(box.id, 'direction')} />
          </FormField>
          <FormField>
            <CheckBox label="reverse" checked={box.reverse || false}
              onChange={this._toggleBoxProp(box.id, 'reverse')} />
          </FormField>
        </fieldset>
      );
    }

    let buttons = [];
    if (box.parentId) {
      buttons.push(
        <Button key="peers" label="Set peers" secondary={true}
          onClick={this._setPeers(box.id)} />
      );
      buttons.push(
        <Button key="remove" label="Remove" secondary={true}
          onClick={this._removeBox(box.id)} />
      );
    }

    return (
      <Form>
        <Header size="large" pad="medium" justify="between">
          <Heading tag="h3">{`Box ${box.id}`}</Heading>
          {close}
        </Header>
        <FormFields>
          {containerFields}
          {containedFields}
          <fieldset>
            <FormField label="justify">
              <select value={box.justify}
                onChange={this._changeBoxProp(box.id, 'justify')}>
                <option>start</option>
                <option>center</option>
                <option>between</option>
                <option>end</option>
              </select>
            </FormField>
            <FormField label="align">
              <select value={box.align}
                onChange={this._changeBoxProp(box.id, 'align')}>
                <option>stretch</option>
                <option>start</option>
                <option>center</option>
                <option>baseline</option>
                <option>end</option>
              </select>
            </FormField>
            <FormField label="pad">
              <select value={box.pad || ''}
                onChange={this._changeBoxProp(box.id, 'pad')}>
                {padOptions}
              </select>
            </FormField>
            <FormField label="margin">
              <select value={box.margin || ''}
                onChange={this._changeBoxProp(box.id, 'margin')}>
                {marginOptions}
              </select>
            </FormField>
          </fieldset>
        </FormFields>
        <Footer direction="column"
          pad={{ horizontal: 'medium', vertical: 'medium', between: 'small'}}>
          {buttons}
          <Button label="Add" secondary={true}
            onClick={this._addBox(box.id)} />
        </Footer>
      </Form>
    );
  }

  _renderRaw () {
    const { boxes, rawBoxes } = this.state;
    return (
      <Form>
        <Header size="large" pad="medium" justify="between">
          <Heading tag="h3">Raw</Heading>
          <Button icon={<CloseIcon />}
            onClick={() => {
              this.setState({ raw: false, rawBoxes: undefined });
            }} />
        </Header>
        <FormFields>
          <FormField>
            <textarea rows="20" value={rawBoxes || stringify(boxes)}
              onChange={(event) => {
                this.setState({ rawBoxes: event.target.value });
              }} />
          </FormField>
        </FormFields>
        <Footer pad="medium">
          <Button label="Submit" primary={true}
            onClick={() => {
              const nextBoxes = JSON.parse(this.state.rawBoxes);
              this.setState({
                boxes: nextBoxes, raw: false, rawBoxes: undefined,
                activeId: this.state.rootId
              });
            }} />
        </Footer>
      </Form>
    );
  }

  _renderBox (id) {
    const box = this.state.boxes[id];
    const {
      colorIndex, direction, justify, align, pad, margin, reverse, wrap
    } = box;
    let contents = box.childIds.map(childId => this._renderBox(childId));
    if (! contents.length) {
      contents = <Value value={`Box ${id}`} />;
    } else {
      contents.unshift(
        <Label key="label" margin="none"
          style={{ position: 'absolute' }}>{`Box ${id}`}</Label>
      );
    }
    return (
      <Box key={id} direction={direction} justify={justify} align={align}
        wrap={wrap} reverse={reverse}
        pad={pad} margin={margin} colorIndex={colorIndex}
        onClick={this._activate(id)} onFocus={this._activate(id)}>
        {contents}
      </Box>
    );
  }

  render () {
    const { activeId, priority, raw, rootId } = this.state;

    const form = raw ? this._renderRaw() : this._renderForm();
    const box = this._renderBox(rootId);

    let rawControl;
    if (! box.parentId && ! raw && activeId === rootId) {
      rawControl = (
        <Box pad="medium">
          <Button label="Raw" plain={true}
            onClick={() => this.setState({ raw: true })} />
        </Box>
      );
    }

    return (
      <Split flex="left" priority={priority} onResponsive={this._onResponsive}>
        <DocsArticle title="Boxing Gym" colorIndex="neutral-3">

          <p>This is a boxing gym where you can spar
            with <NavAnchor path="/docs/box">Boxes</NavAnchor>.</p>

          <Example code={box}/>

          <section>
            <NavAnchor path="/docs/box" icon={<LinkPreviousIcon />}
              label="Box" primary={true} />
          </section>

        </DocsArticle>
        <Sidebar separator="left" colorIndex="light-2">
          {form}
          {rawControl}
        </Sidebar>
      </Split>
    );
  }
};
