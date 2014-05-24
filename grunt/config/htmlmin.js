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
      cwd: '<%= constants.distDir %>',
      src: '**/*.html',
      dest: '<%= constants.distDir %>'
    }]
  }
};
