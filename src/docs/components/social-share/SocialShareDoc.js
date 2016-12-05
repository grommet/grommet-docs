// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import SocialShare from 'grommet/components/SocialShare';
import Box from 'grommet/components/Box';
import Button from 'grommet/components/Button';
import DocsArticle from '../../../components/DocsArticle';

export default class SocialShareDoc extends Component {

  render () {
    return (
      <DocsArticle title='Social Share' action={
        <Button primary={true} path={`/docs/social-share/examples`}
          label='Examples' />
        }>

        <section>
          <p>A social media share icon button.</p>

          <Box direction='row' pad={{ between: 'medium' }}>
            <SocialShare type='twitter' link='http://grommet.io'
              text='User Experience for the Enterprise' />
            <SocialShare type='facebook' link='http://grommet.io' />
            <SocialShare type='email' link='http://grommet.io'
              text='User Experience for the Enterprise' />
            <SocialShare type='linkedin' link='http://grommet.io'
              text='User Experience for the Enterprise' />
            <SocialShare type='google' link='http://grommet.io' />
          </Box>
        </section>

        <section>
          <h2>Properties</h2>
          <dl>
            <dt><code>link         {'{string}'}</code></dt>
            <dd>Link to share.</dd>
            <dt><code>text         {'{string}'}</code></dt>
            <dd>Summary or description of link to be shared. Only valid
              with <code>twitter</code>, <code>linkedin</code>,
              and <code>email</code> type.</dd>
            <dt><code>title        {'{string}'}</code></dt>
            <dd>Title of the link to be shared. Only valid with
              <code>linkedin</code> and <code>email</code> type.</dd>
            <dt><code>type         {'email|facebook|twitter|linkedin|google'}
              </code></dt>
            <dd>Which social network to share link to.</dd>
          </dl>
        </section>

      </DocsArticle>
    );
  }
};
