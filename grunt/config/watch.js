module.exports = {
  sass: {
    files: ['<%= paths.app %>/_scss/**/*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer:server']
  },
  autoprefixer: {
    files: ['<%= paths.app %>/css/**/*.css'],
    tasks: ['copy:stagecss', 'autoprefixer:server']
  },
  jekyll: {
    files: [
      '<%= paths.app %>/**/*.{html,yml,md,mkd,markdown}',
      '!<%= paths.app %>/_bower_components/**/*'
    ],
    tasks: ['jekyll:server']
  },
  livereload: {
    options: {
      livereload: '<%= connect.options.livereload %>'
    },
    files: [
      '.jekyll/**/*.html',
      '.tmp/css/**/*.css',
      '{.tmp,<%= paths.app %>}/<%= js %>/**/*.js',
      '<%= paths.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
    ]
  }
};
