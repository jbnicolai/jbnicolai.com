module.exports = {
  dist: {
    options: {
      progressive: true
    },
    files: [{
      expand: true,
      cwd: '<%= paths.dist %>/img',
      src: '**/*.{jpg,jpeg,png}',
      dest: '<%= paths.dist %>'
    }]
  }
};
