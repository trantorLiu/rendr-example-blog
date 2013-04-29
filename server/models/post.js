var mongoose = require('mongoose'),
    PostSchema = require('./schemas').PostSchema,
    Post
    _ = require('underscore');

PostSchema.statics.get = function(req, api, callback) {
  console.log(api);
  var id = req.param('id');
  console.log(req.params);
  console.log(id);
  if (id) {
    this.findById(id).exec(callback);
  } else {
    this.find().exec(callback);
  }
};

PostSchema.statics.post = function(req, api, callback) {
  var data, post;
  data = _.pick(req.body, ['title', 'body']);

  post = new this(data);
  post.save(callback);

};

PostSchema.statics.put = function(req, api, callback) {
  var update, data, options, post;

  if (!api.id) return callback('Cannot update without id');

  update = {_id: api.id};
  data = _.pick(req.body, ['title', 'body']);
  options = {};

  this.update(update, data, options, callback);
};

PostSchema.statics.del = function(req, api, callback) {
  if (!api.id) return callback('Cannot delete without id');

  this.update({_id: api.id}, {del: true}, callback);

};

Post = mongoose.model('Post', PostSchema);
module.exports = Post;
