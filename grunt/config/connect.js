module.exports =  {
  options: {
    port: 9000,
    livereload: 35729,
    hostname: '0.0.0.0'
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
