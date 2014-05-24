module.exports = {
  dist: {
    options: {
      progressive: true
    },
    files: [{
      expand: true,
      cwd: '<%= constants.distDir %>',
      src: '**/*.{jpg,jpeg,png}',
      dest: '<%= constants.distDir %>'
    }]
  }
};
