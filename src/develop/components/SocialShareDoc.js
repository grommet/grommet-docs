// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var jsxToString = require('jsx-to-string');
var DocsArticle = require('../../DocsArticle');
var SocialShare = require('grommet/components/SocialShare');

function convertSocialShareToString(jsx) {
  return jsxToString(jsx);
}

var SocialShareDoc = React.createClass({
  _renderSocialShareCode(SocialShare, SocialShareJSX) {
    return (
      <div>
        <h3>{SocialShare}</h3>
        <div className="example">
          {SocialShareJSX}
        </div>
        <pre><code className="html hljs xml">
          {convertSocialShareToString(SocialShareJSX)}
        </code></pre>
      </div>
    );
  },

  render: function() {
    var inline = `<SocialShare />`;

    var defaultSocialShare = (
      <SocialShare type="facebook" link="http://grommet.io" />
    );

    var twitterSocialShare = (
      <SocialShare type="twitter" link="http://grommet.io" text="User Experience for the Enterprise" />
    );

    var linkedinSocialShare = (
      <SocialShare type="linkedin" link="http://grommet.io" title="Grommet" text="User Experience for the Enterprise" />
    );

    var googleSocialShare = (
      <SocialShare type="google" link="http://grommet.io" />
    );

    return (
      <DocsArticle title="Social Share" colorIndex="neutral-3">
        <p>A social media share icon button.</p>
        <pre><code className="html hljs xml">{inline}</code></pre>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>type         {"facebook|twitter|linkedin|google"}</code></dt>
            <dd>Which social network to share link to. Required.</dd>
            <dt><code>link         {"{string}"}</code></dt>
            <dd>Link to share. Required.</dd>
            <dt><code>text         {"{string}"}</code></dt>
            <dd>Summary or description of link to be shared. Only valid with <code>twitter</code> and <code>linkedin</code> type. Optional.</dd>
            <dt><code>title        {"{string}"}</code></dt>
            <dd>Title of the link to be shared. Only valid with <code>linkedin</code> type.  Optional.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderSocialShareCode('Facebook', defaultSocialShare)}
          {this._renderSocialShareCode('Twitter', twitterSocialShare)}
          {this._renderSocialShareCode('Linkedin', linkedinSocialShare)}
          {this._renderSocialShareCode('Google Plus', googleSocialShare)}
        </section>

      </DocsArticle>
    );
  }
});

module.exports = SocialShareDoc;
