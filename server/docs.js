var express = require('express');
var router = express.Router();
var path = require('path');

var React = require('react');
var Router = require('react-router');
var theme = require('./theme');

var fs = require('fs');

// Convert static resources defined by relative URLs when using HTML5 pushState
function translateStatics(req, res, next) {
  if (req.url.match(/.+\/img\//)) { // img
    res.redirect(301, req.url.replace(/.*\/(img\/.*)$/, "/docs/$1"));
  } else if (req.url.match(/\/img\//)) { // img
    next();
  } else if (req.url.match(/.+\/font\//)) { // font
    res.redirect(301, req.url.replace(/.*\/(font\/.*)$/, "/docs/$1"));
  } else if (req.url.match(/\/font\//)) { // font
    next();
  } else if (req.url.match(/.+\/.*\.[^\/]*$/)) { // file
    res.redirect(301, req.url.replace(/.*\/([^\/]*)$/, "/docs/$1"));
  } else {
    next();
  }
}

function processPage(req, res, theme) {

  delete require.cache[require.resolve('./server-routes.js')];
  var docsRoutes = require('./server-routes.js');

  var path = theme !== '' ? ('/' + theme) : '';

  var reactRouter = Router.create({
    location: '/docs' + path + req.url.replace(path, ''),
    routes: docsRoutes('/docs' + path + '/')
  });

  reactRouter.run(function(Handler, state) {
    var Component = React.createFactory(Handler);
    var html = React.renderToString(Component({}));
    res.render('index.ejs', {
      appBody: html,
      linkTag: "<link id='theme-link' href='/docs/" +
        (theme === '' ? 'vanilla' : theme) +
        ".min.css' rel='stylesheet' type='text/css'>"
    });
  });
}

router.use('/', express.static(path.join(__dirname, '/../dist')));
router.get('/*', function (req, res, next) {
  if (/\..*$/.test(req.url)) {
    translateStatics(req, res, next);
  } else {
    var themeGroups = /docs\/([^\/]+)\/?/.exec(req.originalUrl);

    var theme = '';
    if (themeGroups && themeGroups.length > 1) {
      theme = themeGroups[1];
      var possibleThemes = 'aruba,hpe,hpinc';
      if (possibleThemes.indexOf(theme) === -1) {
        theme = '';
      }
    }
    processPage(req, res, theme);
  }
});

module.exports = router;
