module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= paths.app %>/js/**/*.js',
    'test/spec/**/*.js'
  ]
};
