module.exports = {
  options: {
    csslintrc: '.csslintrc'
  },
  check: {
    src: [
      '<%= paths.app %>/css/**/*.css',
      '<%= paths.app %>/_scss/**/*.scss'
    ]
  }
};
