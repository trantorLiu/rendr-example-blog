var BaseView = require('./base_view');

module.exports = BaseView.extend({
  className: 'posts_del_view',
  postInitialize: function() {
    console.log('this.model in psots_del_view: ' + this.model);
  },
  events: {
    'click .del': 'del'
  },
  del: function() {
    var that, promise;
    that = this;
    promise = this.model.destroy();
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
