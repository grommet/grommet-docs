// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';

export default class Padding extends Component {
  render () {
    return (
      <DocsArticle title="Padding" colorIndex="neutral-2">
        <section>
          <p>Padding on elements is based off of multiples and fractions of 24px. This value is used for line height, sizing, padding and margins on objects, etc.</p>

          <h3>Padding and sizing on components</h3>

          <p>Many components expose sizing and padding via <code>size</code> and <code>pad</code> attributes. For example, <code>Header</code> accepts <code>small</code>, <code>medium</code> and <code>large</code> as <code>size</code> attributes, which sets the height of the <code>Header</code> component to 48px, 72px, or 96px, respectively.
          </p>

          <p>
            Components that accept the <code>size</code> attribute include:

            <ul>
              <li><code>Chart</code></li>
              <li><code>Distribution</code></li>
              <li><code>Footer</code></li>
              <li><code>Header</code></li>
              <li><code>Image</code> (<code>small</code> and <code>large</code> only. <code>small</code> = 240px; <code>large</code> = 960px)</li>
              <li><code>List</code></li>
              <li><code>Menu</code></li>
              <li><code>Meter</code></li>
              <li><code>Search</code> (<code>medium</code> and <code>large</code> only)</li>
              <li><code>Sidebar</code> (<code>small</code> = 240px; <code>medium</code> = 336px; <code>large</code> = 360px)</li>
              <li><code>Status</code> (<code>small</code> = 12px; <code>medium</code> = 24px; <code>large</code> = 48px)</li>
              <li><code>Tile</code> (<code>small</code> = 96px; <code>medium</code> = 192px; <code>large</code> = 384px)</li>
              <li><code>Video</code> (<code>small</code> = 240px; <code>medium</code> = 480px; <code>large</code> = 960px)</li>
            </ul>
          </p>

          <p>
            Components that accept the <code>pad</code> attribute include:

            <ul>
              <li><code>Article</code></li>
              <li><code>Box</code></li>
              <li><code>Footer</code></li>
              <li><code>Form</code> (all <code>pad</code> attributes available, except for <code>between</code>)</li>
              <li><code>Header</code></li>
              <li><code>ListItem (in List)</code></li>
              <li><code>Menu</code></li>
              <li><code>Section</code></li>
              <li><code>Sidebar</code></li>
              <li><code>Tiles/Tile</code></li>
            </ul>

            For the <code>pad</code> attribute, <code>small</code> = 12px, <code>medium</code> = 24px, and <code>large</code> = 48px.
          </p>

          <p>
            The <code>pad</code> attribute can be set to <code>small</code>, <code>medium</code>, or <code>large</code>, or an object which affects the padding of components horizontally, vertically, or in-between multiple components: <code>{"{horizontal: none|small|medium|large, vertical: none|small|medium|large, between: none|small|medium|large}"}</code>. Padding set using <code>between</code> only affects components based on the direction set (adds horizontal padding between components for <code>row</code>, or vertical padding between components for <code>column</code>).
          </p>
        </section>
      </DocsArticle>
    );
  }
};
