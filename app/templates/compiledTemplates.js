module.exports = function(Handlebars) {

var templates = {};

templates["posts_add_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  


  return "<form class=\"form-horizontal\">\n  <legend>New Post</legend>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"title\">Email</label>\n    <div class=\"controls\">\n      <input type=\"text\" id=\"title\" placeholder=\"Title\">\n    </div>\n  </div>\n  <div class=\"control-group\">\n    <label class=\"control-label\" for=\"body\">Password</label>\n    <div class=\"controls\">\n      <textarea type=\"password\" id=\"body\" placeholder=\"Body\"></textarea>\n    </div>\n  </div>\n  <div class=\"form-actions\">\n    <button type=\"submit\" class=\"btn btn-primary\">Save post</button>\n    <a href=\"/posts\" type=\"button\" class=\"btn\">Cancel</a>\n  </div>\n</form>\n";
  });

templates["posts_del_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<p>Sure to delete?</p>\n<div>\n<button class=\"btn btn-danger del\">Delete it!</button>\n<a href=\"/posts/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn\">Cancel</a>\n</div>\n";
  return buffer;
  });

templates["posts_edit_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<a class=\"btn\" href=\"/posts/edit\">Create a post</a>\n\n<br>\n<h3>Stats</h3>\n<div class=\"row-fluid\">\n  <div class=\"span6\">\n    <table class=\"table\">\n      <tr>\n        <th>Description</th>\n        <td>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <th>Language</th>\n        <td>";
  if (stack1 = helpers.language) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.language; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <th>Watchers</th>\n        <td>";
  if (stack1 = helpers.watchers_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.watchers_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <th>Forks</th>\n        <td>";
  if (stack1 = helpers.forks_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.forks_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n      <tr>\n        <th>Open Issues</th>\n        <td>";
  if (stack1 = helpers.open_issues_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.open_issues_count; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n      </tr>\n    </table>\n  </div>\n</div>\n";
  return buffer;
  });

templates["posts_index_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <li>\n      <a href=\"/posts/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </li>\n  ";
  return buffer;
  }

  buffer += "<h3>Posts</h3>\n\n<div class=\"well\">\n  <ul>\n  ";
  stack1 = helpers.each.call(depth0, depth0.models, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n  </ul>\n</div>\n\n<a class=\"btn\" href=\"/posts/edit\">New post</a>\n";
  return buffer;
  });

templates["posts_show_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [2,'>= 1.0.0-rc.3'];
helpers = helpers || Handlebars.helpers; data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"well\">\n  <h3>";
  if (stack1 = helpers.title) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.title; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h3>\n  <p>";
  if (stack1 = helpers.body) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.body; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n</div>\n<div class=\"well\">\n  <a href=\"/posts\" class=\"btn btn-primary\">Back to posts</a>\n  <a href=\"/posts/del/";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"btn btn-danger del\">Delete</a>\n</div>\n";
  return buffer;
  });

return templates;

};