// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import FileDropzone from 'grommet/components/FileDropzone';
import DocsArticle from '../../../components/DocsArticle';
import Code from '../../../components/Code';

export default class FileDropzoneDoc extends Component {
  render() {
    return (
      <DocsArticle title='FileDropzone'>
        <section>
          <p>Presents a file upload component that supports HTML5 Drag and drop
          allowing the user to upload a file.</p>
          <Box size="medium">
            <FileDropzone fullDropTarget={true}
              size='medium' pad='medium' colorIndex='light-2'
              onDOMChange={(files) => files}
              align='center' />
          </Box>
        </section>
        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>label        {'{element}'}</code></dt>
            <dd>A label element. Defaults 
            to <code>"Click or drop a file to upload"</code></dd>
            <dt><code>preview        {'{true|false}'}</code></dt>
            <dd>whether the component has a preview for uploaded files Defaults 
            to <code>true</code>.</dd>
            <dt><code>multiple        {'{true|false}'}</code></dt>
            <dd>whether the component should allow upload of
            multiple files Defaults to <code>false</code>.</dd>
            <dt><code>onDOMChange   {'{function ([files])}'}</code></dt>
            <dd>Function that will be called when the user uploads a file.</dd>
            <dt><code>fullDropTarget        {'{true|false}'}</code></dt>
            <dd>Whether the drag-and-drop target 
            should be for the full screen or not. 
            Defaults to <code>false</code>.</dd>
          </dl>
          <p>Options for <Anchor path='/docs/box'>Box</Anchor> are
          also available.</p>
        </section>

        <section>
          <h2>Usage</h2>
          <Code preamble={
            `import FileDropzone from 'grommet/components/FileDropzone';`}>
              <FileDropzone fullDropTarget={true}
                size='medium' pad='medium' colorIndex='light-2'
                onDOMChange={(files) => files} align='center' />
          </Code>
        </section>
      </DocsArticle>
    );
  }
}
