module.exports = function(config){
    config.set({
        basePath : '../src/',

        files : [
            'lib/angular/angular.js',
            'app/js/*.js',
            //'lib/angular/angular-*.js',
            'test/lib/angular/angular-mocks.js',
            'test/unit/*Spec.js'
        ],

        exclude : [
            'app/lib/angular/angular-loader.js',
            'app/lib/angular/*.min.js',
            'app/lib/angular/angular-scenario.js'
        ],
        autoWatch : true,
        singleRun : false,
        frameworks: ['jasmine'],
        browsers : ['Firefox'],
        plugins : [
            'karma-junit-reporter',
            'karma-spec-reporter',
            'karma-html-reporter',
            'karma-firefox-launcher',
            'karma-jasmine'
        ],
        reporters: ['progress', 'junit', 'spec', 'html', 'dots'],
        junitReporter : {
            outputFile: '../target/karma_junit.xml',
            suite: 'unit'
        },
        htmlReporter : {
            outputDir: 'target/karma_html'
        }
    })};
