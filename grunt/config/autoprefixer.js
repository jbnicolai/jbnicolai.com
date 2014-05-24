module.exports = {
  options: {
    browsers: ['last 2 versions']
  },
  dist: {
    files: [{
      expand: true,
      cwd: '<%= constants.distDir %>/css',
      src: '**/*.css',
      dest: '<%= constants.distDir %>/css'
    }]
  },
  server: {
    files: [{
      expand: true,
      cwd: '.tmp/css',
      src: '**/*.css',
      dest: '.tmp/css'
    }]
  }
};
