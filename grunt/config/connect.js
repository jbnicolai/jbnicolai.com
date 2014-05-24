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
        '<%= paths.app %>'
      ]
    }
  },
  dist: {
    options: {
      open: true,
      base: [
        '<%= paths.dist %>'
      ]
    }
  },
  test: {
    options: {
      base: [
        '.tmp',
        '.jekyll',
        'test',
        '<%= paths.app %>'
      ]
    }
  }
};
