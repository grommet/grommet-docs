// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../../DocsArticle');
var Video = require('grommet/components/Video');
var A11y = require('../../utils/a11y');

var VideoDoc = React.createClass({

  getInitialState: function () {
    return {
      singleSelection: [0]
    };
  },

  componentDidMount: function () {
    A11y.updatePageTitle('Video');
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
      "  <source src=\"video/file.mp4\" type='video/mp4'/>",
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
            <dt><code>allowFullScreen   true|false</code></dt>
            <dd>Enables fullscreen/expand control button on player.</dd>
            <dt><code>autoPlay   true|false</code></dt>
            <dd>Enables automatic playback of the video as soon as it is loaded. Defaults to <code>false</code>.</dd>
            <dt><code>colorIndex   {"{category}-{index}"}</code></dt>
            <dd>The color identifier to use for the background color.
              For example: <code>"neutral-1"</code>. This is visible when a
              poster image is not the same aspect ratio as the video.</dd>
            <dt><code>duration     number</code></dt>
            <dd>The length of the video in seconds.</dd><dt><code>full         true|false</code></dt>
            <dd>Whether the width should take the full container width.</dd>
            <dt><code>onClick      {"{func}"}</code></dt>
            <dd>Click handler to override the default click handler to play video and pass in a different function instead.</dd>
            <dt><code>loop       true|false</code></dt>
            <dd>Enables continuous video looping. Defaults to <code>false</code>.</dd>
            <dt><code>muted       true|false</code></dt>
            <dd>Enables video muting. This option is best used with the <code>autoPlay</code> flag. Defaults to <code>false</code>.</dd>
            <dt><code>poster       {"{url}"}</code></dt>
            <dd>Poster image to show before the video first plays.</dd>
            <dt><code>size         small|medium|large</code></dt>
            <dd>The width of the Video. Defaults to <code>medium</code> unless
              the <code>full</code> option is specified.
              The height will adapt to the aspect ratio of the video.</dd>
            <dt><code>showControls         true|false</code></dt>
            <dd>Show controls such as play button, progress bar, etc. on top of video. Defaults to <code>true</code>.</dd>
            <dt><code>timeline     {"[{...}]"}</code></dt>
            <dd>An array of: <code>
              {"{label: <string>, seconds: <number>}"}
              </code> used to indicate chapter markers.</dd>
            <dt><code>title        {"{string}|{node}"}</code></dt>
            <dd>Descriptive title.</dd>
            <dt><code>videoHeader        {"{node}"}</code></dt>
            <dd>For instances when the video and header components are used together.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          <h3>Simple</h3>
          <div className="example">
            <Video>
              <source src="video/test.mp4" type='video/mp4'/>
            </Video>
          </div>
          <pre><code className="html hljs xml">{"<Video>\n" +
            "  <source src=\"video/test.mp4\" type=\"video/mp4\"/>\n" +
            "</Video>"}</code></pre>

          <h3>Title, Duration, Timeline, Poster, Full</h3>
          <div className="example">
            <Video title="Title" poster="img/HTML5.png" full={true}
              duration={35} timeline={[
                {label: 'Chapter 1', time: 0},
                {label: 'Chapter 2', time: 10},
                {label: 'Chapter 3', time: 20}
              ]}>
              <source src="video/test.mp4" type="video/mp4"/>
            </Video>
          </div>
          <pre><code className="html hljs xml">{"<Video\n" +
            "  title=\"Title\" poster=\"img/HTML5.png\" full={true}" +
            "  duration={35} timeline={[\n" +
            "    {label: \"Chapter 1\", time: 0},\n" +
            "    {label: \"Chapter 2\", time: 10},\n" +
            "    {label: \"Chapter 3\", time: 20}\n" +
            "  ]}>\n" +
            "  <source src=\"video/test.mp4\" type=\"video/mp4\"/>\n" +
            "</Video>"}</code></pre>

          <h3>Small</h3>
          <div className="example">
            <Video size="small">
              <source src="video/test.mp4" type="video/mp4"/>
            </Video>
          </div>

          <h3>Large</h3>
          <div className="example">
            <Video size="large">
              <source src="video/test.mp4" type="video/mp4"/>
            </Video>
          </div>

        </section>

      </DocsArticle>
    );
  }
});

module.exports = VideoDoc;
