// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

const Commands = (props) => (
  <Box colorIndex='light-2'>
    <code className="hljs bash">
      {props.children}
    </code>
  </Box>
);

export default class GetStartedDoc extends Component {

  render () {
    return (
      <DocsArticle title="Get Started">
        <p>
          Here you will find
          instructions
          on how to install Grommet in your local environment.
        </p>
        <Section>
          <h2>Get Dependencies</h2>
          <ol>
            <li>
              Install <Anchor href="http://git-scm.com/" target="_blank">
              Git</Anchor>.
              For Windows, you may like <Anchor href="http://msysgit.github.io/"
              target="_blank">Git for Windows</Anchor>.
            </li>
            <li>
              Install <Anchor href="https://nodejs.org/" target="_blank">Node.js
            </Anchor> <i>(at least Node 4.4.x+ and NPM 3.0.x+ required)</i>
            </li>
            <li>
              <p>
                Setup your NPM proxy (only required if you&#39;re behind a
                proxy server).
              </p>
              <Commands>
                {"npm config set proxy http://{host}:{port}"}<br/>
                {"npm config set https-proxy https://{host}:{port}"}
              </Commands>
              <p>
                If you encounter problems while downloading packages through
                an https proxy, try using the http protocol in your
                https-proxy variable, as in:
              </p>
              <Commands>
                {"npm config set https-proxy http://{host}:{port}"}
              </Commands>
            </li>
          </ol>

          <h2>Get Going</h2>
          <p>You can install Grommet using either of the methods below.</p>

          <h3>NPM</h3>
          <ol>
            <li>
              <p>
                Install grommet-cli globally (make sure to run as an admin).
              </p>
              <Commands>
                npm install -g grommet-cli
              </Commands>
            </li>
            <li>
            	<p>Use the Grommet generator to bootstrap your new app.</p>
              <Commands>
                {"grommet new sample-app"}
                <br />
                {"cd sample-app"}
              </Commands>
            </li>
            <li>
            	<p>Start a development server with hot reload enabled.</p>
              <Commands>gulp dev</Commands>
            </li>
            <li>
            	<p>Open http://localhost:9000/webpack-dev-server/</p>
            	<p>
                At this point, you should be able to see the
                application dashboard running.
              </p>
            </li>
          </ol>

          <h3>Bower</h3>
          <ol>
          	<li>
          		<p>
                Install <Anchor href="http://bower.io/" target="_blank">
                Bower</Anchor> <i>(at least 1.x required)</i>.
              </p>
              <Commands>npm install -g bower</Commands>
          	</li>
            <li>
              <p>
                Create an environment variable with your proxy settings
                (only required if you&#39;re behind a proxy server).
              </p>
              <p><b>Windows</b></p>
              <Commands>
                {"set HTTPS_PROXY=https://{host}:{port}"}
              </Commands>
              <p><b>Linux/OS X</b></p>
              <Commands>
                {"export HTTPS_PROXY=https://{host}:{port}"}
              </Commands>
            </li>
            <li>
              <p>Install Grommet.</p>
              <Commands>bower install grommet</Commands>
              <p>
                At this point, a <i>bower_components</i> folder will be
                created which contains Grommet and its dependencies.
              </p>
            </li>
            <li>
              <p>Open the sample application in your web browser.</p>
              <Commands>
                bower_components/grommet/sample-grommet.html
              </Commands>
              <p>You can now play with Grommet using local Bower.</p>
              <p>
                NOTE: if you are using the Bower distribution make
                sure to add React dependency with addons.
              </p>
            </li>
          </ol>

          <h3>Standalone</h3>
          <ol>
            <li>
              <p>
                In case you have an existing project using Node, you can refer
                to <Anchor
                  href="https://github.com/grommet/grommet-standalone"
                  target='_blank'>grommet-standalone</Anchor> for reference
                on how to use Grommet with webpack.
              </p>
            </li>
          </ol>

        </Section>
        <Section>
          <h2>Next Steps</h2>
          <p>
            We recommend that you check out
            the <Anchor path="/docs/architecture">
            Architecture</Anchor> page
            and learn how Grommet works internally.
          </p>
          <p>
            We also have
            a <Anchor href="http://vimeo.com/grommetux/videos" target='_blank'>
            Grommet Vimeo channel</Anchor> with
            additional training materials.
          </p>
        </Section>
      </DocsArticle>
    );
  }
};
