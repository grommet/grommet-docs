// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Search from 'grommet/components/Search';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Heading from 'grommet/components/Heading';
import ActionsIcon from 'grommet/components/icons/base/Actions';
import NotificationIcon from 'grommet/components/icons/base/Notification';
import UserSettingsIcon from 'grommet/components/icons/base/UserSettings';
import ExamplesDoc from '../../../components/ExamplesDoc';
import NavAnchor from '../../../components/NavAnchor';
import Logo from '../../../img/Logo';
import Example from '../../Example';

const HeaderExample = (props) => (
  <Example code={props.code} />
);

export default class HeaderExamplesDoc extends ExamplesDoc {};

HeaderExamplesDoc.defaultProps = {
  context: <NavAnchor path="/docs/header">Header</NavAnchor>,
  examples: [
    { label: 'Title and Search', component: HeaderExample,
      props: { code: (
        <Header>
          <Title>Title</Title>
          <Search inline={true} fill={true} size="medium"
            placeHolder="Search" />
        </Header>
      )}
    },
    { label: 'Title, inline Menu, and Search', component: HeaderExample,
      props: { code: (
        <Header justify="between">
          <Title>Title</Title>
          <Menu direction="row" align="center" responsive={false}>
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
            <Search dropAlign={{right: "right"}} />
          </Menu>
        </Header>
      )}
    },
    { label: 'Logo, Title and icon Menu', component: HeaderExample,
      props: { code: (
        <Header justify="between">
          <Title><Logo /> Title</Title>
          <Menu icon={<ActionsIcon />} dropAlign={{right: "right"}}>
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Header>
      )}
    },
    { label: 'Logo, Title and labelled Menu', component: HeaderExample,
      props: { code: (
        <Header justify="between">
          <Title><Logo /> Title</Title>
          <Menu label="Label" dropAlign={{right: "right"}}>
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Header>
      )}
    },
    { label: 'Large, colored', component: HeaderExample,
      props: { code: (
        <Header size="large" justify="between" colorIndex="neutral-1"
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
      )}
    },
    { label: 'Small, colored', component: HeaderExample,
      props: { code: (
        <Header size="small" justify="between" colorIndex="neutral-1"
          pad={{horizontal: 'medium'}}>
          <Title>Title</Title>
          <Menu icon={<ActionsIcon />} dropAlign={{right: "right"}}
            dropColorIndex="neutral-1">
            <Anchor href="#" className="active">First</Anchor>
            <Anchor href="#">Second</Anchor>
            <Anchor href="#">Third</Anchor>
          </Menu>
        </Header>
      )}
    },
    { label: 'Heading, separator', component: HeaderExample,
      props: { code: (
        <Header separator="top"><Heading>Heading</Heading></Header>
      )}
    }
  ],
  title: 'Examples'
};
