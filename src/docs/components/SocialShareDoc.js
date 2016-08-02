// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import jsxToString from 'jsx-to-string';
import DocsArticle from '../../components/DocsArticle';
import SocialShare from 'grommet/components/SocialShare';

function convertSocialShareToString(jsx) {
  return jsxToString(jsx);
}

export default class SocialShareDoc extends Component {


  _renderSocialShareCode (SocialShare, SocialShareJSX) {
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
  }

  render () {
    var inline = `<SocialShare />`;

    var emailSocialShare = (
      <SocialShare type="email" link="http://grommet.io" title="Found this from the Grommet.io website" text="User Experience for the Enterprise" />
    );

    var facebookSocialShare = (
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
            <dt><code>type         {"email|facebook|twitter|linkedin|google"}</code></dt>
            <dd>Which social network to share link to. Required.</dd>
            <dt><code>link         {"{string}"}</code></dt>
            <dd>Link to share. Required.</dd>
            <dt><code>text         {"{string}"}</code></dt>
            <dd>Summary or description of link to be shared. Only valid with <code>twitter</code>, <code>linkedin</code>, and <code>email</code> type. Optional.</dd>
            <dt><code>title        {"{string}"}</code></dt>
            <dd>Title of the link to be shared. Only valid with <code>linkedin</code> and <code>email</code> type.  Optional.</dd>
          </dl>
        </section>

        <section>
          <h2>Examples</h2>

          {this._renderSocialShareCode('Email', emailSocialShare)}
          {this._renderSocialShareCode('Facebook', facebookSocialShare)}
          {this._renderSocialShareCode('Twitter', twitterSocialShare)}
          {this._renderSocialShareCode('Linkedin', linkedinSocialShare)}
          {this._renderSocialShareCode('Google Plus', googleSocialShare)}
        </section>

      </DocsArticle>
    );
  }
};
