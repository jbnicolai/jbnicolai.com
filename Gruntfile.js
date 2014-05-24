// Generated on 2014-05-24 using generator-jekyllrb 1.2.1
'use strict';

var _ = require('underscore');

// Directory reference:
//   css: css
//   sass: _scss
//   javascript: js
//   images: img
//   fonts: fonts

function loadConfig(path) {
  var object = {};

  require('glob').sync('*', {cwd: path}).forEach(function (option) {
    object[option.replace(/\.js$/, '')] = require('./' + path + option);
  });

  return object;
}

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  // Show elapsed time after tasks run
  require('time-grunt')(grunt);
  // Load all Grunt tasks
  require('load-grunt-tasks')(grunt);

  grunt.initConfig(_.extend(loadConfig('grunt/config/'), {
    // Configurable paths
    yeoman: {
      app: 'app',
      dist: 'dist'
    },
    // Usemin adds files to concat
    concat: {},
    // Usemin adds files to uglify
    uglify: {},
    // Usemin adds files to cssmin
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          src: [
            // Jekyll processes and moves HTML and text files.
            // Usemin moves CSS and javascript inside of Usemin blocks.
            // Copy moves asset files and directories.
            'img/**/*',
            'fonts/**/*',
            // Like Jekyll, exclude files & folders prefixed with an underscore.
            '!**/_*{,/**}'
            // Explicitly add any files your site needs for distribution here.
            //'_bower_components/jquery/jquery.js',
            //'favicon.ico',
            //'apple-touch*.png'
          ],
          dest: '<%= yeoman.dist %>'
        }]
      },
      // Copy CSS into .tmp directory for Autoprefixer processing
      stageCss: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>/css',
          src: '**/*.css',
          dest: '.tmp/css'
        }]
      }
    },
    filerev: {
      options: {
        length: 4
      },
      dist: {
        files: [{
          src: [
            '<%= yeoman.dist %>/js/**/*.js',
            '<%= yeoman.dist %>/css/**/*.css',
            '<%= yeoman.dist %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}',
            '<%= yeoman.dist %>/fonts/**/*.{eot*,otf,svg,ttf,woff}'
          ]
        }]
      }
    },
    buildcontrol: {
      dist: {
        options: {
          remote: '../',
          branch: 'gh-pages',
          commit: true,
          push: true
        }
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: [
        'Gruntfile.js',
        '<%= yeoman.app %>/js/**/*.js',
        'test/spec/**/*.js'
      ]
    },
    csslint: {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= yeoman.app %>/css/**/*.css',
          '<%= yeoman.app %>/_scss/**/*.scss'
        ]
      }
    },
    concurrent: {
      server: [
        'sass:server',
        'copy:stageCss',
        'jekyll:server'
      ],
      dist: [
        'sass:dist',
        'copy:dist'
      ]
    }
  }));

  // Define Tasks
  grunt.registerTask('serve', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      'concurrent:server',
      'autoprefixer:server',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', function () {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve']);
  });

  // No real tests yet. Add your own.
  grunt.registerTask('test', [
  //   'clean:server',
  //   'concurrent:test',
  //   'connect:test'
  ]);

  grunt.registerTask('check', [
    'clean:server',
    'jekyll:check',
    'sass:server',
    'jshint:all',
    'csslint:check'
  ]);

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
    'test',
    'build',
    'buildcontrol'
    ]);

  grunt.registerTask('default', [
    'check',
    'test',
    'build'
  ]);
};
