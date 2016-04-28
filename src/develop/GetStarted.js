// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import { Link } from 'react-router';

import DocsArticle from '../DocsArticle';

class GetStarted extends Component {

  render () {
    var architectureLink = (
      <Link to={this.context.routePrefix + "architecture"}>
        Architecture
      </Link>
    );

    return (
      <DocsArticle title="Get Started" colorIndex="neutral-1">
        <p>
          Welcome to the Grommet Get Started page. Here you will find instructions
          on how to install Grommet in your local environment.
        </p>
        <section>
          <h2>Get Dependencies</h2>
          <ol>
            <li>
              Install <a href="http://git-scm.com/" target="_blank">Git</a>.
              For Windows, you may like <a href="http://msysgit.github.io/"
              target="_blank">Git for Windows</a>.
            </li>
            <li>
              Install <a href="https://nodejs.org/" target="_blank">Node.js
            </a> <i>(at least Node 4.4.x+ and NPM 3.0.x+ required)</i>
            </li>
            <li>
              Install <a href="https://www.python.org/downloads/"
              target="_blank">Python 2.7</a> and
              add the installation directory to your system Path variable.
            </li>
            <li>
              For Windows, install <a
              href="http://www.microsoft.com/en-us/download/details.aspx?id=11310"
              target="_blank">Windows SDK for Windows Server 2008 and .NET
              Framework 3.5</a> <i>(Ensure that a C compiler is installed)</i>.
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
              <p>If you encounter problems while downloading packages through an https proxy,
              try using the http protocol in your https-proxy variable, as in:</p>
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
                  <p>Install Gulp globally (make sure to run as an admin).</p>
                  <pre><code className="hljs bash">
                    npm install -g gulp
                  </code></pre>
                </li>
              	<li>
                  <p>Install Grommet globally (make sure to run as an admin).</p>
                  <pre><code className="hljs bash">
                    npm install -g grommet
                  </code></pre>
                </li>
                <li>
                	<p>Use the Grommet generator to bootstrap your new app.</p>
                	<pre><code className="hljs bash">
                    {"grommet init sample-app"}
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
              		<p>Install <a href="http://bower.io/" target="_blank">Bower</a> 
                  <i>(at least 1.x required)</i>.</p>
              		<pre><code className="hljs bash">npm install -g bower</code></pre>
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
                  <pre><code className="hljs bash">bower install grommet</code></pre>
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
        </section>
        <section>
          <h2>Next Steps</h2>
          <p>
            We recommend that you check out the {architectureLink} page and
            learn how Grommet works internally.
          </p>
          <p>We also have
            a <a href="http://vimeo.com/grommetux/videos">Grommet Vimeo channel</a> with
            additional training materials.</p>
        </section>
      </DocsArticle>
    );
  }
}

GetStarted.contextTypes = {
  routePrefix: React.PropTypes.string.isRequired
};

module.exports = GetStarted;
