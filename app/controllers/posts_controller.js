module.exports = {
  index: function(params, callback) {
    var spec = {
      collection: {collection: 'posts', params: params}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'posts_index_view', result);
    });
  },

  add: function(params, callback) {
    callback(null, 'posts_add_view');
  },

  show: function(params, callback) {
    var spec = {
      model: {model: 'post', params: params, ensureKeys: ['title']}
    };
    this.app.fetch(spec, function(err, result) {
      console.log(result, 2222);
      callback(err, 'posts_show_view', result);
    });
  },

  edit: function(params, callback) {
    var spec = {
      model: {model: 'post', params: params, ensureKeys: ['title']}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'posts_show_view', result);
    });
  },

  del: function(params, callback) {
    var spec = {
      model: {model: 'post', params: params, ensureKeys: ['title']}
    };
    this.app.fetch(spec, function(err, result) {
      callback(err, 'posts_del_view', result);
    });
  }
};
