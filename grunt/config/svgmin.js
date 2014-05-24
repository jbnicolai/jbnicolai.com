module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= constants.distDir %>',
      src: '**/*.svg',
      dest: '<%= constants.distDir %>'
    }]
  }
};
