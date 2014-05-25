// Generated on 2014-05-24 using generator-jekyllrb 1.2.1
'use strict';

module.exports = function (grunt) {
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

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);
  grunt.initConfig(_.extend(loadConfig('grunt/config/'), constants));
  grunt.loadTasks('grunt/tasks');
};
