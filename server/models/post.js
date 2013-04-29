var mongoose = require('mongoose'),
    PostSchema = require('./schemas').PostSchema,
    Post
    _ = require('underscore');

PostSchema.statics.get = function(req, api, callback) {
  var id = req.param('id');
  if (id) {
    this.findById(id).exec(callback);
  } else {
    this
    .find()
    .where('del', false)
    .exec(callback);
  }
};

PostSchema.statics.post = function(req, api, callback) {
  var data, post;
  data = _.pick(req.body, ['title', 'body']);

  post = new this(data);
  post.save(callback);

};

PostSchema.statics.put = function(req, api, callback) {
  var id, update, data, options, post;
  id = req.param('id');

  if (!id) return callback('Cannot update without id');

  update = {_id: id};
  data = _.pick(req.body, ['title', 'body']);
  options = {};

  this.update(update, data, options, callback);
};

PostSchema.statics.del = function(req, api, callback) {
  var id = req.param('id');
  if (!id) return callback('Cannot delete without id');

  this.update({_id: id}, {del: true}, callback);

};

Post = mongoose.model('Post', PostSchema);
module.exports = Post;
