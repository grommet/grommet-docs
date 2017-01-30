// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Paragraph from 'grommet/components/Paragraph';
import DocsArticle from '../components/DocsArticle';

export default class Components extends Component {

  render () {
    return (
      <DocsArticle title="Components">
        <Paragraph size = 'large'>
          Grommet components let you create attractive, reusable user
          interface elements allowing you to construct your experience 
          with ease.
        </Paragraph>
        <Paragraph size = 'large'>
          Grommet components greatly simplify the task of creating clear,
          well-designed, responsive experiences. All components are 
          accessible, cross-browser compatible and support theme 
          customization. Component flexibility is enhanced through 
          configuration through properties.
        </Paragraph>
        <Paragraph size = 'large'>
          For convenience of discovery, components are grouped by usage 
          classification. Each group is described below, each component 
          is listed by group to the left.
        </Paragraph>
        <dl>
          <dt>Layout</dt>
          <dd>
            Layout components are the primary methods Grommet uses to 
            structure content. Each of these elements can be considered 
            the scaffolding or bones of much of the Grommet design. 
          </dd>
          <dt>Structure</dt>
          <dd>
            Structural components provide page elements for easy reuse 
            in your experience. These components are comprised of various 
            interface elements to make it easier to design common experience 
            scenarios. 
          </dd>
          <dt>Text</dt>
          <dd>
            Text components provide a variety of ways to manipulate the 
            content of your experience. Remember, when using Headings, be 
            semantic! You tell your story with text, so ensure it’s easy to 
            follow!
          </dd>
          <dt>Controls</dt>
          <dd>
            Controls are components that promote interaction with your 
            experience. Each of these elements provides a method of 
            interaction to help users complete their tasks.
          </dd>
          <dt>Forms</dt>
          <dd>
            The Form components provide users with a variety of data input 
            methods (text-based, time-based, numeric, formatted content or 
            queries) to help enhance their experience. 
          </dd>
          <dt>Listing</dt>
          <dd>
            Listing components include Lists, Tables, and Tiles and are 
            useful for displaying a  collection of related items. All three 
            support item selection and responsive layout.`
          </dd>
          <dt>Visualization</dt>
          <dd>
            Visualization components provide a visual representation of data 
            for clear and efficient information communication. Numerical data 
            can be encoded as lines, bars or simple meters to visually 
            communicate quantitative messages. 
          </dd>
          <dt>Icons</dt>
          <dd>
            A large and growing collection of icons is provided for clear and 
            efficent language-independent communication. All icons are 
            vector-based for precise rendering in various sizes. Industry 
            standard glyphs are used where appropriate. 
          </dd>
          <dt>Media</dt>
          <dd>
            Photo and Video media are supported through the Carousel, Image, 
            and Video components. 
          </dd>
          <dt>Utils</dt>
          <dd>
            The Animate component provides simple enter/leave visibility 
            animation. Other utility components assist REST communication, 
            search and filter, and accessibility.
          </dd>
         </dl>
      </DocsArticle>
    );
  }
};
