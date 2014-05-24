module.exports =  {
  options: {
    port: 9000,
    livereload: 35729,
    // change this to '0.0.0.0' to access the server from outside
    hostname: 'localhost'
  },
  livereload: {
    options: {
      open: true,
      base: [
        '.tmp',
        '.jekyll',
        '<%= constants.appDir %>'
      ]
    }
  },
  dist: {
    options: {
      open: true,
      base: [
        '<%= constants.distDir %>'
      ]
    }
  },
  test: {
    options: {
      base: [
        '.tmp',
        '.jekyll',
        'test',
        '<%= constants.appDir %>'
      ]
    }
  }
};
