var sharedConfig = require('./karma-shared.conf');

module.exports = function(config) {
  var conf = sharedConfig();

  conf.files = conf.files.concat([
    //extra testing code
    'bower_components/angular-mocks/angular-mocks.js',

    //mocha stuff
    'test/mocha.conf.js',

    //test files
    './test/unit/**/*.js'
  ]);

  config.set(conf);
};
//module.exports = function(karma) {
//    karma.set({
//        basePath: '../app/',
//        frameworks: ["jasmine"],
//        files: [
//            // this file must be loaded first in order to have the global dojoConfig object set up
//            'app/js/brainwasher.js',
//            {pattern: 'test/unit/*.js'}
//        ],
//        exclude: [], // list of files to exclude
//        junitReporter: {
//            outputFile: '../../../target/karma/karma-test-results.xml'
//        },
//        reporters: ['progress', 'junit'],
//        port: 9876, // web server port
//        runnerPort: 9100, // cli runner port
//        colors: true, // enable / disable colors in the output (reporters and logs)
//        autoWatch: true, // enable / disable watching file and executing tests whenever any file changes
//        captureTimeout: 60000, // If browser does not capture in given timeout [ms], kill it
//        singleRun: false, // Continuous Integration mode
//
//        // Start these browsers, currently available:
//        // - Chrome
//        // - ChromeCanary
//        // - Firefox
//        // - Opera
//        // - Safari (only Mac)
//        // - PhantomJS
//        // - IE (only Windows)
//        browsers: ['Chrome']
//    });
//};
//
