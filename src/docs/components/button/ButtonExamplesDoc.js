// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import EditIcon from 'grommet/components/icons/base/Edit';
import InteractiveExample from '../../../components/InteractiveExample';

Button.displayName = 'Button';

const PROPS_SCHEMA = {
  icon: { value: <EditIcon />, initial: true },
  label: { value: 'Label', initial: true },
  primary: { value: true },
  secondary: { value: true },
  accent: { value: true },
  plain: { value: true },
  onClick: { value: () => alert('click'), initial: true },
  path: { value: '/' },
  href: { value: '#', initial: true },
  type: { options: ['button', 'reset', 'submit'] }
};

const CONTENTS_SCHEMA = {
  'in-a-box': { value: true },
  'containing-a-box': { value: true }
};

export default class ButtonExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { contents: {}, elementProps: {} };
  }

  render () {
    const { contents, elementProps } = this.state;
    let element;
    if (Object.keys(contents).length === 0) {
      element = <Button {...elementProps} />;
    } else {
      if (contents['containing-a-box']) {
        element = (
          <Button {...elementProps}>
            <Box pad='large' colorIndex='neutral-2'>
              Contents
            </Box>
          </Button>
        );
      } else {
        element = <Button {...elementProps} />;
      }
      if (contents['in-a-box']) {
        element = <Box pad='medium' colorIndex='light-2'>{element}</Box>;
      }
    }
    return (
      <InteractiveExample contextLabel='Button' contextPath='/docs/button'
        preamble={`import Button from 'grommet/components/Button';`}
        propsSchema={PROPS_SCHEMA}
        contentsSchema={CONTENTS_SCHEMA}
        element={element}
        onChange={(elementProps, contents) => {
          this.setState({ elementProps, contents });
        }} />
    );
  }
};
