var _ = require('underscore'),
    url = require('url'),
    request = require('request'),
    debug = require('debug')('app:DataAdapter'),
    inspect = require('util').inspect,
    models = require('../models');

module.exports = DataAdapter;

function DataAdapter(options) {
  this.options = options || {};
}

//
// `req`: Actual request object from Express/Connect.
// `api`: Object describing API call; properites including 'path', 'query', etc.
//        Passed to `url.format()`.
// `options`: (optional) Options.
// `callback`: Callback.
//
DataAdapter.prototype.request = function(req, api, options, callback) {
  var Model;

  if (arguments.length === 3) {
    callback = options;
    options = {};
  }

  Model = getModel(api);
  if (!Model) return callback(new Error('Model not found'));

  Model[api.method.toLowerCase()](req, api, function(err, body) {
    var res = {
      statusCode: 200 // TODO Rules to determine statusCode.
    };
    callback(err, res, body);
  });

};

function getModel(api) {
  var modelName;

  // Parse the path and slice the last letter 's'.
  modelName = capitaliseFirstLetter(api.path.split('/')[1].slice(0, -1));
  return models[modelName];
}

function capitaliseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
