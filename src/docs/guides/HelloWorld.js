// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Button from 'grommet/components/Button';
import Paragraph from 'grommet/components/Paragraph';
import DocsArticle from '../../components/DocsArticle';

export default class HelloWorld extends Component {

  render () {
    return (
      <DocsArticle title="Hello World">
        <section>
          <Paragraph size='large'>
            The easiest way to learn a framework is by writing a simple
            application. In this section you will access the Grommet 
            source code from our server and you will be able to 
            experiment with Grommet using just an HTML
            file and your browser.  
          </Paragraph>
          <Paragraph size='large'> 
            To help you get started quickly, we provide the
            following <a
              href="https://codepen.io/pen?template=gaEGPY&editors=0010"
              target="_blank">CodePen</a> template:
          </Paragraph>
          <Paragraph size='small'>
            For this example we will be using hosted JavaScript files
            which are not meant to be used in production.</Paragraph>
          <iframe height='268' scrolling='no'
            src={"//codepen.io/grommet/embed/gaEGPY/?" +
              "height=268&theme-id=0&default-tab=result"}
            frameBorder='no' allowTransparency='true' allowFullScreen='true'
            style={{width: '100%'}}>See the Pen
            <a href='https://codepen.io/grommet/pen/gaEGPY/'>
              Grommet Hello World</a>
            by Grommet UX (<a href='https://codepen.io/grommet'>@grommet</a>) 
            on <a href='https://codepen.io'>CodePen</a>.
          </iframe>
          <Paragraph size='small'>
            We also provided a 
            <a href="https://gist.github.com/grommetux/fb257dcd546a58070db9"
            target="_blank"> Github Gist</a> to load this Hello World
            application on your local system.
          </Paragraph>
        </section>
        <section>
          <h2>Next Steps</h2>
          <Paragraph>
            Now that {"you've"} already played with Grommet, we recommend that
            you check out the Get Started section. There you will learn
            how to install Grommet in your local environment.
          </Paragraph>
          <Button label='Get Started'
            primary={true}
            href='https://grommet.github.io/docs/get-started'/>
        </section>
      </DocsArticle>
    );
  }
};
