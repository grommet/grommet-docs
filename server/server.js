var express = require('express');
var http = require("http");

var server = express();

var PORT = process.env.PORT || 9000;

var app = express();

const BASENAMES = ['', '/aruba', '/hpe', '/hpinc'];

const DESIGN = [
  'best_practices',
  'usability',
  'interactions',
  'mobile',
  'accessibility',
  'color',
  'padding',
  'text',
  'typography',
  'writing_style',
  'date_time',
  'capitalization',
  'icons',
  'resources'
];

const DEVELOP = [
  'helloworld',
  'getstarted',
  'dashboard',
  'navigation',
  'actions',
  'anchor',
  'app',
  'article',
  'box',
  'brick',
  'button',
  'calendar',
  'carousel',
  'chart',
  'checkbox',
  'columns',
  'datetime',
  'date-and-time',
  'distribution',
  'footer',
  'form',
  'formfield',
  'header',
  'heading',
  'headline',
  'icon',
  'image',
  'label',
  'layer',
  'legend',
  'list',
  'loginform',
  'map',
  'menu',
  'meter',
  'notification',
  'numberinput',
  'paragraph',
  'quote',
  'radiobutton',
  'search',
  'searchinput',
  'section',
  'sidebar',
  'socialshare',
  'spinning',
  'split',
  'status',
  'tabs',
  'table',
  'tags',
  'tiles',
  'title',
  'topology',
  'value',
  'video',
  'worldmap',
  'markdown',
  'rest',
  'restwatch',
  'architecture',
  'integration',
  'accessibility',
  'browser_support'
];

const REMAP = {
  'checkbox': 'check-box',
  'datetime': 'date-time',
  'date-and-time': 'date-time',
  'formfield': 'form-field',
  'loginform': 'login-form',
  'numberinput': 'number-input',
  'radiobutton': 'radio-button',
  'searchinput': 'search-input',
  'socialshare': 'social-share',
  'worldmap': 'world-map',
  'restwatch': 'rest-watch'
};

DESIGN.forEach(function (pathname) {
  BASENAMES.forEach(function (basename) {
    app.get('/docs' + basename + '/design/' + pathname, function (req, res) {
      const newPathname = REMAP[pathname] || pathname;
      res.redirect(301, req.protocol + '://grommet.github.io' + basename +
        '/docs/' + newPathname);
    });
  });
});

DEVELOP.forEach(function (pathname) {
  BASENAMES.forEach(function (basename) {
    app.get('/docs' + basename + '/develop/' + pathname, function (req, res) {
      const newPathname = REMAP[pathname] || pathname;
      res.redirect(301, req.protocol + '://grommet.github.io' + basename +
        '/docs/' + newPathname);
    });
  });
});

BASENAMES.forEach(function (basename) {
  app.get('/docs' + basename, function (req, res) {
    res.redirect(301, req.protocol + '://grommet.github.io' + basename);
  });
});

app.get('/assets/*', function (req, res) {
  res.redirect(301, req.protocol + '://grommet.github.io' + req.path);
});

app.get('/', function (req, res) {
  res.redirect(301, req.protocol + '://grommet.github.io');
});

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:' + PORT + '...');
