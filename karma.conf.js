module.exports = function(config) {
  config.set({

    basePath: '',

    frameworks: ['jasmine', 'browserify'],

    browserify: {
      files: [
        'test/**/*.js'
      ]
    },

    preprocessors: {
      '/**/*.browserify': 'browserify'
    },

    reporters: ['progress'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['PhantomJS'],

    singleRun: false
  })
}
