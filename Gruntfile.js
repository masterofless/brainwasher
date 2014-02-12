module.exports = function(grunt) {
    'use strict';
    grunt.loadNpmTasks('grunt-jslint');
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
            options: {
                configFile: 'conf/karma.conf.js',
            },
            unit : {
                singleRun: true
            },
            continuous: {
                singleRun: false
            }
        },
        jslint: {
            all: {
                src: ['src/app/**/*.js'],
                options: {
                    log: 'target/jslint.log',
                    jslintXml: 'target/jslint.xml',
                    checkstyle: 'target/checkstyle.xml'
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', 'Runs everything a Developer should', ['jslint:all', 'karma:unit']);
};
