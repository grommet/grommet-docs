// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Tiles from 'grommet/components/Tiles';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import Animate from 'grommet/components/Animate';
import Example from '../../Example';

export default class BoxesAnimation extends Component {
  constructor (props) {
    super(props);
    this.state = {
      boxCount: 3
    };
  }

  render () {
    const { boxCount } = this.state;

    return (
      <div>
        <Button
          label="Add"
          primary={true}
          onClick={() => this.setState({boxCount: boxCount + 1})}
        />
        <Button
          label="Remove"
          onClick={() => this.setState({boxCount: boxCount ? boxCount - 1 : 0})}
        />

        <Example name="Boxes" code={
          <Animate
            enter={{ animation: 'slide-up', duration: 1000 }}
            component={Tiles}
          >
            {(this.state.boxCount > 0) &&
              new Array(this.state.boxCount).fill().map((c, i) => {
                return <Box key={`box-${i}`} style={{ width: 50, height: 50 }} colorIndex="brand" />;
              })
            }
          </Animate>
          } />
      </div>
    );
  }
};
