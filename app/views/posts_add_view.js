var BaseView = require('./base_view'),
    Post = require('../models/post');

module.exports = BaseView.extend({
  className: 'posts_add_view',
  events: {
    'submit form': 'savePost'
  },
  savePost: function(e) {
    e.stopPropagation();
    e.preventDefault();

    var post, promise, that;
    that = this;
    post = new Post({
      title: this.$el.find('#title').val(),
      body: this.$el.find('#body').val()
    }, {
      // Not sure if it's always needs to pass app as an option
      app: this.app
    });

    promise = post.save();
    promise
    .success(function() {
      post.store(); // Add to model store.
      that.app.router.redirectTo('/posts');
    })
    .error(function() {
      alert('Something wrong!');
    })
  }
});
module.exports.id = 'PostsAddView';
