module.exports = {
      options: {
        csslintrc: '.csslintrc'
      },
      check: {
        src: [
          '<%= constants.appDir %>/css/**/*.css',
          '<%= constants.appDir %>/_scss/**/*.scss'
        ]
      }
