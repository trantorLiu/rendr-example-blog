var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    Mixed = Schema.Types.Mixed,
    ObjectId = Schema.ObjectId;

/* Schemas */
var Post;

Post = new Schema({
  title: String,
  body: String,
  date: Date,
  del: Boolean
}, { strict: true });

Post.path('title').required(true).index(true);
Post.path('body').required(true);
Post.path('date').default(Date.now);
Post.path('del').default(false);

Post.pre('save', function (next) {
  // Do something.
  next();
});

module.exports.PostSchema = Post;
