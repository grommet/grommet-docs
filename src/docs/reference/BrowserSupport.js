// (C) Copyright 2014-2016 Hewlett Packard Enterprise Development LP

import React, { Component } from 'react';
import DocsArticle from '../../components/DocsArticle';
import Box from 'grommet/components/Box';
import FirefoxIcon from 'grommet/components/icons/base/PlatformFirefox';
import IEIcon from 'grommet/components/icons/base/PlatformInternetExplorer';
import EdgeIcon from 'grommet/components/icons/base/PlatformEdge';
import ChromeIcon from 'grommet/components/icons/base/PlatformChrome';
import AppleIcon from 'grommet/components/icons/base/PlatformApple';

class Browser extends Component {
  render () {
    return (
      <Box direction="row" align="center"
        pad={{between: 'small', vertical: 'medium'}}>
        <this.props.icon size="large" />
        <strong>{this.props.children}</strong>
      </Box>
    );
  }
};

export default class BrowserSupport extends Component {

  render () {
    return (
      <DocsArticle title="Browser Support" colorIndex="neutral-4">
        <section>
          <h2>Supported web browsers and versions</h2>
          <p>The following web browsers are tested and supported with
            Grommet.</p>
          <Browser icon={IEIcon}>Microsoft Internet Explorer Version 11,
           latest version</Browser>
          <Browser icon={EdgeIcon}>Microsoft Edge, latest version</Browser>
          <Browser icon={FirefoxIcon}>Mozilla Firefox, latest version</Browser>
          <Browser icon={ChromeIcon}>
            Google Chrome mobile and desktop, latest versions</Browser>
          <Browser icon={AppleIcon}>
            Apple Safari mobile and desktop, latest versions</Browser>
          <p>
          Grommet makes heavy use of the <a
          href="https://www.w3.org/TR/css-flexbox-1/">
          HTML5 Flexible Box Layout Module</a>. For this reason, Grommet
          requires
          a modern browser to ensure users have a good experience.  You can
          check the <a href="http://caniuse.com/#feat=flexbox">
          Can I Use</a> website to
          learn more about this capability and the levels of browser support.
          </p>
          <p>
          A common question we receive is why are older versions of
          Microsoft Internet Explorer not supported.
          On January 12, 2016, <a
          href={"https://www.microsoft.com/en-us/WindowsForBusiness/" +
            "End-of-IE-support"}>
          Microsoft ended support</a> for versions of Internet Explorer
          older than version 11.
          In order to deliver a secure and modern experience for the
          enterprise, Grommet does not provide
          support for browsers that are no longer receiving security updates.
          </p>
          <p>
          Another question we receive is why are specific version numbers
          not listed.
          Modern browsers release on a very frequent cadence, generally
          every few weeks.
          They also automatically update which means the user is no longer
          responsible or
          even aware in many cases that the browser has been updated.  As a
          result, the
          specific version numbers of browsers is less meaninful and more
          difficult to track.
          </p>
        </section>
      </DocsArticle>
    );
  }
};
