module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        lint: {
            all: ['grunt.js', 'devwidgets/**/javascript/*.js']
        },
        jshint: {
            options: {
                browser: true,
                sub: true
            }
        },
        qunit: {
            all: ['tests/unit/util.html']
        }
    });

    grunt.registerTask('release', 'lint qunit');

};