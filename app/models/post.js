var Base = require('./base');

module.exports = Base.extend({
  url: '/posts/:id',
  idAttribute: 'id'
});
module.exports.id = 'Post';
