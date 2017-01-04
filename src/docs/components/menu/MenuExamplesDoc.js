// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import CheckBox from 'grommet/components/CheckBox';
import Button from 'grommet/components/Button';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import InteractiveExample from '../../../components/InteractiveExample';

Menu.displayName = 'Menu';
Anchor.displayName = 'Anchor';
CheckBox.displayName = 'CheckBox';
Button.displayName = 'Button';

const PROPS_SCHEMA = {
  icon: { value: <ActionsIcon /> },
  label: { value: 'Label' },
  inline: { value: true },
  responsive: { value: true, initial: true },
  primary: { value: true },
  closeOnClick: { value: true },
  direction: { options: ['row', 'column'] },
  size: { options: ['small', 'medium', 'large'] }
};

const CONTENTS_SCHEMA = {
  anchors: { value: [
    <Anchor key={1} href="#" className="active">First action</Anchor>,
    <Anchor key={2} href="#">Second action</Anchor>,
    <Anchor key={3} href="#">Third action</Anchor>
  ], initial: true },
  buttons: { value: [
    <Button key={1} label="first" onClick={() => alert('first')} />,
    <Button key={2} label="second" onClick={() => alert('second')} />,
    <Button key={3} label="third" onClick={() => alert('third')} />
  ] },
  'check-boxes': { value: [
    <CheckBox key={1} id="check-1" label="first" />,
    <CheckBox key={2} id="check-2" label="second" />,
    <CheckBox key={3} id="check-3" label="third" />
  ] }
};

export default class MenuExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    let { contents, elementProps } = this.state;

    const element = (
      <Menu {...elementProps}>
        {contents.anchors}
        {contents.buttons}
        {contents['check-boxes']}
      </Menu>
    );

    return (
      <InteractiveExample contextLabel='Menu' contextPath='/docs/menu'
        preamble={`import Menu from 'grommet/components/Menu';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
