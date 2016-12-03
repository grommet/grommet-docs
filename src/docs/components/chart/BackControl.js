// (C) Copyright 2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Anchor from 'grommet/components/Anchor';
import BackIcon from 'grommet/components/icons/base/LinkPrevious';

export default (props) => (
  <Anchor primary={true} path='/docs/chart'
    icon={<BackIcon />} label='Chart' />
);
