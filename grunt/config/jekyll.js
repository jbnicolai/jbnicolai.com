module.exports = {
  options: {
    bundleExec: true,
    config: '_config.yml,_config.build.yml',
    src: '<%= paths.app %>'
  },
  dist: {
    options: {
      dest: '<%= paths.dist %>',
    }
  },
  server: {
    options: {
      config: '_config.yml',
      dest: '.jekyll'
    }
  },
  check: {
    options: {
      doctor: true
    }
  }
};
