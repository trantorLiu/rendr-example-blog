var Base = require('./base');

module.exports = Base.extend({
  url: '/posts/:id',
  idAttribute: '_id'
});
module.exports.id = 'Post';
