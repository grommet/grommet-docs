// (C) Copyright 2014-2015 Hewlett Packard Enterprise Development LP

var compression = require('compression');
var express = require('express');
var http = require("http");
var router = express.Router({strict: true});
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var path = require('path');

var docs = require('./docs');
var theme = require('./theme');

var PORT = process.env.PORT || 8000;

var app = express();

app.set('views', path.resolve(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(compression());

app.use(cookieParser());

if (!process.env.SILENT_MODE) {
  app.use(morgan('tiny'));
}

router.get('/', function (req, res) {
  var docpath = path.join('/docs/', theme.picker(req.ip));
  res.redirect(301, docpath);
});

router.use('/docs/', docs);

app.use('/', function(req, res, next) {
  var acceptLanguageHeader = req.headers['accept-language'];

  if (acceptLanguageHeader) {
    var acceptedLanguages = acceptLanguageHeader.match(/[a-zA-z\-]{2,10}/g);
    if (acceptedLanguages) {
      res.cookie('languages', JSON.stringify(acceptedLanguages));
    }
  }

  next();
});

// Redirect referneces to the original HPE sticker sheet
// to the new master HPE sticker sheet.
app.get('/assets/design/grommet_sticker_sheet.ai', function (req, res) {
  res.redirect(301, '/assets/design/hpe/grommet-hpe-master.ai');
});

app.get('/assets/design/:name', function(req, res) {
  var options = {
    root: path.join(__dirname, '/../dist/assets/design'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };

  // Express uses the mime.lookup() method in the node-mime
  // https://github.com/broofa/node-mime project to determine
  // a file's mime type.  This method returns the mime type
  // of 'application/postscript' for Adobe Illustrator files
  // and this results in Safari attempting to show a preview of
  // the file in the browser.  So we'll check for Illustrator
  // files and handle them as a special case for now.
  if (/\.ai$/.test(req.params.name) ) {
    res.type('application/illustrator');
  } else {
    res.type(req.params.name);
  }

  res.sendFile(req.params.name, options);
});

// The robots.txt file must be at the root of the webserver
// in order for bots to find locate it.  Without this function,
// the file is hosted under the /docs directory.
app.get('/robots.txt', function(req, res) {
  var options = {
    root: path.join(__dirname, '/../dist'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  };
  res.sendFile('robots.txt', options);
});

app.
  use('', router).
  use('/assets', express.static(path.join(__dirname, '/../dist/assets')));

var server = http.createServer(app);

server.listen(PORT);

console.log('Server started, listening at: http://localhost:' + PORT + '...');
