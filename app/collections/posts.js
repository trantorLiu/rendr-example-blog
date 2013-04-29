var Post = require('../models/post')
  , Base = require('./base');

module.exports = Base.extend({
  model: Post,
  url: function() {
    return '/posts';
  }
});
module.exports.id = 'Posts';
