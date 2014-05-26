module.exports = function (grunt) {
  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'jshint:all',
    'csslint:check'
  ]);
};
