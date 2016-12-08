// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import Anchor from 'grommet/components/Anchor';
import DocsArticle from '../../components/DocsArticle';

export default class Architecture extends Component {

  render () {
    return (
      <DocsArticle title='Architecture'>
        <section>
        	<p>
            Grommet is based on <a href='http://reactjs.com' target='_blank'>
            ReactJS</a> which
            provides great features in JavaScript for building user 
            interfaces. {"You'll"} also use a JavaScript syntax extension 
            called <a 
              href='https://facebook.github.io/react/docs/jsx-in-depth.html'
              target='_blank'>JSX</a>.
          </p>
          <p>
            We expect that you have at least a basic understanding on these
            technologies to be able to master Grommet, in addition to JavaScript
            of course. In terms of cascading style sheets (CSS), Grommet
            provides everything you need to quickly create applications
            based on the application <Anchor path="/docs/resources">
              Style Guide</Anchor>.
            Under the hood, {"you'll"} find <a 
            href='https://github.com/inuitcss'
            target='_blank'>InuitCSS</a> and <a href='http://sass-lang.com/'
            target='_blank'>Sass</a> to
            compile the style sheets. But, don&#39;t worry, you are not
            expected to write a lot of CSS when using 
            Grommet. {"We've"} done that for you.  But, if you would like 
            to contribute, please do so!
          </p>
        </section>
      </DocsArticle>
    );
  }
};
