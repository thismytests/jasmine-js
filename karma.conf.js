module.exports = function(config) {

  // Testing helpers (optional) are conventionally in a folder called `testing`
  var testingBase    = 'testing/'; // transpiled test JS and map files

  config.set({
    basePath: '',
    frameworks: ['jasmine', 'browserify'],

    plugins: [
      'karma-browserify',
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],

    preprocessors: {
      'src/**/*.js': [ 'browserify' ]
    },

    client: {
      builtPaths: [testingBase], // add more spec base paths as needed
      clearContext: false // leave Jasmine Spec Runner output visible in browser
    },

    files: [
      {pattern: '**/*.js'},
      {pattern: '**/*spec.js'},
    ],

    reporters: ['progress', 'kjhtml'],

    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
}
