// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SocialShare from 'grommet/components/SocialShare';
import InteractiveExample from '../../../components/InteractiveExample';

SocialShare.displayName = 'SocialShare';

const PROPS_SCHEMA = {
  type: { options: ['email', 'facebook', 'google', 'linkedin', 'twitter'] }
};

export default class HeadlineExamplesDoc extends Component {

  constructor () {
    super();
    this.state = { elementProps: {} };
  }

  render () {
    const { elementProps } = this.state;
    let props = { ...elementProps, link: 'https://grommet.io' };
    if (! props.type) {
      props.type = 'email';
    }
    if ('linkedin' === props.type || 'email' === props.type) {
      props.title = 'Sample Title';
    }
    if ('linkedin' === props.type || 'email' === props.type ||
      'twitter' === props.type) {
      props.text = 'Sample text';
    }
    const element = <SocialShare {...props} />;

    return (
      <InteractiveExample contextLabel='SocialShare'
        contextPath='/docs/social-share'
        preamble={`import SocialShare from 'grommet/components/SocialShare';`}
        propsSchema={PROPS_SCHEMA}
        element={element}
        onChange={elementProps => this.setState({ elementProps })} />
    );
  }
};
