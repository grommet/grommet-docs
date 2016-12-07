import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Hero from 'grommet/components/Hero';
import Layer from 'grommet/components/Layer';
import Video from 'grommet/components/Video';
import CirclePlayIcon from 'grommet/components/icons/base/CirclePlay';
import Example from '../../../Example';

export default class HeroCardVideoLayer extends Component {
  constructor() {
    super();

    this.state = {
      layerActive: false
    };

    this._toggleLayer = this._toggleLayer.bind(this);
  }

  _toggleLayer() {
    this.setState({ layerActive: !this.state.layerActive });
  }

  _renderHero(nodeToInsert) {
    return (
      <Hero backgroundImage="/img/carousel-1.png">
        <Box colorIndex="grey-2-a">
          <Card heading="Heading" description="Hero description text."
            label="label"
            link={<Anchor href="#" primary={true} label="Watch Now"
              icon={<CirclePlayIcon />} onClick={this._toggleLayer} />} />
        </Box>
        {nodeToInsert}
      </Hero>
    );
  }

  render() {
    const layer = (
      <Layer closer={true} onClose={this._toggleLayer}>
        <Box pad="large">
          <Video autoPlay={true} loop={true} muted={true}>
            <source src="/video/test.mp4" type="video/mp4"/>
          </Video>
        </Box>
      </Layer>
    );
    const codeHero = this._renderHero(layer);
    const layerNode = this.state.layerActive ? layer : undefined;
    const controlHero = this._renderHero(layerNode);

    return (
      <Example control={controlHero} code={codeHero} />
    );
  }
};
