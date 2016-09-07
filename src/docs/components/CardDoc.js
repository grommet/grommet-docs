// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';

import Card from 'grommet/components/Card';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Tiles from 'grommet/components/Tiles';
import Heading from 'grommet/components/Heading';
import SocialTwitterIcon from 'grommet/components/icons/base/SocialTwitter';
import SocialFacebookIcon from 'grommet/components/icons/base/SocialFacebook';
import SocialLinkedinIcon from 'grommet/components/icons/base/SocialLinkedin';
import LinkNextIcon from 'grommet/components/icons/base/LinkNext';
import WatchIcon from 'grommet/components/icons/base/Watch';


export default class CardDoc extends Component {
  _onClickCard (path, event) {
    event.preventDefault();
    window.location.href = path;
  }

  render () {
    const grommetPath = 'http://grommet.github.io';

    const simpleCard = (
      <Box colorIndex="light-2">
        <Card
          thumbnail="/img/carousel-1.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          details={`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
        />
      </Box>
    );

    const linkCard = (
      <Box colorIndex="light-2">
        <Card
          onClick={this._onClickCard.bind(this, grommetPath)}
          reverse={true}
          thumbnail="/img/carousel-1.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          details={`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
          link={
            <Anchor href={grommetPath}
              label="Learn More"
              icon={<LinkNextIcon />}
            />
          }
        />
      </Box>
    );

    const videoCard = (
      <Box colorIndex="light-2">
        <Card
          direction="row"
          thumbnail="/img/carousel-1.png"
          label="Video - 4:27"
          heading="Foundation Paraguay Empowers Microbusinesses"
          details={`See how Hewlett Packard Enterprise delivers mobile
            solutions to improve quality of life and help eliminate poverty
            in South America.`}
          video={{
            source: '/video/test.mp4',
            type: 'mp4'
          }}
          link={
            <Anchor href="#"
              label="Watch Now"
              icon={<WatchIcon />}
            />
          }
        />
      </Box>
    );

    const twitterIconBox = (
      <Box align="end">
        <SocialTwitterIcon />
      </Box>
    );

    const facebookIconBox = (
      <Box align="end">
        <SocialFacebookIcon />
      </Box>
    );

    const linkedinIconBox = (
      <Box align="end">
        <SocialLinkedinIcon />
      </Box>
    );

    const socialFeedCard1 = (
      <Card
        onClick={this._onClickCard.bind(this, 'http://www.twitter.com')}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {twitterIconBox}
      </Card>
    );

    const socialFeedCard2 = (
      <Card
        onClick={this._onClickCard.bind(this, 'http://www.facebook.com')}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {facebookIconBox}
      </Card>
    );

    const socialFeedCard3 = (
      <Card
        onClick={this._onClickCard.bind(this, 'http://www.linkedin.com')}
        direction="column"
        label="Social"
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
        {linkedinIconBox}
      </Card>
    );

    const blogPostCard = (
      <Card
        onClick={this._onClickCard.bind(this, grommetPath)}
        direction="column"
        label="Featured Post"
        link={
          <Anchor
            href={grommetPath}
            label="Learn More"
            icon={<LinkNextIcon />}
          />
        }
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    const featuredPostCard = (
      <Card
        onClick={this._onClickCard.bind(this, grommetPath)}
        thumbnail="/img/carousel-1.png"
        direction="column"
        label="Featured Post"
        link={
          <Anchor
            href={grommetPath}
            label="Learn More"
            icon={<LinkNextIcon />}
          />
        }
      >
        <Heading tag="h2">
          Protect Your Digital Enterprise ipsum lorem dolores aeat el
        </Heading>
      </Card>
    );

    const socialCards = (
      <Tiles size="large" colorIndex="light-2">
        {socialFeedCard1}
        {blogPostCard}
        {socialFeedCard2}
        {socialFeedCard3}
      </Tiles>
    );

    const cardTiles = (
      <Tiles size="large" colorIndex="light-2">
        <Card
          onClick={this._onClickCard.bind(this, grommetPath)}
          direction="column"
          thumbnail="/img/carousel-1.png"
          label="Featured Post"
          heading="Protect Your Digital Enterprise ipsum dolores aeat"
          details={`It’s not an either/or world. It’s about finding the
            right platform for each app, workload and service. Learn how
            hybrid infrastructure can help you achieve cloud agility with
            traditional IT predictability. It’s not an either/or world. It’s
            about finding the right platform for each app, workload and
            service. Learn how hybrid infrastructure can help you achieve
            cloud agility with traditional IT predictability. It’s not an
            either/or world. It’s about finding the right platform for each
            app, workload and service. Learn how hybrid infrastructure can
            help you achieve cloud agility with traditional IT
            predictability.`}
          link={<Anchor href="#" label="Watch Now" icon={<WatchIcon />} />}
        />
        <Card
          direction="column"
          thumbnail="/img/carousel-1.png"
          label="Video - 4:27"
          heading="Foundation Paraguay Empowers Microbusinesses"
          details={`See how Hewlett Packard Enterprise delivers mobile
            solutions to improve quality of life and help eliminate poverty
            in South America.`}
          video={{
            source: '/video/test.mp4',
            type: 'mp4'
          }}
          link={<Anchor href="#" label="Watch Now" icon={<WatchIcon />} />}
        />
        <Card
          direction="column"
          thumbnail="/img/carousel-1.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          details={`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
        />
        <Card
          direction="column"
          thumbnail="/img/carousel-1.png"
          label="Featured Post"
          heading="The Key Steps to Reducing Software Spend"
          details={`HPE Software Licensing and Management Solutions can
            help you optimize your software investments through control of
            complex negotiations and renewal processes`}
        />
      </Tiles>
    );

    const cardTilesMasonry = (
      <Tiles size="large" masonry={true} numColumns={7} colorIndex="light-2">
        {blogPostCard}
        {featuredPostCard}
        {socialFeedCard1}
        {socialFeedCard1}
        {blogPostCard}
        {featuredPostCard}
        {featuredPostCard}
        {blogPostCard}
      </Tiles>
    );

    const stackCard = (
      <Card
        direction="row"
        colorIndex=""
        label="Featured Post"
        heading="The Key Steps to Reducing Software Spend"
        summary="Protect Your Digital Enterprise ipsum lorem dolores aeat el"
        details="HPE Software Licensing and Management Solutions can help
        you optimize your software investments through control of complex
        negotiations and renewal processes"
        link={
          <Anchor href={grommetPath}
            label="Learn More"
            icon={<LinkNextIcon />}
          />
        }
      />
    );

    return (
      <DocsArticle title="Card" colorIndex="neutral-3">

        <section>
          <p>The Card module.</p>
        </section>

        <section>
          <h2>Card Options</h2>
          <dl>
            <dt><code>thumbnail            {'{url}'}</code></dt>
            <dd>Url path to image. Use reverse option to position thumbnail
              within card.</dd>
            <dt><code>label                {'{string}'}</code></dt>
            <dd>Content label.</dd>
            <dt><code>heading              {'{string}'}</code></dt>
            <dd>Content heading.</dd>
            <dt>
              <code>summary            {'{string|[string, ...]}'}</code>
            </dt>
            <dd>
              Summary content.
              Array of strings will render multiple paragraphs.
            </dd>
            <dt>
              <code>details          {'{string|[string, ...]}'}</code>
            </dt>
            <dd>
              Details content.
              Array of strings will render multiple paragraphs.
            </dd>
            <dt><code>textSize             small|medium|large|xlarge</code></dt>
            <dd>Size of text within Card. Defaults to <code>medium</code>.</dd>
            <dt><code>link                 {'{element}'}</code></dt>
            <dd>Anchor element to place in the anchor.
              See <NavAnchor path="/docs/anchor">Anchor</NavAnchor>.</dd>
            <dt><code>onClick              {'{function}'}</code></dt>
            <dd>Click handler.</dd>
            <dt><code>video                {'{source: <string>, ' +
              'type: mp4|webm|ogg}|{element}'}</code></dt>
            <dd>Video media type and source path. Also accepts
            a <NavAnchor path="/docs/video">Video</NavAnchor> element.</dd>
            <dt><code>direction            {'column|row'}</code></dt>
            <dd>Applies the Card in a column (default) or row direction.
            Expects multiple Card modules to be wrapped in
            a <NavAnchor path="/docs/tiles">Tiles</NavAnchor> component.</dd>
            <dt><code>reverse              {'true|false'}</code></dt>
            <dd>If thumbnail url is set, align thumbnail to top or bottom of
            card. Defaults to <code>false</code>.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/tiles">Tile</NavAnchor> are
            also available for Card.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Default" code={simpleCard} />

          <Example name="Reverse, Link" code={linkCard} />

          <Example name="Row, Video" code={videoCard} />

          <Example name="Custom Children, with and without Social Icons (Tiles)"
            code={socialCards} />

          <Example name="Link, Video, Simple, Simple (Tiles)"
            code={cardTiles} />

          <Example name="Tiles with Masonry" code={cardTilesMasonry} />

          <Example name="Stack" code={stackCard} />
        </section>

      </DocsArticle>
    );
  }
};
