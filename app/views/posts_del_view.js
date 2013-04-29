var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'posts_del_view',
  postInitialize: function() {
    this.post = this.getTemplateData();
  },
  events: {
    'click .del': 'del'
  },
  del: function() {
    var that, promise;
    promise = this.post.destroy();
    promise
    .success(function() {
      that.app.router.redirectTo('/posts');
    })
    .error(function() {
      alert('Error occurred');
    });
  }
});
module.exports.id = 'PostsDelView';
