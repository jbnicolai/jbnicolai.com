module.exports = {
  dist: {
    options: {
      collapseWhitespace: true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes: true,
      removeRedundantAttributes: true
    },
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>',
      src: '**/*.html',
      dest: '<%= paths.dist %>'
    }]
  }
};
