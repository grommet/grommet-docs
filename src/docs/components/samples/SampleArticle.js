// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Image from 'grommet/components/Image';
import Footer from 'grommet/components/Footer';

export default class SampleArticle extends Component {

  render () {
    const loremIpsum = "Lorem ipsum dolor sit amet, consectetur " +
      "adipiscing elit. Donec a diam lectus. Sed sit amet ipsum mauris. " +
      "Maecenas congue ligula ac quam viverra nec consectetur ante " +
      "hendrerit. Donec et mollis dolor. Praesent et diam eget libero " +
      "egestas mattis sit amet vitae augue. Nam tincidunt congue enim, " +
      "ut porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula " +
      "ultricies a non tortor. Lorem ipsum dolor sit amet, consectetur " +
      "adipiscing elit. Aenean ut gravida lorem. Ut turpis felis, pulvinar " +
      "a semper sed, adipiscing id dolor. Pellentesque auctor nisi id magna " +
      "consequat sagittis. Curabitur dapibus enim sit amet elit pharetra " +
      "tincidunt feugiat nisl imperdiet. Ut convallis libero in urna " +
      "ultrices accumsan. Donec sed odio eros. Donec viverra mi quis quam " +
      "pulvinar at malesuada arcu rhoncus. Cum sociis natoque penatibus et " +
      "magnis dis parturient montes, nascetur ridiculus mus. In rutrum " +
      "accumsan ultricies. Mauris vitae nisi at sem facilisis semper ac in " +
      "est.";
    return (
      <Article full={true} pad="none">
        <Header pad={{horizontal: 'large'}}>
          <h1>Heading</h1>
        </Header>
        <Section pad="large">
          <Paragraph size="large">{loremIpsum}</Paragraph>
          <Image src="/img/carousel-1.png" full="horizontal" />
        </Section>
        <Section pad="large">
          <h2>Heading</h2>
          <Paragraph>{loremIpsum}</Paragraph>
        </Section>
        <Footer pad="large" colorIndex="neutral-2">
          &copy; Copyright
        </Footer>
      </Article>
    );
  }
};

SampleArticle.displayName = 'SampleArticle';
