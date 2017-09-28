// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React from 'react';
import classnames from 'classnames';

const Logo = ({ className, inverse }) => {
  const classes = classnames({
    ['logo--inverse']: inverse,
    [className]: className
  });
  return (
    <svg className={classes} version='1.1'
      height='27' width='30' viewBox='0 0 30 27'>
      <g strokeWidth='4' fill='none' fillRule='evenodd'>
        <rect stroke='#777777' x='9' y='10' width='19' height='15' />
        <g className='doc-brand'>
          <rect x='2' y='2' width='19' height='15' />
        </g>
      </g>
    </svg>
  );
};

export default Logo;
