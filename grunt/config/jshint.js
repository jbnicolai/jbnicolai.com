module.exports = {
  options: {
    jshintrc: '.jshintrc',
    reporter: require('jshint-stylish')
  },
  all: [
    'Gruntfile.js',
    '<%= constants.appDir %>/js/**/*.js',
    'test/spec/**/*.js'
  ]
};
