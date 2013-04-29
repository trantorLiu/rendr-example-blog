
/**
 * Module dependencies.
 */
var express = require('express'),
    http = require('http'),
    util = require('util'),
    path = require('path'),
    mongoose = require('mongoose'),
    mw = require('./middleware')
    env = require('./lib/env')
    rendrServer = require('rendr').server
    rendrMw = require('rendr/server/middleware'),
    DataAdapter = require('./lib/data_adapter'),
    viewEngine = require('rendr/server/viewEngine');

var app = express();

//
// Initialize our server.
//
exports.init = function init(options, callback) {
  initMiddleware();
  initDB();
  initLibs(function(err, result) {
    if (err) return callback(err);
    buildRoutes(app);
    callback(null, result);
  });
};

//
// options
// - port
//
exports.start = function start(options) {
  options = options || {};
  var port = options.port || 3030;
  app.listen(port);
  console.info("Server pid " + process.pid + " listening on port " + port + " in " + app.settings.env + " mode");
};


//
// Initialize middleware stack.
//
function initMiddleware() {
  app.configure(function() {
    // set up views
    app.set('views', __dirname + '/../app/views');
    app.set('view engine', 'js');
    app.engine('js', viewEngine);

    // set the middleware stack
    app.use(express.compress());
    app.use(express.static(__dirname + '/../public'));
    app.use(express.logger());
    app.use(express.bodyParser());
    app.use(app.router);
    app.use(mw.errorHandler());
  });
}

//
// Initialize db connection.
//
function initDB() {
  var DB = env.current.DB;
  if (DB.USER && DB.PASSWORD) {
    mongoose.connect('mongodb://' + DB.USER + ':' + DB_PASSWORD + '@localhost/' + DB.NAME);
  } else {
    mongoose.connect('mongodb://localhost/' + DB.NAME);
  }
}

//
// Initialize our libraries.
//
function initLibs(callback) {
  var options;
  options = {
    dataAdapter: new DataAdapter(),
    errorHandler: mw.errorHandler()
  };
  rendrServer.init(options, callback);
}

//
// Routes & middleware.
//

// Attach our routes to our server.
function buildRoutes(app) {
  buildApiRoutes(app);
  buildRendrRoutes(app);
}

// Insert these methods before Rendr method chain for all routes, plus API.
var preRendrMiddleware = [
  // Initialize Rendr app, and pass in any config as app attributes.
  rendrMw.initApp(env.current.rendrApp)
];

function buildApiRoutes(app) {
  var fnChain, api, goNext;

  api = '/api';
  goNext = function(req, res, next) {
    next();
  };

  app.get(api + '/posts/:id', goNext);
  app.put(api + '/posts/:id', goNext);
  app.del(api + '/posts/:id', goNext);

  fnChain = preRendrMiddleware.concat(rendrMw.apiProxy());
  fnChain.forEach(function(fn) {
    app.use('/api', fn);
  });
}

function buildRendrRoutes(app) {
  var routes, path, definition, fnChain;
  // attach Rendr routes to our Express app.
  routes = rendrServer.router.buildRoutes();
  routes.forEach(function(args) {
    path = args.shift();
    definition = args.shift();

    // Additional arguments are more handlers.
    fnChain = preRendrMiddleware.concat(args);

    // Have to add error handler AFTER all other handlers.
    fnChain.push(mw.errorHandler());

    // Attach the route to the Express server.
    app.get(path, fnChain);
  });
}
