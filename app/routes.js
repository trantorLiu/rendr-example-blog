module.exports = function(match) {
  match(''               , 'posts#index');
  match('posts'          , 'posts#index');
  match('posts/edit'     , 'posts#add');
  match('posts/edit/:id' , 'posts#edit');
  match('posts/del/:id'  , 'posts#del');
  match('posts/:id'      , 'posts#show');
};
