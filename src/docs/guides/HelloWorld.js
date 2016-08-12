// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import NavAnchor from '../../components/NavAnchor';

export default class HelloWorld extends Component {

  render () {
    return (
      <DocsArticle title="Hello World" colorIndex="neutral-1">
        <section>
          <p>
            The easiest way to learn a framework is by writing a simple
            application.
            In this section you will access the Grommet source from our
            server and
            you will be able to experiment with Grommet using just an HTML
            file and
            your browser.  {"You'll"} use hosted JavaScript files in this
            exercise which
            is not meant to be used in production.
          </p>
          <p>
            To help you get started quickly we provide the following
            <a href="http://codepen.io/grommet/pen/gaEGPY/" target="_blank">
              codepen
            </a> template:
          </p>
          <iframe height='268' scrolling='no'
            src={"//codepen.io/grommet/embed/gaEGPY/?" +
              "height=268&theme-id=0&default-tab=result"}
            frameBorder='no' allowTransparency='true' allowFullScreen='true'
            style={{width: '100%'}}>See the Pen
            <a href='http://codepen.io/grommet/pen/gaEGPY/'>
              Grommet Hello World</a>
            by Grommet UX (<a href='http://codepen.io/grommet'>@grommet</a>) on
            <a href='http://codepen.io'>CodePen</a>.
          </iframe>
          <p>
            Also, there is a Github
            <a href="https://gist.github.com/grommetux/fb257dcd546a58070db9"
            target="_blank">Gist</a> that you can use to load this same
            Hello World app in your local computer.
          </p>
        </section>
        <section>
          <h2>Next Steps</h2>
          <p>
            Now that {"you've"} already played with Grommet, we recommend that
            you check
            out the <NavAnchor path="/docs/get-started">
            Get Started</NavAnchor> page and learn
            how to install Grommet in your local environment.
          </p>
        </section>
      </DocsArticle>
    );
  }
};
