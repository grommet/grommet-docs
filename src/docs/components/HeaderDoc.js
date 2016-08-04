// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Example from '../Example';
import Header from 'grommet/components/Header';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Button from 'grommet/components/Button';
import Search from 'grommet/components/Search';
import Title from 'grommet/components/Title';
import ActionsLogo from 'grommet/components/icons/base/Actions';
import NotificationIcon from 'grommet/components/icons/base/Notification';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import Logo from '../../img/Logo';

Header.displayName = 'Header';
Title.displayName = 'Title';
Search.displayName = 'Search';
Menu.displayName = 'Menu';
Anchor.displayName = 'Anchor';
Button.displayName = 'Button';

export default class HeaderDoc extends Component {

  render () {
    return (
      <DocsArticle title="Header" colorIndex="neutral-3">

        <section>
          <p>Combines Title and Menu elements responsively.</p>
          <Header justify="between">
            <Title>Title</Title>
            <Menu direction="row" align="center" responsive={false}>
              <Anchor href="#" className="active">First</Anchor>
              <Anchor href="#">Second</Anchor>
              <Anchor href="#">Third</Anchor>
              <Search dropAlign={{right: "right"}} />
            </Menu>
          </Header>
        </section>

        <section>
          <h2>Options</h2>
          <dl>
            <dt><code>fixed       true|false</code></dt>
            <dd>Whether the header is fixed on the page, typically so content
              below it will scroll under it.</dd>
            <dt><code>float       true|false</code></dt>
            <dd>Whether the header floats above content underneath it.</dd>
            <dt><code>size        small|medium|large</code></dt>
            <dd>The size of the Header. Defaults to <code>medium</code>.</dd>
            <dt><code>splash      true|false</code></dt>
            <dd>Whether to render it in a style suitable for a splash
              screen.</dd>
          </dl>
          <p>Options for <NavAnchor path="/docs/box">Box</NavAnchor> are
          also available.</p>
        </section>

        <section>
          <h2>Examples</h2>

          <Example name="Title and Search" code={
            <Header>
              <Title>Title</Title>
              <Search inline={true} className="flex" placeHolder="Search" />
            </Header>
          } />

          <Example name="Title, inline Menu, and Search" code={
            <Header justify="between">
              <Title>Title</Title>
              <Menu direction="row" align="center" responsive={false}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
                <Search dropAlign={{right: "right"}} />
              </Menu>
            </Header>
          } />

          <Example name="Logo, Title and icon Menu" code={
            <Header justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Logo, Title and labelled Menu" code={
            <Header justify="between">
              <Title><Logo /> Title</Title>
              <Menu label="Label" dropAlign={{right: "right"}}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Large" code={
            <Header size="large" justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Small" code={
            <Header size="small" justify="between">
              <Title><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Title menu and icon Menu" code={
            <Header size="large" justify="between">
              <Title onClick={function () {}}><Logo /> Title</Title>
              <Menu icon={<ActionsLogo />} dropAlign={{right: "right"}}>
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Separator" code={
            <Header separator="top">Heading Text</Header>
          } />

          <Example name="Large, Title Menu and icon Menu, colored" code={
            <Header size="large" justify="between" colorIndex="neutral-1"
              pad={{horizontal: 'medium'}}>
              <Title onClick={function () {}}>
                <Logo inverse={true} /> Title
              </Title>
              <Menu label="Menu"
                dropAlign={{right: "right"}}
                dropColorIndex="neutral-1">
                <Anchor href="#" className="active">First</Anchor>
                <Anchor href="#">Second</Anchor>
                <Anchor href="#">Third</Anchor>
              </Menu>
            </Header>
          } />

          <Example name="Logo, Title and nested Menus, colored" code={
            <Header justify="between" colorIndex="neutral-1"
              pad={{horizontal: 'medium'}}>
              <Title><Logo inverse={true} /> Title</Title>
              <Menu inline={true} responsive={false} direction="row">
                <Menu icon={<NotificationIcon />}
                  dropAlign={{right: "right"}}
                  dropColorIndex="neutral-1">
                  <Anchor href="#" className="active">First</Anchor>
                  <Anchor href="#">Second</Anchor>
                  <Anchor href="#">Third</Anchor>
                </Menu>
                <Menu icon={<UserSettingsIcon />}
                  dropAlign={{right: "right"}}
                  dropColorIndex="neutral-1">
                  <Anchor href="#" className="active">First</Anchor>
                  <Anchor href="#">Second</Anchor>
                  <Anchor href="#">Third</Anchor>
                </Menu>
              </Menu>
            </Header>
          } />

        </section>

      </DocsArticle>
    );
  }
};
