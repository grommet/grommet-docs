// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';
import Video from 'grommet/components/Video';

var VideoDoc = React.createClass({

  getInitialState: function () {
    return {
      singleSelection: [0]
    };
  },

  // single selection is managed by the caller via state.singleSelection
  _onSingleSelect: function (selection) {
    this.setState({singleSelection: selection});
  },

  // multiple selection is managed by the Table
  _onMultipleSelect: function (selection) {
    // no-op
  },

  render: function() {
    var inline = [
      "<Video>",
      "  <source src=\"/video/file.mp4\" type='video/mp4'/>",
      "</Video>"
    ].join('\n');

    return (
      <DocsArticle title="Video" colorIndex="neutral-3">

        <p>Video built on HTML5 video element. Callers must include
          child <code>&lt;source&gt;</code>elements according to the
          HTML5 <code>&lt;video&gt;</code> specification.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code>. This is visible when a
              poster image is not the same aspect ratio as the video.</dd>
            <dt><code>duration     number</code></dt>
            <dd>The length of the video in seconds.</dd><dt><code>full         true|false</code></dt>
            <dd>Whether the width should take the full container width.</dd>
            <dt><code>poster       {"{url}"}</code></dt>
            <dd>Poster image to show before the video first plays.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The width of the Video. Defaults to <code>medium</code> unless
              the <code>full</code> option is specified.
              The height will adapt to the aspect ratio of the video.</dd>
            <dt><code>timeline     {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: <string>, seconds: <number>}"}
              </code> used to indicate chapter markers.</dd>
            <dt><code>title        {"{string}|{node}"}</code></dt>
            <dd>Descriptive title.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Simple" code={
            <Video>
              <source src="/video/test.mp4" type='video/mp4'/>
            </Video>
          } />
          <Example name="Title, Duration, Timeline, Poster, Full" code={
            <Video title="Title" poster="/img/mobile_first.jpg" full={true}
              duration={35} timeline={[
                {label: 'Chapter 1', time: 0},
                {label: 'Chapter 2', time: 10},
                {label: 'Chapter 3', time: 20}
              ]}>
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />
          <Example name="Small" code={
            <Video size="small">
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />
          <Example name="Large" code={
            <Video size="large">
              <source src="/video/test.mp4" type="video/mp4"/>
            </Video>
          } />

        </section>

      </DocsArticle>
    );
  }
});

module.exports = VideoDoc;
