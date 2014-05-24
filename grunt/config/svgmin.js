module.exports = {
  dist: {
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>',
      src: '**/*.svg',
      dest: '<%= paths.dist %>'
    }]
  }
};
