module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'src/<%= pkg.name %>.js',
                dest: 'build/<%= pkg.name %>.min.js'
            }
        },
        karma: {
            unit: {
                files: ['test/**/*Spec.js'],
                /*
                junitReporter: {
                outputFile: '../../../target/karma/karma-test-results.xml'
                },
                */
                reporters: ['progress', 'junit'],
                //port: 9876, // web server port
                //runnerPort: 9100, // cli runner port
                //colors: true, // enable / disable colors in the output (reporters and logs)
                //autoWatch: true, // enable / disable watching file and executing tests whenever any file changes
                //captureTimeout: 60000, // If browser does not capture in given timeout [ms], kill it
                //singleRun: false, // Continuous Integration mode
                browsers: ['Firefox']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');
    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('karma', ['karma']);
};
