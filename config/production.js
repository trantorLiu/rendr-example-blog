// Config settings for NODE_ENV=production

exports.config = {
  assets: {
    minify: true,
    cdn: {
      protocol: 'https',
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
