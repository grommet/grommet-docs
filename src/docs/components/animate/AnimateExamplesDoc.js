// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Animate from 'grommet/components/Animate';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Value from 'grommet/components/Value';
import InteractiveExample from '../../../components/InteractiveExample';

Animate.displayName = 'Animate';

const PROPS_SCHEMA = {
  enterAnimation: {
    options: ['fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right']
  },
  enterDuration: { options: ['0', '300', '1000', '10000'] },
  enterDelay: { options: ['0', '300', '1000'] },
  leaveAnimation: {
    options: ['fade', 'slide-up', 'slide-down', 'slide-left', 'slide-right']
  },
  leaveDuration: { options: ['0', '300', '1000', '10000'] },
  leaveDelay: { options: ['0', '300', '1000'] },
  keep: { value: true, initial: true }
};

const CONTENTS_SCHEMA = {
  contents: { options: ['1', '2', '3'] }
};

export default class AnimateExamplesDoc extends Component {

  constructor () {
    super();
    this._onElementProps = this._onElementProps.bind(this);
    this._onToggle = this._onToggle.bind(this);
    this.state = {
      contents: {},
      elementProps: { enter: { animation: 'fade' }, visible: true }
    };
  }

  _onElementProps (nextElementProps, contents) {
    let elementProps = { visible: this.state.elementProps.visible };
    elementProps.enter = {
      animation: nextElementProps.enterAnimation || 'fade',
      duration: parseInt(nextElementProps.enterDuration || 1000, 10),
      delay: parseInt(nextElementProps.enterDelay || 0, 10)
    };
    if (nextElementProps.leaveAnimation) {
      elementProps.leave = {
        animation: nextElementProps.leaveAnimation || 'fade',
        duration: parseInt(nextElementProps.leaveDuration || 1000, 10),
        delay: parseInt(nextElementProps.leaveDelay || 0, 10)
      };
    }
    if (nextElementProps.hasOwnProperty('keep')) {
      elementProps.keep = nextElementProps.keep;
    }
    this.setState({ contents, elementProps });
  }

  _onToggle () {
    let elementProps = { ...this.state.elementProps };
    elementProps.visible = ! elementProps.visible;
    this.setState({ elementProps });
  }

  render () {
    const { contents, elementProps } = this.state;
    let boxes = [];
    for (let i=0; i<parseInt(contents.contents || 1, 10); i++) {
      boxes.push(
        <Box key={i} colorIndex='light-2' margin='medium' pad='large'>
          <Value value={i+1} />
        </Box>
      );
    }
    const element = (
      <Box pad={{between: 'medium'}} align='center'>
        <Button label={elementProps.visible ? 'Leave' : 'Enter'} primary={true}
          onClick={this._onToggle} />
        <Animate {...elementProps}>
          <Box direction='row'>
            {boxes}
          </Box>
        </Animate>
      </Box>
    );
    return (
      <InteractiveExample contextLabel='Animate' contextPath='/docs/animate'
        preamble={`import Animate from 'grommet/components/Animate';`}
        propsSchema={PROPS_SCHEMA} contentsSchema={CONTENTS_SCHEMA}
        element={element} onChange={this._onElementProps} />
    );
  }
};
