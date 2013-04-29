// Config settings for NODE_ENV=development

exports.config = {
  assets: {
    minify: false,
    cdn: {
      protocol: 'http',
      cnames: ['localhost'],
      pathPrefix: ''
    }
  },

  rendrApp: {
    someProperty: 'someValue'
  },

  DB: {
    NAME: 'rendr-blog',
    USER: null,
    PASSWORD: null
  }

};
