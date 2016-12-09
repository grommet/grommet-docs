// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Video from 'grommet/components/Video';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export const DESC = (<span>
  Video built on the HTML5 video element.
</span>);

export default class VideoDoc extends Component {
  render () {

    return (
      <DocsArticle title='Video' action={
        <Button primary={true} path={`/docs/video/examples`}
          label='Examples' />
        }>

        <section>
          <p>{DESC}</p>
          <Video size='small'>
            <source src='/video/test.mp4' type='video/mp4'/>
          </Video>
        </section>

        <section>
          <h2>Properties</h2>
          <p>Callers must include
            child <code>{'<source>'}</code> elements according to the
            HTML5 <code>{'<video>'}</code> specification.</p>
          <dl>
            <dt><code>align      {'{top:, bottom:, left:, right: }'}</code></dt>
            <dd>How to align the video when full. You can specify
              one of top|bottom and/or one of left|right. If not provided,
              the video is centered.</dd>
            <dt><code>allowFullScreen   true|false</code></dt>
            <dd>Enables fullscreen/expand control button on player.</dd>
            <dt><code>autoPlay          true|false</code></dt>
            <dd>Enables automatic playback of the video as soon as it is
              loaded. Defaults to <code>false</code>.</dd>
            <dt><code>colorIndex        {'{category}-{index}'}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>'neutral-1'</code>. This is visible when a
              poster image is not the same aspect ratio as the video.</dd>
            <dt><code>fit       cover|contain</code></dt>
            <dd>How the video should be scaled to fit in the
              container. Setting this property also
              sets <code>full='true'</code>.</dd>
            <dt><code>full       true|false</code></dt>
            <dd>Whether the image should expand to fill the available width
              and/or height.</dd>
            <dt><code>loop              true|false</code></dt>
            <dd>Enables continuous video looping. Defaults
              to <code>false</code>.</dd>
            <dt><code>muted             true|false</code></dt>
            <dd>Enables video muting. This option is best used with
              the <code>autoPlay</code> flag. Defaults
              to <code>false</code>.</dd>
            <dt><code>poster            {'{string}'}</code></dt>
            <dd>Poster image to show before the video first plays.</dd>
            <dt><code>shareLink         {'{string}'}</code></dt>
            <dd>Link to be used for social media sharing.
                Shown at the end of the video.</dd>
            <dt><code>shareHeadline     {'{string}'}</code></dt>
            <dd>Headline to be used for social media sharing.</dd>
            <dt><code>shareText         {'{string}'}</code></dt>
            <dd>Text to be used for social media sharing.</dd>
            <dt><code>showControls      true|false</code></dt>
            <dd>Show controls such as play button, progress bar, etc. on
              top of video. Defaults to <code>true</code>.</dd>
            <dt><code>size              small|medium|large</code></dt>
            <dd>The width of the Video. Defaults to <code>medium</code> unless
              the <code>full</code> option is specified.
              The height will adapt to the aspect ratio of the video.</dd>
            <dt><code>timeline          {'[{...}]'}</code></dt>
            <dd>An array of: <code>
              {'{label: <string>, seconds: <number>}'}
              </code> used to indicate chapter markers.</dd>
            <dt><code>title             {'{string}|{node}'}</code></dt>
            <dd>Descriptive title.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
