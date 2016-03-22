// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var React = require('react');
var DocsArticle = require('../DocsArticle');
var Firefox = require('grommet/components/icons/base/PlatformFirefox');
var IE = require('grommet/components/icons/base/PlatformInternetExplorer');
var Edge = require('grommet/components/icons/base/PlatformEdge');
var Chrome = require('grommet/components/icons/base/PlatformChrome');
var Apple = require('grommet/components/icons/base/PlatformApple');

var BrowserSupport = React.createClass({
  render: function () {
    return (
      <DocsArticle title="Browser Support" colorIndex="neutral-4">
        <section>
          <h2>Supported web browsers and versions</h2>
          <p>The following web browsers are tested and supported with Grommet.</p>
          <p><IE /> Microsoft Internet Explorer Version 11</p>
          <p><Edge />Microsoft Edge, latest version</p>
          <p><Firefox /> Mozilla Firefox, latest version</p>
          <p><Chrome /> Google Chrome mobile and desktop, latest versions</p>
          <p><Apple />Apple Safari mobile and desktop, latest versions</p>
          <p>
          Grommet makes heavy use of the <a href="https://www.w3.org/TR/css-flexbox-1/">
          HTML5 Flexible Box Layout Module</a>.  For this reason, Grommet requires
          a modern browser to ensure users have a good experience.  You can
          check the <a href="http://caniuse.com/#feat=flexbox">Can I Use</a> website to
          learn more about this capability and the levels of browser support.
          </p>
          <p>
          A common question we receive is why are older versions of Microsoft Internet Explorer not supported.
          On January 12, 2016, <a href="https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support">
          Microsoft ended support</a> for versions of Internet Explorer older than version 11.
          In order to deliver a secure and modern experience for the enterprise, Grommet does not provide
          support for browsers that are no longer receiving security updates.
          </p>
          <p>
          Another question we receive is why are specific version numbers not listed.
          Modern browsers release on a very frequent cadence, generally every few weeks.
          They also automatically update which means the user is no longer responsible or
          even aware in many cases that the browser has been updated.  As a result, the
          specific version numbers of browsers is less meaninful and more difficult to track.
          </p>
        </section>
      </DocsArticle>
    );
  }
});

module.exports = BrowserSupport;
