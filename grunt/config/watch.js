module.exports = {
  sass: {
    files: ['<%= yeoman.app %>/_scss/**/*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer:server']
  },
  autoprefixer: {
    files: ['<%= yeoman.app %>/css/**/*.css'],
    tasks: ['copy:stagecss', 'autoprefixer:server']
  },
  jekyll: {
    files: [
      '<%= yeoman.app %>/**/*.{html,yml,md,mkd,markdown}',
      '!<%= yeoman.app %>/_bower_components/**/*'
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
      '{.tmp,<%= yeoman.app %>}/<%= js %>/**/*.js',
      '<%= yeoman.app %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
    ]
  }
};
