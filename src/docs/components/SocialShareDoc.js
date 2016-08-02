// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SocialShare from 'grommet/components/SocialShare';
import DocsArticle from '../../components/DocsArticle';
import Example from '../Example';

export default class SocialShareDoc extends Component {

  render () {
    const inline = `<SocialShare />`;

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

          <Example name="Email" code={
            <SocialShare type="email" link="http://grommet.io"
              title="Found this from the Grommet.io website"
              text="User Experience for the Enterprise" />
          } />
          <Example name="Facebook" code={
            <SocialShare type="facebook" link="http://grommet.io" />
          } />
          <Example name="Twitter" code={
            <SocialShare type="twitter" link="http://grommet.io"
              text="User Experience for the Enterprise" />
          } />
          <Example name="LinkedIn" code={
            <SocialShare type="linkedin" link="http://grommet.io"
              title="Grommet" text="User Experience for the Enterprise" />
          } />
          <Example name="Google Plus" code={
            <SocialShare type="google" link="http://grommet.io" />
          } />
        </section>

      </DocsArticle>
    );
  }
};
