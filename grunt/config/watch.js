module.exports = {
  sass: {
    files: ['<%= constants.appDir %>/_scss/**/*.{scss,sass}'],
    tasks: ['sass:server', 'autoprefixer:server']
  },
  autoprefixer: {
    files: ['<%= constants.appDir %>/css/**/*.css'],
    tasks: ['copy:stagecss', 'autoprefixer:server']
  },
  jekyll: {
    files: [
      '<%= constants.appDir %>/**/*.{html,yml,md,mkd,markdown}',
      '!<%= constants.appDir %>/_bower_components/**/*'
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
      '{.tmp,<%= constants.appDir %>}/<%= js %>/**/*.js',
      '<%= constants.appDir %>/img/**/*.{gif,jpg,jpeg,png,svg,webp}'
    ]
  }
};
