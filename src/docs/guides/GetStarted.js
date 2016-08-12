// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';
import Anchor from 'grommet/components/Anchor';

export default class GetStartedDoc extends Component {

  render () {
    return (
      <DocsArticle title="Get Started" colorIndex="neutral-1">
        <p>
          Welcome to the Grommet Get Started page. Here you will find
          instructions
          on how to install Grommet in your local environment.
        </p>
        <section>
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
              <pre><code className="hljs bash">
                {"npm config set proxy http://{host}:{port}"}<br/>
                {"npm config set https-proxy https://{host}:{port}"}
              </code></pre>
              <p>If you encounter problems while downloading packages through
                an https proxy,
              try using the http protocol in your https-proxy variable, as
              in:</p>
              <pre><code className="hljs bash">
                {"npm config set https-proxy http://{host}:{port}"}
              </code></pre>
            </li>
          </ol>
          <h2>Get Going</h2>
            <p>You can install Grommet using either of the methods below.</p>
            <h4>NPM</h4>
              <ol>
                <li>
                  <p>Install grommet-cli globally (make sure to run as an
                      admin).</p>
                  <pre><code className="hljs bash">
                    npm install -g grommet-cli
                  </code></pre>
                </li>
                <li>
                	<p>Use the Grommet generator to bootstrap your new app.</p>
                	<pre><code className="hljs bash">
                    {"grommet new sample-app"}
                    <br />
                    {"cd sample-app"}
                    </code></pre>
                </li>
                <li>
                	<p>Start a development server with hot reload enabled.</p>
                	<pre><code className="hljs bash">gulp dev</code></pre>
                </li>
                <li>
                	<p>Open http://localhost:9000/webpack-dev-server/</p>
                	<p>At this point, you should be able to see the
                  application dashboard running.</p>
                </li>
              </ol>
            <h4>Bower</h4>
              <ol>
              	<li>
              		<p>Install <Anchor href="http://bower.io/" target="_blank">
                    Bower</Anchor>
                  <i>(at least 1.x required)</i>.</p>
              		<pre><code className="hljs bash">npm install -g bower
                    </code></pre>
              	</li>
                <li>
                  <p>Create an environment variable with your proxy settings
                  (only required if you&#39;re behind a proxy server).</p>
                  <p><b>Windows</b></p>
                  <pre><code className="hljs bash">
                    {"set HTTPS_PROXY=https://{host}:{port}"}
                  </code></pre>
                  <p><b>Linux/OS X</b></p>
                  <pre><code className="hljs bash">
                    {"export HTTPS_PROXY=https://{host}:{port}"}
                  </code></pre>
                </li>
                <li>
                  <p>Install Grommet.</p>
                  <pre><code className="hljs bash">bower install grommet
                    </code></pre>
                  <p>At this point, a <i>bower_components</i> folder will be
                  created which contains Grommet and its dependencies.</p>
                </li>
                <li>
                  <p>Open the sample application in your web browser.</p>
                  <pre><code className="hljs bash">
                    bower_components/grommet/sample-grommet.html
                  </code></pre>
                  <p>You can now play with Grommet using local Bower.</p>
                </li>
              </ol>
            <h4>Standalone</h4>
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
        </section>
        <section>
          <h2>Next Steps</h2>
          <p>
            We recommend that you check out
            the <NavAnchor path="/docs/architecture">
            Architecture</NavAnchor> page
            and learn how Grommet works internally.
          </p>
          <p>We also have
            a <Anchor href="http://vimeo.com/grommetux/videos" target='_blank'>
            Grommet Vimeo channel</Anchor> with
            additional training materials.</p>
        </section>
      </DocsArticle>
    );
  }
};
