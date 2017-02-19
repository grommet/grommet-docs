// (C) Copyright 2014-2017 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';
import Section from 'grommet/components/Section';
import DocsArticle from '../../components/DocsArticle';

const Commands = (props) => (
  <Box colorIndex='light-2' margin={{ vertical: 'medium' }}>
    <code className="hljs bash">
      {props.children}
    </code>
  </Box>
);

export default class Setup extends Component {

  render () {
    return (
      <DocsArticle title="Setup">
        <Paragraph size='large'>
          Need some help getting your system ready for Grommet?
          No problem. You probably have most of the tools needed
          already in place, but here is our recommended setup!
        </Paragraph>
        <Section>
          <Heading tag='h3'>Design Tools</Heading>
          <Paragraph margin='none'>
            To setup your Grommet designer environment, all you need 
            is <Anchor href="https://www.sketchapp.com/" target="_blank">
            Sketch</Anchor>. If you would like to make changes to the 
            Grommet Design System, we manage all changes through <Anchor 
            href='https://git-scm.com/' target= '_blank'>Git</Anchor>. If 
            you haven't used Git before, we have a Git Designer Cheat Sheet 
            to help you through the setup. If your work includes prototyping,
            there are many great tools, but we recommend <Anchor 
            href="https://invisionapp.com" target= '_blank'>Invision</Anchor>.
            If you work on interaction design, <Anchor 
            href='http://principleformac.com/' target= '_blank'>Principle
            </Anchor> and <Anchor href='https://framer.com/' target='_blank'>
            Framer.js</Anchor> work great with Sketch.
          </Paragraph>
        </Section>
        <Section separator='top'>
          <Heading tag ='h3'>Development Tools</Heading>
          <Paragraph margin='none'>
            To setup your Grommet developer environment, you only 
            need <Anchor href="https://nodejs.org" target="_blank">Node.js
            </Anchor> to get started. If you would like to submit pull 
            requests to Grommet projects, you will need to install <Anchor
            href="https://git-scm.com/" target="_blank">Git</Anchor> as well.
            We don't have a preferred code editor, but we love using <Anchor
            href="https://atom.io" target="_blank">Atom</Anchor> and <Anchor
            href= "https://code.visualstudio.com" target="_blank">VS Code
            </Anchor>.
           </Paragraph>
        </Section>
        <Section separator='top'>
          <Heading tag ='h3'>Proxy Configuration</Heading>
          <Paragraph margin='none'>
            This is only required if you're behind a proxy server and have
            not already configured proxy on your system.
          </Paragraph>
          <Commands margin='small'>
                {"npm config set proxy http://{host}:{port}"}<br/>
                {"npm config set https-proxy https://{host}:{port}"}
          </Commands>
          <Paragraph margin='none'>
            If you encounter problems while downloading packages through and
            https proxy, try using the http protocol in your https-proxy 
            variable as in:
          </Paragraph>
          <Commands>
                {"npm config set https-proxy http://{host}:{port}"}
          </Commands>
        </Section>
      </DocsArticle>
    );
  }
}
