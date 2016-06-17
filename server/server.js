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
  'check-box',
  'columns',
  'date-time',
  'distribution',
  'footer',
  'form',
  'form-field',
  'header',
  'heading',
  'headline',
  'icon',
  'image',
  'label',
  'layer',
  'legend',
  'list',
  'login-form',
  'map',
  'menu',
  'meter',
  'notification',
  'number-input',
  'paragraph',
  'quote',
  'radio-button',
  'search',
  'search-input',
  'section',
  'sidebar',
  'social-share',
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
  'world-map',
  'markdown',
  'rest',
  'rest-watch',
  'architecture',
  'integration',
  'accessibility',
  'browser_support'
];

DESIGN.forEach(function (pathname) {
  BASENAMES.forEach(function (basename) {
    app.get('/docs' + basename + '/design/' + pathname, function (req, res) {
      res.redirect(301, 'http://grommet.github.io' + basename + '/docs/' + pathname);
    });
  });
});

DEVELOP.forEach(function (pathname) {
  BASENAMES.forEach(function (basename) {
    app.get('/docs' + basename + '/develop/' + pathname, function (req, res) {
      res.redirect(301, 'http://grommet.github.io' + basename + '/docs/' + pathname);
    });
  });
});

BASENAMES.forEach(function (basename) {
  app.get('/docs' + basename, function (req, res) {
    res.redirect(301, 'http://grommet.github.io' + basename);
  });
});

app.get('/', function (req, res) {
  res.redirect(301, 'http://grommet.github.io');
});

var server = http.createServer(app);
server.listen(PORT);

console.log('Server started, listening at: http://localhost:' + PORT + '...');
