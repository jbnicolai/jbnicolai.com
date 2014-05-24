// Generated on 2014-05-24 using generator-jekyllrb 1.2.1
'use strict';

var _ = require('underscore');

var constants  = {
  paths: {
    app: 'app',
    dist: 'dist'
  }
};

function loadConfig(path) {
  return _.object( _.map(require('glob').sync('*', {cwd: path}), function (option) {
    return [option.replace(/\.js$/, ''), require('./' + path + option)];
  }));
}

module.exports = function (grunt) {
  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);
  // Loadall Grunt config files
  grunt.initConfig(_.extend(loadConfig('grunt/config/'), constants));

  grunt.loadTasks('grunt/tasks');

  grunt.registerTask('build', [
    'clean',
    // Jekyll cleans files from the target directory, so must run first
    'jekyll:dist',
    'concurrent:dist',
    'useminPrepare',
    'concat',
    'autoprefixer:dist',
    'cssmin',
    'uglify',
    'imagemin',
    'svgmin',
    'filerev',
    'usemin',
    'htmlmin'
    ]);

  grunt.registerTask('deploy', [
    'check',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('tasks', ['availabletasks']);

  grunt.registerTask('default', [
    'check',
    'build'
  ]);
};
